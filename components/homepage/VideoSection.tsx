import LoopAnimation from "./LoopAnimation";
import Reveal from "./Reveal";

export default function VideoSection() {
  return (
    <section className="w-full bg-[#FAFAF7] dark:bg-[#121311]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 pb-20 md:pb-28">
        <Reveal className="flex justify-center">
          <div className="w-full max-w-7xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border border-stone-200/50 dark:border-stone-800/50 bg-stone-100 dark:bg-stone-900 aspect-video relative flex items-center justify-center">
            {/* The animated webp element */}
            <LoopAnimation />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
