"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
// Matches Tailwind's `sm` breakpoint: below it the hero is portrait-ish, so a
// narrower center crop of the video is enough.
const MOBILE_QUERY = "(max-width: 639px)";

type NetworkInformation = { saveData?: boolean };

function onPageIdle(callback: () => void) {
  let cancelled = false;
  let idleId: number | undefined;
  const schedule = () => {
    if (cancelled) return;
    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(callback, { timeout: 2000 });
    } else {
      idleId = window.setTimeout(callback, 200);
    }
  };

  if (document.readyState === "complete") schedule();
  else window.addEventListener("load", schedule, { once: true });

  return () => {
    cancelled = true;
    window.removeEventListener("load", schedule);
    if (idleId === undefined) return;
    if (typeof window.cancelIdleCallback === "function")
      window.cancelIdleCallback(idleId);
    else window.clearTimeout(idleId);
  };
}

/**
 * Hero background: the poster is a regular high-priority <img>, so it is the
 * LCP element and never waits on the video. The video is only fetched once the
 * page has loaded and fades in over the poster when it actually starts playing.
 */
export function HeroMedia({
  src,
  mobileSrc,
  poster,
}: {
  src: string;
  mobileSrc?: string;
  poster: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const saveData = (
      navigator as Navigator & { connection?: NetworkInformation }
    ).connection?.saveData;
    if (saveData) return;

    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);
    let cancelIdle: (() => void) | undefined;

    const start = () => {
      cancelIdle?.();
      cancelIdle = onPageIdle(() => {
        const nextSrc =
          mobileSrc && window.matchMedia(MOBILE_QUERY).matches
            ? mobileSrc
            : src;
        if (video.getAttribute("src") !== nextSrc) video.src = nextSrc;
        // Autoplay can still be refused (e.g. low-power mode); the poster
        // simply stays visible then.
        video.play().catch(() => {});
      });
    };

    const stop = () => {
      cancelIdle?.();
      video.pause();
      setIsPlaying(false);
    };

    const onPreferenceChange = () => {
      if (reducedMotion.matches) stop();
      else start();
    };

    onPreferenceChange();
    reducedMotion.addEventListener("change", onPreferenceChange);
    return () => {
      reducedMotion.removeEventListener("change", onPreferenceChange);
      cancelIdle?.();
    };
  }, [src, mobileSrc]);

  return (
    <>
      <Image
        src={poster}
        alt=""
        fill
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
        className="object-cover"
      />
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 motion-reduce:transition-none ${
          isPlaying ? "opacity-100" : "opacity-0"
        }`}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        onPlaying={() => setIsPlaying(true)}
      />
    </>
  );
}
