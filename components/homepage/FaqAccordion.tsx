"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/faq";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full border-t border-stone-200/80 dark:border-white/10">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.q}
            className="border-b border-stone-200/80 dark:border-white/10"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="w-full py-5 sm:py-6 flex items-center justify-between text-left gap-6 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded-sm"
            >
              <span className="text-lg sm:text-xl font-sans font-medium text-stone-950 dark:text-stone-50 tracking-[-0.015em] group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
                {item.q}
              </span>
              <span
                className="w-6 h-6 flex items-center justify-center text-stone-400 dark:text-stone-500 group-hover:text-stone-700 dark:group-hover:text-stone-300 transition-colors shrink-0 text-2xl font-light select-none"
                aria-hidden="true"
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            <div className="faq-answer" data-open={isOpen} aria-hidden={!isOpen}>
              <div>
                <div className="pb-6 pr-8 sm:pr-12 text-[15px] sm:text-base text-stone-600 dark:text-stone-400 font-normal leading-[1.65] tracking-[-0.01em]">
                  <p className="m-0">{item.answer}</p>
                  {item.sources && item.sources.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                      {item.sources.map((source) => (
                        <a
                          key={source.url}
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          tabIndex={isOpen ? 0 : -1}
                          className="text-sm font-medium text-stone-500 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-100 underline underline-offset-2"
                        >
                          {source.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
