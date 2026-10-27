import faq from "@/data/faq.json";
import { Accordion } from "@/components/ui/accordion";

export function FaqSection() {
  const items = faq.map((f) => ({
    id: f.id,
    title: f.pertanyaan,
    content: f.jawaban,
  }));

  return (
    <section className="bg-neutral">
      <div className="mx-auto max-w-[1200px] px-4 py-8 md:py-16">
        <h2
          className="font-display font-bold leading-[1.15] text-primary"
          style={{ fontSize: "var(--text-h2)" }}
        >
          FAQ
        </h2>
        <div className="mt-8">
          <Accordion items={items} />
        </div>
      </div>
    </section>
  );
}
