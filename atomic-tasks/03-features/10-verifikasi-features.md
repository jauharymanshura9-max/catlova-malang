# Task: Verifikasi Features (Build + Render + Link)

## Layer
Features

## Deskripsi
Verifikasi layer features: build sukses, semua halaman render, link CTA WA valid, form submit redirect ke WA, JSON-LD valid.

## Referensi dari Dokumen
- Impl §19: pre-flight.
- Skill resep §6: checklist 15 item.
- PRD §16: landing structure gate (10 elemen).

## Acceptance Criteria
- [ ] `npm run build` sukses (0 error).
- [ ] `npm run lint` sukses.
- [ ] Semua 7 route render tanpa error.
- [ ] Home punya 10 elemen landing (PRD §16) — cek manual.
- [ ] CTA WA link valid (wa.me/6287752051970) di hero/sticky/footer/form.
- [ ] Form submit redirect ke WA pre-filled.
- [ ] JSON-LD valid (Rich Results Test).
- [ ] Laporan ringkas: daftar halaman + status.

## Dependencies
Task 03-features/01-09.

## Catatan
- Jika ada 404 link → perbaiki sebelum layer 04. [ESTIMATED].
- Klaim "bersih" WAJIB disertai metode + hasil terukur. [ESTIMATED] skill sweep.
- Harga [UNKNOWN] → placeholder + CTA WA (jangan difabricate). [UNKNOWN] PRD §18.1.
