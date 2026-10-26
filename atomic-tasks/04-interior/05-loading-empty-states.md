# Task: Loading + Empty States

## Layer
Interior

## Deskripsi
Implement loading states (skeleton per card/section, blur placeholder LQIP untuk hero image) dan empty states (pricelist kosong, before/after kosong, review kosong) dengan placeholder + CTA.

## Referensi dari Dokumen
- App-Flow §10-11: empty states, loading states.
- UI-UX Brief §E (loading experience).
- Skill veronica-prd §04: empty states (desain spesial).
- TRD §15: image pipeline (blur placeholder).

## Acceptance Criteria
- [ ] Skeleton component untuk card/section (bukan spinner).
- [ ] Hero image: blur placeholder (LQIP) + priority.
- [ ] Empty state pricelist: "Harga menyusul — chat WA untuk penawaran" + CTA.
- [ ] Empty state before/after: "Foto asli menyusul" + CTA.
- [ ] Empty state review: fallback rating 5,0/211 + CTA.
- [ ] Loading state di form submit ("Mengarahkan ke WhatsApp...").
- [ ] `npm run build` jalan.

## Dependencies
Task 04-interior/04, 03-features (halaman selesai).

## Catatan
- Empty states didesain spesial, bukan "No data". [ESTIMATED] skill veronica-prd §03.
- Error messages human-readable + solutif. [ESTIMATED] skill veronica-prd §04.
- Loading state sesuai layout (skeleton), bukan spinner. [ESTIMATED] skill veronica-prd §04.
