import {
  Hero,
  BeyondGlucose,
  HowItWorks,
  DataOwnership,
  FAQSection,
  VideoSection,
} from "@/components/homepage";

export default function WelcomeScreen() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans antialiased selection:bg-stone-200 dark:selection:bg-stone-700 selection:text-stone-900 dark:selection:text-stone-50">
      <main className="w-full">
        <Hero />
        <VideoSection />
        <BeyondGlucose />
        <HowItWorks />
        <DataOwnership />
        <FAQSection />
      </main>
    </div>
  );
}
