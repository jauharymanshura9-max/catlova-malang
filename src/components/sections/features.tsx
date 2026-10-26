import services from "@/data/services.json";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";

export function Features() {
  return (
    <section className="bg-neutral">
      <div className="mx-auto max-w-[1200px] px-4 py-16">
        <h2
          className="font-display font-bold leading-[1.15] text-primary"
          style={{ fontSize: "var(--text-h2)" }}
        >
          Layanan &amp; Manfaat
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.id} variant="soft" className="flex flex-col gap-3">
              <Chip>{s.nama}</Chip>
              <p className="text-body-md text-primary">{s.deskripsi}</p>
              <p className="text-body-sm text-muted">
                Harga menyusul — chat WA untuk penawaran.
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
