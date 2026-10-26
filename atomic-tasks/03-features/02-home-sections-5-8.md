# Task: Home Sections 5-8 (Features, Process, FAQ, Final CTA)

## Layer
Features

## Deskripsi
Implement section fitur (5-8 fitur × manfaat+visual), process (3-4 langkah), FAQ accordion (8-12), final CTA (headline benefit-driven). Compose home page.

## Referensi dari Dokumen
- PRD §16: landing structure gate (elemen 5-9).
- UI-UX Brief §I: section layout.
- Impl §6.5-6.9.
- Riset #3 §8.2 (layanan).

## Acceptance Criteria
- [ ] `src/components/sections/features.tsx`: 5-8 fitur (grooming sehat, grooming kutu/jamur, lion cut add-on, penitipan harian, penitipan lebaran, antar-jemput, free snack, update WA) × manfaat + visual.
- [ ] `src/components/sections/process.tsx`: 3-4 langkah (booking → pickup → grooming → siap dijemput).
- [ ] `src/components/sections/faq.tsx`: accordion 8-12 (data dari faq.json).
- [ ] `src/components/sections/final-cta.tsx`: headline "Pulang wangi, pulang tenang — Chat WA" + button-primary.
- [ ] `src/app/page.tsx` compose semua 10 elemen (hero, social proof, results, problem-solution, features, process, faq, final cta) + header/footer.
- [ ] `npm run build` jalan.

## Dependencies
Task 03-features/01, foundation 05/06 (data), foundation 08 (komponen).

## Catatan
- Tidak ada harga difabricate → placeholder + CTA WA. [UNKNOWN] PRD §18.1.
- Jangan klaim CCTV/medis. [UNKNOWN] PRD §18.3-5.
- Satu high-emphasis CTA per layar (anti CTA-Kembar). [ESTIMATED] DESIGN.md.
