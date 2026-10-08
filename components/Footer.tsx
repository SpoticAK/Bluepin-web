import Image from "next/image";
import { Shield } from "lucide-react";
import FooterLegalLinks from "./FooterLegalLinks";
import { getLegalDocContent } from "@/lib/legalContent";
import bluepinLogo from "@/public/Bluepin.png";

function getYear() {
  return new Date().getFullYear();
}

export default function Footer() {
  const { terms, privacy } = getLegalDocContent();

  return (
    <footer className="w-full bg-[#FAFAF7] dark:bg-[#121311] border-t border-stone-200/80 dark:border-white/10 transition-colors">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-12 pb-10">
        <div className="border-b border-stone-200/80 dark:border-white/10 pb-10 mb-8">
          <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-3">
              <Shield className="w-5 h-5 text-stone-900 dark:text-stone-100" />
              <h2 className="text-lg font-medium text-stone-900 dark:text-stone-100">
                Privacy &amp; Security
              </h2>
            </div>
            <p className="text-[15px] text-stone-600 dark:text-stone-400 leading-relaxed">
              Your health data is encrypted and securely stored. Bluepin is
              designed to help you organize your personal health information
              safely.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone-500 dark:text-stone-400">
          <div className="flex items-center gap-2">
            <Image
              src={bluepinLogo}
              alt="Bluepin Logo"
              className="w-4 h-4 grayscale opacity-60"
              width={16}
              height={16}
            />
            <span>&copy; {getYear()} Bluepin. All rights reserved.</span>
          </div>
          <FooterLegalLinks termsContent={terms} privacyContent={privacy} />
        </div>
      </div>
    </footer>
  );
}
