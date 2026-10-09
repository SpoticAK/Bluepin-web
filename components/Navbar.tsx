"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const pageLinks = [
  { label: "Why Bluepin", href: "/why-bluepin" },
  { label: "How it works", href: "/how-it-works" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact us", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative w-full bg-paper/90 backdrop-blur-md top-0 z-50 border-b border-line transition-colors">
      <div className="max-w-wide mx-auto px-4 sm:px-8 h-16 md:h-20 flex items-center justify-between gap-2 sm:gap-4">
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="flex items-center gap-2.5 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 dark:focus-visible:ring-stone-100 rounded-sm"
          aria-label="Bluepin Home"
        >
          <div className="relative w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:scale-[1.03]">
            <Image
              src="/bluepin-96.webp"
              alt="Bluepin Logo"
              width={28}
              height={28}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <span className="text-[17px] sm:text-[18px] font-medium tracking-tight text-ink whitespace-nowrap">
            Bluepin
          </span>
        </Link>

        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-1 mr-1"
          >
            {pageLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-ink-2 hover:text-ink transition-colors text-[14px] font-normal px-3 py-2 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="https://app.bluepin.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center shrink-0 text-[14px] font-medium px-5 py-2 rounded-full bg-whatsapp hover:bg-whatsapp-hover text-white shadow-sm hover:shadow-md transition-all duration-150 whitespace-nowrap"
          >
            Start on WhatsApp
          </Link>
          <button
            onClick={() => setMobileOpen((open) => !open)}
            className="md:hidden shrink-0 p-2 rounded-full text-stone-600 dark:text-stone-300 hover:bg-stone-900/5 dark:hover:bg-white/10 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Mobile"
          className="md:hidden absolute inset-x-0 top-full border-t border-line px-4 py-3 flex flex-col gap-1 bg-paper shadow-xl shadow-stone-900/5 rounded-b-2xl"
        >
          {pageLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 rounded-xl text-base font-normal text-stone-600 dark:text-stone-300 hover:text-stone-950 dark:hover:text-stone-50 hover:bg-stone-900/5 dark:hover:bg-white/10 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://app.bluepin.in"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-1 inline-flex items-center justify-center text-base font-medium px-6 py-3 rounded-full bg-whatsapp hover:bg-whatsapp-hover text-white shadow-sm transition-all duration-150"
          >
            Start on WhatsApp
          </Link>
        </nav>
      )}
    </header>
  );
}
