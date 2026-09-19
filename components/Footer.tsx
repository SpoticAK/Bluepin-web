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
    <footer className="bg-white/90 dark:bg-theme-card/90 backdrop-blur-3xl border-t border-theme-border relative z-10">
      <div className="max-w-8xl mx-auto px-6 md:px-12 pt-16 pb-12">
        {/* Trust & Safety */}
        <div className="border-b border-theme-border/50 pb-12 mb-12">
          <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <Shield className="w-5 h-5 text-theme-text" />
              <h4 className="text-xl font-medium">Privacy & Security</h4>
            </div>
            <p className="text-theme-text-sec">
              Your health data is encrypted and securely stored. BluePin is
              designed to help you organize your personal health information
              safely.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-theme-text-sec">
          <div className="flex items-center gap-2">
            <Image
              src={bluepinLogo}
              alt="Bluepin Logo"
              className="w-5 h-5 grayscale opacity-50"
              width={20}
              height={20}
            />
            <span>&copy; {getYear()} Bluepin. All rights reserved.</span>
          </div>
          <FooterLegalLinks termsContent={terms} privacyContent={privacy} />
        </div>
      </div>
    </footer>
  );
}
