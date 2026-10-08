import Link from "next/link";
import Reveal from "./Reveal";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.893a11.821 11.821 0 00-3.48-8.414z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="w-full bg-[#FAFAF7] dark:bg-[#121311]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-24 sm:pt-32 md:pt-40 pb-20 md:pb-28 flex flex-col items-center text-center">
        <Reveal className="flex flex-col items-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-sans font-normal tracking-[-0.038em] text-stone-950 dark:text-stone-50 leading-[1.07] max-w-3xl text-balance">
            Manage diabetes the smarter way.
          </h1>

          <p className="mt-7 md:mt-8 text-lg sm:text-xl md:text-[22px] text-stone-600 dark:text-stone-400 font-normal leading-[1.6] max-w-2xl tracking-[-0.012em]">
            Diabetes is more than your glucose. Bluepin helps you understand
            and manage the bigger picture of your health. Get the Bluepin
            Assistant on{" "}
            <span className="inline-flex items-center gap-1.5 font-semibold text-[#1da851] dark:text-[#25D366] align-baseline">
              <WhatsAppIcon className="w-4 h-4 fill-[#1da851] dark:fill-[#25D366] shrink-0 inline-block" />
              WhatsApp
            </span>{" "}
            and start managing your diabetes for free.
          </p>

          <div className="mt-9 md:mt-11 flex flex-col items-center gap-3.5">
            <Link
              href="https://wa.me/?text=Hi%20Bluepin"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-stone-950 dark:bg-stone-50 hover:bg-stone-800 dark:hover:bg-stone-200 text-white dark:text-stone-950 font-medium text-base sm:text-lg shadow-sm hover:shadow-md transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 dark:focus-visible:ring-stone-50 focus-visible:ring-offset-2 active:scale-[0.99]"
            >
              <WhatsAppIcon className="w-5 h-5 fill-white dark:fill-stone-950 group-hover:scale-105 transition-transform" />
              <span>Start on WhatsApp</span>
            </Link>

            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 font-medium tracking-tight">
              Create account → Sync WhatsApp → Start managing diabetes
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
