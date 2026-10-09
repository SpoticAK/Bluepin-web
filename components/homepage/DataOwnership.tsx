import React from "react";
import Reveal from "./Reveal";
import { EyeOff, ShieldCheck, Trash2 } from "lucide-react";

export default function DataOwnership() {
  return (
    <section
      id="privacy"
      className="w-full bg-paper-sunken border-t border-line"
    >
      <div className="container-site">
        <div className="section-pad flex flex-col items-center text-center">
          <Reveal className="flex flex-col items-center w-full">
            <span className="section-tag text-lg">Data &amp; privacy</span>

            {/* Section Headline & Copy */}
            <h2 className="h2-site text-4xl sm:text-5xl lg:text-6xl">
              Your health data is yours.
            </h2>
            <p className="body-lg-site mt-2.5 max-w-xl">
              Your health history is deeply personal. Your Health Memory belongs
              to you. Bluepin helps you build and understand it — but it is not
              our asset.
            </p>

            {/* Compact Typographic Triad — Restrained Heading Scale, NOT Giant Hero Typography */}
            <div className="my-12 sm:my-14 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-2xl sm:text-3xl md:text-4xl font-sans font-normal tracking-tight text-ink select-none">
              <span>Your data.</span>
              <span className="font-medium text-ink">Your Health Memory.</span>
              <span>Your control.</span>
            </div>

            {/* Supporting Trust Principles — Quiet Three-Column Editorial Layout */}

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10 text-left border-t border-line pt-10 sm:pt-12">
              <div className="flex flex-col">
                <span className="w-11 h-11 rounded-xl border border-line bg-white dark:bg-white/5 shadow-sm flex items-center justify-center mb-4">
                  <ShieldCheck
                    className="w-5 h-5 text-ink"
                    strokeWidth={1.75}
                  />
                </span>
                <h3 className="text-lg sm:text-xl font-sans font-semibold text-ink tracking-tight">
                  Protected
                </h3>
                <p className="mt-2 text-base sm:text-lg text-ink-2 leading-relaxed">
                  Your health information is protected with strong security and
                  privacy controls.
                </p>
              </div>

              <div className="flex flex-col">
                <span className="w-11 h-11 rounded-xl border border-line bg-white dark:bg-white/5 shadow-sm flex items-center justify-center mb-4">
                  <EyeOff className="w-5 h-5 text-ink" strokeWidth={1.75} />
                </span>
                <h3 className="text-lg sm:text-xl font-sans font-semibold text-ink tracking-tight">
                  Private
                </h3>
                <p className="mt-2 text-base sm:text-lg text-ink-2 leading-relaxed">
                  Your health information is protected from unauthorised access
                  and disclosure.
                </p>
              </div>

              <div className="flex flex-col">
                <span className="w-11 h-11 rounded-xl border border-line bg-white dark:bg-white/5 shadow-sm flex items-center justify-center mb-4">
                  <Trash2 className="w-5 h-5 text-ink" strokeWidth={1.75} />
                </span>
                <h3 className="text-lg sm:text-xl font-sans font-semibold text-ink tracking-tight">
                  Delete anytime
                </h3>
                <p className="mt-2 text-base sm:text-lg text-ink-2 leading-relaxed">
                  You can delete your account and erase your health data
                  whenever you choose.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
