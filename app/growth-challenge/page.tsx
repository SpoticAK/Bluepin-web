import type { Metadata } from "next";
import GrowthChallengeForm from "./GrowthChallengeForm";

export const metadata: Metadata = {
  title: "Bluepin Growth Challenge | Get Your Referral Link",
  description:
    "Register for the optional Bluepin Growth Challenge. Bring 10 genuine users living with diabetes to Bluepin by November 1, 2026 using organic channels.",
  alternates: {
    canonical: "https://bluepin.in/growth-challenge",
  },
  openGraph: {
    type: "website",
    url: "https://bluepin.in/growth-challenge",
    title: "Bluepin Growth Challenge | Get Your Referral Link",
    description:
      "Register for the optional Bluepin Growth Challenge. Bring 10 genuine users living with diabetes to Bluepin by November 1, 2026 using organic channels.",
    images: ["https://bluepin.in/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bluepin Growth Challenge | Get Your Referral Link",
    description:
      "Register for the optional Bluepin Growth Challenge. Bring 10 genuine users living with diabetes to Bluepin by November 1, 2026 using organic channels.",
    images: ["https://bluepin.in/og-image.png"],
  },
};

export default function GrowthChallengePage() {
  return (
    <main className="min-h-screen bg-paper-sunken px-4 py-10 font-sans text-ink antialiased sm:py-16">
      <div className="mx-auto w-full max-w-2xl">
        <section className="overflow-hidden rounded-2xl border border-line bg-card shadow-sm">
          <div className="h-1.5 bg-theme-accent" />
          <div className="p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-ink-2">
              Bluepin
            </p>
            <h1 className="mt-2 font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Bluepin Growth Challenge
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-ink-2">
              Thanks for your interest in joining Bluepin. Register below to
              participate in our optional user-acquisition challenge.
            </p>

            <div className="mt-6 space-y-3 border-t border-line pt-5 text-sm leading-relaxed text-ink-2">
              <p>
                <span className="font-medium text-ink">Objective:</span> Acquire
                10 genuine users living with diabetes for Bluepin by November 1,
                2026, using any organic channel—family, friends, online
                communities, social media, or direct outreach.
              </p>
              <p>
                <span className="font-medium text-ink">Guidelines:</span>{" "}
                Genuine users matter more than registrations alone. Consistent
                glucose logging will carry greater weight, and health report
                uploads will carry additional weight.
              </p>
              <p>
                <span className="font-medium text-ink">Deadline:</span> November
                1, 2026. <span className="font-medium text-ink">Results:</span>{" "}
                November 3, 2026.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-4">
          <GrowthChallengeForm />
        </div>

        <p className="mt-6 text-center text-xs text-ink-2">
          All the best. Questions?{" "}
          <a
            href="mailto:marketing@bluepin.in"
            className="font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
          >
            marketing@bluepin.in
          </a>
        </p>
      </div>
    </main>
  );
}
