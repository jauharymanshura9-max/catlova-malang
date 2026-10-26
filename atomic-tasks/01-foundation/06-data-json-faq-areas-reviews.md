# Task: Data JSON — FAQ + Areas + Reviews

## Layer
Foundation

## Deskripsi
Tulis `src/data/faq.json`, `src/data/areas.json`, `src/data/reviews.json`. FAQ 8-12 pertanyaan dari riset #6. Reviews 3-5 quote (verifikasi per-quote, riset #5 §6.9). Areas dari riset #1 (Sukun, Malang).

## Referensi dari Dokumen
- Backend-Schema §2: faq, areas, reviews.
- PRD §7 (Objection handling + FAQ), §18 (quote ambigu).
- Impl §3.1.
- Riset #6 §3.1 (FAQ), riset #5 §6.9 (quote ambigu), riset #1 (alamat).

## Acceptance Criteria
- [ ] `src/data/faq.json` valid JSON, 8-12 FaqItem.
- [ ] `src/data/areas.json` valid JSON, minimal area Sukun + kota Malang.
- [ ] `src/data/reviews.json` valid JSON, 3-5 Review (rating 5,0) — HANYA quote yang sudah diverifikasi sumber (jika ragu, kosongkan + placeholder).
- [ ] Tidak ada quote ambigu (CatLova vs Dr.Meoww) tanpa verifikasi. [UNKNOWN] riset #5 §6.9.
- [ ] Tidak ada angka statistik tanpa sumber (anti-slop). [ESTIMATED] UI-UX Brief Kontrak Rasa.
- [ ] `npm run build` jalan.

## Dependencies
Task 04 (types).

## Catatan
- Quote "owner sabar" ambigu sumber → verifikasi per-quote sebelum dipakai di copy. [UNKNOWN] riset #5 §6.9.
- Jika review asli [UNKNOWN], pakai fallback rating 5,0/211 + CTA. [ESTIMATED] App-Flow §10.
