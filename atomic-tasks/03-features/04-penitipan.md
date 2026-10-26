# Task: Halaman Penitipan (Pet Hotel)

## Layer
Features

## Deskripsi
Implement `/penitipan`: detail penitipan (2 tier: harian + lebaran musiman), syarat (vaksin, sehat, bebas kutu, 1 kamar 1 pet), harga placeholder, CTA WA (pre-filled booking penitipan).

## Referensi dari Dokumen
- App-Flow §5 (core journey penitipan).
- PRD §7 (must have), §18 (residual).
- UI-UX Brief §I.
- Impl §8.
- Riset #12 §5 (syarat hotel), riset #10 §5 (lebaran).
- Backend-Schema §2 (services.json).

## Acceptance Criteria
- [ ] File `src/app/penitipan/page.tsx`.
- [ ] Render detail penitipan dari services.json (filter penitipan).
- [ ] Syarat hotel ditampilkan (vaksin min 2 dosis, sehat, bebas kutu, 1 kamar 1 pet) — [ESTIMATED] riset #12 §5 (konfirmasi owner).
- [ ] Harga placeholder "Harga menyusul — chat WA".
- [ ] CTA "Chat WA — Booking Penitipan" → waLink pre-filled (source 'penitipan-page').
- [ ] Metadata via buildMetadata.
- [ ] JSON-LD Service.
- [ ] `npm run build` jalan.

## Dependencies
Task 03-features/03, foundation 05 (data), foundation 07 (wa lib).

## Catatan
- Syarat hotel [ESTIMATED] (riset #12 §5) — konfirmasi owner sebelum final. [ESTIMATED].
- Harga [UNKNOWN] PRD §18.1. [UNKNOWN].
- Kapasitas peak lebaran [ESTIMATED] riset #10 §5.
