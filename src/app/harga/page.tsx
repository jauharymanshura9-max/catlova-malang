import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";
import { waLink } from "@/lib/wa";
import { ContactForm } from "@/components/sections/contact-form";
import pricing from "@/data/pricing.json";

const wa = waLink("Halo CatLova, saya mau tanya harga.", "harga-page");

export const metadata = buildMetadata({
  title: "Harga Grooming & Penitipan | CatLova Malang",
  description: "Pricelist transparan + CTA WhatsApp.",
  path: "/harga",
});

export default function HargaPage() {
  return (
    <main>
      <section className="mx-auto max-w-[1200px] px-4 py-16">
        <h1 className="font-display text-4xl font-bold text-primary">Harga</h1>
        <p className="mt-4 max-w-[66ch] text-body-md text-muted">
          Pricelist transparan. Tanya harga via WhatsApp.
        </p>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left">
            <thead>
              <tr className="border-b border-warmgray">
                <th className="py-3 font-display text-base font-semibold text-primary">
                  Layanan
                </th>
                <th className="py-3 font-display text-base font-semibold text-primary">
                  Harga
                </th>
                <th className="py-3 font-display text-base font-semibold text-primary">
                  Satuan
                </th>
                <th className="py-3 font-display text-base font-semibold text-primary">
                  Catatan
                </th>
              </tr>
            </thead>
            <tbody>
              {pricing.map((p) => (
                <tr key={p.id} className="border-b border-warmgray/60">
                  <td className="py-3 text-body-md text-primary">{p.layanan}</td>
                  <td className="py-3 text-body-md text-muted">
                    {p.harga === null ? "—" : p.harga}
                  </td>
                  <td className="py-3 text-body-sm text-muted">{p.satuan}</td>
                  <td className="py-3 text-body-sm text-muted">{p.catatan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10">
          <a href={wa} target="_blank" rel="noopener noreferrer">
            <Button>Chat WA — Tanya Harga</Button>
          </a>
        </div>

        <div className="mt-12">
          <h2 className="font-display text-2xl font-bold text-primary">
            Booking via Form
          </h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
