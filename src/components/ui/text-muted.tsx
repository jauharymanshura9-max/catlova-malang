import * as React from "react";
import { cn } from "@/lib/utils";

export function TextMuted({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("text-muted text-body-sm font-body", className)}
      {...props}
    />
  );
}
