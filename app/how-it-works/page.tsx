import type { Metadata } from "next";
import { HowItWorks } from "@/components/homepage";

export const metadata: Metadata = {
  title: "How It Works | Bluepin — From Records to Health Insights",
  description:
    "Add your health data, build your health picture, find patterns across your health, and get personalised insights. See how Bluepin works.",
  alternates: {
    canonical: "https://bluepin.in/how-it-works",
  },
  openGraph: {
    type: "website",
    url: "https://bluepin.in/how-it-works",
    title: "How It Works | Bluepin — From Records to Health Insights",
    description:
      "Add your health data, build your health picture, find patterns across your health, and get personalised insights. See how Bluepin works.",
    images: ["https://bluepin.in/og-image.png"],
  },
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] dark:bg-[#121311] font-sans antialiased">
      <main className="w-full">
        <HowItWorks headingAsH1 />
      </main>
    </div>
  );
}
