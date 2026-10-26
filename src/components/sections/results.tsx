const stats = [
  { label: "Rating Google", value: "5,0" },
  { label: "Ulasan", value: "211" },
  { label: "Jam buka", value: "08-17" },
  { label: "Antar-jemput", value: "Gratis" },
];

export function Results() {
  return (
    <section className="bg-neutral">
      <div className="mx-auto max-w-[1200px] px-4 py-16">
        <h2
          className="font-display font-bold leading-[1.15] text-primary"
          style={{ fontSize: "var(--text-h2)" }}
        >
          Fakta CatLova
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-md bg-softwhite p-6 text-center">
              <p
                className="font-display font-bold text-tertiary"
                style={{ fontSize: "var(--text-h2)" }}
              >
                {s.value}
              </p>
              <p className="mt-2 text-body-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
