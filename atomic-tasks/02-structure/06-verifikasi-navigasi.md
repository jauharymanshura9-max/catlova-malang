# Task: Verifikasi Navigasi (Build + Link Check)

## Layer
Structure

## Deskripsi
Verifikasi layer structure: build sukses, semua route render, link internal tidak 404, header/footer/sticky CTA render, sitemap/robots accessible.

## Referensi dari Dokumen
- Impl §19: pre-flight (path, angka, sitasi).
- Skill resep §6: checklist 15 item (sebagian structure).
- App-Flow §2: navigation.

## Acceptance Criteria
- [ ] `npm run build` sukses (0 error).
- [ ] `npm run lint` sukses.
- [ ] Semua 7 route render tanpa error (curl preview / dev).
- [ ] Link internal (header nav, footer, sticky CTA) tidak 404.
- [ ] Sitemap.xml + robots.txt accessible.
- [ ] Laporan ringkas: daftar route + status.

## Dependencies
Task 02-structure/01-05.

## Catatan
- Jika ada link 404 → perbaiki sebelum layer 03. [ESTIMATED].
- Klaim "bersih" WAJIB disertai metode + hasil terukur. [ESTIMATED] skill sweep.
