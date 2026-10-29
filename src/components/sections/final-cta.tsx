import { waLink } from "@/lib/wa";

const wa = waLink("Halo CatLova, saya mau booking. Nama: ... Anabul: ... Tanggal: ...", "final-cta");

export function FinalCta() {
  return (
    <section className="bg-tertiary">
      <div className="mx-auto max-w-[1200px] px-4 py-10 md:py-16 text-center">
        <h2 className="font-display text-2xl font-bold leading-[1.15] text-on-tertiary sm:text-3xl md:text-h2">
          Pulang wangi, pulang tenang — Chat WA
        </h2>
        <p className="mt-4 text-body-md text-on-tertiary">
          Konsultasi gratis, balas kurang dari 1 jam pada jam operasional.
        </p>
        <div className="mt-8">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] w-full items-center justify-center rounded-sm bg-gray-900 px-4 py-[14px] font-display text-base font-semibold text-white shadow-sm transition-[background-color,color,box-shadow,transform] duration-200 ease-out hover:bg-gray-800 hover:shadow-md active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-tertiary sm:w-auto"
          >
            Chat WA
          </a>
        </div>
      </div>
    </section>
  );
}
