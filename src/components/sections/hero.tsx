import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Chip } from "@/components/ui/chip";
import { waLink } from "@/lib/wa";

import { Cat } from "lucide-react";

const wa = waLink("Halo CatLova, saya mau booking grooming. Nama: ... Anabul: ... Tanggal: ...", "hero");

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral hero-enter">
      <div className="hero-bg absolute inset-0 bg-gradient-to-b from-biscuit/40 to-neutral" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[1200px] gap-8 px-4 py-8 md:py-16 md:grid-cols-2 md:items-center">
        <div>
          <Badge variant="honey">Rating 5,0 · 211 ulasan</Badge>
          <h1
            className="mt-4 font-display font-bold leading-[1.05] tracking-[-0.02em] text-primary"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Grooming &amp; Penitipan Kucing Malang
          </h1>
          <p className="mt-4 max-w-[66ch] text-body-lg text-muted">
            Salon kucing telaten di Sukun, Malang. Free antar-jemput, owner sabar,
            update WA selama penitipan.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Chip>Free antar-jemput</Chip>
            <span className="text-body-sm text-muted">Jam 08.00-17.00 WIB</span>
            <span className="text-body-sm text-muted">
              Jl. Terusan Mergan Raya No.Kav.1/20, Sukun, Malang
            </span>
          </div>
          <div className="mt-8">
            <a href={wa} target="_blank" rel="noopener noreferrer">
              <Button>Chat WA — Booking Grooming</Button>
            </a>
          </div>
        </div>
        <div
          role="img"
          aria-label="Foto salon CatLova"
          className="hero-fg hero-draw relative aspect-[3/2] overflow-hidden rounded-lg bg-gradient-to-br from-biscuit to-tertiary/30 flex items-center justify-center"
        >
          <Cat className="h-20 w-20 text-tertiary/80" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
