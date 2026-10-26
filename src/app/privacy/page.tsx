import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Kebijakan Privasi | CatLova Malang",
  description: "Kebijakan privasi CatLova Malang.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-16">
      <h1 className="font-display text-4xl font-bold text-primary">Kebijakan Privasi</h1>
      <p className="mt-4 text-body-md text-muted">
        Konten kebijakan privasi menyusul. Hubungi kami via WhatsApp untuk info.
      </p>
    </section>
  );
}
