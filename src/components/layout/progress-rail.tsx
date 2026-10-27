"use client";

import { useEffect, useState } from "react";

export function ProgressRail() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? (window.scrollY / h) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 z-[60] h-[3px] bg-tertiary transition-[width] duration-150 ease-out"
      style={{ width: `${progress}%` }}
    />
  );
}
