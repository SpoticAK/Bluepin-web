import React from "react";
import Reveal from "./Reveal";
import Link from "next/link";
import {
  Bean,
  Brain,
  Droplets,
  Eye,
  Gauge,
  HeartPulse,
  type LucideIcon,
} from "lucide-react";

interface ComplicationItem {
  icon: LucideIcon;
  value: string;
  condition: string;
  explanation: string;
}

const COMPLICATIONS: ComplicationItem[] = [
  {
    icon: Eye,
    value: "1 in 3",
    condition: "Diabetic retinopathy",
    explanation: "A diabetes-related condition that can damage the eyes.",
  },
  {
    icon: Brain,
    value: "Up to 50%",
    condition: "Diabetic neuropathy",
    explanation:
      "Nerve damage that typically causes pain, numbness, or tingling.",
  },
  {
    icon: Bean,
    value: "20–40%",
    condition: "Diabetic kidney disease",
    explanation: "Microvascular damage affecting how the kidneys filter waste.",
  },
  {
    icon: Droplets,
    value: "65%",
    condition: "Fatty liver disease",
    explanation: "Estimated prevalence of metabolic hepatic fat accumulation.",
  },
  {
    icon: Gauge,
    value: "~2 in 5",
    condition: "Hypertension",
    explanation: "People with diabetes also have high blood pressure.",
  },
  {
    icon: HeartPulse,
    value: "~2×",
    condition: "Cardiovascular risk",
    explanation:
      "Higher likelihood of heart attack, stroke, or vessel disease.",
  },
];

export default function BeyondGlucose() {
  return (
    <section
      id="why"
      className="w-full bg-[#F6F5F0] dark:bg-[#171816] border-t border-stone-200/80 dark:border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="max-w-4xl mx-auto py-16 sm:py-20 md:py-24 flex flex-col items-center text-center">
          <Reveal className="flex flex-col items-center w-full">
            {/* Subtle Section Tag */}
            <span className="text-xs font-sans text-stone-500 dark:text-stone-400 mb-2 block font-normal">
              Why it matters
            </span>

            {/* 1. Opening Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-sans font-normal tracking-[-0.035em] text-stone-950 dark:text-stone-50 leading-[1.2] whitespace-normal lg:whitespace-nowrap text-balance max-w-full">
              Diabetes doesn&apos;t stop at blood sugar.
            </h2>

            {/* 2. Compact 76.1% Proof Point with inline clickable Source */}
            <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center max-w-xl">
              <span className="text-3xl sm:text-4xl md:text-[40px] font-sans font-semibold text-stone-950 dark:text-stone-50 tracking-tight leading-none shrink-0">
                76.1%
              </span>
              <span className="text-base sm:text-lg text-stone-900 dark:text-stone-200 font-medium tracking-tight">
                had at least one diabetes-related complication{" "}
                <Link
                  href="https://app.bluepin.in"
                  className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 underline underline-offset-2 decoration-stone-300 dark:decoration-stone-600 hover:decoration-stone-900 dark:hover:decoration-stone-100 transition-colors font-normal whitespace-nowrap ml-1"
                >
                  (Source)
                </Link>
              </span>
            </div>

            {/* 3. Complication Section: What can diabetes affect? (Balanced 6-item 2-column grid) */}
            <div className="w-full mt-9 sm:mt-10 flex flex-col items-center">
              <div className="mb-7 sm:mb-8 text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-sans font-medium text-stone-900 dark:text-stone-100 tracking-[-0.02em]">
                  What can diabetes affect?
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-normal">
                  Silent complications that develop progressively across organs.
                </p>
              </div>

              {/* Clean 2-column layout (All 6 complications evenly balanced) */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 sm:gap-y-7 text-left">
                {COMPLICATIONS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.condition} className="flex flex-col">
                      <div className="flex items-center gap-2 text-stone-700 dark:text-stone-300 mb-1.5">
                        <Icon className="w-4 h-4 text-stone-900 dark:text-stone-100 shrink-0" strokeWidth={1.5} />
                        <span className="text-xs sm:text-sm font-semibold text-stone-900 dark:text-stone-100 tracking-tight">
                          {item.condition}
                        </span>
                      </div>

                      <span className="text-2xl sm:text-[27px] font-sans font-normal tracking-[-0.03em] text-stone-950 dark:text-stone-50 leading-none">
                        {item.value}
                      </span>

                      <p className="mt-1.5 text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-normal leading-relaxed">
                        {item.explanation}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. Final Solution Message Transition */}
            <div className="mt-9 sm:mt-10 pt-7 sm:pt-8 border-t border-stone-200/80 dark:border-white/10 w-full max-w-2xl flex flex-col items-center text-center">
              <p className="text-base sm:text-lg md:text-[19px] text-stone-800 dark:text-stone-200 font-normal leading-relaxed tracking-[-0.01em]">
                That&apos;s why you shouldn&apos;t only take care of your
                glucose — you should take care of your entire health.
              </p>
              <p className="mt-2 text-base sm:text-lg md:text-[19px] text-stone-950 dark:text-stone-50 font-semibold tracking-[-0.015em]">
                Bluepin is built to solve exactly this problem.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
