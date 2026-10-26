# Task: Header — Nav + CTA Chat WA

## Layer
Structure

## Deskripsi
Buat header: logo (kiri), nav links (Layanan, Penitipan, Harga, FAQ, Kontak), CTA "Chat WA" (kanan, button-primary). Mobile: hamburger → drawer. Sticky top.

## Referensi dari Dokumen
- App-Flow §2: navigation type (flat, header top bar).
- UI-UX Brief §I (home section), §J (button-primary).
- DESIGN.md: Components (button-primary), Do's (satu high-emphasis per layar).
- Impl §12.1.

## Acceptance Criteria
- [ ] File `src/components/layout/header.tsx`.
- [ ] Nav links: `/layanan/grooming`, `/penitipan`, `/harga`, `/faq`, `/kontak`.
- [ ] CTA "Chat WA" → `waLink(..., 'header')` (button-primary).
- [ ] Mobile (<768px): hamburger icon → drawer slide dari kanan (nav + CTA).
- [ ] Desktop (>=768px): horizontal nav.
- [ ] Sticky top (position sticky, top 0, z-index).
- [ ] A11y: aria-label, keyboard nav, focus visible.
- [ ] `npm run build` jalan.

## Dependencies
Task 02-structure/01 (layout root), foundation 08 (komponen dasar), foundation 07 (wa lib).

## Catatan
- Logo placeholder jika aset [UNKNOWN] (foundation 03/09). [UNKNOWN].
- Jangan dua button high-emphasis (anti-pattern CTA-Kembar). [ESTIMATED] DESIGN.md.
