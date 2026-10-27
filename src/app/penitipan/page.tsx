import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { buildMetadata } from "@/lib/seo";
import { waLink } from "@/lib/wa";
import services from "@/data/services.json";

const boardingServices = services.filter((s) =>
  ["penitipan-harian", "penitipan-lebaran"].includes(s.id),
);

const wa = waLink(
  "Halo CatLova, saya mau booking penitipan. Nama: ... Anabul: ... Check-in: ... Check-out: ...",
  "penitipan-page",
);

export const metadata = buildMetadata({
  title: "Penitipan Kucing (Pet Hotel) | CatLova Malang",
  description: "Detail penitipan, syarat, CTA WhatsApp.",
  path: "/penitipan",
});

export default function PenitipanPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Penitipan Kucing",
    provider: {
      "@type": "LocalBusiness",
      name: "CatLova Malang",
      address: "Jl. Terusan Mergan Raya No.Kav.1/20, Sukun, Malang",
    },
    areaServed: "Malang",
  };

  const syarat = [
    "Vaksinasi minimal 2 dosis (konfirmasi owner)",
    "Kucing sehat, bebas kutu",
    "1 kamar 1 pet",
    "Bawa pakan & obat (jika ada)",
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="mx-auto max-w-[1200px] px-4 py-16">
        <h1 className="font-display text-4xl font-bold text-primary">
          Penitipan Kucing (Pet Hotel)
        </h1>
        <p className="mt-4 max-w-[66ch] text-body-md text-muted">
          Penitipan harian &amp; musiman (lebaran). Tanya harga via WhatsApp.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {boardingServices.map((s) => (
            <Card key={s.id} variant="soft" className="flex flex-col gap-3">
              <Chip>{s.nama}</Chip>
              <p className="text-body-md text-primary">{s.deskripsi}</p>
              <p className="text-body-sm text-muted">
                Harga: — — tanya via WhatsApp.
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="font-display text-2xl font-bold text-primary">Syarat (estimasi)</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-body-md text-muted">
            {syarat.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p className="mt-4 text-body-sm text-muted">
            Syarat hotel [ESTIMATED] — konfirmasi owner sebelum final.
          </p>
        </div>

        <div className="mt-10">
          <a href={wa} target="_blank" rel="noopener noreferrer">
            <Button>Chat WA — Booking Penitipan</Button>
          </a>
        </div>
      </section>
    </main>
  );
}
