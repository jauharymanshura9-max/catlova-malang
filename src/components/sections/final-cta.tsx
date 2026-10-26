import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/wa";

const wa = waLink("Halo CatLova, saya mau booking. Nama: ... Anabul: ... Tanggal: ...", "final-cta");

export function FinalCta() {
  return (
    <section className="bg-tertiary">
      <div className="mx-auto max-w-[1200px] px-4 py-16 text-center">
        <h2
          className="font-display font-bold leading-[1.15] text-on-tertiary"
          style={{ fontSize: "var(--text-h2)" }}
        >
          Pulang wangi, pulang tenang — Chat WA
        </h2>
        <p className="mt-4 text-body-md text-on-tertiary">
          Konsultasi gratis, balas kurang dari 1 jam pada jam operasional.
        </p>
        <div className="mt-8">
          <a href={wa} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary">Chat WA</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
