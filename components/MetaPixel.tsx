"use client";

import { useEffect } from "react";

const PIXEL_ID = "1768320231169774";
const FALLBACK_DELAY_MS = 6000;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
  }
}

type PixelWindow = {
  fbq?: (...args: unknown[]) => void;
  _fbq?: (...args: unknown[]) => void;
};

function loadPixel() {
  if (typeof window === "undefined") return;
  const w = window as unknown as PixelWindow;
  if (w.fbq) return;
  (function (
    f: PixelWindow,
    b: Document,
    e: string,
    v: string,
    n: string,
    t: string,
    s: string
  ) {
    if (f.fbq) return;
    const fbqFn = function (...args: unknown[]) {
      if (fbqFn.callMethod) {
        fbqFn.callMethod(...args);
      } else {
        fbqFn.queue.push(args);
      }
    } as {
      (...args: unknown[]): void;
      callMethod?: (...args: unknown[]) => void;
      queue: unknown[][];
      push: (...args: unknown[]) => void;
      loaded?: boolean;
      version?: string;
    };
    fbqFn.queue = [];
    fbqFn.push = (...args: unknown[]) => {
      fbqFn.queue.push(args);
    };
    fbqFn.loaded = true;
    fbqFn.version = "2.0";
    (f as unknown as Record<string, unknown>)[n] = fbqFn;
    if (!(f as unknown as Record<string, unknown>)._fbq)
      (f as unknown as Record<string, unknown>)._fbq = fbqFn;
    const script = b.createElement(e) as HTMLScriptElement;
    script.async = true;
    script.src = v;
    const first = b.getElementsByTagName(s)[0];
    first.parentNode?.insertBefore(script, first);
  })(
    w,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js",
    "fbq",
    "t",
    "script"
  );
  (window as unknown as PixelWindow).fbq?.("init", PIXEL_ID);
  (window as unknown as PixelWindow).fbq?.("track", "PageView");
}

/**
 * Loads the Meta Pixel only after the first user interaction (or a short
 * fallback timeout), keeping facebook.net requests out of the initial
 * page-load window. GA4/GTM is untouched, so bounce-rate tracking works
 * exactly as before.
 */
export default function MetaPixel() {
  useEffect(() => {
    let done = false;
    const events = ["pointerdown", "scroll", "keydown", "touchstart"] as const;

    const cleanup = () => {
      events.forEach((event) => window.removeEventListener(event, fire, true));
      window.clearTimeout(timer);
    };
    const fire = () => {
      if (done) return;
      done = true;
      cleanup();
      loadPixel();
    };
    const timer = window.setTimeout(fire, FALLBACK_DELAY_MS);

    events.forEach((event) =>
      window.addEventListener(event, fire, {
        capture: true,
        passive: true,
        once: false,
      })
    );
    return cleanup;
  }, []);

  return (
    <noscript>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=1768320231169774&ev=PageView&noscript=1"
        alt=""
      />
    </noscript>
  );
}
