import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "honey" | "sage" | "error";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export function Badge({
  variant = "honey",
  className,
  ...props
}: BadgeProps) {
  const variants: Record<BadgeVariant, string> = {
    honey: "bg-honey text-primary",
    sage: "bg-secondary text-primary",
    error: "bg-coral text-primary",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1.5 text-label-caps font-body",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
