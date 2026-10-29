import { MessageCircle } from "lucide-react";

import { waLink } from "@/lib/wa";

const wa = waLink("Halo CatLova, saya mau booking.", "sticky");

export function StickyCta() {
  return (
    <a
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp CatLova"
      className="fixed bottom-4 right-4 z-40 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-tertiary px-4 text-on-tertiary shadow-lg transition-transform duration-150 ease-out hover:scale-105 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2 focus-visible:ring-offset-neutral max-md:[&:has(~[role=dialog])]:bottom-52 md:w-12 md:px-0"
    >
      <MessageCircle className="h-5 w-5 md:hidden" strokeWidth={2} aria-hidden="true" />
      <span className="text-sm font-semibold md:hidden">Chat WA</span>
      <span className="hidden font-display text-sm font-bold md:inline">WA</span>
    </a>
  );
}
