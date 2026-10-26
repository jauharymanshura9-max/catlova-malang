# Task: Route Skeleton (7 halaman + 404)

## Layer
Structure

## Deskripsi
Buat skeleton route untuk semua halaman: `/`, `/layanan/grooming`, `/penitipan`, `/harga`, `/faq`, `/kontak`, `/not-found`. Setiap page.tsx minimal (placeholder section) + metadata via buildMetadata.

## Referensi dari Dokumen
- App-Flow §1: pages list (7 route).
- PRD §16: landing structure gate (10 elemen).
- TRD §10: folder structure.
- Impl §6-11: core features.
- Backend-Schema §7: JSON-LD.

## Acceptance Criteria
- [ ] File ada: `src/app/page.tsx`, `src/app/layanan/grooming/page.tsx`, `src/app/penitipan/page.tsx`, `src/app/harga/page.tsx`, `src/app/faq/page.tsx`, `src/app/kontak/page.tsx`, `src/app/not-found.tsx`.
- [ ] Setiap page export `metadata` (title, description) via buildMetadata.
- [ ] Setiap page render tanpa error (placeholder OK).
- [ ] `/not-found.tsx` custom 404 + CTA home/WA (App-Flow §9).
- [ ] `npm run build` jalan (semua route ter-build).

## Dependencies
Task 02-structure/01 (layout root), foundation 07 (seo lib).

## Catatan
- Skeleton boleh minimal; konten detail di layer 03-features. [ESTIMATED] Impl.
- JSON-LD per halaman ditambah di layer 03/04. [ESTIMATED] Backend-Schema §7.
