import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Chip } from "@/components/ui/chip";
import { waLink } from "@/lib/wa";

const wa = waLink("Halo CatLova, saya mau booking grooming. Nama: ... Anabul: ... Tanggal: ...", "hero");

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral hero-enter">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-16 md:grid-cols-2 md:items-center">
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
        <div className="relative aspect-[3/2] overflow-hidden rounded-lg bg-biscuit">
          <Image
            src="/images/hero-placeholder.webp"
            alt="Foto salon CatLova menyusul"
            fill
            priority
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
