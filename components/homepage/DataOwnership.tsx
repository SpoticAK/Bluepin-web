import React from "react";
import Reveal from "./Reveal";

export default function DataOwnership() {
  return (
    <section
      id="privacy"
      className="w-full bg-paper-sunken border-t border-line"
    >
      <div className="container-site">
        <div className="container-prose section-pad flex flex-col items-center text-center">
          <Reveal className="flex flex-col items-center w-full">
            <span className="section-tag">
              Data &amp; privacy
            </span>

            {/* Section Headline & Copy */}
            <h2 className="h2-site">
              Your health data is yours.
            </h2>
            <p className="body-site mt-3.5 max-w-xl">
              Your health history is deeply personal. Your Health Memory belongs
              to you. Bluepin helps you build and understand it — but it is not
              our asset.
            </p>

            {/* Compact Typographic Triad — Restrained Heading Scale, NOT Giant Hero Typography */}
            <div className="my-10 sm:my-12 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-lg sm:text-xl md:text-2xl font-sans font-normal tracking-tight text-ink select-none">
              <span>Your data.</span>
              <span className="font-medium text-ink">
                Your Health Memory.
              </span>
              <span>Your control.</span>
            </div>

            {/* Supporting Trust Principles — Quiet Three-Column Editorial Layout */}

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-left border-t border-line pt-10 sm:pt-12">
              <div className="flex flex-col">
                <h3 className="text-sm font-sans font-semibold text-ink">
                  Protected
                </h3>
                <p className="body-site mt-2 text-[13.5px]">
                  Your health information is protected with strong security and
                  privacy controls.
                </p>
              </div>

              <div className="flex flex-col">
                <h3 className="text-sm font-sans font-semibold text-ink">
                  Private
                </h3>
                <p className="body-site mt-2 text-[13.5px]">
                  Your health information is protected from unauthorised access
                  and disclosure.
                </p>
              </div>

              <div className="flex flex-col">
                <h3 className="text-sm font-sans font-semibold text-ink">
                  Delete anytime
                </h3>
                <p className="body-site mt-2 text-[13.5px]">
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
