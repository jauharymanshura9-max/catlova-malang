import * as React from "react";
import { cn } from "@/lib/utils";

export function Skeleton({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-warmgray/40", className)}
      aria-hidden="true"
    />
  );
}
