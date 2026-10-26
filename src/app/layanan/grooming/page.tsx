import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { buildMetadata } from "@/lib/seo";
import { waLink } from "@/lib/wa";
import services from "@/data/services.json";

const groomingServices = services.filter((s) =>
  ["grooming-sehat", "grooming-kutu-jamur", "lion-cut"].includes(s.id),
);

const wa = waLink(
  "Halo CatLova, saya mau booking grooming. Nama: ... Anabul: ... Layanan: ... Tanggal: ...",
  "grooming-page",
);

export const metadata = buildMetadata({
  title: "Layanan Grooming Kucing | CatLova Malang",
  description: "Detail paket grooming (sehat, kutu/jamur, lion cut add-on), harga placeholder, CTA WhatsApp.",
  path: "/layanan/grooming",
});

export default function GroomingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Grooming Kucing",
    provider: {
      "@type": "LocalBusiness",
      name: "CatLova Malang",
      address: "Jl. Terusan Mergan Raya No.Kav.1/20, Sukun, Malang",
    },
    areaServed: "Malang",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="mx-auto max-w-[1200px] px-4 py-16">
        <h1 className="font-display text-4xl font-bold text-primary">
          Layanan Grooming
        </h1>
        <p className="mt-4 max-w-[66ch] text-body-md text-muted">
          Paket grooming untuk kucing. Harga menyusul — chat WA untuk penawaran.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {groomingServices.map((s) => (
            <Card key={s.id} variant="soft" className="flex flex-col gap-3">
              <Chip>{s.nama}</Chip>
              <p className="text-body-md text-primary">{s.deskripsi}</p>
              <p className="text-body-sm text-muted">
                Durasi: {s.durasi ? `${s.durasi} menit` : "konfirmasi via WA"} · Harga: placeholder
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <a href={wa} target="_blank" rel="noopener noreferrer">
            <Button>Chat WA — Booking Grooming</Button>
          </a>
        </div>
      </section>
    </main>
  );
}
