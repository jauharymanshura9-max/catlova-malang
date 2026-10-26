# Task: Halaman FAQ

## Layer
Features

## Deskripsi
Implement `/faq`: accordion semua FAQ (dari faq.json), 8-12 pertanyaan, CTA WA di bawah. JSON-LD FAQPage.

## Referensi dari Dokumen
- PRD §7 (FAQ 8-12).
- App-Flow §1, §8.
- UI-UX Brief §I (elemen 8).
- Backend-Schema §7 (FAQPage JSON-LD).
- Impl §10.

## Acceptance Criteria
- [ ] File `src/app/faq/page.tsx`.
- [ ] Accordion render semua faq.json.
- [ ] CTA "Masih ada pertanyaan? Chat WA" → waLink (source 'faq-page').
- [ ] Metadata via buildMetadata.
- [ ] JSON-LD FAQPage (dari faq.json).
- [ ] `npm run build` jalan.

## Dependencies
Task 03-features/05, foundation 06 (faq data), 02-structure/04.

## Catatan
- FAQ topik: harga, jam, vaksin, antar-jemput, update WA, snack, garansi, kapasitas lebaran. [ESTIMATED] riset #6 §3.1.
- Jangan klaim CCTV/medis (jawaban FAQ harus jujur [UNKNOWN]). [UNKNOWN] PRD §18.3-5.
