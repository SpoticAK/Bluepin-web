import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Brain,
  Camera,
  ChartLine,
  FileText,
  Heart,
} from "lucide-react";
import AmbientCurves from "@/components/homepage/AmbientCurves";
import GetStartedButton from "@/components/homepage/GetStartedButton";

export const metadata: Metadata = {
  title: "About Bluepin | AI Health Companion for Medical Reports & Glucose Tracking",
  description:
    "Bluepin is an AI-powered health companion built to help you record glucose readings, organize medical reports, analyze biomarkers, and understand how your organs are doing over time.",
  openGraph: {
    type: "website",
    url: "https://bluepin.in/about",
    title: "About Bluepin | AI Health Companion for Medical Reports & Glucose Tracking",
    description:
      "Bluepin is an AI-powered health companion built to help you record glucose readings, organize medical reports, analyze biomarkers, and understand how your organs are doing over time.",
    images: ["https://bluepin.in/Bluepin.png"],
  },
};

const pillars = [
  {
    icon: Activity,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    title: "Glucose Tracking",
    description:
      "Record your glucose daily by typing it in or snapping a photo of your glucometer. Watch trends with clean graphs, powered by Bluepin AI insights.",
  },
  {
    icon: FileText,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    title: "Health Canvas",
    description:
      "Upload your health and lab reports and let Bluepin extract your biomarkers, organize them by organ, and show how your body changes over time.",
  },
  {
    icon: ChartLine,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    title: "Biomarker Analysis",
    description:
      "Understand the numbers behind your reports — from HbA1c to kidney, liver, and cholesterol markers — so no lab result gets left unread.",
  },
  {
    icon: Brain,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    title: "Bluepin Intelligence",
    description:
      "AI-assisted insights that connect your history and flag worrying trends early, so you can discuss them with your doctor sooner.",
  },
  {
    icon: Heart,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    title: "Diabetes, beyond sugar",
    description:
      "Diabetes affects more than blood sugar. Bluepin helps you keep an eye on kidneys, liver, heart, eyes, and nerves — not just glucose.",
  },
  {
    icon: Camera,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    title: "Report photo upload",
    description:
      "No manual data entry marathons. Snap a photo of your lab report or glucometer and Bluepin reads and organizes it for you.",
  },
];

const differences = [
  {
    title: "Most apps only track your sugar",
    description:
      "They show you a number today and forget it tomorrow. Bluepin remembers your whole health history and connects the dots across months.",
    highlight: "Bluepin builds a continuous, long-term picture of your health.",
  },
  {
    title: "Reports get buried in PDFs",
    description:
      "Lab reports sit in downloads folders, unread. Bluepin extracts the biomarkers and keeps them organized where you can actually see changes.",
    highlight: "Bluepin turns static PDFs into living health trends.",
  },
  {
    title: "Numbers without meaning",
    description:
      "Raw numbers don't tell you if something matters. Bluepin Intelligence gives context, spots patterns, and tells you what may need attention.",
    highlight: "Bluepin helps you understand, not just collect.",
  },
];

const stats = [
  { value: "100%", label: "Privacy-first, no ads, no data selling" },
  { value: "2-3 months", label: "Context on your glucose via HbA1c tracking" },
  { value: "0", label: "Hidden charges to get started" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-theme-text font-sans antialiased selection:bg-purple-500/30 overflow-hidden relative z-0">
      <AmbientCurves />

      <main className="relative">
        {/* Hero */}
        <section className="pt-12 md:pt-16 pb-8 md:pb-12 px-6 md:px-12 max-w-8xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <p className="text-sm md:text-base font-poppins font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
              About Bluepin
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-display tracking-tight text-theme-text leading-[1.05] mb-6">
              We believe health apps were built to{" "}
              <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-violet-600 to-blue-600">
                track.
              </span>{" "}
              Bluepin was built to{" "}
              <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-green-500 to-emerald-500">
                understand.
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-display text-theme-text max-w-3xl leading-relaxed mb-10 font-medium">
              Bluepin is an AI-powered health companion that helps you record
              glucose readings, organize medical reports, analyze biomarkers, and
              see how your organs are doing over time — so nothing important slips
              through.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-10 md:py-16 bg-white/60 dark:bg-theme-card/60 backdrop-blur-2xl border-t border-theme-border/40 relative z-10">
          <div className="max-w-8xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-display tracking-tight text-theme-text mb-6 font-bold">
                Our mission
              </h2>
              <p className="text-lg md:text-xl text-theme-text-sec leading-relaxed font-display font-light">
                Diabetes is not a simple blood sugar problem. It silently affects
                your kidneys, liver, heart, eyes, and nerves over time. Yet most
                people only ever watch a single number on a glucometer.
              </p>
              <p className="text-lg md:text-xl text-theme-text-sec leading-relaxed font-display font-light mt-4">
                We started Bluepin to change that. By connecting your glucose,
                reports, and biomarkers over time, we help you (and your doctor)
                see the full picture — early enough to do something about it.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-theme-border/60 bg-white/40 dark:bg-theme-card/30 backdrop-blur-xl shadow-sm p-6 flex items-center gap-6"
                >
                  <div className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-emerald-500 shrink-0">
                    {stat.value}
                  </div>
                  <p className="text-theme-text-sec font-medium leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="py-10 md:py-16 bg-white/60 dark:bg-theme-card/60 backdrop-blur-2xl border-t border-theme-border/40 relative z-10">
          <div className="max-w-8xl mx-auto px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-display tracking-tight text-theme-text mb-6 font-bold">
              What Bluepin does
            </h2>
            <p className="text-xl md:text-2xl font-display text-theme-text max-w-3xl leading-relaxed mb-12 font-medium">
              One companion for your glucose, your reports, and the health they
              reveal.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-theme-border/60 bg-white/40 dark:bg-theme-card/30 backdrop-blur-xl shadow-sm p-7 flex flex-col gap-4"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${pillar.bg} ${pillar.color}`}
                  >
                    <pillar.icon className="w-6 h-6" strokeWidth={2.25} />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-theme-text">
                    {pillar.title}
                  </h3>
                  <p className="text-theme-text-sec leading-relaxed font-medium">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Differences */}
        <section className="py-10 md:py-16 bg-white/60 dark:bg-theme-card/60 backdrop-blur-2xl border-t border-theme-border/40 relative z-10">
          <div className="max-w-8xl mx-auto px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-display tracking-tight text-theme-text mb-12 font-bold">
              What&apos;s different?
            </h2>
            <div className="flex flex-col gap-4 max-w-5xl">
              {differences.map((diff, idx) => (
                <div
                  key={diff.title}
                  className="rounded-2xl border border-theme-border/60 bg-white/40 dark:bg-theme-card/30 backdrop-blur-xl shadow-sm p-6 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-8 items-start"
                >
                  <span className="text-sm font-poppins font-bold text-blue-500 shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-semibold text-theme-text mb-2">
                      {diff.title}
                    </h3>
                    <p className="text-theme-text-sec leading-relaxed font-medium mb-3">
                      {diff.description}
                    </p>
                    <p className="text-green-600 dark:text-green-400 font-semibold">
                      {diff.highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-10 md:py-16 bg-white/60 dark:bg-theme-card/60 backdrop-blur-2xl border-t border-theme-border/40 relative z-10">
          <div className="max-w-8xl mx-auto px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-display tracking-tight text-theme-text mb-6 font-bold">
              What we stand for
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  title: "Your data stays yours",
                  description:
                    "Health data is encrypted in transit and at rest, never sold, and never used to train public AI models. You can export or delete it anytime.",
                  accent: "text-blue-600 dark:text-blue-400",
                },
                {
                  title: "Honest about AI",
                  description:
                    "Bluepin Intelligence is informational, not a doctor. We never let AI pretend to be medical advice — you stay in charge of decisions.",
                  accent: "text-emerald-600 dark:text-emerald-400",
                },
                {
                  title: "Built for understanding",
                  description:
                    "Every feature exists to help you understand your health and have better conversations with your doctor — not to add another dashboard.",
                  accent: "text-violet-600 dark:text-violet-400",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-theme-border/60 bg-white/40 dark:bg-theme-card/30 backdrop-blur-xl shadow-sm p-7 flex flex-col gap-3"
                >
                  <ArrowRight className={`w-6 h-6 ${value.accent}`} strokeWidth={2.5} />
                  <h3 className="text-xl font-display font-semibold text-theme-text">
                    {value.title}
                  </h3>
                  <p className="text-theme-text-sec leading-relaxed font-medium">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 md:py-16 bg-white/60 dark:bg-theme-card/60 backdrop-blur-2xl border-t border-theme-border/40 relative z-10">
          <div className="max-w-8xl mx-auto px-6 md:px-12 text-left">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-display tracking-tight text-theme-text mb-6 font-bold">
                Start understanding your health today.
              </h2>
              <p className="text-lg md:text-xl text-theme-text-sec leading-relaxed font-display font-light mb-8">
                Free to get started. No credit card. Just your health, organized
                and explained.
              </p>
              <GetStartedButton />
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="text-blue-600 dark:text-blue-400 font-semibold inline-flex items-center gap-1.5 hover:gap-3 transition-all"
                >
                  Talk to us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}