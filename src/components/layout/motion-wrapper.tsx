"use client";

import dynamic from "next/dynamic";

const MotionProvider = dynamic(
  () => import("./motion-provider").then((m) => m.MotionProvider),
  { ssr: false },
);

export function MotionWrapper({ children }: { children: React.ReactNode }) {
  return <MotionProvider>{children}</MotionProvider>;
}
