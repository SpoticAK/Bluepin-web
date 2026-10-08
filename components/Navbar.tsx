import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="w-full bg-[#FAFAF7]/90 dark:bg-[#121311]/90 backdrop-blur-md sticky top-0 z-50 border-b border-[#EAE8E1]/70 dark:border-white/10 transition-colors">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 dark:focus-visible:ring-stone-100 rounded-sm"
          aria-label="Bluepin Home"
        >
          <div className="relative w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:scale-[1.03]">
            <Image
              src="/Bluepin.png"
              alt="Bluepin Logo"
              width={28}
              height={28}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <span className="text-[17px] sm:text-[18px] font-medium tracking-tight text-stone-900 dark:text-stone-50">
            Bluepin
          </span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-4 text-sm">
          <ThemeToggle />
          <Link
            href="/why-bluepin"
            className="hidden sm:inline text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-50 transition-colors text-[13px] sm:text-[14px] font-normal"
          >
            Why Bluepin
          </Link>
          <Link
            href="/how-it-works"
            className="hidden sm:inline text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-50 transition-colors text-[13px] sm:text-[14px] font-normal"
          >
            How it works
          </Link>
          <Link
            href="https://wa.me/?text=Hi%20Bluepin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-[13px] sm:text-[14px] font-medium px-4 py-1.5 sm:px-4.5 sm:py-2 rounded-full border border-stone-300 dark:border-white/20 hover:border-stone-900 dark:hover:border-stone-100 text-stone-900 dark:text-stone-50 transition-all duration-150"
          >
            Start on WhatsApp
          </Link>
        </div>
      </div>
    </header>
  );
}
