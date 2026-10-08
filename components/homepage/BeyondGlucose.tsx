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
      className="w-full bg-paper-sunken border-t border-line"
    >
      <div className="container-site">
        <div className="container-prose section-pad flex flex-col items-center text-center">
          <Reveal className="flex flex-col items-center w-full">
            {/* Subtle Section Tag */}
            <span className="section-tag">
              Why it matters
            </span>

            {/* 1. Opening Heading */}
            <h2 className="h2-site whitespace-normal lg:whitespace-nowrap text-balance max-w-full">
              Diabetes doesn&apos;t stop at blood sugar.
            </h2>

            {/* 2. Alarm proof point: stacked so the number hits first */}
            <div className="mt-6 sm:mt-8 flex flex-col items-center text-center max-w-xl">
              <span className="text-5xl sm:text-6xl font-sans font-semibold text-theme-critical tracking-tight leading-none">
                76.1%
              </span>
              <span className="body-lg-site mt-3 font-medium text-ink">
                had at least one diabetes-related complication{" "}
                <Link
                  href="https://onlinelibrary.wiley.com/doi/full/10.1002/hsr2.1096"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 underline underline-offset-2 decoration-stone-300 dark:decoration-stone-600 hover:decoration-stone-900 dark:hover:decoration-stone-100 transition-colors font-normal whitespace-nowrap ml-1"
                >
                  (Source)
                </Link>
              </span>
            </div>

            {/* 3. Complication Section: subordinate header, stats carry the weight */}
            <div className="w-full mt-10 sm:mt-12 flex flex-col items-center">
              <div className="mb-7 sm:mb-8 text-center">
                <h3 className="text-lg sm:text-xl font-sans font-semibold text-ink tracking-[-0.01em]">
                  What can diabetes affect?
                </h3>
                <p className="body-site mt-1.5">
                  Silent complications that develop progressively across organs.
                </p>
              </div>

              {/* Clean 2-column layout (All 6 complications evenly balanced) */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 sm:gap-y-9 text-left">
                {COMPLICATIONS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.condition} className="flex flex-col">
                      <div className="flex items-center gap-2 text-ink-2 mb-1.5">
                        <Icon className="w-4 h-4 text-ink shrink-0" strokeWidth={1.5} />
                        <span className="text-xs sm:text-sm font-semibold text-ink tracking-tight">
                          {item.condition}
                        </span>
                      </div>

                      <span className="text-[26px] sm:text-3xl font-sans font-semibold tracking-[-0.03em] text-ink leading-none">
                        {item.value}
                      </span>

                      <p className="body-site mt-1.5">
                        {item.explanation}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. Handoff to How it works — no divider, this is one section */}
            <div className="mt-10 sm:mt-12 w-full max-w-2xl flex flex-col items-center text-center">
              <p className="body-lg-site text-ink">
                That&apos;s why you shouldn&apos;t only take care of your
                glucose — you should take care of your entire health.
              </p>
              <p className="body-lg-site mt-2 text-ink font-semibold">
                Bluepin is built to solve exactly this problem.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
