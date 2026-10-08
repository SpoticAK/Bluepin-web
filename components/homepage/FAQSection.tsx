import Link from "next/link";
import { faqs, faqJsonLd } from "@/lib/faq";
import FaqAccordion from "@/components/homepage/FaqAccordion";
import Reveal from "./Reveal";

const PREVIEW_COUNT = 5;

export default function FAQSection() {
  const preview = faqs.slice(0, PREVIEW_COUNT);

  return (
    <section
      id="faq"
      className="w-full section-pad border-t border-line bg-paper scroll-mt-20"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(preview)),
        }}
      />
      <div className="container-site flex flex-col items-center">
        <Reveal className="w-full max-w-3xl flex flex-col items-center">
          <div className="text-center max-w-xl mb-10 sm:mb-12">
            <span className="section-tag">
              Frequently asked questions
            </span>
            <h2 className="h2-site text-balance">
              Questions? Good.
            </h2>
            <p className="body-lg-site mt-2.5">
              A few things you might want to know.
            </p>
          </div>

          <FaqAccordion items={preview} />

          <div className="mt-10 sm:mt-12 text-center">
            <Link
              href="/faq"
              className="text-sm sm:text-base font-medium text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-stone-50 underline underline-offset-4 decoration-stone-300 dark:decoration-stone-600 hover:decoration-stone-950 dark:hover:decoration-stone-50 transition-colors"
            >
              View all FAQs
            </Link>
          </div>

          <p className="mt-8 w-full text-xs sm:text-sm text-stone-500 dark:text-stone-500 leading-relaxed text-center">
            Bluepin is an educational health companion. It is not a medical
            device and does not provide medical advice, diagnosis, or
            treatment. Always consult a qualified doctor for decisions about
            your health.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
