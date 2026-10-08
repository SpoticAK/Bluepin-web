import { ArrowRight } from "lucide-react";
import GetStartedButton from "./GetStartedButton";

export default function HowItWorksClassic() {
  return (
    <section className="py-10 md:py-16 bg-white/60 dark:bg-theme-card/60 backdrop-blur-2xl border-t border-theme-border/40 relative z-10">
      <div className="max-w-8xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-display tracking-tight text-theme-text mb-16 text-left font-bold mx-auto">
          How BluePin works
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl md:text-2xl font-display text-theme-text font-medium flex items-center">
              <div className="flex items-center text-blue-500 mr-2">
                <span className="font-bold">01</span>
                <ArrowRight className="w-5 h-5 ml-1" strokeWidth={2.5} />
              </div>
              Add your health data
            </h3>
            <p className="text-theme-text-sec text-lg leading-relaxed font-display font-light">
              Glucose readings, blood reports, HbA1c and more.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl md:text-2xl font-display text-theme-text font-medium flex items-center">
              <div className="flex items-center text-emerald-500 mr-2">
                <span className="font-bold">02</span>
                <ArrowRight className="w-5 h-5 ml-1" strokeWidth={2.5} />
              </div>
              Build your health history
            </h3>
            <p className="text-theme-text-sec text-lg leading-relaxed font-display font-light">
              BluePin brings your data together over time.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl md:text-2xl font-display text-theme-text font-medium flex items-center">
              <div className="flex items-center text-violet-500 mr-2">
                <span className="font-bold">03</span>
                <ArrowRight className="w-5 h-5 ml-1" strokeWidth={2.5} />
              </div>
              Discover trends & patterns
            </h3>
            <p className="text-theme-text-sec text-lg leading-relaxed font-display font-light">
              BluePin Intelligence connects the dots across your history.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl md:text-2xl font-display text-theme-text font-medium flex items-center">
              <div className="flex items-center text-amber-500 mr-2">
                <span className="font-bold">04</span>
                <ArrowRight className="w-5 h-5 ml-1" strokeWidth={2.5} />
              </div>
              Get meaningful insights
            </h3>
            <p className="text-theme-text-sec text-lg leading-relaxed font-display font-light">
              Understand what&apos;s changing and where your health may need
              attention.
            </p>
          </div>
        </div>
        <GetStartedButton />
      </div>
    </section>
  );
}
