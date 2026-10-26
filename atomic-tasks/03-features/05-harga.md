# Task: Halaman Harga (Pricelist)

## Layer
Features

## Deskripsi
Implement `/harga`: pricelist transparan (full-width tabel), harga placeholder + CTA WA. Form minimal (nama, WA, layanan, tanggal) → WA redirect.

## Referensi dari Dokumen
- App-Flow §1, §7 (CTA flow, form).
- PRD §7 (pricelist transparan), §15 (form ≤4 field).
- UI-UX Brief §H (conversion architecture).
- Impl §9.
- Backend-Schema §3 (contact form → WA).

## Acceptance Criteria
- [ ] File `src/app/harga/page.tsx`.
- [ ] Tabel pricelist full-width (bukan selebar prose) dari pricing.json.
- [ ] Harga = placeholder "Harga menyusul — chat WA" (karena [UNKNOWN]).
- [ ] Form minimal (≤4 field: nama, WA, layanan, tanggal + catatan opsional) → WA redirect pre-filled.
- [ ] Validasi Zod (nama min 2, WA regex, layanan required, tanggal required).
- [ ] Error state inline (apa+kenapa+solusi).
- [ ] CTA "Chat WA — Tanya Harga" → waLink (source 'harga-page').
- [ ] Metadata via buildMetadata.
- [ ] `npm run build` jalan.

## Dependencies
Task 03-features/04, foundation 05 (data), foundation 07 (wa lib), 02-structure/04 (route skeleton).

## Catatan
- Harga [UNKNOWN] PRD §18.1. [UNKNOWN].
- Form conversion ≤4 field (Baymard). [VERIFIED] riset #6 §2.2.
- Telepon opsional. [ESTIMATED] riset #6 §2.2.
