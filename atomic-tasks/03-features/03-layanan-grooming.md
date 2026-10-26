# Task: Halaman Layanan Grooming

## Layer
Features

## Deskripsi
Implement `/layanan/grooming`: detail paket grooming (sehat, kutu/jamur, lion cut add-on), harga placeholder, CTA WA (pre-filled booking grooming).

## Referensi dari Dokumen
- App-Flow §1, §4 (core journey grooming).
- PRD §7 (must have), §16 (elemen).
- UI-UX Brief §I.
- Impl §7.
- Backend-Schema §2 (services.json).

## Acceptance Criteria
- [ ] File `src/app/layanan/grooming/page.tsx`.
- [ ] Render detail paket dari services.json (filter grooming).
- [ ] Harga placeholder "Harga menyusul — chat WA" (karena [UNKNOWN]).
- [ ] CTA "Chat WA — Booking Grooming" → waLink pre-filled booking grooming (source 'grooming-page').
- [ ] Metadata (title, desc, OG) via buildMetadata.
- [ ] JSON-LD Service.
- [ ] `npm run build` jalan.

## Dependencies
Task 03-features/02, foundation 05 (data), foundation 07 (wa lib).

## Catatan
- Harga asli [UNKNOWN] (PRD §18.1). [UNKNOWN].
- Jangan klaim medis/drh. [UNKNOWN] PRD §18.5.
