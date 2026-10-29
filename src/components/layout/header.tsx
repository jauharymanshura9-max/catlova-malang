"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/wa";

const nav = [
  { href: "/layanan/grooming", label: "Layanan" },
  { href: "/penitipan", label: "Penitipan" },
  { href: "/harga", label: "Harga" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontak", label: "Kontak" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const wa = waLink("Halo CatLova, saya mau tanya layanan.", "header");
  const drawerRef = useRef<HTMLDivElement>(null);

  // close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // body scroll lock + escape
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-warmgray bg-softwhite/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center font-display text-xl font-bold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tertiary md:min-h-0"
        >
          CatLova
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Navigasi utama"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-body-sm font-medium text-primary transition-colors hover:text-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tertiary after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-tertiary after:transition-[width] after:duration-200 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href={wa} target="_blank" rel="noopener noreferrer">
            <Button>Chat WA</Button>
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-warmgray text-primary md:hidden"
          aria-label="Buka menu navigasi"
          aria-expanded={open}
          aria-controls="mobile-nav-drawer"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" id="mobile-nav-drawer">
          <button
            type="button"
            className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
            aria-label="Tutup menu"
            onClick={() => setOpen(false)}
          />
          <aside
            ref={drawerRef}
            className="absolute right-0 top-0 flex h-full w-72 flex-col gap-6 bg-neutral p-6 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-xl font-bold text-primary">Menu</span>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-warmgray text-primary"
                aria-label="Tutup menu"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-4" aria-label="Navigasi mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-body-md font-medium text-primary hover:text-tertiary"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center"
            >
              <Button className="w-full">Chat WA</Button>
            </a>
          </aside>
        </div>
      ) : null}
    </header>
  );
}
