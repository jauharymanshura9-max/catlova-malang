import reviews from "@/data/reviews.json";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/wa";

export function SocialProof() {
  return (
    <section className="bg-softwhite reveal">
      <div className="mx-auto max-w-[1200px] px-4 py-8 md:py-16">
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
          <div className="mt-8 grid gap-6 md:grid-cols-2 stagger">
            {reviews.map((r) => (
              <blockquote
                key={r.id}
                className="stagger-item rounded-md bg-neutral p-6 text-primary"
              >
                <p className="text-body-md">“{r.teks}”</p>
                <footer className="mt-4 text-body-sm text-muted">
                  — {r.nama} · 5★
                </footer>
              </blockquote>
            ))}
          </div>
        )}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div
            role="img"
            aria-label="Foto before/after grooming"
            className="relative aspect-[4/3] overflow-hidden rounded-md bg-gradient-to-br from-biscuit to-secondary/30 flex items-center justify-center"
          >
            <svg
              aria-hidden="true"
              className="h-16 w-16 text-secondary/60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <p className="text-body-md text-muted">
              Foto before/after — chat WA untuk lihat hasil nyata.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=CatLova+Malang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-sm text-primary hover:underline"
            >
              Lihat ulasan di Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
