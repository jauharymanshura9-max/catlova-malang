import * as React from "react";
import { cn } from "@/lib/utils";

export function Chip({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-warmgray px-2 py-2 text-body-sm text-primary font-body",
        className,
      )}
      {...props}
    />
  );
}
