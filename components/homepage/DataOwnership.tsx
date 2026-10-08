import React from "react";
import Reveal from "./Reveal";

export default function DataOwnership() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 border-t border-stone-200/80 dark:border-white/10 bg-[#F6F5F0] dark:bg-[#171816]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
        <Reveal className="flex flex-col items-center w-full max-w-3xl">
          <span className="text-sm font-sans text-stone-500 dark:text-stone-400 mb-2 block font-normal">
            Data &amp; privacy
          </span>

          <h2 className="text-3xl sm:text-4xl font-sans font-normal tracking-[-0.035em] text-stone-950 dark:text-stone-50 leading-[1.15] text-balance">
            Your health data is yours.
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-stone-600 dark:text-stone-400 font-normal leading-[1.6] tracking-[-0.01em] max-w-xl">
            Your health history is deeply personal. Your Health Memory belongs to
            you. Bluepin helps you build and understand it — but it is not our
            asset.
          </p>

          <div className="my-10 sm:my-12 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xl sm:text-2xl font-sans font-normal tracking-[-0.025em] text-stone-900 dark:text-stone-100 select-none">
            <span>Your data.</span>
            <span className="hidden sm:inline text-stone-300 dark:text-stone-600">·</span>
            <span className="font-medium text-stone-950 dark:text-stone-50">
              Your Health Memory.
            </span>
            <span className="hidden sm:inline text-stone-300 dark:text-stone-600">·</span>
            <span>Your control.</span>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-left border-t border-stone-200/80 dark:border-white/10 pt-10 sm:pt-12">
            <div className="flex flex-col">
              <h3 className="text-base font-sans font-semibold text-stone-950 dark:text-stone-50">
                Protected
              </h3>
              <p className="mt-2 text-sm sm:text-[15px] text-stone-600 dark:text-stone-400 font-normal leading-relaxed">
                Your health information is protected with strong security and
                privacy controls.
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="text-base font-sans font-semibold text-stone-950 dark:text-stone-50">
                Private
              </h3>
              <p className="mt-2 text-sm sm:text-[15px] text-stone-600 dark:text-stone-400 font-normal leading-relaxed">
                Your health information is protected from unauthorised access and
                disclosure.
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="text-base font-sans font-semibold text-stone-950 dark:text-stone-50">
                Delete anytime
              </h3>
              <p className="mt-2 text-sm sm:text-[15px] text-stone-600 dark:text-stone-400 font-normal leading-relaxed">
                You can delete your account and erase your health data whenever
                you choose.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
