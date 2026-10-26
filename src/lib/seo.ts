import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://catlova-malang.vercel.app";

export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    icons: {
      icon: ["/favicon.ico", "/icon.svg"],
      apple: "/apple-icon.png",
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "CatLova Malang",
      type: "website",
      locale: "id_ID",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
