import { NextResponse } from "next/server";
import { syncApplicantToSheet } from "@/lib/googleSheets";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const REFERRAL_URL_PATTERN =
  /^https:\/\/app\.bluepin\.in\/\?ref=([A-Z0-9_-]{2,30})$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isValidLinkedinUrl(value: string): boolean {
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" && url.protocol !== "http:") return false;

    const host = url.hostname.toLowerCase();
    if (host !== "linkedin.com" && !host.endsWith(".linkedin.com")) {
      return false;
    }

    return /^\/(in|pub)\//i.test(url.pathname);
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400, headers: { "Cache-Control": "no-store" } },
    );
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400, headers: { "Cache-Control": "no-store" } },
    );
  }

  const input = body as Record<string, unknown>;
  const name = asTrimmedString(input.name).replace(/\s+/g, " ");
  const email = asTrimmedString(input.email).toLowerCase();
  const linkedinUrl = asTrimmedString(input.linkedinUrl);
  const code = asTrimmedString(input.code).toUpperCase();
  const referralUrl = asTrimmedString(input.referralUrl);
  const age = Number(input.age);
  const isActive = input.isActive !== false;

  if (!name || name.length > 80) {
    return NextResponse.json(
      { error: "A valid full name is required." },
      { status: 400, headers: { "Cache-Control": "no-store" } },
    );
  }

  if (
    !email ||
    email.length > 254 ||
    !EMAIL_PATTERN.test(email)
  ) {
    return NextResponse.json(
      { error: "A valid email address is required." },
      { status: 400, headers: { "Cache-Control": "no-store" } },
    );
  }

  if (!Number.isInteger(age) || age < 13 || age > 120) {
    return NextResponse.json(
      { error: "A valid age is required." },
      { status: 400, headers: { "Cache-Control": "no-store" } },
    );
  }

  if (!linkedinUrl || linkedinUrl.length > 300 || !isValidLinkedinUrl(linkedinUrl)) {
    return NextResponse.json(
      { error: "A valid LinkedIn profile URL is required." },
      { status: 400, headers: { "Cache-Control": "no-store" } },
    );
  }

  const referralMatch = REFERRAL_URL_PATTERN.exec(referralUrl);
  if (!referralMatch || referralMatch[1] !== code) {
    return NextResponse.json(
      { error: "A valid referral link is required." },
      { status: 400, headers: { "Cache-Control": "no-store" } },
    );
  }

  const result = await syncApplicantToSheet({
    name,
    email,
    age,
    linkedinUrl,
    code,
    referralUrl,
    isActive,
  });

  return NextResponse.json(
    { ok: result.ok, reason: result.reason ?? null },
    {
      status: result.ok ? 200 : 202,
      headers: { "Cache-Control": "no-store" },
    },
  );
}
