import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  answer: string;
  accent: string;
  sources?: { label: string; url: string }[];
}

const faqs: FaqItem[] = [
  {
    q: "What is a normal blood sugar level?",
    answer:
      "For most people without diabetes, a normal fasting blood sugar is 70–99 mg/dL (3.9–5.5 mmol/L). Fasting glucose of 100–125 mg/dL signals prediabetes, and 126 mg/dL or higher on two separate tests signals diabetes. Two hours after eating, blood sugar is normally below 140 mg/dL, with a target below 180 mg/dL for most people with diabetes. Bluepin tracks your glucose trends over time so you can see how your levels behave after fasting, meals, and activity.",
    accent: "text-blue-600 dark:text-blue-400",
    sources: [
      { label: "American Diabetes Association", url: "https://diabetes.org/" },
      {
        label: "NIDDK (NIH)",
        url: "https://www.niddk.nih.gov/health-information/diabetes",
      },
    ],
  },
  {
    q: "What is a normal HbA1c level?",
    answer:
      "HbA1c is a blood test that reflects your average blood sugar over the past 2–3 months. A normal HbA1c is below 5.7%. Levels of 5.7–6.4% indicate prediabetes, and 6.5% or higher indicate diabetes. For most adults with diabetes, the treatment target is below 7% (about 154 mg/dL average sugar). Bluepin lets you upload your lab reports and watch your HbA1c trend over time instead of guessing from single readings.",
    accent: "text-emerald-600 dark:text-emerald-400",
    sources: [
      {
        label: "American Diabetes Association — Understanding A1C",
        url: "https://diabetes.org/about-diabetes/a1c",
      },
      {
        label: "NIDDK (NIH) — A1C Test",
        url: "https://www.niddk.nih.gov/health-information/diagnostic-tests/a1c-test",
      },
    ],
  },
  {
    q: "Can diabetes cause kidney disease?",
    answer:
      "Yes. About 1 in 3 people with diabetes develops chronic kidney disease (CKD), and diabetes is the leading cause of kidney failure worldwide. Regular urine albumin and eGFR (kidney function) tests help catch problems early, while diabetes is still manageable. Bluepin's Health Canvas tracks your kidney markers over time so you can spot worrying trends before they become urgent.",
    accent: "text-sky-600 dark:text-sky-400",
    sources: [
      {
        label: "NIDDK (NIH) — Diabetic Kidney Disease",
        url: "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/diabetic-kidney-disease",
      },
      {
        label: "MedlinePlus — Diabetes & Kidney Disease",
        url: "https://medlineplus.gov/ency/article/000494.htm",
      },
    ],
  },
  {
    q: "Does diabetes cause fatty liver?",
    answer:
      "Fatty liver disease affects roughly 65% of people with diabetes. High blood sugar and insulin resistance encourage fat to build up in the liver, which can silently progress to liver damage if ignored. Simple blood tests in your routine reports — ALT and AST — are the early warning signals. Bluepin connects these markers over time to alert you to changes in your liver health.",
    accent: "text-amber-600 dark:text-amber-400",
    sources: [
      {
        label: "American Diabetes Association",
        url: "https://diabetes.org/about-diabetes/liver-and-diabetes",
      },
    ],
  },
  {
    q: "How does diabetes affect the heart?",
    answer:
      "People with diabetes face roughly 3 times the risk of cardiovascular disease, and heart disease is the leading cause of death in people with diabetes. High blood sugar damages blood vessels and raises cholesterol, which is why your lipid profile and blood pressure deserve the same attention as your glucose. Bluepin watches these trends together to help you see the full picture of your heart health.",
    accent: "text-rose-600 dark:text-rose-400",
    sources: [
      {
        label: "American Diabetes Association — Heart Disease & Diabetes",
        url: "https://diabetes.org/about-diabetes/health-problems/heart-disease",
      },
    ],
  },
  {
    q: "Is Bluepin free?",
    answer:
      "Yes — Bluepin is free to get started, with no credit card required. You can record glucose readings by typing them in or snapping a photo of your glucometer, upload your blood reports, and start receiving Bluepin AI insights. There are no hidden charges to begin understanding your health.",
    accent: "text-violet-600 dark:text-violet-400",
  },
  {
    q: "Is Bluepin medical advice? Does it replace my doctor?",
    answer:
      "No. Bluepin is an educational health companion — not a doctor and not a medical device. It does not diagnose, prescribe, or treat any condition and never replaces professional medical care. Always involve your doctor in medical decisions and never start, stop, or change medication on your own.",
    accent: "text-teal-600 dark:text-teal-400",
  },
  {
    q: "Do I need a CGM or a specific glucometer to use Bluepin?",
    answer:
      "No. Bluepin works with any glucometer — enter your readings manually or simply take a photo of the meter screen and Bluepin reads it for you. Continuous glucose monitor (CGM) integrations like FreeStyle Libre and Dexcom are on our roadmap and will sync straight into your trend charts.",
    accent: "text-cyan-600 dark:text-cyan-400",
  },
  {
    q: "How is my health data kept private?",
    answer:
      "Your health data is encrypted in transit and at rest, stored on secure servers, and never sold — no ads, no data brokers, no tracking for profit. Your information is not used to train public AI models, and you can export or delete your data at any time. Bluepin follows India's DPDP Act for privacy, and you stay in control of what you upload.",
    accent: "text-emerald-600 dark:text-emerald-400",
  },
  {
    q: "How is Bluepin different from other diabetes apps?",
    answer:
      "Most diabetes apps only track your sugar. Bluepin connects your glucose, HbA1c, and blood reports over time to show how diabetes may be affecting your organs — kidneys, eyes, heart, liver, and nerves. Health apps were built to track; Bluepin was built to understand.",
    accent: "text-blue-600 dark:text-blue-400",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, answer }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="py-10 md:py-16 bg-white/60 dark:bg-theme-card/60 backdrop-blur-2xl border-t border-theme-border/40 relative z-10 scroll-mt-20"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-8xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-display tracking-tight text-theme-text mb-12 text-left font-bold mx-auto">
          Frequently asked questions
        </h2>

        <div className="flex flex-col gap-3 max-w-4xl">
          {faqs.map((item, idx) => (
            <details
              key={item.q}
              className="group w-full rounded-xl border border-theme-border/60 bg-white/40 dark:bg-theme-card/30 backdrop-blur-xl shadow-sm"
            >
              <summary className="flex items-center justify-between gap-4 p-4 sm:p-5 cursor-pointer list-none select-none hover:bg-white/70 dark:hover:bg-theme-card/70 transition-colors duration-200 [&::-webkit-details-marker]:hidden">
                <h3 className="flex items-center gap-3">
                  <span
                    className={`text-sm sm:text-base font-poppins font-bold ${item.accent} shrink-0`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] sm:text-[17px] font-semibold text-theme-text tracking-tight m-0">
                    {item.q}
                  </span>
                </h3>
                <ChevronDown
                  className="w-5 h-5 text-theme-text-sec shrink-0 transition-transform duration-300 group-open:rotate-180"
                  strokeWidth={2.5}
                />
              </summary>
              <div className="px-4 sm:px-5 pb-5 pl-12 sm:pl-14">
                <p className="text-[14px] sm:text-[15px] text-theme-text-sec font-medium leading-relaxed m-0">
                  {item.answer}
                </p>
                {item.sources && item.sources.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                    {item.sources.map((source) => (
                      <a
                        key={source.url}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {source.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </details>
          ))}
        </div>

        <p className="mt-8 max-w-4xl text-xs sm:text-sm text-theme-text-sec leading-relaxed">
          Bluepin is an educational health companion. It is not a medical device
          and does not provide medical advice, diagnosis, or treatment. Always
          consult a qualified doctor for decisions about your health.
        </p>
      </div>
    </section>
  );
}