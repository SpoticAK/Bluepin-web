import React from "react";
import Reveal from "./Reveal";

export default function HowItWorks() {
  return (
    <section className="w-full bg-[#FAFAF7] dark:bg-[#121311] border-t border-stone-200/70 dark:border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="max-w-4xl mx-auto py-18 sm:py-24 md:py-28 flex flex-col items-center">
          <Reveal className="flex flex-col items-center w-full">
          <div className="text-center max-w-xl mb-12 sm:mb-14">
            <span className="text-xs font-sans text-stone-500 dark:text-stone-400 mb-2 block font-normal">
              How it works
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-sans font-normal tracking-[-0.035em] text-stone-950 dark:text-stone-50 leading-[1.12]">
              How Bluepin works
            </h2>
            <p className="mt-2.5 text-base sm:text-lg text-stone-600 dark:text-stone-400 font-normal leading-relaxed tracking-[-0.01em]">
              From scattered health records to understanding what is changing in your body.
            </p>
          </div>
          </Reveal>

        <div className="w-full flex flex-col items-center gap-10 sm:gap-12 max-w-3xl">

          {/* STEP 1: Add your health data */}
          <Reveal className="w-full flex flex-col items-center text-center">
            <span className="w-6 h-6 rounded-full bg-stone-950 dark:bg-stone-50 text-white dark:text-stone-950 text-[11px] font-medium flex items-center justify-center mb-2.5 select-none">
              1
            </span>
            <h3 className="text-xl sm:text-2xl font-sans font-medium text-stone-950 dark:text-stone-50 tracking-[-0.025em]">
              Add your health data
            </h3>
            <p className="mt-1.5 text-sm sm:text-base text-stone-600 dark:text-stone-400 font-normal max-w-md leading-relaxed">
              Share your glucose readings and health reports with Bluepin.
            </p>

            <div className="w-full mt-6 flex items-center justify-center">
              <div className="relative w-full max-w-lg h-44 sm:h-48 flex items-center justify-between px-4 sm:px-8 select-none">

                <div className="relative w-36 h-36">
                  <div className="absolute top-1 left-2 px-2.5 py-1 rounded-md bg-white dark:bg-white/5 border border-stone-200/90 dark:border-white/10 shadow-[0_1px_2px_rgba(0,0,0,0.03)] -rotate-3">
                    <span className="text-[9px] text-stone-400 dark:text-stone-500 block font-mono">Fasting</span>
                    <span className="text-xs sm:text-[13px] font-semibold text-stone-950 dark:text-stone-100 font-sans tracking-tight">
                      128 <span className="text-[9px] font-normal text-stone-500 dark:text-stone-400">mg/dL</span>
                    </span>
                  </div>

                  <div className="absolute top-12 left-5 px-2.5 py-1 rounded-md bg-white dark:bg-white/5 border border-stone-200/90 dark:border-white/10 shadow-[0_1px_2px_rgba(0,0,0,0.03)] rotate-6 z-10">
                    <span className="text-[9px] text-stone-400 dark:text-stone-500 block font-mono">Post-lunch</span>
                    <span className="text-xs sm:text-[13px] font-semibold text-stone-950 dark:text-stone-100 font-sans tracking-tight">
                      142 <span className="text-[9px] font-normal text-stone-500 dark:text-stone-400">mg/dL</span>
                    </span>
                  </div>

                  <div className="absolute bottom-1 left-0 px-2 py-1 rounded-md bg-white dark:bg-white/5 border border-stone-200/90 dark:border-white/10 shadow-[0_1px_2px_rgba(0,0,0,0.03)] -rotate-6">
                    <span className="text-[9px] text-stone-400 dark:text-stone-500 block font-mono">Bedtime</span>
                    <span className="text-xs sm:text-[13px] font-semibold text-stone-950 dark:text-stone-100 font-sans tracking-tight">
                      116 <span className="text-[9px] font-normal text-stone-500 dark:text-stone-400">mg/dL</span>
                    </span>
                  </div>
                </div>

                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 460 200" fill="none">
                  <defs>
                    <marker id="arrow-left" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#78716c" />
                    </marker>
                    <marker id="arrow-right" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#78716c" />
                    </marker>
                  </defs>
                  <path d="M 142 85 C 175 85, 185 100, 204 100" stroke="#78716c" strokeWidth="1.25" markerEnd="url(#arrow-left)" />
                  <path d="M 318 92 C 285 92, 275 100, 256 100" stroke="#78716c" strokeWidth="1.25" markerEnd="url(#arrow-right)" />
                </svg>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-white/5 border border-stone-300 dark:border-white/15 shadow-sm flex items-center justify-center">
                    <span className="w-3 h-3 rounded-full bg-linear-to-tr from-blue-600 via-indigo-500 to-pink-500" />
                  </div>
                  <span className="text-[11px] font-medium text-stone-900 dark:text-stone-200 mt-1.5 font-sans tracking-tight">Bluepin</span>
                </div>

                <div className="relative w-36 h-40 flex items-center justify-center">
                  <div className="absolute top-1 right-4 w-26 h-34 rounded-sm bg-[#FAFAF8] dark:bg-white/5 border border-stone-200/90 dark:border-white/10 shadow-[0_1px_2px_rgba(0,0,0,0.02)] rotate-8 p-2 flex flex-col justify-between">
                    <div className="space-y-1.5 opacity-40">
                      <div className="w-8 h-1 bg-stone-500 rounded-xs" />
                      <div className="w-14 h-0.5 bg-stone-300 rounded-xs" />
                      <div className="w-10 h-0.5 bg-stone-300 rounded-xs" />
                    </div>
                    <span className="text-[8px] font-mono text-stone-400 dark:text-stone-500">Hospital lab</span>
                  </div>

                  <div className="absolute top-4 right-7 w-28 h-36 rounded-sm bg-white dark:bg-white/5 border border-stone-300 dark:border-white/15 shadow-[0_2px_4px_rgba(0,0,0,0.04)] -rotate-3 p-2.5 flex flex-col justify-between z-10">
                    <div>
                      <div className="flex items-center justify-between border-b border-stone-100 dark:border-white/10 pb-1 mb-1.5">
                        <span className="text-[8.5px] font-sans font-semibold text-stone-900 dark:text-stone-100">Lab Report</span>
                        <span className="text-[7.5px] font-mono text-stone-400 dark:text-stone-500">PDF</span>
                      </div>
                      <div className="space-y-1 text-[7.5px] text-stone-600 dark:text-stone-400 font-mono">
                        <div className="flex justify-between">
                          <span>Glucose Fasting</span>
                          <span className="font-semibold text-stone-950 dark:text-stone-100">126</span>
                        </div>
                        <div className="flex justify-between">
                          <span>HbA1c Glycated</span>
                          <span className="font-semibold text-stone-950 dark:text-stone-100">6.7%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Creatinine</span>
                          <span className="font-semibold text-stone-950 dark:text-stone-100">1.0</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-[7.5px] font-sans text-stone-400 dark:text-stone-500">Diagnostic PDF</span>
                  </div>
                </div>

              </div>
            </div>
          </Reveal>

          <div className="w-px h-8 bg-stone-300 dark:bg-white/15 relative flex items-center justify-center" aria-hidden="true">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-500" />
          </div>

          {/* STEP 2: Build your health picture */}
          <Reveal className="w-full flex flex-col items-center text-center">
            <span className="w-6 h-6 rounded-full bg-stone-950 dark:bg-stone-50 text-white dark:text-stone-950 text-[11px] font-medium flex items-center justify-center mb-2.5 select-none">
              2
            </span>
            <h3 className="text-xl sm:text-2xl font-sans font-medium text-stone-950 dark:text-stone-50 tracking-[-0.025em]">
              Build your health picture
            </h3>
            <p className="mt-1.5 text-sm sm:text-base text-stone-600 dark:text-stone-400 font-normal max-w-lg leading-relaxed">
              Bluepin extracts key biomarkers from your reports and brings them together with your glucose readings, tracking how they change over time.
            </p>

            <div className="w-full mt-6 flex items-center justify-center">
              <div className="w-full max-w-2xl px-2 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 select-none">

                <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                  <div className="relative w-20 sm:w-22 h-30 sm:h-34 rounded-sm bg-white dark:bg-white/5 border border-stone-200/90 dark:border-white/10 shadow-[0_1px_2px_rgba(0,0,0,0.02)] p-2 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between border-b border-stone-100 dark:border-white/10 pb-1 mb-1.5">
                        <span className="text-[10px] font-sans font-semibold text-stone-950 dark:text-stone-100">2024</span>
                        <span className="w-1 h-1 rounded-full bg-stone-300 dark:bg-stone-600" />
                      </div>
                      <div className="space-y-1 text-[8px] font-mono text-stone-400 dark:text-stone-500">
                        <div className="bg-stone-50 dark:bg-white/5 p-0.5 rounded-xs text-stone-700 dark:text-stone-300">HbA1c · 6.2%</div>
                        <div className="p-0.5">Creat. · 0.9</div>
                        <div className="p-0.5">Chol. · 178</div>
                      </div>
                    </div>
                    <span className="text-[7.5px] font-mono text-stone-300 dark:text-stone-600">Year 1</span>
                  </div>

                  <div className="relative w-20 sm:w-22 h-30 sm:h-34 rounded-sm bg-white dark:bg-white/5 border border-stone-200/90 dark:border-white/10 shadow-[0_1px_2px_rgba(0,0,0,0.02)] p-2 flex flex-col justify-between -translate-y-1">
                    <div>
                      <div className="flex items-center justify-between border-b border-stone-100 dark:border-white/10 pb-1 mb-1.5">
                        <span className="text-[10px] font-sans font-semibold text-stone-950 dark:text-stone-100">2025</span>
                        <span className="w-1 h-1 rounded-full bg-stone-300 dark:bg-stone-600" />
                      </div>
                      <div className="space-y-1 text-[8px] font-mono text-stone-400 dark:text-stone-500">
                        <div className="p-0.5">HbA1c · 6.5%</div>
                        <div className="bg-stone-50 dark:bg-white/5 p-0.5 rounded-xs text-stone-700 dark:text-stone-300">Creat. · 1.0</div>
                        <div className="p-0.5">ALT · 31</div>
                      </div>
                    </div>
                    <span className="text-[7.5px] font-mono text-stone-300 dark:text-stone-600">Year 2</span>
                  </div>

                  <div className="relative w-20 sm:w-22 h-30 sm:h-34 rounded-sm bg-white dark:bg-white/5 border-2 border-stone-900 dark:border-stone-100 shadow-[0_2px_6px_rgba(0,0,0,0.05)] p-2 flex flex-col justify-between -translate-y-2">
                    <div>
                      <div className="flex items-center justify-between border-b border-stone-100 dark:border-white/10 pb-1 mb-1.5">
                        <span className="text-[10px] font-sans font-bold text-stone-950 dark:text-stone-100">2026</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                      </div>
                      <div className="space-y-1 text-[8px] font-mono text-stone-700 dark:text-stone-300">
                        <div className="bg-stone-100/90 dark:bg-white/10 p-0.5 rounded-xs font-semibold text-stone-950 dark:text-stone-50">HbA1c · 6.7%</div>
                        <div className="p-0.5">Creat. · 1.1</div>
                        <div className="p-0.5">Chol. · 198</div>
                      </div>
                    </div>
                    <span className="text-[7.5px] font-mono text-stone-500 dark:text-stone-400 font-semibold">Latest</span>
                  </div>
                </div>

                <div className="hidden md:flex flex-col items-center justify-center text-stone-400 dark:text-stone-500">
                  <svg className="w-8 h-4" viewBox="0 0 32 16" fill="none">
                    <path d="M 0 8 L 26 8 M 20 4 L 26 8 L 20 12" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div className="w-full md:w-68 flex flex-col gap-2.5 text-left">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                      <span className="text-xs font-semibold text-stone-950 dark:text-stone-100 tracking-tight">HbA1c</span>
                    </div>
                    <div className="pl-3.5 flex items-center gap-1.5 font-mono text-[11px] text-stone-600 dark:text-stone-400">
                      <span>6.2%</span>
                      <span className="text-stone-300 dark:text-stone-600">→</span>
                      <span>6.5%</span>
                      <span className="text-stone-300 dark:text-stone-600">→</span>
                      <span className="font-semibold text-stone-950 dark:text-stone-50">6.7%</span>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span className="text-xs font-semibold text-stone-950 dark:text-stone-100 tracking-tight">Creatinine</span>
                    </div>
                    <div className="pl-3.5 flex items-center gap-1.5 font-mono text-[11px] text-stone-600 dark:text-stone-400">
                      <span>0.9</span>
                      <span className="text-stone-300 dark:text-stone-600">→</span>
                      <span>1.0</span>
                      <span className="text-stone-300 dark:text-stone-600">→</span>
                      <span className="font-semibold text-stone-950 dark:text-stone-50">1.1 mg/dL</span>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                      <span className="text-xs font-semibold text-stone-950 dark:text-stone-100 tracking-tight">Cholesterol</span>
                    </div>
                    <div className="pl-3.5 flex items-center gap-1.5 font-mono text-[11px] text-stone-600 dark:text-stone-400">
                      <span>178</span>
                      <span className="text-stone-300 dark:text-stone-600">→</span>
                      <span>184</span>
                      <span className="text-stone-300 dark:text-stone-600">→</span>
                      <span className="font-semibold text-stone-950 dark:text-stone-50">198 mg/dL</span>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                      <span className="text-xs font-semibold text-stone-950 dark:text-stone-100 tracking-tight">ALT (Liver)</span>
                    </div>
                    <div className="pl-3.5 flex items-center gap-1.5 font-mono text-[11px] text-stone-600 dark:text-stone-400">
                      <span>28</span>
                      <span className="text-stone-300 dark:text-stone-600">→</span>
                      <span>31</span>
                      <span className="text-stone-300 dark:text-stone-600">→</span>
                      <span className="font-semibold text-stone-950 dark:text-stone-50">34 U/L</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </Reveal>

          <div className="w-px h-8 bg-stone-300 dark:bg-white/15 relative flex items-center justify-center" aria-hidden="true">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-500" />
          </div>

          {/* STEP 3: Find patterns across your health */}
          <Reveal className="w-full flex flex-col items-center text-center">
            <span className="w-6 h-6 rounded-full bg-stone-950 dark:bg-stone-50 text-white dark:text-stone-950 text-[11px] font-medium flex items-center justify-center mb-2.5 select-none">
              3
            </span>
            <h3 className="text-xl sm:text-2xl font-sans font-medium text-stone-950 dark:text-stone-50 tracking-[-0.025em]">
              Find patterns across your health
            </h3>
            <p className="mt-1.5 text-sm sm:text-base text-stone-600 dark:text-stone-400 font-normal max-w-lg leading-relaxed">
              Bluepin analyses these changes together to identify trends and relationships that can be difficult to spot on your own.
            </p>

            <div className="w-full mt-6 flex items-center justify-center select-none">
              <div className="w-full max-w-xl py-2 px-4 sm:px-6">
                <svg viewBox="0 0 460 145" className="w-full h-auto" fill="none" role="img" aria-label="Trend lines showing HbA1c and creatinine rising while eGFR falls from 2024 to 2026">
                  <line x1="120" y1="130" x2="420" y2="130" stroke="#e7e5e4" strokeWidth="1" />
                  <text x="120" y="142" className="fill-stone-400 text-[9.5px] font-mono">2024</text>
                  <text x="270" y="142" className="fill-stone-400 text-[9.5px] font-mono">2025</text>
                  <text x="410" y="142" className="fill-stone-400 text-[9.5px] font-mono">2026</text>

                  <line x1="270" y1="26" x2="270" y2="110" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="410" y1="16" x2="410" y2="100" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />

                  <g>
                    <text x="10" y="22" className="fill-indigo-600 text-[11px] font-sans font-medium">HbA1c ↗</text>
                    <path d="M 120 34 Q 210 28, 270 26 T 410 16" stroke="#4f46e5" strokeWidth="2" />
                    <circle cx="120" cy="34" r="2.5" className="fill-indigo-600" />
                    <circle cx="270" cy="26" r="2.5" className="fill-indigo-600" />
                    <circle cx="410" cy="16" r="3" className="fill-indigo-600" />
                  </g>

                  <g>
                    <text x="10" y="60" className="fill-amber-600 text-[11px] font-sans font-medium">eGFR ↘</text>
                    <path d="M 120 50 Q 210 58, 270 66 T 410 80" stroke="#d97706" strokeWidth="2" strokeDasharray="4 4" />
                    <circle cx="120" cy="50" r="2.5" className="fill-amber-600" />
                    <circle cx="270" cy="66" r="2.5" className="fill-amber-600" />
                    <circle cx="410" cy="80" r="3" className="fill-amber-600" />
                  </g>

                  <g>
                    <text x="10" y="104" className="fill-rose-600 text-[11px] font-sans font-medium">Creatinine ↗</text>
                    <path d="M 120 118 Q 210 114, 270 110 T 410 100" stroke="#e11d48" strokeWidth="2" />
                    <circle cx="120" cy="118" r="2.5" className="fill-rose-600" />
                    <circle cx="270" cy="110" r="2.5" className="fill-rose-600" />
                    <circle cx="410" cy="100" r="3" className="fill-rose-600" />
                  </g>
                </svg>
              </div>
            </div>
          </Reveal>

          <div className="w-px h-8 bg-stone-300 dark:bg-white/15 relative flex items-center justify-center" aria-hidden="true">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-500" />
          </div>

          {/* STEP 4: Get personalised insights */}
          <Reveal className="w-full flex flex-col items-center text-center">
            <span className="w-6 h-6 rounded-full bg-stone-950 dark:bg-stone-50 text-white dark:text-stone-950 text-[11px] font-medium flex items-center justify-center mb-2.5 select-none">
              4
            </span>
            <h3 className="text-xl sm:text-2xl font-sans font-medium text-stone-950 dark:text-stone-50 tracking-[-0.025em]">
              Get personalised insights
            </h3>
            <p className="mt-1.5 text-sm sm:text-base text-stone-600 dark:text-stone-400 font-normal max-w-lg leading-relaxed">
              Bluepin turns those patterns into clear, personalised insights to help you understand what is changing in your health.
            </p>

            <div className="w-full mt-6 max-w-xl text-left">
              <div className="flex items-start gap-3.5 py-1">
                <span className="w-3.5 h-3.5 rounded-full bg-linear-to-tr from-purple-600 via-pink-500 to-rose-400 shrink-0 mt-1 shadow-[0_0_10px_rgba(217,70,239,0.3)]" />
                <p className="text-base sm:text-lg text-stone-800 dark:text-stone-200 font-normal leading-[1.58] tracking-[-0.012em]">
                  Your kidney filtration rate (eGFR) has decreased by{" "}
                  <strong className="font-semibold text-stone-950 dark:text-stone-50">23%</strong> over
                  the past 3 years. Your latest HbA1c is{" "}
                  <strong className="font-semibold text-stone-950 dark:text-stone-50">6.7%</strong>,
                  which is in the diabetes range. We recommend discussing these
                  changes with your doctor.
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
