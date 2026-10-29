"use client";

import * as React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
          <div key={item.id} className="py-1">
            <button
              type="button"
              id={`faq-trigger-${item.id}`}
              aria-controls={`faq-panel-${item.id}`}
              className="flex min-h-[48px] w-full items-center justify-between gap-3 px-1 py-3 text-left font-display text-base font-semibold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tertiary"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              <span className="flex-1">{item.title}</span>
              <ChevronDown
                aria-hidden="true"
                strokeWidth={2}
                className={cn(
                  "h-5 w-5 shrink-0 text-tertiary transition-transform duration-200 ease-out",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            {isOpen ? (
              <div
                id={`faq-panel-${item.id}`}
                role="region"
                aria-labelledby={`faq-trigger-${item.id}`}
                className="px-1 pb-4 pr-8 text-body-md leading-[1.7] text-primary"
              >
                {item.content}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
