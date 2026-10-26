# Task: Sitemap + Robots + Metadata Route

## Layer
Structure

## Deskripsi
Buat `src/app/sitemap.ts` dan `src/app/robots.ts` (Next.js metadata route). Sitemap mencakup semua 7 route + lastmod. Robots allow all + sitemap URL.

## Referensi dari Dokumen
- TRD §14: SEO teknis (sitemap, robots).
- Backend-Schema §6: sitemap & robots.
- Impl §12.6.

## Acceptance Criteria
- [ ] File `src/app/sitemap.ts` export default function returning MetadataRoute.Sitemap.
- [ ] Sitemap berisi 7 URL (/, /layanan/grooming, /penitipan, /harga, /faq, /kontak, /404 opsional).
- [ ] `lastModified` diisi (new Date() atau fixed).
- [ ] File `src/app/robots.ts` export default function returning MetadataRoute.Robots.
- [ ] Robots: userAgent '*', allow '/', sitemap = `${SITE_URL}/sitemap.xml`.
- [ ] `npm run build` jalan; `/sitemap.xml` dan `/robots.txt` accessible di preview.

## Dependencies
Task 02-structure/01 (layout root), foundation 07 (seo lib).

## Catatan
- SITE_URL dari env `NEXT_PUBLIC_SITE_URL`. [ESTIMATED] TRD §11.
- Domain final [UNKNOWN] sampai deal → pakai env. [UNKNOWN] PRD §18.7.
