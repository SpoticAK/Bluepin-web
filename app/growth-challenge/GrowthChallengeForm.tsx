"use client";
import * as z from "zod";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type FormEvent,
} from "react";
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  Loader2,
  LockKeyhole,
  RefreshCw,
  ShareIcon,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

const REFERRAL_API_URL =
  process.env.NEXT_PUBLIC_REFERRAL_API_URL?.trim() ||
  "https://app.bluepin.in/api/referrals/applicant";

const SHEET_SYNC_URL = "/api/growth-challenge/applicant";

const STORAGE_KEY = "bluepin-growth-challenge-referral-v1";

type FormValues = {
  name: string;
  email: string;
  age: string;
  linkedin: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

type SavedReferral = {
  code: string;
  referralUrl: string;
  applicantName: string;
  applicantEmail: string;
  isActive: boolean;
  created: boolean;
  reused: boolean;
  savedAt: number;
};

type ApplicantApiResponse = {
  success?: boolean;
  code?: string;
  referralUrl?: string;
  isActive?: boolean;
  created?: boolean;
  reused?: boolean;
  applicantName?: string;
  applicantEmail?: string;
  error?: string;
};

const EMPTY_VALUES: FormValues = {
  name: "",
  email: "",
  age: "",
  linkedin: "",
};

const inputBase =
  "w-full rounded-lg border border-line bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition placeholder:text-ink-2/50 focus:border-ink/30 focus:ring-2 focus:ring-ink/10 dark:bg-paper-sunken";

const inputError =
  "border-theme-critical/60 focus:border-theme-critical focus:ring-theme-critical/10";

function normalizeLinkedinUrl(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return null;

  const withProtocol = /^[a-z][a-z\d+.-]*:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  try {
    const url = new URL(withProtocol);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;

    const host = url.hostname.toLowerCase();
    if (host !== "linkedin.com" && !host.endsWith(".linkedin.com")) {
      return null;
    }
    if (!/^\/(in|pub)\//i.test(url.pathname)) return null;

    url.protocol = "https:";
    return url.toString();
  } catch {
    return null;
  }
}

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your full name.")
    .max(80, "Please keep your name under 80 characters."),
  email: z.email("Enter a valid email address."),
  age: z.string().trim().min(1, "Please enter your age."),
  linkedin: z
    .string()
    .trim()
    .min(1, "Please enter your LinkedIn profile URL.")
    .pipe(z.httpUrl("Enter a valid URL, including https://")),
});

function validate(values: FormValues) {
  const parsed = formSchema.safeParse(values);
  if (parsed.success) return { errors: {} as FormErrors, data: parsed.data };

  const errors: FormErrors = {};
  for (const issue of parsed.error.issues) {
    const field = issue.path[0] as keyof FormValues;
    errors[field] ??= issue.message; // keep the first message per field
  }
  return { errors, data: null };
}

let storedReferralRaw: string | null | undefined;
const storageListeners = new Set<() => void>();

function getStoredReferralRaw(): string | null {
  if (typeof window === "undefined") return null;
  if (storedReferralRaw !== undefined) return storedReferralRaw;

  try {
    storedReferralRaw = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    storedReferralRaw = null;
  }
  return storedReferralRaw;
}

function getServerStoredReferralRaw(): string | null {
  return null;
}

function subscribeToStoredReferral(callback: () => void) {
  storageListeners.add(callback);

  const handleStorage = (event: StorageEvent) => {
    if (event.key !== STORAGE_KEY) return;
    storedReferralRaw = event.newValue;
    callback();
  };

  window.addEventListener("storage", handleStorage);
  return () => {
    storageListeners.delete(callback);
    window.removeEventListener("storage", handleStorage);
  };
}

function writeStoredReferral(referral: SavedReferral | null) {
  const raw = referral ? JSON.stringify(referral) : null;

  try {
    if (raw === null) {
      window.localStorage.removeItem(STORAGE_KEY);
    } else {
      window.localStorage.setItem(STORAGE_KEY, raw);
    }
  } catch {
    // Keep the in-memory snapshot so the link remains visible for this visit.
  }

  storedReferralRaw = raw;
  for (const listener of storageListeners) listener();
}

function parseSavedReferral(raw: string | null): SavedReferral | null {
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as Partial<SavedReferral>;
    if (
      typeof parsed.code !== "string" ||
      typeof parsed.referralUrl !== "string" ||
      !parsed.referralUrl.startsWith("https://")
    ) {
      return null;
    }

    return {
      code: parsed.code,
      referralUrl: parsed.referralUrl,
      applicantName:
        typeof parsed.applicantName === "string" ? parsed.applicantName : "",
      applicantEmail:
        typeof parsed.applicantEmail === "string" ? parsed.applicantEmail : "",
      isActive: parsed.isActive !== false,
      created: parsed.created === true,
      reused: parsed.reused === true,
      savedAt: typeof parsed.savedAt === "number" ? parsed.savedAt : Date.now(),
    };
  } catch {
    return null;
  }
}

const subscribeToClient = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export default function GrowthChallengeForm() {
  const [values, setValues] = useState<FormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const storedReferralRaw = useSyncExternalStore(
    subscribeToStoredReferral,
    getStoredReferralRaw,
    getServerStoredReferralRaw,
  );
  const savedReferral = useMemo(
    () => parseSavedReferral(storedReferralRaw),
    [storedReferralRaw],
  );
  const hydrated = useSyncExternalStore(
    subscribeToClient,
    getClientSnapshot,
    getServerSnapshot,
  );

  const successRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const shouldScrollRef = useRef(false);
  const copyTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current !== null) {
        window.clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!savedReferral || !shouldScrollRef.current) return;
    shouldScrollRef.current = false;
    requestAnimationFrame(() => {
      successRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  }, [savedReferral]);

  const updateValue = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    setGeneralError(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setGeneralError(null);
    setCopyError(false);

    const { errors: validationErrors, data } = validate(values);
    setErrors(validationErrors);

    if (!data) {
      const firstInvalidField = Object.keys(validationErrors)[0];
      document.getElementById(`applicant-${firstInvalidField}`)?.focus();
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(REFERRAL_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          applicantName: data.name,
          applicantEmail: data.email,
          applicantAge: data.age,
          applicantLinkedinUrl: data.linkedin,
        }),
      });

      const payload = (await response
        .json()
        .catch(() => null)) as ApplicantApiResponse | null;

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error(
            "Too many registration attempts from this network. Please wait a few minutes and try again.",
          );
        }

        if (payload?.code === "DISPOSABLE_EMAIL") {
          setErrors((current) => ({
            ...current,
            email:
              "Please use a permanent email address. Disposable domains are not eligible.",
          }));
          document.getElementById("applicant-email")?.focus();
          return;
        }

        throw new Error(
          payload?.error ||
            "We couldn't create your referral link. Please try again.",
        );
      }

      if (
        typeof payload?.code !== "string" ||
        typeof payload.referralUrl !== "string"
      ) {
        throw new Error(
          "The server returned an incomplete response. Please try again.",
        );
      }

      const referral: SavedReferral = {
        code: payload.code,
        referralUrl: payload.referralUrl,
        applicantName:
          typeof payload.applicantName === "string"
            ? payload.applicantName
            : data.name,
        applicantEmail:
          typeof payload.applicantEmail === "string"
            ? payload.applicantEmail
            : data.email,
        isActive: payload.isActive !== false,
        created: payload.created === true,
        reused: payload.reused === true,
        savedAt: Date.now(),
      };

      shouldScrollRef.current = true;
      writeStoredReferral(referral);

      // Best-effort mirror to Google Sheets. Registration has already
      // succeeded, so a sheet failure must never block the applicant.
      void fetch(SHEET_SYNC_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: referral.applicantName,
          email: referral.applicantEmail,
          age: data.age,
          linkedinUrl: data.linkedin,
          code: referral.code,
          referralUrl: referral.referralUrl,
          isActive: referral.isActive,
        }),
        keepalive: true,
      }).catch(() => undefined);
    } catch (error) {
      setGeneralError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const copyLink = async () => {
    if (!savedReferral) return;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(savedReferral.referralUrl);
      } else {
        const input = linkRef.current;
        if (!input) throw new Error("Link input unavailable");
        input.focus();
        input.select();
        if (!document.execCommand("copy")) {
          throw new Error("Copy command failed");
        }
        input.setSelectionRange(0, 0);
      }

      setCopyError(false);
      setCopied(true);
      if (copyTimerRef.current !== null) {
        window.clearTimeout(copyTimerRef.current);
      }
      copyTimerRef.current = window.setTimeout(() => {
        setCopied(false);
      }, 2200);
    } catch {
      setCopied(false);
      setCopyError(true);
      linkRef.current?.focus();
      linkRef.current?.select();
    }
  };

  const resetReferral = () => {
    writeStoredReferral(null);
    setValues(EMPTY_VALUES);
    setErrors({});
    setGeneralError(null);
    setCopied(false);
    setCopyError(false);
    requestAnimationFrame(() => {
      document.getElementById("applicant-name")?.focus();
    });
  };

  if (!hydrated) {
    return (
      <div
        aria-hidden="true"
        className="rounded-2xl border border-line bg-card p-6 shadow-sm sm:p-8"
      >
        <div className="h-3 w-24 animate-pulse rounded-full bg-line" />
        <div className="mt-4 h-8 w-2/3 animate-pulse rounded-lg bg-line" />
        <div className="mt-3 h-4 w-1/2 animate-pulse rounded-full bg-line" />
        <div className="mt-8 space-y-5">
          {[0, 1, 2, 3].map((item) => (
            <div key={item}>
              <div className="h-3 w-20 animate-pulse rounded-full bg-line" />
              <div className="mt-2 h-12 w-full animate-pulse rounded-xl bg-paper-sunken" />
            </div>
          ))}
        </div>
        <div className="mt-7 h-14 w-full animate-pulse rounded-full bg-line" />
      </div>
    );
  }

  if (savedReferral) {
    const shareText = `I'm taking part in the Bluepin Growth Challenge. If you're living with diabetes, Bluepin can help you track glucose and understand your health reports. Join using my link: ${savedReferral.referralUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

    return (
      <div
        ref={successRef}
        aria-labelledby="success-title"
        className="rounded-2xl border border-line bg-card p-6 shadow-sm sm:p-8"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-theme-success/10 text-theme-success">
            <CheckCircle2 className="h-5 w-5" strokeWidth={2} />
          </span>
          <div>
            <h2
              id="success-title"
              className="font-display text-xl tracking-tight text-ink"
            >
              Registration complete
            </h2>
            <p className="mt-0.5 text-sm text-ink-2">
              Your referral link is ready.
            </p>
          </div>
        </div>

        {!savedReferral.isActive && (
          <div className="mt-4 flex gap-2.5 rounded-lg border border-theme-warning/25 bg-theme-warning/5 p-3 text-xs leading-relaxed text-theme-warning">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <p>
              This code is paused. Contact{" "}
              <a
                href="mailto:marketing@bluepin.in"
                className="font-medium underline underline-offset-4"
              >
                marketing@bluepin.in
              </a>
              .
            </p>
          </div>
        )}

        <div className="mt-6">
          <label
            htmlFor="referral-link"
            className="block text-[13px] font-medium text-ink"
          >
            Your referral link
          </label>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row">
            <input
              ref={linkRef}
              id="referral-link"
              readOnly
              value={savedReferral.referralUrl}
              onFocus={(event) => event.currentTarget.select()}
              className="min-w-0 flex-1 rounded-lg border border-line bg-paper px-3.5 py-2.5 font-mono text-xs text-ink outline-none focus:ring-2 focus:ring-ink/10"
            />
            <button
              type="button"
              onClick={copyLink}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-line bg-card px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-paper-sunken"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-theme-success" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy link
                </>
              )}
            </button>
          </div>
          <p className="mt-2 text-xs text-ink-2">
            Code:{" "}
            <span className="font-mono text-ink">{savedReferral.code}</span>
          </p>
        </div>

        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-whatsapp-hover"
          >
            <ShareIcon className="h-4 w-4" />
            Share on WhatsApp
          </a>
          <a
            href={savedReferral.referralUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-card px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-paper-sunken"
          >
            Open Bluepin
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {copyError && (
          <p
            role="alert"
            className="mt-3 text-xs leading-relaxed text-theme-critical"
          >
            We couldn&apos;t copy automatically. Select the link above and copy
            it manually.
          </p>
        )}

        <div className="mt-4 flex flex-col gap-2 border-t border-line pt-4 text-xs text-ink-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2">
            <LockKeyhole className="h-3.5 w-3.5 shrink-0" />
            Saved on this device.
          </p>
          <button
            type="button"
            onClick={resetReferral}
            className="inline-flex items-center gap-1.5 self-start font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink sm:self-auto"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            Use a different email
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      aria-labelledby="form-title"
      className="rounded-2xl border border-line bg-card p-6 shadow-sm sm:p-8"
    >
      <div className="border-b border-line pb-4">
        <h2
          id="form-title"
          className="font-display text-xl tracking-tight text-ink"
        >
          Registration
        </h2>
        <p className="mt-1 text-sm text-ink-2">All fields are required.</p>
      </div>

      {generalError && (
        <div
          role="alert"
          className="mt-4 flex gap-2.5 rounded-lg border border-theme-critical/20 bg-theme-critical/5 p-3 text-sm leading-relaxed text-theme-critical"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <p>{generalError}</p>
        </div>
      )}

      <div className="mt-6 space-y-5">
        <div>
          <label
            htmlFor="applicant-name"
            className="mb-2 block text-[13px] font-medium text-ink"
          >
            Full name
          </label>
          <input
            id="applicant-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => updateValue("name", event.target.value)}
            placeholder="Priya Sharma"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "applicant-name-error" : undefined}
            className={cn(inputBase, errors.name && inputError)}
          />
          {errors.name && (
            <p
              id="applicant-name-error"
              role="alert"
              className="mt-1.5 text-xs text-theme-critical"
            >
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="applicant-email"
            className="mb-2 block text-[13px] font-medium text-ink"
          >
            Work / professional email address
          </label>
          <input
            id="applicant-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => updateValue("email", event.target.value)}
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={
              errors.email ? "applicant-email-error" : undefined
            }
            className={cn(inputBase, errors.email && inputError)}
          />
          {errors.email && (
            <p
              id="applicant-email-error"
              role="alert"
              className="mt-1.5 text-xs text-theme-critical"
            >
              {errors.email}
            </p>
          )}
        </div>

        <div className="space-y-5">
          <div>
            <label
              htmlFor="applicant-age"
              className="mb-2 block text-[13px] font-medium text-ink"
            >
              Age
            </label>
            <input
              id="applicant-age"
              name="age"
              type="number"
              inputMode="numeric"
              min={13}
              max={120}
              value={values.age}
              onChange={(event) => updateValue("age", event.target.value)}
              placeholder="29"
              aria-invalid={Boolean(errors.age)}
              aria-describedby={errors.age ? "applicant-age-error" : undefined}
              className={cn(inputBase, errors.age && inputError)}
            />
            {errors.age && (
              <p
                id="applicant-age-error"
                role="alert"
                className="mt-1.5 text-xs text-theme-critical"
              >
                {errors.age}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="applicant-linkedin"
              className="mb-2 block text-[13px] font-medium text-ink"
            >
              LinkedIn profile URL
            </label>
            <input
              id="applicant-linkedin"
              name="linkedin"
              type="url"
              inputMode="url"
              autoComplete="url"
              value={values.linkedin}
              onChange={(event) => updateValue("linkedin", event.target.value)}
              onBlur={() => {
                const normalized = normalizeLinkedinUrl(values.linkedin);
                if (normalized) {
                  updateValue("linkedin", normalized);
                }
              }}
              placeholder="linkedin.com/in/your-name"
              aria-invalid={Boolean(errors.linkedin)}
              aria-describedby={
                errors.linkedin ? "applicant-linkedin-error" : undefined
              }
              className={cn(inputBase, errors.linkedin && inputError)}
            />
            {errors.linkedin && (
              <p
                id="applicant-linkedin-error"
                role="alert"
                className="mt-1.5 text-xs text-theme-critical"
              >
                {errors.linkedin}
              </p>
            )}
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink/90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Creating your link&hellip;
          </>
        ) : (
          "Register & Get Your Referral Link"
        )}
      </button>

      <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-ink-2">
        <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0" />
        <span>Used only to administer the challenge.</span>
      </p>
    </form>
  );
}
