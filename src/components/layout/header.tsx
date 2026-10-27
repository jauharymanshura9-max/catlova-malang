"use client";

import { useState } from "react";
import Link from "next/link";
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
  const wa = waLink("Halo CatLova, saya mau tanya layanan.", "header");

  return (
    <header className="sticky top-0 z-50 border-b border-warmgray bg-softwhite/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          className="font-display text-xl font-bold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tertiary"
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
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 bg-primary/40"
            aria-label="Tutup menu"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute right-0 top-0 flex h-full w-72 flex-col gap-6 bg-neutral p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <span className="font-display text-xl font-bold text-primary">Menu</span>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-warmgray text-primary"
                aria-label="Tutup menu"
                onClick={() => setOpen(false)}
              >
                ✕
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
            <a href={wa} target="_blank" rel="noopener noreferrer">
              <Button className="w-full">Chat WA</Button>
            </a>
          </aside>
        </div>
      ) : null}
    </header>
  );
}
