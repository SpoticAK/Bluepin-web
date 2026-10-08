import type { Metadata } from "next";
import { BeyondGlucose } from "@/components/homepage";

export const metadata: Metadata = {
  title: "Why Bluepin | Diabetes Doesn't Stop at Blood Sugar",
  description:
    "76.1% of people with diabetes had at least one complication. Bluepin helps you understand and manage the bigger picture of your health — beyond glucose.",
};

export default function WhyBluepinPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] dark:bg-[#121311] font-sans antialiased">
      <main className="w-full">
        <BeyondGlucose />
      </main>
    </div>
  );
}
