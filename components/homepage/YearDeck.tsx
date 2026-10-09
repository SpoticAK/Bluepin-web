"use client";

import { useEffect, useRef, useState } from "react";

interface YearRow {
  label: string;
  value: string;
  highlight?: boolean;
}

interface YearCard {
  year: string;
  footer: string;
  latest?: boolean;
  rows: YearRow[];
}

/**
 * Rotating deck of year cards. Every few seconds the card at the back
 * moves to the front, cycling 2024 → 2025 → 2026 → 2024 …
 * Pauses on hover/focus and respects prefers-reduced-motion.
 */
const CARDS: YearCard[] = [
  {
    year: "2024",
    footer: "Year 1",
    rows: [
      { label: "HbA1c", value: "6.2%", highlight: true },
      { label: "Creat.", value: "0.9" },
      { label: "Chol.", value: "178" },
    ],
  },
  {
    year: "2025",
    footer: "Year 2",
    rows: [
      { label: "HbA1c", value: "6.5%" },
      { label: "Creat.", value: "1.0", highlight: true },
      { label: "ALT", value: "31" },
    ],
  },
  {
    year: "2026",
    footer: "Latest",
    latest: true,
    rows: [
      { label: "HbA1c", value: "6.7%", highlight: true },
      { label: "Creat.", value: "1.1" },
      { label: "Chol.", value: "198" },
    ],
  },
];

// Slot 0 = back, 1 = middle, 2 = front. Full class names kept static for Tailwind.
const SLOT_CLASSES = [
  "top-0 left-10 sm:left-12 rotate-6 z-10",
  "top-4 sm:top-5 left-5 sm:left-6 rotate-2 z-20",
  "top-8 sm:top-10 left-0 -rotate-3 z-30",
] as const;

const SLOT_Z = [10, 20, 30] as const;

export default function YearDeck() {
  // Index of the card currently at the front.
  const [front, setFront] = useState(2);
  const pausedRef = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (!pausedRef.current) setFront((f) => (f + 1) % CARDS.length);
    }, 3000);
    return () => window.clearInterval(id);
  }, []);

  const setPaused = (paused: boolean) => {
    pausedRef.current = paused;
  };

  return (
    <div
      className="relative w-52 sm:w-60 h-60 sm:h-72"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {CARDS.map((card, i) => {
        const slot = (((i - front) % CARDS.length) + CARDS.length) % CARDS.length;
        return (
          <div
            key={card.year}
            style={{ zIndex: SLOT_Z[slot] }}
            className={`absolute w-36 sm:w-44 h-48 sm:h-56 rounded-md bg-white dark:bg-white/5 p-3 sm:p-4 flex flex-col justify-between transition-all duration-700 ease-in-out ${SLOT_CLASSES[slot]} ${
              card.latest
                ? "border-2 border-stone-900 dark:border-stone-100 shadow-[0_2px_6px_rgba(0,0,0,0.05)]"
                : "border border-stone-200/90 dark:border-white/10 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
            }`}
          >
            <div>
              <div className="flex items-center justify-between border-b border-stone-100 dark:border-white/10 pb-1.5 mb-2">
                <span
                  className={`text-xs sm:text-base font-sans text-stone-950 dark:text-stone-100 ${
                    card.latest ? "font-bold" : "font-semibold"
                  }`}
                >
                  {card.year}
                </span>
                {card.latest ? (
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-300 dark:bg-stone-600" />
                )}
              </div>
              <div
                className={`space-y-1.5 text-[11px] sm:text-sm font-mono ${
                  card.latest
                    ? "text-stone-700 dark:text-stone-300"
                    : "text-stone-400 dark:text-stone-500"
                }`}
              >
                {card.rows.map((row) => (
                  <div
                    key={row.label}
                    className={`p-1 rounded ${
                      row.highlight
                        ? card.latest
                          ? "bg-stone-100/90 dark:bg-white/10 font-semibold text-stone-950 dark:text-stone-50"
                          : "bg-stone-50 dark:bg-white/5 text-stone-700 dark:text-stone-300"
                        : ""
                    }`}
                  >
                    {row.label} · {row.value}
                  </div>
                ))}
              </div>
            </div>
            <span
              className={`text-[10px] sm:text-xs font-mono ${
                card.latest
                  ? "text-stone-500 dark:text-stone-400 font-semibold"
                  : "text-stone-300 dark:text-stone-600"
              }`}
            >
              {card.footer}
            </span>
          </div>
        );
      })}
    </div>
  );
}
