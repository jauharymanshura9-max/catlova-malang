import services from "@/data/services.json";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { Badge } from "@/components/ui/badge";
import {
  Scissors,
  Bug,
  Crown,
  Home,
  Calendar,
  Car,
  Gift,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "grooming-sehat": Scissors,
  "grooming-kutu-jamur": Bug,
  "lion-cut": Crown,
  "penitipan-harian": Home,
  "penitipan-lebaran": Calendar,
  "antar-jemput": Car,
  "free-snack": Gift,
};

const featured = new Set(["grooming-sehat", "grooming-kutu-jamur"]);

export function Features() {
  const paid = services.filter((s) => s.id !== "free-snack");
  const free = services.find((s) => s.id === "free-snack");

  return (
    <section className="bg-neutral">
      <div className="mx-auto max-w-[1200px] px-4 py-8 md:py-16">
        <h2
          className="font-display font-bold leading-[1.15] text-primary"
          style={{ fontSize: "var(--text-h2)" }}
        >
          Layanan &amp; Manfaat
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 stagger">
          {paid.map((s) => {
            const Icon = iconMap[s.id] ?? Scissors;
            return (
              <Card key={s.id} variant="soft" className="stagger-item flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <Chip>
                    <Icon className="mr-1 inline h-4 w-4" />
                    {s.nama}
                  </Chip>
                  {featured.has(s.id) ? (
                    <Badge variant="honey">Unggulan</Badge>
                  ) : null}
                </div>
                <p className="text-body-md text-primary">{s.deskripsi}</p>
                <p className="text-body-sm text-muted">
                  —
                </p>
              </Card>
            );
          })}
        </div>
        {free ? (
          <div className="mt-6 rounded-md border border-warmgray bg-neutral p-6 flex items-start gap-4">
            <Gift className="h-6 w-6 text-secondary mt-1" />
            <div className="flex flex-col gap-1">
              <p className="font-display text-base font-semibold text-primary">
                {free.nama}
              </p>
              <p className="text-body-sm text-muted">{free.deskripsi}</p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
