"use client";

import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={cn("divide-y divide-warmgray", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="py-4">
            <button
              type="button"
              className="flex w-full items-center justify-between text-left font-display text-base font-semibold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tertiary"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              <span>{item.title}</span>
              <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen ? (
              <div className="mt-3 text-body-md text-primary">{item.content}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
