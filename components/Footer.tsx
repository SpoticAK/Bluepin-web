import Image from "next/image";
import FooterLegalLinks from "./FooterLegalLinks";

function getYear() {
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <footer className="w-full bg-paper border-t border-line py-12 transition-colors">
      <div className="max-w-wide mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-[13px] text-ink-2 font-normal">
        <div className="flex items-center gap-2.5">
          <Image
            src="/Bluepin.png"
            alt="Bluepin Logo"
            className="w-4 h-4 grayscale opacity-60"
            width={16}
            height={16}
          />
          <span>
            &copy; {getYear()} Bluepin. Restrained health intelligence.
          </span>
        </div>
        <FooterLegalLinks />
      </div>
    </footer>
  );
}
