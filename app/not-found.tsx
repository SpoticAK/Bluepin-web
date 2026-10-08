import Link from 'next/link';
import { Home } from 'lucide-react';
import AmbientCurves from '@/components/homepage/AmbientCurves';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-theme-text font-sans antialiased selection:bg-purple-500/30 overflow-hidden relative z-0 flex flex-col items-center justify-center -mt-20">
      <AmbientCurves />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-2xl mx-auto">
        <h1 className="text-9xl md:text-[12rem] font-garet font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 mb-6 drop-shadow-sm">
          404
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display text-slate-900 dark:text-white">
          Page Not Found
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-md">
          Oops! The page you are looking for doesn&apos;t exist, has been moved, or is temporarily unavailable.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-4 px-8 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#a855f7]"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
