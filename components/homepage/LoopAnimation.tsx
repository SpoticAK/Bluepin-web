"use client";

import { useRef, useState, useEffect } from "react";

export default function LoopAnimation() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true); // Optimistically assume autoplay works

  // Sync React state with actual video native events (crucial for iOS blocked autoplay)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    // Initial check in case it was immediately blocked before JS attached listeners
    setIsPlaying(!video.paused);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className="relative w-full h-full group">
      <video
        ref={videoRef}
        src="/anim.mp4"
        poster="/poster.webp"
        autoPlay
        loop
        muted
        playsInline
        width={1280}
        height={720}
        style={{ width: "100%", height: "auto" }}
        className="w-full h-full object-cover"
        aria-label="User accessing Bluepin features and logging glucose via WhatsApp"
      >
        Your browser does not support the video tag.
      </video>

      {/* WCAG compliant Play/Pause control */}
      <button
        onClick={togglePlay}
        className={`absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-stone-900/60 hover:bg-stone-900/80 text-white p-2.5 sm:p-3 rounded-full backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 ${
          isPlaying ? "opacity-0 group-hover:opacity-100 focus:opacity-100" : "opacity-100"
        }`}
        aria-label={isPlaying ? "Pause animation" : "Play animation"}
        title={isPlaying ? "Pause animation" : "Play animation"}
      >
        {isPlaying ? (
          // Pause Icon
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
          </svg>
        ) : (
          // Play Icon
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </div>
  );
}
