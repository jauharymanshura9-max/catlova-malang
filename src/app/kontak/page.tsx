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
      <section className="mx-auto max-w-[1200px] px-4 py-16">
        <h1 className="font-display text-4xl font-bold text-primary">
          Kontak &amp; Area Layanan
        </h1>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-primary">NAP</h2>
            <ul className="mt-4 space-y-2 text-body-md text-primary">
              <li>
                <strong>CatLova</strong>
              </li>
              <li>Jl. Terusan Mergan Raya No.Kav.1/20, Sukun, Malang</li>
              <li>Jam: 08.00-17.00 WIB</li>
              <li>
                WhatsApp:{" "}
                <a href={wa} target="_blank" rel="noopener noreferrer" className="text-tertiary hover:underline">
                  0877-5205-1970
                </a>
              </li>
              <li>
                Instagram:{" "}
                <a
                  href="https://instagram.com/cat_lova_malang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tertiary hover:underline"
                >
                  @cat_lova_malang
                </a>
              </li>
            </ul>

            <h2 className="mt-8 font-display text-2xl font-bold text-primary">
              Area Layanan
            </h2>
            <ul className="mt-4 space-y-2 text-body-md text-muted">
              {areas.map((a) => (
                <li key={a.id}>
                  <strong className="text-primary">{a.nama}</strong> — {a.coverage}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a href={wa} target="_blank" rel="noopener noreferrer">
                <Button>Chat WA</Button>
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-md border border-warmgray">
            <iframe
              title="Lokasi CatLova Malang"
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
