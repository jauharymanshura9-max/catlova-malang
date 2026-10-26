# Task: Bundle Size Check (JS ≤170KB gz)

## Layer
Finishing

## Deskripsi
Cek bundle size initial JS ≤170KB gzipped. Analisis dengan `@next/bundle-analyzer` (opsional) atau build output. Kurangi jika melebihi (code split, dynamic import).

## Referensi dari Dokumen
- TRD §7: performance budget (JS ≤170KB gz).
- Impl §15.3.
- TRD §9: key libraries (minimal).

## Acceptance Criteria
- [ ] Initial JS bundle ≤170KB gzipped (build output).
- [ ] CSS ≤50KB.
- [ ] Tidak ada dependency berat (framer-motion, axios, dll.) tanpa putusan. [ESTIMATED] TRD §9.
- [ ] Jika melebihi → code split / dynamic import komponen berat.
- [ ] Laporan ringkas: ukuran bundle per route.

## Dependencies
Task 05-finishing/01-02.

## Catatan
- Dependency baru WAJIB putusan VERONICA. [ESTIMATED] skill resep §2.
- GSAP/Lenis boleh (sudah di TRD §9). [ESTIMATED].
- Jangan install library baru tanpa alasan. [ESTIMATED] TRD §9.
