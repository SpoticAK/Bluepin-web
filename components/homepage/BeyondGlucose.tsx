import React from "react";
import Reveal from "./Reveal";

function EyeLineIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function NerveLineIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 2v7.5M12 14.5V22M4.9 4.9l5.3 5.3M13.8 13.8l5.3 5.3M2 12h7.5M14.5 12H22M4.9 19.1l5.3-5.3M13.8 10.2l5.3-5.3" />
    </svg>
  );
}

function KidneyLineIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 3.5c-3.2-.2-6.5 1.5-7.8 4.6-1.5 3.5-.8 7.6 1.2 10.8 1.8 2.8 4.8 4.6 8 3.8 3.2-.8 5.1-4.2 4.6-7.8-.3-2.6-1.8-3.8-3.2-4.4-1.8-.7-2-2.3-1.6-4.5.3-.9-.2-2.3-1.2-2.5Z" />
      <path d="M12.5 11.5c-1.5 1-2 2.8-1.5 5.5" />
      <path d="M14.5 13.2c-.8.8-1 2.2-.8 4.3" />
    </svg>
  );
}

function LiverLineIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3.5 10c0-4 4.5-6.5 10.5-6.5 5 0 8 2.5 8 6 0 4.2-3.8 8.5-8.5 8.5-4 0-6.8-2-8.5-4.5-1-1.5-1.5-2.5-1.5-3.5Z" />
      <path d="M12.5 4.5c-.8 3-1.2 5.5.5 8.5" />
      <path d="M13 18c.8-1.5 1.8-2 3.2-2.2" />
    </svg>
  );
}

function PressureLineIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="13" height="11" rx="2" />
      <line x1="7" y1="4" x2="7" y2="15" />
      <path d="M9.5 15v3.5c0 1.5 1 2.5 2.5 2.5h2" />
      <circle cx="17.5" cy="18" r="3" />
      <path d="M17.5 18l1-1" />
    </svg>
  );
}

function HeartLineIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

interface ComplicationItem {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  condition: string;
  explanation: string;
}

const COMPLICATIONS: ComplicationItem[] = [
  {
    icon: EyeLineIcon,
    value: "1 in 3",
    condition: "Diabetic retinopathy",
    explanation: "A diabetes-related condition that can damage the eyes.",
  },
  {
    icon: NerveLineIcon,
    value: "Up to 50%",
    condition: "Diabetic neuropathy",
    explanation: "Nerve damage that typically causes pain, numbness, or tingling.",
  },
  {
    icon: KidneyLineIcon,
    value: "20–40%",
    condition: "Diabetic kidney disease",
    explanation: "Microvascular damage affecting how the kidneys filter waste.",
  },
  {
    icon: LiverLineIcon,
    value: "65%",
    condition: "Fatty liver disease",
    explanation: "Estimated prevalence of metabolic hepatic fat accumulation.",
  },
  {
    icon: PressureLineIcon,
    value: "~2 in 5",
    condition: "Hypertension",
    explanation: "People with diabetes also have high blood pressure.",
  },
  {
    icon: HeartLineIcon,
    value: "~2×",
    condition: "Cardiovascular risk",
    explanation: "Higher likelihood of heart attack, stroke, or vessel disease.",
  },
];

export default function BeyondGlucose() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 border-t border-stone-200/80 dark:border-white/10 bg-[#F6F5F0] dark:bg-[#171816]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
        <Reveal className="flex flex-col items-center w-full">
          <span className="text-sm font-sans text-stone-500 dark:text-stone-400 mb-2 block font-normal">
            Why it matters
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-sans font-normal tracking-[-0.035em] text-stone-950 dark:text-stone-50 leading-[1.2] text-balance">
            Diabetes doesn&apos;t stop at blood sugar.
          </h2>

          <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center max-w-xl">
            <span className="text-4xl sm:text-5xl md:text-[44px] font-sans font-semibold text-stone-950 dark:text-stone-50 tracking-tight leading-none shrink-0">
              76.1%
            </span>
            <span className="text-lg sm:text-xl text-stone-900 dark:text-stone-200 font-medium tracking-tight">
              had at least one diabetes-related complication{" "}
              <a
                href="https://onlinelibrary.wiley.com/doi/full/10.1002/hsr2.1096"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 underline underline-offset-2 decoration-stone-300 dark:decoration-stone-600 hover:decoration-stone-900 dark:hover:decoration-stone-100 transition-colors font-normal whitespace-nowrap ml-1"
              >
                (Source)
              </a>
            </span>
          </div>

          <div className="w-full max-w-4xl mt-10 sm:mt-12 flex flex-col items-center">
            <div className="mb-7 sm:mb-8 text-center">
              <h3 className="text-xl sm:text-2xl font-sans font-medium text-stone-900 dark:text-stone-100 tracking-[-0.02em]">
                What can diabetes affect?
              </h3>
              <p className="mt-1.5 text-sm sm:text-base text-stone-600 dark:text-stone-400 font-normal">
                Silent complications that develop progressively across organs.
              </p>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 sm:gap-y-7 text-left">
              {COMPLICATIONS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.condition} className="flex flex-col">
                    <div className="flex items-center gap-2 text-stone-700 dark:text-stone-300 mb-1.5">
                      <Icon className="w-4 h-4 text-stone-900 dark:text-stone-100 shrink-0" />
                      <span className="text-sm sm:text-base font-semibold text-stone-900 dark:text-stone-100 tracking-tight">
                        {item.condition}
                      </span>
                    </div>

                    <span className="text-3xl sm:text-4xl font-sans font-normal tracking-[-0.03em] text-stone-950 dark:text-stone-50 leading-none">
                      {item.value}
                    </span>

                    <p className="mt-1.5 text-sm sm:text-base text-stone-600 dark:text-stone-400 font-normal leading-relaxed">
                      {item.explanation}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-stone-200/80 dark:border-white/10 w-full max-w-2xl flex flex-col items-center text-center">
            <p className="text-lg sm:text-xl text-stone-800 dark:text-stone-200 font-normal leading-relaxed tracking-[-0.01em]">
              That&apos;s why you shouldn&apos;t only take care of your glucose — you should take care of your entire health.
            </p>
            <p className="mt-2 text-lg sm:text-xl text-stone-950 dark:text-stone-50 font-semibold tracking-[-0.015em]">
              Bluepin is built to solve exactly this problem.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
