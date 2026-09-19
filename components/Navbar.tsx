"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const isActive = (href: string) => {
    if (href === "/#faq") return pathname === "/" && hash === "#faq";
    if (href === "/") return pathname === "/" && hash !== "#faq";
    return pathname === href;
  };

  return (
    <nav className="border-b border-theme-border/50 bg-white/80 dark:bg-theme-bg/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3"
          >
            <Image
              src="/Bluepin.png"
              alt="Bluepin Logo"
              className="size-8 object-contain"
              width={32}
              height={32}
              priority
            />
            <span className="font-display font-bold text-xl tracking-tight">
              Blue<span className="font-medium opacity-80">pin.</span>
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "px-3 lg:px-4 py-2 rounded-full text-base font-medium transition-colors",
                isActive(link.href)
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40"
                  : "text-theme-text-sec hover:text-theme-text hover:bg-theme-border/40",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <ThemeToggle />
          <Link
            href="https://app.bluepin.in"
            className="text-base font-medium bg-white dark:bg-slate-900 text-blue-600 border border-slate-200 dark:border-slate-800 px-6 py-2.5 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm hidden sm:inline-flex"
          >
            Sign in
          </Link>
          <button
            onClick={() => setMobileOpen((open) => !open)}
            className="md:hidden p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-theme-border/50 px-6 py-4 flex flex-col gap-1 bg-white/95 dark:bg-theme-bg/95 backdrop-blur-xl">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "px-4 py-3 rounded-xl text-base font-medium transition-colors",
                isActive(link.href)
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40"
                  : "text-theme-text-sec hover:text-theme-text hover:bg-theme-border/40",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://app.bluepin.in"
            onClick={() => setMobileOpen(false)}
            className="mt-2 text-center text-base font-medium bg-white dark:bg-slate-900 text-blue-600 border border-slate-200 dark:border-slate-800 px-6 py-3 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm"
          >
            Sign in
          </Link>
        </div>
      )}
    </nav>
  );
}
