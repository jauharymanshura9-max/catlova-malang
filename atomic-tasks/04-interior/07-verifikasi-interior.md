# Task: Verifikasi Interior (Build + A11y + Responsive)

## Layer
Interior

## Deskripsi
Verifikasi layer interior: build, lint, type check, a11y (axe 0), responsive (3 breakpoint), animasi, loading/empty states, cookie consent.

## Referensi dari Dokumen
- Impl §14: responsive & testing.
- TRD §13, §20: a11y + testing.
- Skill resep §6: checklist 15 item.

## Acceptance Criteria
- [ ] `npm run build` sukses (0 error).
- [ ] `npm run lint` sukses.
- [ ] `tsc --noEmit` sukses.
- [ ] axe-core 0 violation (manual + automated).
- [ ] Responsive 3 breakpoint lulus (mobile/tablet/desktop).
- [ ] No sideways scroll @320px.
- [ ] Prefers-reduced-motion disable animasi.
- [ ] Cookie consent banner functional.
- [ ] Laporan ringkas: daftar cek + status.

## Dependencies
Task 04-interior/01-06.

## Catatan
- Klaim "bersih" WAJIB disertai metode + hasil terukur. [ESTIMATED] skill sweep.
- Jika ada violation → perbaiki sebelum layer 05. [ESTIMATED].
- Harga [UNKNOWN] → placeholder + CTA WA (jangan difabricate). [UNKNOWN] PRD §18.1.
