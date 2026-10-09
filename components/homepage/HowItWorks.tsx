import React from "react";
import Reveal from "./Reveal";
import YearDeck from "./YearDeck";

export default function HowItWorks() {
  return (
    <section className="w-full bg-paper border-t border-line overflow-hidden">
      <div className="container-site">
        <div className="container-prose section-pad flex flex-col items-center">
          <Reveal className="flex flex-col items-center w-full">
            <div className="text-center max-w-xl mb-12 sm:mb-14">
              <span className="section-tag text-lg">How it works</span>
              <h2 className="h2-site text-4xl sm:text-5xl lg:text-6xl">
                How Bluepin works
              </h2>
              <p className="body-lg-site mt-2.5">
                From scattered health records to understanding what is changing
                in your body.
              </p>
            </div>
          </Reveal>

          <div className="w-full flex flex-col items-center gap-4 sm:gap-6 max-w-3xl">
            {/* STEP 1: Add your health data */}
            <Reveal className="w-full flex flex-col items-center text-center">
              <span className="w-6 h-6 rounded-full bg-ink text-paper text-[11px] font-medium flex items-center justify-center mb-2.5 select-none">
                1
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-medium text-ink tracking-tight">
                Add your health data
              </h3>
              <p className="body-site mt-1.5 max-w-md text-base md:text-lg">
                Share your glucose readings and health reports with Bluepin.
              </p>

              <div className="w-full mt-8 flex items-center justify-center">
                <div className="w-full max-w-2xl grid grid-cols-[1fr_auto_1fr] sm:grid-cols-[1fr_auto_auto_auto_1fr] items-center gap-1 sm:gap-2 px-1 sm:px-4 select-none">
                  {/* Left: evenly stacked reading pills */}
                  <div className="flex flex-col items-center justify-center gap-3 sm:gap-5">
                    <div className="w-36 sm:w-52 px-3 py-2 sm:px-5 sm:py-3 rounded-xl bg-white dark:bg-white/5 border border-stone-200/90 dark:border-white/10 shadow-[0_1px_2px_rgba(0,0,0,0.03)] -rotate-3">
                      <span className="text-[11px] sm:text-sm text-stone-400 dark:text-stone-500 block font-mono">
                        Fasting
                      </span>
                      <span className="text-lg sm:text-3xl font-semibold text-stone-950 dark:text-stone-100 font-sans tracking-tight">
                        128{" "}
                        <span className="text-[10px] sm:text-sm font-normal text-stone-500 dark:text-stone-400">
                          mg/dL
                        </span>
                      </span>
                    </div>

                    <div className="w-36 sm:w-52 px-3 py-2 sm:px-5 sm:py-3 rounded-xl bg-white dark:bg-white/5 border border-stone-200/90 dark:border-white/10 shadow-[0_1px_2px_rgba(0,0,0,0.03)] rotate-3">
                      <span className="text-[11px] sm:text-sm text-stone-400 dark:text-stone-500 block font-mono">
                        Post-lunch
                      </span>
                      <span className="text-lg sm:text-3xl font-semibold text-stone-950 dark:text-stone-100 font-sans tracking-tight">
                        142{" "}
                        <span className="text-[10px] sm:text-sm font-normal text-stone-500 dark:text-stone-400">
                          mg/dL
                        </span>
                      </span>
                    </div>

                    <div className="w-36 sm:w-52 px-3 py-2 sm:px-5 sm:py-3 rounded-xl bg-white dark:bg-white/5 border border-stone-200/90 dark:border-white/10 shadow-[0_1px_2px_rgba(0,0,0,0.03)] -rotate-3">
                      <span className="text-[11px] sm:text-sm text-stone-400 dark:text-stone-500 block font-mono">
                        Bedtime
                      </span>
                      <span className="text-lg sm:text-3xl font-semibold text-stone-950 dark:text-stone-100 font-sans tracking-tight">
                        116{" "}
                        <span className="text-[10px] sm:text-sm font-normal text-stone-500 dark:text-stone-400">
                          mg/dL
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Left connector arrow (in-flow, hidden on small screens like Step 2) */}
                  <div className="hidden sm:flex flex-col items-center justify-center text-stone-400 dark:text-stone-500">
                    <svg className="w-10 h-4" viewBox="0 0 32 16" fill="none">
                      <path
                        d="M 0 8 L 26 8 M 20 4 L 26 8 L 20 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Center: smaller Bluepin node */}
                  <div className="flex flex-col items-center">
                    <div className="group size-5 md:size-15 rounded-full bg-white dark:bg-white/5 border border-stone-300 dark:border-white/15 shadow-sm flex items-center justify-center">
                      <span className="size-1 md:size-5 rounded-full bg-[#84A2F0] group-hover:bg-[#F476C0]" />
                    </div>
                    <span className="text-xs sm:text-base font-medium text-stone-900 dark:text-stone-200 mt-2 font-sans tracking-tight">
                      Bluepin
                    </span>
                  </div>

                  {/* Right connector arrow (mirrored, hidden on small screens) */}
                  <div className="hidden sm:flex flex-col items-center justify-center text-stone-400 dark:text-stone-500">
                    <svg className="w-10 h-4" viewBox="0 0 32 16" fill="none">
                      <path
                        d="M 32 8 L 6 8 M 12 4 L 6 8 L 12 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Right: centered lab report, pushed away from center */}
                  <div className="flex items-center justify-center">
                    <div className="relative w-36 h-56 sm:w-52 sm:h-72">
                      <div className="absolute top-0 right-0 w-32 h-48 sm:w-48 sm:h-64 rounded-md sm:rounded-lg bg-[#FAFAF8] dark:bg-white/5 border border-stone-200/90 dark:border-white/10 shadow-[0_1px_2px_rgba(0,0,0,0.02)] rotate-6 p-2.5 sm:p-4 flex flex-col justify-between">
                        <div className="space-y-2 sm:space-y-3 opacity-40">
                          <div className="w-10 h-1.5 sm:w-16 sm:h-2 bg-stone-500 rounded-xs" />
                          <div className="w-20 h-1 sm:w-32 sm:h-1.5 bg-stone-300 rounded-xs" />
                          <div className="w-14 h-1 sm:w-24 sm:h-1.5 bg-stone-300 rounded-xs" />
                        </div>
                        <span className="text-[9px] sm:text-sm font-mono text-stone-400 dark:text-stone-500">
                          Hospital lab
                        </span>
                      </div>

                      <div className="absolute top-5 sm:top-6 right-4 sm:right-5 w-32 h-48 sm:w-48 sm:h-64 rounded-md sm:rounded-lg bg-white dark:bg-white/5 border border-stone-300 dark:border-white/15 shadow-[0_2px_4px_rgba(0,0,0,0.04)] -rotate-3 p-3 sm:p-4 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between border-b border-stone-100 dark:border-white/10 pb-1.5 mb-2 sm:pb-2 sm:mb-3">
                            <span className="text-[11px] sm:text-base font-sans font-semibold text-stone-900 dark:text-stone-100">
                              Lab Report
                            </span>
                            <span className="text-[9px] sm:text-xs font-mono text-stone-400 dark:text-stone-500">
                              PDF
                            </span>
                          </div>
                          <div className="space-y-1 sm:space-y-2 text-[9px] sm:text-[13px] text-stone-600 dark:text-stone-400 font-mono">
                            <div className="flex justify-between gap-2">
                              <span>Glucose Fasting</span>
                              <span className="font-semibold text-stone-950 dark:text-stone-100">
                                126
                              </span>
                            </div>
                            <div className="flex justify-between gap-2">
                              <span>HbA1c Glycated</span>
                              <span className="font-semibold text-stone-950 dark:text-stone-100">
                                6.7%
                              </span>
                            </div>
                            <div className="flex justify-between gap-2">
                              <span>Creatinine</span>
                              <span className="font-semibold text-stone-950 dark:text-stone-100">
                                1.0
                              </span>
                            </div>
                          </div>
                        </div>
                        <span className="text-[9px] sm:text-xs font-sans text-stone-400 dark:text-stone-500">
                          Diagnostic PDF
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <div
              className="h-14 w-6 flex flex-col items-center justify-center"
              aria-hidden="true"
            >
              <span className="w-0.5 h-9 rounded-full bg-stone-300 dark:bg-stone-600" />
              <svg
                className="w-3.5 h-3.5 -mt-1 text-stone-400 dark:text-stone-500"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M 2.5 4.5 L 6 8 L 9.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* STEP 2: Build your health picture */}
            <Reveal className="w-full flex flex-col items-center text-center">
              <span className="w-6 h-6 rounded-full bg-ink text-paper text-[11px] font-medium flex items-center justify-center mb-2.5 select-none">
                2
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-medium text-ink tracking-tight">
                Build your health picture
              </h3>
              <p className="body-site mt-1.5 max-w-lg text-base md:text-lg">
                Bluepin extracts key biomarkers from your reports and brings
                them together with your glucose readings, tracking how they
                change over time.
              </p>

              <div className="w-full mt-8 flex items-center justify-center">
                <div className="w-full max-w-2xl px-2 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center justify-items-center gap-8 md:gap-4 select-none">
                  {/* Left: rotating deck of year cards */}
                  <div className="flex items-center justify-center">
                    <YearDeck />
                  </div>

                  <div className="hidden md:flex flex-col items-center justify-center text-stone-400 dark:text-stone-500">
                    <svg className="w-12 h-6" viewBox="0 0 32 16" fill="none">
                      <path
                        d="M 0 8 L 26 8 M 20 4 L 26 8 L 20 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="w-full max-w-64 md:w-80 flex flex-col gap-4 text-left justify-self-center">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shrink-0" />
                        <span className="text-base sm:text-lg font-semibold text-stone-950 dark:text-stone-100 tracking-tight">
                          HbA1c
                        </span>
                      </div>
                      <div className="pl-5 flex items-center gap-2 font-mono text-sm sm:text-base text-stone-600 dark:text-stone-400">
                        <span>6.2%</span>
                        <span className="text-stone-300 dark:text-stone-600">
                          →
                        </span>
                        <span>6.5%</span>
                        <span className="text-stone-300 dark:text-stone-600">
                          →
                        </span>
                        <span className="font-semibold text-stone-950 dark:text-stone-50">
                          6.7%
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
                        <span className="text-base sm:text-lg font-semibold text-stone-950 dark:text-stone-100 tracking-tight">
                          Creatinine
                        </span>
                      </div>
                      <div className="pl-5 flex items-center gap-2 font-mono text-sm sm:text-base text-stone-600 dark:text-stone-400">
                        <span>0.9</span>
                        <span className="text-stone-300 dark:text-stone-600">
                          →
                        </span>
                        <span>1.0</span>
                        <span className="text-stone-300 dark:text-stone-600">
                          →
                        </span>
                        <span className="font-semibold text-stone-950 dark:text-stone-50">
                          1.1 mg/dL
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0" />
                        <span className="text-base sm:text-lg font-semibold text-stone-950 dark:text-stone-100 tracking-tight">
                          Cholesterol
                        </span>
                      </div>
                      <div className="pl-5 flex items-center gap-2 font-mono text-sm sm:text-base text-stone-600 dark:text-stone-400">
                        <span>178</span>
                        <span className="text-stone-300 dark:text-stone-600">
                          →
                        </span>
                        <span>184</span>
                        <span className="text-stone-300 dark:text-stone-600">
                          →
                        </span>
                        <span className="font-semibold text-stone-950 dark:text-stone-50">
                          198 mg/dL
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-teal-500 shrink-0" />
                        <span className="text-base sm:text-lg font-semibold text-stone-950 dark:text-stone-100 tracking-tight">
                          ALT (Liver)
                        </span>
                      </div>
                      <div className="pl-5 flex items-center gap-2 font-mono text-sm sm:text-base text-stone-600 dark:text-stone-400">
                        <span>28</span>
                        <span className="text-stone-300 dark:text-stone-600">
                          →
                        </span>
                        <span>31</span>
                        <span className="text-stone-300 dark:text-stone-600">
                          →
                        </span>
                        <span className="font-semibold text-stone-950 dark:text-stone-50">
                          34 U/L
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <div
              className="h-14 w-6 flex flex-col items-center justify-center"
              aria-hidden="true"
            >
              <span className="w-0.5 h-9 rounded-full bg-stone-300 dark:bg-stone-600" />
              <svg
                className="w-3.5 h-3.5 -mt-1 text-stone-400 dark:text-stone-500"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M 2.5 4.5 L 6 8 L 9.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* STEP 3: Find patterns across your health */}
            <Reveal className="w-full flex flex-col items-center text-center">
              <span className="w-6 h-6 rounded-full bg-ink text-paper text-[11px] font-medium flex items-center justify-center mb-2.5 select-none">
                3
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-medium text-ink tracking-tight">
                Find patterns across your health
              </h3>
              <p className="body-site mt-1.5 max-w-lg text-base md:text-lg">
                Bluepin analyses these changes together to identify trends and
                relationships that can be difficult to spot on your own.
              </p>

              <div className="w-full mt-8 flex items-center justify-center select-none">
                <div className="w-full max-w-2xl py-3 px-4 sm:px-6">
                  <svg
                    viewBox="0 0 460 145"
                    className="w-full h-auto"
                    fill="none"
                    role="img"
                    aria-label="Trend lines showing HbA1c and creatinine rising while eGFR falls from 2024 to 2026"
                  >
                    <line
                      x1="120"
                      y1="130"
                      x2="420"
                      y2="130"
                      stroke="#e7e5e4"
                      strokeWidth="1.25"
                    />
                    <text
                      x="120"
                      y="142"
                      className="fill-stone-400 text-[11px] font-mono"
                    >
                      2024
                    </text>
                    <text
                      x="270"
                      y="142"
                      className="fill-stone-400 text-[11px] font-mono"
                    >
                      2025
                    </text>
                    <text
                      x="410"
                      y="142"
                      className="fill-stone-400 text-[11px] font-mono"
                    >
                      2026
                    </text>

                    <line
                      x1="270"
                      y1="26"
                      x2="270"
                      y2="110"
                      stroke="#cbd5e1"
                      strokeWidth="1.25"
                      strokeDasharray="3 3"
                    />
                    <line
                      x1="410"
                      y1="16"
                      x2="410"
                      y2="100"
                      stroke="#cbd5e1"
                      strokeWidth="1.25"
                      strokeDasharray="3 3"
                    />

                    <g>
                      <text
                        x="10"
                        y="22"
                        className="fill-indigo-600 text-[13px] font-sans font-medium"
                      >
                        HbA1c ↗
                      </text>
                      <path
                        d="M 120 34 Q 210 28, 270 26 T 410 16"
                        stroke="#4f46e5"
                        strokeWidth="2.5"
                      />
                      <circle
                        cx="120"
                        cy="34"
                        r="3"
                        className="fill-indigo-600"
                      />
                      <circle
                        cx="270"
                        cy="26"
                        r="3"
                        className="fill-indigo-600"
                      />
                      <circle
                        cx="410"
                        cy="16"
                        r="3.5"
                        className="fill-indigo-600"
                      />
                    </g>

                    <g>
                      <text
                        x="10"
                        y="60"
                        className="fill-amber-600 text-[13px] font-sans font-medium"
                      >
                        eGFR ↘
                      </text>
                      <path
                        d="M 120 50 Q 210 58, 270 66 T 410 80"
                        stroke="#d97706"
                        strokeWidth="2.5"
                        strokeDasharray="4 4"
                      />
                      <circle
                        cx="120"
                        cy="50"
                        r="3"
                        className="fill-amber-600"
                      />
                      <circle
                        cx="270"
                        cy="66"
                        r="3"
                        className="fill-amber-600"
                      />
                      <circle
                        cx="410"
                        cy="80"
                        r="3.5"
                        className="fill-amber-600"
                      />
                    </g>

                    <g>
                      <text
                        x="10"
                        y="104"
                        className="fill-rose-600 text-[13px] font-sans font-medium"
                      >
                        Creatinine ↗
                      </text>
                      <path
                        d="M 120 118 Q 210 114, 270 110 T 410 100"
                        stroke="#e11d48"
                        strokeWidth="2.5"
                      />
                      <circle
                        cx="120"
                        cy="118"
                        r="3"
                        className="fill-rose-600"
                      />
                      <circle
                        cx="270"
                        cy="110"
                        r="3"
                        className="fill-rose-600"
                      />
                      <circle
                        cx="410"
                        cy="100"
                        r="3.5"
                        className="fill-rose-600"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </Reveal>

            <div
              className="h-14 w-6 flex flex-col items-center justify-center"
              aria-hidden="true"
            >
              <span className="w-0.5 h-9 rounded-full bg-stone-300 dark:bg-stone-600" />
              <svg
                className="w-3.5 h-3.5 -mt-1 text-stone-400 dark:text-stone-500"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M 2.5 4.5 L 6 8 L 9.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* STEP 4: Get personalised insights */}
            <Reveal className="w-full flex flex-col items-center text-center">
              <span className="w-6 h-6 rounded-full bg-ink text-paper text-[11px] font-medium flex items-center justify-center mb-2.5 select-none">
                4
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-medium text-ink tracking-tight">
                Get personalised insights
              </h3>
              <p className="body-site mt-1.5 max-w-lg text-base md:text-lg">
                Bluepin turns those patterns into clear, personalised insights
                to help you understand what is changing in your health.
              </p>

              <div className="w-full mt-6 max-w-xl text-left">
                <div className="flex items-start gap-3.5 py-1">
                  <span className="w-3.5 h-3.5 rounded-full bg-whatsapp shrink-0 mt-1" />
                  <p className="body-lg-site text-ink">
                    Your kidney filtration rate (eGFR) has decreased by{" "}
                    <strong className="font-semibold text-ink">23%</strong> over
                    the past 3 years. Your latest HbA1c is{" "}
                    <strong className="font-semibold text-ink">6.7%</strong>,
                    which is in the diabetes range. We recommend discussing
                    these changes with your doctor.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
