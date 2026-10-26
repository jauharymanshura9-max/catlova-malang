# Task: Performance — Lighthouse Audit

## Layer
Finishing

## Deskripsi
Jalankan Lighthouse audit (Performance, Accessibility, Best Practices, SEO) di preview. Target score >90 semua kategori. Perbaiki isu yang muncul (render-blocking, image size, CLS).

## Referensi dari Dokumen
- TRD §7: performance budget (LCP ≤2,5s, INP ≤200ms, CLS ≤0,1).
- TRD §20: testing (Lighthouse CI).
- Impl §15.1.
- Skill resep §6: checklist 15 item.

## Acceptance Criteria
- [ ] Lighthouse Performance ≥90.
- [ ] Lighthouse Accessibility ≥90.
- [ ] Lighthouse Best Practices ≥90.
- [ ] Lighthouse SEO ≥90.
- [ ] LCP ≤2,5s, CLS ≤0,1, INP ≤200ms (field/lab).
- [ ] Laporan ringkas: skor per kategori + isu yang diperbaiki.

## Dependencies
Task 04-interior (verifikasi), 03-features (semua halaman).

## Catatan
- Jika score <90 → perbaiki sebelum deploy preview. [ESTIMATED].
- Klaim "bersih" WAJIB disertai metode + hasil terukur. [ESTIMATED] skill sweep.
- Harga [UNKNOWN] tidak mempengaruhi performance. [UNKNOWN] PRD §18.1.
