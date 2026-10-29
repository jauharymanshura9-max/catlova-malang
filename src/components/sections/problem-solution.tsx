import { AlertCircle, Check } from "lucide-react";

const problems = [
  "Kualitas grooming tidak konsisten antar kunjungan.",
  "Khawatir saat menitipkan kucing (update jarang).",
  "Harga tidak jelas sebelum booking.",
];

const solutions = [
  "Personal & telaten, satu kucing satu perhatian.",
  "Free antar-jemput di area Kota Malang.",
  "Update WA selama penitipan.",
  "Pricelist transparan (konfirmasi owner).",
];

export function ProblemSolution() {
  return (
    <section className="bg-softwhite pt-8 md:pt-16 pb-10 md:pb-20">
      <div className="mx-auto max-w-[1200px] px-4 py-8 md:py-16">
        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          <div>
            <h2
              className="font-display font-bold leading-[1.15] text-primary"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Masalah yang Sering Terjadi
            </h2>
            <ul className="mt-4 space-y-1 text-body-md text-muted">
              {problems.map((item) => (
                <li key={item} className="flex min-h-11 items-start gap-3 py-2">
                  <AlertCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-tertiary"
                    aria-hidden="true"
                  />
                  <span className="min-w-0">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2
              className="font-display font-bold leading-[1.15] text-primary"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Solusi CatLova
            </h2>
            <ul className="mt-4 space-y-1 text-body-md text-muted">
              {solutions.map((item) => (
                <li key={item} className="flex min-h-11 items-start gap-3 py-2">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-secondary"
                    aria-hidden="true"
                  />
                  <span className="min-w-0">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
