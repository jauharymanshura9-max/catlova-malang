import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://catlova-malang.vercel.app";

const routes = [
  "/",
  "/layanan/grooming",
  "/penitipan",
  "/harga",
  "/faq",
  "/kontak",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
  }));
}
