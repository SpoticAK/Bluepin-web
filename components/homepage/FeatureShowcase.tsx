import FeatureCarousel from "./FeatureCarousel";
import GetStartedButton from "./GetStartedButton";
import glucose1 from "@/public/glucose1.webp";
import glucose2 from "@/public/glucose2.webp";
import glucose3 from "@/public/glucose3.webp";
import health1 from "@/public/health1.webp";
import health2 from "@/public/health2.webp";
import health3 from "@/public/health3.webp";

export default function FeatureShowcase() {
  return (
    <section className="pt-10  md:pt-16 pb-8 md:pb-12 px-6 md:px-12 max-w-8xl mx-auto relative z-10 border-t border-theme-border/40">
      <div className="mx-auto mb-16 md:mb-20 text-left">
        <h2 className="text-4xl md:text-5xl font-display tracking-tight text-theme-text font-bold mb-6">
          Why BluePin?
        </h2>
        <p className="text-xl md:text-2xl font-display text-theme-text max-w-3xl leading-relaxed font-medium">
          We connect your glucose and health data over time to help you stay
          ahead of its long-term impact on your organs! Because diabetes is not
          a simple blood sugar problem :)
        </p>
      </div>

      <div className="flex flex-col gap-16 md:gap-20 mx-auto">
        <FeatureCarousel
          title="Glucose Tracking"
          subtitle="Record your glucose daily manually or by uploading pics of your glucometers. See your glucose behaviour with graph trends and Bluepin-AI powered Insights :)"
          images={[glucose1, glucose2, glucose3]}
          iconColor="text-blue-500"
          titleGradient="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 pb-1"
          stepNumber={1}
          stepGradient="bg-gradient-to-br from-blue-500 to-cyan-400"
          glowColor="bg-emerald-500/20"
          buttonColor="text-blue-600 dark:text-blue-400"
          activeIndicatorColor="bg-blue-600"
        />

        <FeatureCarousel
          title="Health Canvas"
          subtitle="Upload your health reports and see how your organ health changes over time. Uncover patterns with BluePin Intelligence to know which areas need help :)"
          images={[health1, health2, health3]}
          iconColor="text-emerald-500"
          titleGradient="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300 pb-1"
          stepNumber={2}
          stepGradient="bg-gradient-to-br from-emerald-500 to-teal-400"
          glowColor="bg-emerald-500/20"
          buttonColor="text-emerald-600 dark:text-emerald-400"
          activeIndicatorColor="bg-emerald-500"
        />
      </div>
      <GetStartedButton />
    </section>
  );
}
