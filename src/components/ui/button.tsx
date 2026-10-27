import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-sm px-4 py-[14px] font-display text-base font-semibold shadow-sm transition-all duration-200 ease-out hover:scale-[1.01] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tertiary disabled:cursor-not-allowed disabled:opacity-50";
  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-tertiary text-on-tertiary hover:bg-primary hover:text-on-primary",
    secondary:
      "bg-neutral text-primary hover:bg-primary hover:text-on-primary",
  };
  return <button className={cn(base, variants[variant], className)} {...props} />;
}
