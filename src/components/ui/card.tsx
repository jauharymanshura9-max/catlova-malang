import * as React from "react";
import { cn } from "@/lib/utils";

type CardVariant = "default" | "soft";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

export function Card({
  variant = "default",
  className,
  ...props
}: CardProps) {
  const variants: Record<CardVariant, string> = {
    default: "bg-neutral text-primary",
    soft: "bg-biscuit text-primary",
  };
  return (
    <div
      className={cn(
        "rounded-md p-5 transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md md:p-6",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
