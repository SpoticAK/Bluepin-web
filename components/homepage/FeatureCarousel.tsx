"use client";

import React from "react";
import Image, { type StaticImageData } from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface FeatureCarouselProps {
  title: string;
  subtitle: string;
  images: Array<string | StaticImageData>;
  iconColor: string;
  titleGradient?: string;
  glowColor: string;
  buttonColor: string;
  activeIndicatorColor: string;
  stepNumber: number;
  stepGradient: string;
}

export default function FeatureCarousel({
  title,
  subtitle,
  images,
  iconColor,
  titleGradient,
  glowColor,
  buttonColor,
  activeIndicatorColor,
  stepNumber,
  stepGradient,
}: FeatureCarouselProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);

  return (
    <div className="flex flex-col items-start gap-10 w-full text-left">
      {/* 1. Title */}
      <div className="inline-flex items-center gap-3 relative z-10">
        <div
          className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex shrink-0 items-center justify-center text-white font-bold text-lg md:text-xl shadow-md ${stepGradient}`}
        >
          {stepNumber}
        </div>
        <h3
          className={`text-3xl md:text-4xl font-garet tracking-tight font-bold ${titleGradient || iconColor}`}
        >
          {title}
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row w-full items-start lg:items-center justify-between gap-10 lg:gap-16">
        {/* 2. Images (Carousel) */}
        <div className="w-full lg:w-auto flex flex-col justify-start relative items-start shrink-0">
          <div className="relative flex items-center justify-start mb-6 pl-2">
            <div className="relative w-64 md:w-80 aspect-9/19.5 bg-slate-900 rounded-[2.5rem] border-8 border-slate-900 dark:border-slate-800 shadow-2xl overflow-hidden z-10 shadow-black/5">
              {images.map((src, idx) => (
                <motion.div
                  key={typeof src === "string" ? src : src.src}
                  initial={false}
                  animate={{
                    opacity: currentSlide === idx ? 1 : 0,
                    scale: currentSlide === idx ? 1 : 1.02,
                  }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className={cn(
                    "absolute inset-0 w-full h-full select-none pointer-events-none",
                    currentSlide === idx ? "z-10" : "z-0",
                  )}
                >
                  <Image
                    src={src}
                    alt={`${title} Screenshot ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 256px, 320px"
                    priority={idx === 0}
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 ${glowColor} blur-3xl rounded-full z-0 pointer-events-none`}
            ></div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className={`absolute -right-5 md:-right-10 z-20 w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform border border-slate-200 dark:border-slate-700 ${buttonColor}`}
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>

          {/* Pagination Indicators */}
          <div className="flex items-center gap-2 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  currentSlide === idx
                    ? `w-8 ${activeIndicatorColor}`
                    : "w-3 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600",
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 3. Content (Subtitle) - Speech Bubble */}
        <div className="relative mt-2 lg:mt-0 max-w-2xl w-full">
          {/* Speech Bubble Tail (Mobile/Tablet - points UP) */}
          <div className="absolute -top-3 left-16 w-6 h-6 bg-white dark:bg-slate-800 border-l border-t border-slate-200 dark:border-slate-700 transform rotate-45 rounded-tl-sm z-10 lg:hidden"></div>
          {/* Speech Bubble Tail (Desktop - points LEFT) */}
          <div className="absolute top-16 -left-3 w-6 h-6 bg-white dark:bg-slate-800 border-l border-b border-slate-200 dark:border-slate-700 transform rotate-45 rounded-bl-sm z-10 hidden lg:block"></div>

          {/* Speech Bubble Body */}
          <div className="relative z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-4xl p-6 md:p-8 shadow-lg shadow-slate-200/50 dark:shadow-none">
            <p className="text-[17px] md:text-lg font-poppins text-theme-text font-normal leading-relaxed m-0">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
