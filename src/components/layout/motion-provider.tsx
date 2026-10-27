"use client";

import { useEffect, useRef } from "react";
import { initLenis } from "@/lib/lenis";
import { registerGsap, initHero, initReveal, initParallax, initStagger, initCounters, initSvgDraw } from "@/lib/gsap";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<ReturnType<typeof initLenis>>(null);
  useEffect(() => {
    const run = () => {
      lenisRef.current = initLenis();
      registerGsap();
      requestAnimationFrame(() => {
        initHero();
        initReveal();
        initParallax();
        initStagger();
        initCounters();
        initSvgDraw();
      });
    };
    const ric = (window as unknown as { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback;
    if (typeof ric === "function") {
      ric(run, { timeout: 2000 });
    } else {
      setTimeout(run, 200);
    }
    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return <>{children}</>;
}
