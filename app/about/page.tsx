import type { Metadata } from "next";

import AmbientCurves from "@/components/homepage/AmbientCurves";

import {
  FeatureShowcase,
  MultiOrganProblem,
  HowItWorks,
} from "@/components/homepage";

export const metadata: Metadata = {
  title:
    "About Bluepin | AI Health Companion for Medical Reports & Glucose Tracking",
  description:
    "Bluepin is an AI-powered health companion built to help you record glucose readings, organize medical reports, analyze biomarkers, and understand how your organs are doing over time.",
  openGraph: {
    type: "website",
    url: "https://bluepin.in/about",
    title:
      "About Bluepin | AI Health Companion for Medical Reports & Glucose Tracking",
    description:
      "Bluepin is an AI-powered health companion built to help you record glucose readings, organize medical reports, analyze biomarkers, and understand how your organs are doing over time.",
    images: ["https://bluepin.in/Bluepin.png"],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-theme-text font-sans antialiased selection:bg-purple-500/30 overflow-hidden relative z-0">
      <AmbientCurves />

      <main className="relative">
        <FeatureShowcase />
        <MultiOrganProblem />
        <HowItWorks />
      </main>
    </div>
  );
}
