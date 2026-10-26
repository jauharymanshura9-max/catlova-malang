import { waLink } from "@/lib/wa";

const wa = waLink("Halo CatLova, saya mau booking.", "sticky");

export function StickyCta() {
  return (
    <a
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WA"
      className="fixed bottom-4 right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-tertiary text-on-tertiary shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tertiary"
    >
      <span className="font-display text-sm font-bold">WA</span>
    </a>
  );
}
