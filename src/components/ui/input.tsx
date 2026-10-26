import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export function Input({ className, error, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full rounded-sm bg-softwhite px-3 py-3 text-primary font-body text-base focus:outline-none focus:ring-2 focus:ring-tertiary",
        error && "ring-2 ring-coral",
        className,
      )}
      {...props}
    />
  );
}
