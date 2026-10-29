const stats = [
  { label: "Rating Google", value: "5,0" },
  { label: "Ulasan", value: "211" },
  { label: "Jam buka", value: "08-17" },
  { label: "Antar-jemput", value: "Gratis" },
];

export function Results() {
  return (
    <section className="bg-neutral">
      <div className="mx-auto max-w-[1200px] px-4 py-8 md:py-16">
        <h2
          className="font-display font-bold leading-[1.15] text-primary"
          style={{ fontSize: "var(--text-h2)" }}
        >
          Fakta CatLova
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => {
            const counterProps =
              s.label === "Rating Google"
                ? { "data-counter": "5.0", "data-decimals": "1" }
                : s.label === "Ulasan"
                  ? { "data-counter": "211", "data-decimals": "0" }
                  : {};
            return (
              <div
                key={s.label}
                className="min-w-0 rounded-md bg-softwhite p-4 text-center sm:p-6"
              >
                <p
                  className="font-display text-2xl font-bold leading-tight text-tertiary tabular-nums sm:text-3xl md:[font-size:var(--text-h2)]"
                  {...counterProps}
                >
                  {s.value}
                </p>
                <p className="mt-2 text-body-sm leading-snug text-gray-700">{s.label}</p>
              </div>
            );
          })}
        </div>
        <a
          href="https://www.google.com/maps/search/?api=1&query=CatLova+Malang"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-[44px] items-center text-body-sm text-primary hover:underline md:min-h-0"
        >
          Lihat ulasan di Google Maps →
        </a>
      </div>
    </section>
  );
}
