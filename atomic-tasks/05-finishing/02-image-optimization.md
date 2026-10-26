# Task: Image Optimization (AVIF/WebP, Quality 75, Lazy/Priority)

## Layer
Finishing

## Deskripsi
Optimasi image: format AVIF→WebP→JPEG, quality 75, hero priority + lazy below fold, blur placeholder (LQIP), cache 30 hari. Verifikasi size (hero ≤200KB, thumb ≤50KB).

## Referensi dari Dokumen
- TRD §15: image pipeline.
- DESIGN.md Asset Rules: hero ≤200KB, WebP/AVIF.
- Impl §15.2.
- Backend-Schema §10: caching.

## Acceptance Criteria
- [ ] Semua image di `public/images/` ≤200KB (hero), ≤50KB (thumb).
- [ ] next/image pakai `formats: ['image/avif','image/webp']`.
- [ ] Hero image: `priority` + `placeholder="blur"`.
- [ ] Below-fold image: `loading="lazy"`.
- [ ] Cache header 30 hari (minimumCacheTTL 2592000).
- [ ] Alt text semua image (deskriptif).
- [ ] `npm run build` jalan.

## Dependencies
Task 05-finishing/01, foundation 09 (asset pipeline).

## Catatan
- Foto asli salon [UNKNOWN] → placeholder + CTA "Foto asli menyusul". [UNKNOWN] PRD §18.6.
- Jangan pakai stock photo (anti-pattern "Stock-Photo-Pet"). [ESTIMATED] DESIGN.md.
- Jangan klaim CCTV/medis. [UNKNOWN] PRD §18.3-5.
