# Task: Verifikasi Foundation (Build + Lint + Type Check)

## Layer
Foundation

## Deskripsi
Jalankan verifikasi akhir layer foundation: `npm run build`, `npm run lint`, `tsc --noEmit`. Pastikan semua token, data JSON, lib, komponen dasar valid dan build sukses.

## Referensi dari Dokumen
- Impl §19: pre-flight (path, angka, sitasi diverifikasi).
- Skill resep §6: checklist 15 item (sebagian foundation).
- TRD §7, §20: performance + testing baseline.

## Acceptance Criteria
- [ ] `npm run build` sukses (0 error).
- [ ] `npm run lint` sukses (0 error, warning boleh).
- [ ] `tsc --noEmit` sukses (0 error).
- [ ] Semua file di `src/data/*.json` valid JSON.
- [ ] Semua path file yang ditulis di task 01-09 diverifikasi ada (grep/ls).
- [ ] Laporan ringkas: daftar file yang dibuat + status build.

## Dependencies
Task 01-09.

## Catatan
- Jika build gagal karena path/angka salah → perbaiki di task ini, jangan lanjut ke layer 02. [ESTIMATED] Impl §19.
- Klaim "bersih" WAJIB disertai metode + hasil terukur. [ESTIMATED] skill sweep.
