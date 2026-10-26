# Task: TypeScript Types (Content)

## Layer
Foundation

## Deskripsi
Definisikan type untuk data statis (Service, Pricing, FAQ, Area, Review) di `src/types/content.ts`. Dipakai accessor lib dan komponen.

## Referensi dari Dokumen
- Backend-Schema §2: data files (services, pricing, faq, areas, reviews).
- TRD §10: folder structure.
- Impl §3.1.

## Acceptance Criteria
- [ ] File `src/types/content.ts` berisi type: `Service`, `PricingItem`, `FaqItem`, `Area`, `Review`.
- [ ] `Service`: id, nama, deskripsi, durasi (number | null), harga (number | null), catatan?.
- [ ] `PricingItem`: id, layanan, harga (number | null), satuan, catatan?.
- [ ] `FaqItem`: id, pertanyaan, jawaban.
- [ ] `Area`: id, nama, slug, coverage.
- [ ] `Review`: id, nama, rating, teks, tanggal.
- [ ] `npm run build` / `tsc --noEmit` jalan tanpa error.

## Dependencies
Task 02.

## Catatan
- Harga nullable karena [UNKNOWN] (PRD §18). [UNKNOWN].
- Jangan tambah field di luar schema tanpa amendemen. [ESTIMATED].
