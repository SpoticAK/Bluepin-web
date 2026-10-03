"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import AmbientCurves from "@/components/homepage/AmbientCurves";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-theme-text font-sans antialiased selection:bg-rose-500/30 overflow-hidden relative z-0 flex flex-col items-center justify-center -mt-20">
      <AmbientCurves />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-2xl mx-auto">
        <div className="bg-rose-500/10 p-6 rounded-full mb-8 shadow-[0_0_3rem_-0.5rem_#f43f5e]">
          <AlertTriangle className="w-20 h-20 text-rose-500" />
        </div>
        <h1 className="text-4xl md:text-6xl font-garet font-black text-slate-900 dark:text-white mb-6">
          Something went wrong
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-md">
          We encountered an unexpected error while processing your request. Please try again or return to the homepage.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-400 hover:to-orange-400 text-white font-semibold py-4 px-8 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#f43f5e]"
          >
            <RefreshCcw className="w-5 h-5" />
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
