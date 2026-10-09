import type { Metadata } from "next";

import AmbientCurves from "@/components/homepage/AmbientCurves";

import {
  FeatureShowcase,
  MultiOrganProblem,
  HowItWorksClassic,
} from "@/components/homepage";

export const metadata: Metadata = {
  title: "About Bluepin | AI Health Companion for Diabetes",
  description:
    "Bluepin is an AI-powered health companion that records glucose, organises medical reports, analyses biomarkers and tracks organ health.",
  alternates: {
    canonical: "https://bluepin.in/about",
  },
  openGraph: {
    type: "website",
    url: "https://bluepin.in/about",
    title: "About Bluepin | AI Health Companion for Diabetes",
    description:
      "Bluepin is an AI-powered health companion that records glucose, organises medical reports, analyses biomarkers and tracks organ health.",
    images: ["https://bluepin.in/og-image.png"],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-theme-text font-sans antialiased selection:bg-purple-500/30 overflow-hidden relative z-0">
      <AmbientCurves />

      <main className="relative">
        <FeatureShowcase headingAsH1 />
        <MultiOrganProblem />
        <HowItWorksClassic />
      </main>
    </div>
  );
}
