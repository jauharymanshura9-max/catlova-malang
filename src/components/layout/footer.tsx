import Link from "next/link";
import { waLink } from "@/lib/wa";

const wa = waLink("Halo CatLova, saya mau tanya layanan.", "footer");

export function Footer() {
  return (
    <footer className="border-t border-warmgray bg-neutral">
      <div className="mx-auto max-w-[1200px] px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-xl font-bold text-primary">CatLova</p>
            <p className="mt-2 text-body-sm text-muted">
              Grooming &amp; penitipan kucing telaten di Sukun, Malang.
            </p>
          </div>

          <div>
            <p className="font-display text-base font-semibold text-primary">NAP &amp; Jam</p>
            <ul className="mt-3 space-y-1 text-body-sm text-primary">
              <li>Jl. Terusan Mergan Raya No.Kav.1/20, Sukun, Malang</li>
              <li>Jam: 08.00-17.00 WIB</li>
              <li>
                IG:{" "}
                <a
                  href="https://instagram.com/cat_lova_malang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @cat_lova_malang
                </a>
              </li>
              <li>
                WA:{" "}
                <a href={wa} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  0877-5205-1970
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display text-base font-semibold text-primary">Tautan</p>
            <ul className="mt-3 space-y-1 text-body-sm">
              <li>
                <Link href="/layanan/grooming" className="text-primary hover:text-tertiary">
                  Layanan Grooming
                </Link>
              </li>
              <li>
                <Link href="/penitipan" className="text-primary hover:text-tertiary">
                  Penitipan
                </Link>
              </li>
              <li>
                <Link href="/harga" className="text-primary hover:text-tertiary">
                  Harga
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-primary hover:text-tertiary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-primary hover:text-tertiary">
                  Kontak
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-primary hover:text-tertiary">
                  Privasi
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-primary hover:text-tertiary">
                  Syarat &amp; Ketentuan
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-warmgray pt-4 text-body-sm text-muted">
          © {new Date().getFullYear()} CatLova Malang. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  );
}
