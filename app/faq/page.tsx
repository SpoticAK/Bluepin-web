import type { Metadata } from "next";
import Link from "next/link";
import { faqs, faqJsonLd } from "@/lib/faq";
import FaqAccordion from "@/components/homepage/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ | Bluepin — Diabetes Management Questions Answered",
  description:
    "Answers to common questions about blood sugar, HbA1c, diabetes complications, Bluepin's features, privacy, and how Bluepin helps you manage diabetes.",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] dark:bg-[#121311] font-sans antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(faqs)),
        }}
      />
      <main className="w-full py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col items-center">
          <div className="w-full max-w-3xl">
            <Link
              href="/#faq"
              className="text-sm sm:text-base font-medium text-stone-500 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-100 inline-flex items-center gap-1.5 transition-colors"
            >
              ← Back to home
            </Link>
            <div className="text-center max-w-xl mx-auto mt-8 mb-10 sm:mb-12">
              <span className="text-sm font-sans text-stone-500 dark:text-stone-400 mb-2 block font-normal">
                Frequently asked questions
              </span>
              <h1 className="text-4xl sm:text-5xl font-sans font-normal tracking-[-0.035em] text-stone-950 dark:text-stone-50 leading-[1.12] text-balance">
                All FAQs
              </h1>
              <p className="mt-2.5 text-base sm:text-lg text-stone-600 dark:text-stone-400 font-normal leading-relaxed">
                Everything you might want to know about diabetes and Bluepin.
              </p>
            </div>

            <FaqAccordion items={faqs} />

            <p className="mt-8 text-xs sm:text-sm text-stone-500 dark:text-stone-500 leading-relaxed text-center">
              Bluepin is an educational health companion. It is not a medical
              device and does not provide medical advice, diagnosis, or
              treatment. Always consult a qualified doctor for decisions about
              your health.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
