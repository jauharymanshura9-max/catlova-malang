import Image from "next/image";
import reviews from "@/data/reviews.json";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/wa";

export function SocialProof() {
  return (
    <section className="bg-softwhite reveal">
      <div className="mx-auto max-w-[1200px] px-4 py-16">
        <h2
          className="font-display font-bold leading-[1.15] text-primary"
          style={{ fontSize: "var(--text-h2)" }}
        >
          Kata Pelanggan
        </h2>
        <p className="mt-2 text-body-md text-muted">
          Rating 5,0 dari 211 ulasan Google.
        </p>
        {reviews.length === 0 ? (
          <div className="mt-8 rounded-md bg-neutral p-6 text-center">
            <p className="font-display text-2xl font-bold text-tertiary">5,0</p>
            <p className="mt-2 text-body-sm text-muted">
              Rating 5,0 dari 211 ulasan Google.
            </p>
            <a
              href={waLink("Halo CatLova, saya mau tanya layanan.", "social-proof")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block"
            >
              <Button>Chat WA</Button>
            </a>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {reviews.map((r) => (
              <blockquote
                key={r.id}
                className="rounded-md bg-neutral p-6 text-primary"
              >
                <p className="text-body-md">“{r.teks}”</p>
                <footer className="mt-4 text-body-sm text-muted">
                  {r.nama} · {r.tanggal}
                </footer>
              </blockquote>
            ))}
          </div>
        )}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-biscuit">
            <Image
              src="/images/before-after-placeholder.webp"
              alt="Foto before/after grooming menyusul"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              quality={75}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
            />
          </div>
          <p className="text-body-md text-muted">
            Foto before/after asli menyusul. Placeholder tidak menggunakan stock
            photo.
          </p>
        </div>
      </div>
    </section>
  );
}
