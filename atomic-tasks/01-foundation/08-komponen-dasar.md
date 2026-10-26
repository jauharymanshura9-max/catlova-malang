# Task: Komponen Dasar (shadcn base + primitives)

## Layer
Foundation

## Deskripsi
Install shadcn/ui base (button, card, input, badge, accordion) lalu override token sesuai DESIGN.md. Buat primitives: button-primary/secondary, badge-honey/sage/error, card/card-soft, chip, input, text-muted (UI-UX Brief §J).

## Referensi dari Dokumen
- UI-UX Brief §F (component tokens), §J (component spec).
- DESIGN.md: Components, Primitives, Do's/Don'ts.
- TRD §9: key libraries (shadcn baseline).

## Acceptance Criteria
- [ ] `src/components/ui/button.tsx` dengan variant primary/secondary (+hover state).
- [ ] `src/components/ui/card.tsx` dengan variant default/soft.
- [ ] `src/components/ui/badge.tsx` dengan variant honey/sage/error.
- [ ] `src/components/ui/input.tsx` (focus ring Terracotta, error Coral).
- [ ] `src/components/ui/chip.tsx`, `text-muted`.
- [ ] `src/components/ui/accordion.tsx` (FAQ).
- [ ] Semua radius/spacing/warna dari token (bukan hex literal). [ESTIMATED] DESIGN.md Do's.
- [ ] `npm run build` jalan.

## Dependencies
Task 03 (tokens), Task 07 (utils).

## Catatan
- Satu high-emphasis action per layar (button-primary). [ESTIMATED] DESIGN.md.
- Variant = sibling key, bukan nested. [ESTIMATED] DESIGN.md.
- Jangan tambah warna/font di luar palette. [ESTIMATED] DESIGN.md.
