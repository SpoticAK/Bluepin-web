import Image from "next/image";
import FooterLegalLinks from "./FooterLegalLinks";
import { getLegalDocContent } from "@/lib/legalContent";

function getYear() {
  return new Date().getFullYear();
}

export default function Footer() {
  const { terms, privacy } = getLegalDocContent();

  return (
    <footer className="w-full bg-[#FAFAF7] dark:bg-[#121311] border-t border-stone-200/80 dark:border-white/10 py-12 px-6 sm:px-8 mt-20 transition-colors">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-[13px] text-stone-500 dark:text-stone-400 font-normal">
        <div className="flex items-center gap-2.5">
          <Image
            src="/Bluepin.png"
            alt="Bluepin Logo"
            className="w-4 h-4 grayscale opacity-60"
            width={16}
            height={16}
          />
          <span>&copy; {getYear()} Bluepin. Restrained health intelligence.</span>
        </div>
        <FooterLegalLinks termsContent={terms} privacyContent={privacy} />
      </div>
    </footer>
  );
}
