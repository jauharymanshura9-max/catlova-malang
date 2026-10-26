"use client";

import { useEffect } from "react";
import { initLenis } from "@/lib/lenis";
import { registerGsap, initHero, initReveal } from "@/lib/gsap";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = initLenis();
    registerGsap();
    requestAnimationFrame(() => {
      initHero();
      initReveal();
    });
    return () => {
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
