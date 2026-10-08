export interface FaqSource {
  label: string;
  url: string;
}

export interface FaqItem {
  q: string;
  answer: string;
  sources?: FaqSource[];
}

// Canonical FAQ content.
// - healthFaqs: the original diabetes-education questions (kept verbatim for SEO).
// - bluepinFaqs: product questions — the 6 from the redesign, then the original product ones.
// The homepage preview renders healthFaqs (first 5); /faq renders both groups.
export const healthFaqs: FaqItem[] = [
  {
    q: "What is a normal blood sugar level?",
    answer:
      "For most people without diabetes, a normal fasting blood sugar is 70–99 mg/dL (3.9–5.5 mmol/L). Fasting glucose of 100–125 mg/dL signals prediabetes, and 126 mg/dL or higher on two separate tests signals diabetes. Two hours after eating, blood sugar is normally below 140 mg/dL, with a target below 180 mg/dL for most people with diabetes. Bluepin tracks your glucose trends over time so you can see how your levels behave after fasting, meals, and activity.",
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
    sources: [
      {
        label: "American Diabetes Association — Heart Disease & Diabetes",
        url: "https://diabetes.org/about-diabetes/health-problems/heart-disease",
      },
    ],
  },
];

export const bluepinFaqs: FaqItem[] = [
  {
    q: "How much does Bluepin cost?",
    answer:
      "Bluepin is completely free to use. There are no subscription fees or paid plans for the core Bluepin experience.",
  },
  {
    q: "Do I need to download an app?",
    answer:
      "No. You can start using Bluepin through WhatsApp, and you can also use the Bluepin web app. You don’t need to install another app just to get started.",
  },
  {
    q: "What can I track with Bluepin?",
    answer:
      "You can record your glucose readings and add health reports such as blood tests. Bluepin can extract important biomarkers from your reports and bring them together with your glucose history, so you can see how your health changes over time.",
  },
  {
    q: "Is Bluepin only for tracking blood sugar?",
    answer:
      "No. Glucose is an important part of diabetes management, but Bluepin also helps you understand the bigger picture of your health by bringing together information from your glucose readings and health reports.",
  },
  {
    q: "Is my health data safe and who owns it?",
    answer:
      "Your health data is yours. Bluepin uses security measures such as encryption, access controls and audit logging to protect health information. You can also delete your Bluepin account and its active health data. Bluepin does not use personal health information for targeted advertising.",
  },
  {
    q: "Is Bluepin a medical service?",
    answer:
      "No. Bluepin helps you understand your health information and identify trends and patterns. Its insights are informational and are not a diagnosis, prescription, or substitute for advice from a qualified healthcare professional.",
  },
  {
    q: "Is Bluepin free?",
    answer:
      "Yes — Bluepin is free to get started, with no credit card required. You can record glucose readings by typing them in or snapping a photo of your glucometer, upload your blood reports, and start receiving Bluepin AI insights. There are no hidden charges to begin understanding your health.",
  },
  {
    q: "Is Bluepin medical advice? Does it replace my doctor?",
    answer:
      "No. Bluepin is an educational health companion — not a doctor and not a medical device. It does not diagnose, prescribe, or treat any condition and never replaces professional medical care. Always involve your doctor in medical decisions and never start, stop, or change medication on your own.",
  },
  {
    q: "Do I need a CGM or a specific glucometer to use Bluepin?",
    answer:
      "No. Bluepin works with any glucometer — enter your readings manually or simply take a photo of the meter screen and Bluepin reads it for you. Continuous glucose monitor (CGM) integrations like FreeStyle Libre and Dexcom are on our roadmap and will sync straight into your trend charts.",
  },
  {
    q: "How is my health data kept private?",
    answer:
      "Your health data is encrypted in transit and at rest, stored on secure servers, and never sold — no ads, no data brokers, no tracking for profit. Your information is not used to train public AI models, and you can export or delete your data at any time. Bluepin follows India's DPDP Act for privacy, and you stay in control of what you upload.",
  },
  {
    q: "How is Bluepin different from other diabetes apps?",
    answer:
      "Most diabetes apps only track your sugar. Bluepin connects your glucose, HbA1c, and blood reports over time to show how diabetes may be affecting your organs — kidneys, eyes, heart, liver, and nerves. Health apps were built to track; Bluepin was built to understand.",
  },
];

// Flat list of every question (health first, then product) for JSON-LD and previews.
export const faqs: FaqItem[] = [...healthFaqs, ...bluepinFaqs];

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, answer }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}
