import { NextResponse } from "next/server";
import * as z from "zod";
import { syncApplicantToSheet } from "@/lib/googleSheets";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NO_STORE = { "Cache-Control": "no-store" };

const applicantSchema = z.object({
  name: z.string(),
  email: z.email(),
  age: z.coerce.number().int().min(13).max(120),
  linkedinUrl: z.httpUrl().max(300),
  code: z.string().trim().toUpperCase().max(30),
  referralUrl: z.httpUrl().max(300),
  isActive: z.unknown().transform((v) => v !== false),
});

const FIELD_ERRORS: Record<string, string> = {
  name: "A valid full name is required.",
  email: "A valid email address is required.",
  age: "A valid age is required.",
  linkedinUrl: "A valid LinkedIn profile URL is required.",
  referralUrl: "A valid referral link is required.",
};

function badRequest(error: string) {
  return NextResponse.json({ error }, { status: 400, headers: NO_STORE });
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return badRequest("Invalid request body.");
  }

  if (!body || typeof body !== "object") {
    return badRequest("Invalid request body.");
  }

  const parsed = applicantSchema.safeParse(body);

  if (!parsed.success) {
    const field = String(parsed.error.issues[0]?.path[0] ?? "");
    return badRequest(FIELD_ERRORS[field] ?? "Invalid request body.");
  }

  const result = await syncApplicantToSheet(parsed.data);

  return NextResponse.json(
    { ok: result.ok, reason: result.reason ?? null },
    {
      status: result.ok ? 200 : 202,
      headers: NO_STORE,
    },
  );
}
