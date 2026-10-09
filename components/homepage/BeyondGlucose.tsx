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
    <section id="why" className="w-full bg-paper-sunken border-t border-line">
      <div className="container-site">
        <div className="container-prose inline-auto section-pad flex flex-col items-center text-center">
          <Reveal className="flex flex-col items-center w-full">
            {/* 1. Section Tag */}
            <span className="section-tag text-lg">Why it matters</span>

            {/* 2. Opening Heading */}
            <h2 className="h2-site mt-4 text-4xl sm:text-5xl lg:text-6xl text-balance max-w-full leading-none">
              Diabetes doesn&apos;t stop at blood sugar.
            </h2>

            {/* 3. Alarm proof point: split layout with disappearing border */}
            <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-stretch text-center sm:text-left max-w-xl border border-line bg-paper rounded-xl shadow-lg">
              {/* Left: Number */}
              <div className="flex items-center justify-center sm:justify-end p-6 sm:p-8 sm:w-2/5">
                <span className="text-4xl sm:text-5xl font-sans font-medium text-ink tracking-tight leading-none">
                  76.1%
                </span>
              </div>

              {/* Middle: Disappearing Border */}
              <div className="hidden sm:block w-px my-6 bg-linear-to-b from-transparent via-black/10 dark:via-white/10 to-transparent"></div>
              {/* Mobile version of the border */}
              <div className="sm:hidden h-px w-2/3 bg-linear-to-r from-transparent via-black/10 dark:via-white/10 to-transparent"></div>

              {/* Right: Text */}
              <div className="flex items-center justify-center sm:justify-start p-6 sm:p-8 sm:w-3/5">
                <span className="body-lg-site font-medium text-ink">
                  had at least one diabetes-related complication{" "}
                  <Link
                    href="https://onlinelibrary.wiley.com/doi/full/10.1002/hsr2.1096"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-ink-2 hover:text-ink underline underline-offset-4 decoration-line hover:decoration-ink transition-colors ml-1"
                  >
                    (Source)
                  </Link>
                </span>
              </div>
            </div>

            {/* 4. Complication Section Header */}
            <div className="mt-16 mb-8 sm:mb-12 text-center w-full">
              <h3 className="text-3xl sm:text-4xl font-sans font-medium text-ink tracking-tight">
                What can diabetes affect?
              </h3>
              <p className="body-lg-site mt-3">
                Silent complications that develop progressively across organs.
              </p>
            </div>

            {/* 5. Complications Table: inner borders only, increased column spacing */}
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 text-left">
              {COMPLICATIONS.map((item, index) => {
                const Icon = item.icon;
                const isRightCol = index % 2 !== 0;

                return (
                  <div
                    key={item.condition}
                    className={`flex flex-col py-8 sm:py-8 border-line ${
                      isRightCol
                        ? "md:pl-12 lg:pl-20 md:border-l"
                        : "md:pr-12 lg:pr-20"
                    } ${index > 0 ? "border-t" : ""} ${
                      index === 1 ? "md:border-t-0" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <Icon
                        className="w-5 h-5 text-ink shrink-0"
                        strokeWidth={1.5}
                      />
                      <span className="text-base sm:text-lg font-medium text-ink uppercase tracking-wider">
                        {item.condition}
                      </span>
                    </div>

                    <span className="text-3xl sm:text-4xl font-sans font-medium tracking-tight text-ink leading-none mb-4">
                      {item.value}
                    </span>

                    <p className="text-base sm:text-lg text-ink-2 leading-relaxed">
                      {item.explanation}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* 6. Handoff to How it works */}
            <div className="mt-16 w-full max-w-2xl flex flex-col items-center text-center">
              <p className="body-lg-site text-ink text-2xl">
                That&apos;s why you shouldn&apos;t only take care of your
                glucose — you should take care of your entire health.
              </p>
              <p className="body-lg-site mt-3 text-ink font-medium">
                Bluepin is built to solve exactly this problem.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
