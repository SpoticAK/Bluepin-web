import {
  Hero,
  FeatureShowcase,
  MultiOrganProblem,
  HowItWorks,
  FAQSection,
} from "@/components/homepage";
import AmbientCurves from "@/components/homepage/AmbientCurves";

export default function WelcomeScreen() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-theme-text font-sans antialiased selection:bg-purple-500/30 overflow-hidden relative z-0">
      <AmbientCurves />
      <main>
        <Hero />
        <FeatureShowcase />
        <MultiOrganProblem />
        <HowItWorks />
        <FAQSection />
      </main>
    </div>
  );
}
