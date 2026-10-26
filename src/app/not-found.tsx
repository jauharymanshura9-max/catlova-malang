import Link from "next/link";
import { waLink } from "@/lib/wa";

const wa = waLink("Halo CatLova, saya tersesat di website. Bisa bantu?", "404");

export default function NotFound() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-24 text-center">
      <h1 className="font-display text-4xl font-bold text-primary">Halaman tidak ditemukan</h1>
      <p className="mt-4 text-body-md text-muted">
        Maaf, halaman yang Anda cari tidak ada.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-sm bg-tertiary px-4 py-[14px] font-display text-base font-semibold text-on-tertiary"
        >
          Kembali ke Home
        </Link>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-sm bg-secondary px-4 py-[14px] font-display text-base font-semibold text-primary"
        >
          Chat WA
        </a>
      </div>
    </section>
  );
}
