"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";

const RADIUS = 20;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(0);

  useEffect(() => {
    const update = () => {
      rafRef.current = 0;
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      setVisible(window.scrollY > 600);
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    const onScroll = () => {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollToTop = () => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={`Scroll to top (${Math.round(progress * 100)}% scrolled)`}
      title="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-paper text-ink shadow-md flex items-center justify-center transition-all duration-300 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <svg
        className="absolute inset-0 w-full h-full -rotate-90"
        viewBox="0 0 44 44"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="22"
          cy="22"
          r={RADIUS}
          strokeWidth="2.5"
          className="stroke-stone-200 dark:stroke-stone-700"
        />
        <circle
          cx="22"
          cy="22"
          r={RADIUS}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
          className="stroke-ink"
        />
      </svg>
      <ArrowUp className="relative w-5 h-5" strokeWidth={2} />
    </button>
  );
}
