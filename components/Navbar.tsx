"use client";

import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import bluepinLogo from "@/public/Bluepin.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="w-full bg-[#FAFAF7]/90 dark:bg-[#121311]/90 backdrop-blur-md sticky top-0 z-50 border-b border-[#EAE8E1]/70 dark:border-white/10 transition-colors">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 dark:focus-visible:ring-stone-100 rounded-sm"
          aria-label="Bluepin Home"
        >
          <Image
            src={bluepinLogo}
            alt="Bluepin Logo"
            width={28}
            height={28}
            className="w-6 h-6 sm:w-7 sm:h-7 object-contain transition-transform group-hover:scale-[1.03]"
            priority
          />
          <span className="text-[17px] sm:text-[18px] font-medium tracking-tight text-stone-900 dark:text-stone-50">
            Bluepin
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-1"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-full text-[15px] font-normal transition-colors",
                isActive(link.href)
                  ? "text-stone-950 dark:text-stone-50 bg-stone-900/5 dark:bg-white/10 font-medium"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-50"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <ThemeToggle />
          <Link
            href="https://app.bluepin.in"
            className="hidden lg:inline-flex text-[14px] font-normal text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-50 transition-colors px-2 py-2"
          >
            Sign in
          </Link>
          <Link
            href="https://wa.me/?text=Hi%20Bluepin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-[13px] sm:text-[14px] font-medium px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-stone-950 dark:bg-stone-50 hover:bg-stone-800 dark:hover:bg-stone-200 text-white dark:text-stone-950 transition-all duration-150"
          >
            Start on WhatsApp
          </Link>
          <button
            onClick={() => setMobileOpen((open) => !open)}
            className="md:hidden p-2 rounded-full text-stone-600 dark:text-stone-300 hover:bg-stone-900/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Mobile"
          className="md:hidden border-t border-stone-200/70 dark:border-white/10 px-6 py-4 flex flex-col gap-1 bg-[#FAFAF7]/95 dark:bg-[#121311]/95 backdrop-blur-md"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "px-4 py-3 rounded-xl text-base font-normal transition-colors",
                isActive(link.href)
                  ? "text-stone-950 dark:text-stone-50 bg-stone-900/5 dark:bg-white/10 font-medium"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-50"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://app.bluepin.in"
            onClick={() => setMobileOpen(false)}
            className="mt-1 text-center text-base font-normal px-6 py-3 rounded-full border border-stone-300 dark:border-white/20 text-stone-900 dark:text-stone-100"
          >
            Sign in
          </Link>
        </nav>
      )}
    </header>
  );
}
