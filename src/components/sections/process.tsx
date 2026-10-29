const steps = [
  { title: "Booking", body: "Chat WA atau isi form singkat (nama, WA, layanan, tanggal)." },
  { title: "Pickup", body: "Antar-jemput gratis (area Kota Malang)." },
  { title: "Grooming / Inap", body: "Pengerjaan telaten + update WA." },
  { title: "Siap dijemput", body: "Notifikasi saat selesai, siap dijemput." },
];

export function Process() {
  return (
    <section className="bg-softwhite">
      <div className="mx-auto max-w-[1200px] px-4 py-6 md:py-12">
        <h2
          className="font-display font-bold leading-[1.15] text-primary"
          style={{ fontSize: "var(--text-h2)" }}
        >
          Proses
        </h2>
        <ol className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="flex items-start gap-4 rounded-md bg-neutral p-4 md:block"
            >
              <span className="w-7 shrink-0 font-display text-2xl font-bold leading-none text-tertiary tabular-nums md:leading-normal">
                {i + 1}
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-base font-semibold text-primary md:mt-2">
                  {s.title}
                </h3>
                <p className="mt-1 text-body-sm text-muted md:mt-2">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
