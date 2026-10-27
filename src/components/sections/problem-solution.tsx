export function ProblemSolution() {
  return (
    <section className="bg-softwhite pt-8 md:pt-16 pb-10 md:pb-20">
      <div className="mx-auto max-w-[1200px] px-4 py-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2
              className="font-display font-bold leading-[1.15] text-primary"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Masalah yang Sering Terjadi
            </h2>
            <ul className="mt-4 space-y-3 text-body-md text-muted">
              <li>Kualitas grooming tidak konsisten antar kunjungan.</li>
              <li>Khawatir saat menitipkan kucing (update jarang).</li>
              <li>Harga tidak jelas sebelum booking.</li>
            </ul>
          </div>
          <div>
            <h2
              className="font-display font-bold leading-[1.15] text-primary"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Solusi CatLova
            </h2>
            <ul className="mt-4 space-y-3 text-body-md text-muted">
              <li>Personal &amp; telaten, satu kucing satu perhatian.</li>
              <li>Free antar-jemput di area Kota Malang.</li>
              <li>Update WA selama penitipan.</li>
              <li>Pricelist transparan (konfirmasi owner).</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
