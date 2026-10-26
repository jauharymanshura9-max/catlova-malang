import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { buildMetadata } from "@/lib/seo";
import { waLink } from "@/lib/wa";
import faq from "@/data/faq.json";

const wa = waLink("Halo CatLova, saya mau tanya lebih lanjut.", "faq-page");

export const metadata = buildMetadata({
  title: "FAQ | CatLova Malang",
  description: "Pertanyaan yang sering diajukan.",
  path: "/faq",
});

export default function FaqPage() {
  const items = faq.map((f) => ({
    id: f.id,
    title: f.pertanyaan,
    content: f.jawaban,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.pertanyaan,
      acceptedAnswer: { "@type": "Answer", text: f.jawaban },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="mx-auto max-w-[1200px] px-4 py-16">
        <h1 className="font-display text-4xl font-bold text-primary">FAQ</h1>
        <p className="mt-4 max-w-[66ch] text-body-md text-muted">
          Pertanyaan yang sering diajukan. Jawaban jujur sesuai data yang
          tersedia.
        </p>
        <div className="mt-8">
          <Accordion items={items} />
        </div>
        <div className="mt-10">
          <p className="text-body-md text-muted">Masih ada pertanyaan?</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
            <Button>Chat WA</Button>
          </a>
        </div>
      </section>
    </main>
  );
}
