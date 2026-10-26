const steps = [
  { title: "Booking", body: "Chat WA atau isi form singkat (nama, WA, layanan, tanggal)." },
  { title: "Pickup", body: "Antar-jemput gratis (area Kota Malang)." },
  { title: "Grooming / Inap", body: "Pengerjaan telaten + update WA." },
  { title: "Siap dijemput", body: "Notifikasi saat selesai, siap dijemput." },
];

export function Process() {
  return (
    <section className="bg-softwhite">
      <div className="mx-auto max-w-[1200px] px-4 py-16">
        <h2
          className="font-display font-bold leading-[1.15] text-primary"
          style={{ fontSize: "var(--text-h2)" }}
        >
          Proses
        </h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-md bg-neutral p-6">
              <span className="font-display text-2xl font-bold text-tertiary">
                {i + 1}
              </span>
              <h3 className="mt-2 font-display text-base font-semibold text-primary">
                {s.title}
              </h3>
              <p className="mt-2 text-body-sm text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
