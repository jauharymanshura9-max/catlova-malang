# Task: Halaman Kontak & Area Layanan

## Layer
Features

## Deskripsi
Implement `/kontak`: NAP, jam, Maps embed, WA, IG, area layanan (dari areas.json), CTA WA.

## Referensi dari Dokumen
- App-Flow §1.
- PRD §7 (NAP jelas di hero + jam), §16 (footer NAP).
- UI-UX Brief §I (elemen 10).
- Impl §11.1.
- Riset #1 (alamat, WA, IG).

## Acceptance Criteria
- [ ] File `src/app/kontak/page.tsx`.
- [ ] NAP: Jl. Terusan Mergan Raya No.Kav.1/20, Sukun, Malang. [VERIFIED] riset #1.
- [ ] Jam: 08.00-17.00 (tanpa klaim hari). [UNKNOWN] PRD §18.2.
- [ ] WA: 0877-5205-1970 (link wa.me). [VERIFIED] riset #1.
- [ ] IG: @cat_lova_malang (link). [VERIFIED] riset #1.
- [ ] Google Maps embed (lokasi).
- [ ] Area layanan dari areas.json.
- [ ] CTA "Chat WA" → waLink (source 'kontak-page').
- [ ] Metadata + JSON-LD LocalBusiness.
- [ ] `npm run build` jalan.

## Dependencies
Task 03-features/06, foundation 06 (areas), 02-structure/04.

## Catatan
- CCTV/medis tidak diklaim. [UNKNOWN] PRD §18.3-5.
- Domain [UNKNOWN] → canonical dari env. [UNKNOWN] PRD §18.7.
