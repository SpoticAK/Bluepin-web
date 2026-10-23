import { createSign } from "crypto";

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const SHEETS_API = "https://sheets.googleapis.com/v4/spreadsheets";
const SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";
const DEFAULT_SHEET_NAME = "Growth Challenge";

const DEFAULT_HEADERS = [
  "Timestamp",
  "Full Name",
  "Work/Professional Email",
  "Age",
  "LinkedIn Profile URL",
  "Referral Code",
  "Referral Link",
  "Status",
] as const;

type SheetField =
  | "timestamp"
  | "fullName"
  | "email"
  | "age"
  | "linkedin"
  | "code"
  | "referralLink"
  | "status";

const HEADER_ALIASES: Record<SheetField, string[]> = {
  timestamp: ["timestamp", "date", "created at", "submitted at"],
  fullName: ["full name", "name", "applicant name"],
  email: ["work/professional email", "work email", "professional email", "email", "email address"],
  age: ["age"],
  linkedin: ["linkedin profile url", "linkedin profile", "linkedin", "linkedin url"],
  code: ["referral code", "code", "ref code"],
  referralLink: ["referral link", "referral url", "ref link", "link"],
  status: ["status", "active", "code status"],
};

type SheetsConfig = {
  spreadsheetId: string;
  sheetName: string;
  clientEmail: string;
  privateKey: string;
};

type SheetsCredentials = {
  clientEmail: string;
  privateKey: string;
};

type SheetMetadata = {
  sheets?: Array<{ properties?: { title?: string } }>;
};

type ValuesResponse = {
  values?: unknown[][];
};

type TokenResponse = {
  access_token: string;
  expires_in: number;
};

export type ApplicantSheetRow = {
  name: string;
  email: string;
  age: number;
  linkedinUrl: string;
  code: string;
  referralUrl: string;
  isActive: boolean;
};

let cachedToken: { value: string; expiresAt: number } | null = null;

function normalizeHeader(value: unknown): string {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[*:]/g, "")
    .replace(/\s*\/\s*/g, "/")
    .replace(/\s+/g, " ");
}

function base64Url(value: string): string {
  return Buffer.from(value, "utf8").toString("base64url");
}

function readCredentials(): SheetsCredentials | null {
  let clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL?.trim();
  let privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.trim();

  const json = process.env.GOOGLE_SHEETS_SERVICE_ACCOUNT_JSON?.trim();
  if (json) {
    try {
      const parsed = JSON.parse(json) as {
        client_email?: string;
        private_key?: string;
      };
      clientEmail = clientEmail || parsed.client_email?.trim();
      privateKey = privateKey || parsed.private_key?.trim();
    } catch {
      throw new Error("GOOGLE_SHEETS_SERVICE_ACCOUNT_JSON is not valid JSON");
    }
  }

  if (!clientEmail || !privateKey) return null;

  return {
    clientEmail,
    privateKey: privateKey.replace(/\\n/g, "\n"),
  };
}

export function getSheetsConfig(): SheetsConfig | null {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID?.trim();
  const credentials = readCredentials();
  if (!spreadsheetId || !credentials) return null;

  return {
    spreadsheetId,
    sheetName:
      process.env.GOOGLE_SHEETS_SHEET_NAME?.trim() || DEFAULT_SHEET_NAME,
    ...credentials,
  };
}

async function getAccessToken(config: SheetsConfig): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 60_000) {
    return cachedToken.value;
  }

  const now = Math.floor(Date.now() / 1000);
  const header = base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const payload = base64Url(
    JSON.stringify({
      iss: config.clientEmail,
      scope: SHEETS_SCOPE,
      aud: TOKEN_URL,
      iat: now,
      exp: now + 3600,
    }),
  );

  const signer = createSign("RSA-SHA256");
  signer.update(`${header}.${payload}`);
  signer.end();
  const signature = signer.sign(config.privateKey).toString("base64url");
  const assertion = `${header}.${payload}.${signature}`;

  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(
      `Google access token request failed (${response.status}): ${text.slice(0, 300)}`,
    );
  }

  const token = (await response.json()) as TokenResponse;
  cachedToken = {
    value: token.access_token,
    expiresAt: Date.now() + token.expires_in * 1000,
  };
  return token.access_token;
}

async function sheetsFetch<T>(
  url: string,
  accessToken: string,
  init: RequestInit = {},
): Promise<T> {
  const response = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      ...(init.headers ?? {}),
    },
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(
      `Google Sheets request failed (${response.status}): ${text.slice(0, 300)}`,
    );
  }

  return (await response.json()) as T;
}

function quotedSheet(sheetName: string): string {
  return `'${sheetName.replace(/'/g, "''")}'`;
}

async function ensureSheet(
  config: SheetsConfig,
  accessToken: string,
): Promise<void> {
  const metadata = await sheetsFetch<SheetMetadata>(
    `${SHEETS_API}/${encodeURIComponent(config.spreadsheetId)}?fields=sheets.properties(title)`,
    accessToken,
  );

  const exists = metadata.sheets?.some(
    (sheet) => sheet.properties?.title === config.sheetName,
  );
  if (exists) return;

  await sheetsFetch(
    `${SHEETS_API}/${encodeURIComponent(config.spreadsheetId)}:batchUpdate`,
    accessToken,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        requests: [
          {
            addSheet: {
              properties: { title: config.sheetName },
            },
          },
        ],
      }),
    },
  );
}

function columnLetter(columnCount: number): string {
  let result = "";
  let value = columnCount;

  while (value > 0) {
    const remainder = (value - 1) % 26;
    result = String.fromCharCode(65 + remainder) + result;
    value = Math.floor((value - 1) / 26);
  }

  return result || "A";
}

function buildRow(
  headers: unknown[],
  input: ApplicantSheetRow,
): (string | number)[] {
  const normalizedHeaders = headers.map(normalizeHeader);
  const row: (string | number)[] = new Array(headers.length).fill("");

  const values: Record<SheetField, string | number> = {
    timestamp: new Date().toISOString(),
    fullName: input.name,
    email: input.email,
    age: input.age,
    linkedin: input.linkedinUrl,
    code: input.code,
    referralLink: input.referralUrl,
    status: input.isActive ? "Active" : "Paused",
  };

  for (const field of Object.keys(values) as SheetField[]) {
    const index = normalizedHeaders.findIndex((header) =>
      HEADER_ALIASES[field].includes(header),
    );
    if (index >= 0) {
      row[index] = values[field];
    }
  }

  return row;
}

async function appendValues(
  config: SheetsConfig,
  accessToken: string,
  values: unknown[][],
): Promise<void> {
  const range = `${quotedSheet(config.sheetName)}!A1`;
  await sheetsFetch(
    `${SHEETS_API}/${encodeURIComponent(config.spreadsheetId)}/values/${encodeURIComponent(range)}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
    accessToken,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ values }),
    },
  );
}

async function updateValues(
  config: SheetsConfig,
  accessToken: string,
  range: string,
  values: unknown[][],
): Promise<void> {
  await sheetsFetch(
    `${SHEETS_API}/${encodeURIComponent(config.spreadsheetId)}/values/${encodeURIComponent(range)}?valueInputOption=RAW`,
    accessToken,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ values }),
    },
  );
}

async function upsertApplicant(
  config: SheetsConfig,
  accessToken: string,
  input: ApplicantSheetRow,
): Promise<void> {
  const range = `${quotedSheet(config.sheetName)}!A1:Z10000`;
  const existing = await sheetsFetch<ValuesResponse>(
    `${SHEETS_API}/${encodeURIComponent(config.spreadsheetId)}/values/${encodeURIComponent(range)}?valueRenderOption=UNFORMATTED_VALUE`,
    accessToken,
  );
  const rows = existing.values ?? [];

  if (rows.length === 0) {
    const headers = [...DEFAULT_HEADERS];
    await appendValues(config, accessToken, [
      headers,
      buildRow(headers, input),
    ]);
    return;
  }

  const headers = rows[0] ?? [];
  const normalizedHeaders = headers.map(normalizeHeader);
  const emailIndex = normalizedHeaders.findIndex((header) =>
    HEADER_ALIASES.email.includes(header),
  );

  const rowIndex =
    emailIndex >= 0
      ? rows.findIndex(
          (row, index) =>
            index > 0 &&
            String(row[emailIndex] ?? "")
              .trim()
              .toLowerCase() === input.email,
        )
      : -1;

  const row = buildRow(headers, input);

  if (rowIndex > 0) {
    const rowNumber = rowIndex + 1;
    const endColumn = columnLetter(headers.length);
    await updateValues(
      config,
      accessToken,
      `${quotedSheet(config.sheetName)}!A${rowNumber}:${endColumn}${rowNumber}`,
      [row],
    );
    return;
  }

  await appendValues(config, accessToken, [row]);
}

export async function syncApplicantToSheet(
  input: ApplicantSheetRow,
): Promise<{ ok: boolean; reason?: string }> {
  try {
    const config = getSheetsConfig();
    if (!config) {
      console.warn(
        "[Google Sheets] Applicant sync skipped: GOOGLE_SHEETS_SPREADSHEET_ID or service account credentials are not configured.",
      );
      return { ok: false, reason: "not_configured" };
    }

    const accessToken = await getAccessToken(config);
    await ensureSheet(config, accessToken);
    await upsertApplicant(config, accessToken, input);
    return { ok: true };
  } catch (error) {
    console.error("[Google Sheets] Failed to sync applicant:", error);
    return { ok: false, reason: "request_failed" };
  }
}
