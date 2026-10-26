# Task: Asset Pipeline — OG Image + Favicon + Placeholder

## Layer
Foundation

## Deskripsi
Siapkan aset: favicon.ico, icon.svg, apple-icon.png, OG image 1200x630 (placeholder jika aset asli [UNKNOWN]), hero placeholder, before/after placeholder. Pipeline image AVIF/WebP (TRD §15).

## Referensi dari Dokumen
- DESIGN.md Asset Rules: logo custom + favicon + OG 1200x630; foto asli (no stock).
- TRD §15: image pipeline (AVIF→WebP→JPEG, quality 75, cache 30 hari).
- PRD §18.6: foto aset [UNKNOWN].
- Impl §15.2.

## Acceptance Criteria
- [ ] `public/favicon.ico`, `public/icon.svg`, `public/apple-icon.png` ada.
- [ ] `public/og-image.png` (1200x630) ada (placeholder jika [UNKNOWN]).
- [ ] `public/images/hero-placeholder.webp` ada (placeholder).
- [ ] `public/images/before-after-placeholder.webp` ada (placeholder).
- [ ] Semua image ≤200KB (hero), ≤50KB (thumb). [ESTIMATED] DESIGN.md.
- [ ] Alt text akan diisi di layer berikutnya (Phase 14). [ESTIMATED].
- [ ] `npm run build` jalan.

## Dependencies
Task 02.

## Catatan
- Foto asli salon [UNKNOWN] (PRD §18.6) → placeholder + CTA "Foto asli menyusul". [ESTIMATED] App-Flow §10.
- Jangan pakai stock photo (anti-pattern "Stock-Photo-Pet"). [ESTIMATED] DESIGN.md.
- Logo aset [UNKNOWN] → placeholder teks "CatLova" (Task 03). [UNKNOWN].
