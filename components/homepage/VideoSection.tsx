import LoopAnimation from "./LoopAnimation";
import Reveal from "./Reveal";

export default function VideoSection() {
  return (
    <section className="w-full bg-paper">
      <div className="container-site pb-16 md:pb-20">
        <Reveal className="flex justify-center">
          <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border border-line bg-stone-100 dark:bg-stone-900 aspect-video relative flex items-center justify-center">
            {/* The animated webp element */}
            <LoopAnimation />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
