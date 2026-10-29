import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";
import { waLink } from "@/lib/wa";
import areas from "@/data/areas.json";

const wa = waLink("Halo CatLova, saya mau tanya lokasi/area layanan.", "kontak-page");
const mapsQuery = encodeURIComponent("Jl. Terusan Mergan Raya No.Kav.1/20, Sukun, Malang");

export const metadata = buildMetadata({
  title: "Kontak & Area Layanan | CatLova Malang",
  description: "NAP, jam, peta, WhatsApp, Instagram, area layanan.",
  path: "/kontak",
});

export default function KontakPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CatLova Malang",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Terusan Mergan Raya No.Kav.1/20",
      addressLocality: "Sukun, Malang",
      addressCountry: "ID",
    },
    telephone: "+62-877-5205-1970",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "211",
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="mx-auto max-w-[1200px] px-4 py-8 md:py-16">
        <h1 className="font-display text-2xl font-bold text-primary sm:text-3xl md:text-h2">
          Kontak &amp; Area Layanan
        </h1>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-primary">NAP</h2>
            <ul className="mt-4 space-y-3 text-body-md text-primary">
              <li>
                <strong>CatLova</strong>
              </li>
              <li className="break-words">
                Jl. Terusan Mergan Raya No.Kav.1/20, Sukun, Malang
              </li>
              <li>Jam: 08.00-17.00 WIB</li>
              <li className="flex flex-wrap items-center gap-x-1">
                <span>WhatsApp:</span>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center text-tertiary hover:underline"
                >
                  0877-5205-1970
                </a>
              </li>
              <li className="flex flex-wrap items-center gap-x-1">
                <span>Instagram:</span>
                <a
                  href="https://instagram.com/cat_lova_malang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center text-tertiary hover:underline"
                >
                  @cat_lova_malang
                </a>
              </li>
            </ul>

            <h2 className="mt-8 font-display text-2xl font-bold text-primary">
              Area Layanan
            </h2>
            <ul className="mt-4 space-y-3 text-body-md text-muted">
              {areas.map((a) => (
                <li key={a.id} className="break-words">
                  <strong className="text-primary">{a.nama}</strong> — {a.coverage}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center md:min-h-0"
              >
                <Button className="min-h-[48px] w-full md:w-auto">Chat WA</Button>
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-md border border-warmgray">
            <iframe
              title="Lokasi CatLova Malang"
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[240px] w-full border-0 md:h-[400px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
