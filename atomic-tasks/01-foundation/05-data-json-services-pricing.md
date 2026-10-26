# Task: Data JSON — Services + Pricing

## Layer
Foundation

## Deskripsi
Tulis `src/data/services.json` dan `src/data/pricing.json`. Harga [UNKNOWN] → null + placeholder "Harga menyusul — chat WA". Konten dari riset (grooming sehat, grooming kutu/jamur, lion cut add-on, penitipan 2 tier, antar-jemput, free snack, update WA).

## Referensi dari Dokumen
- Backend-Schema §2: services, pricing.
- PRD §7 (Must Have), §18 (Residual [UNKNOWN] harga).
- Impl §3.1.
- Riset #3 §8.2 (layanan + harga benchmark).

## Acceptance Criteria
- [ ] `src/data/services.json` valid JSON, array of Service (sesuai type).
- [ ] `src/data/pricing.json` valid JSON, array of PricingItem.
- [ ] Semua harga = null (karena [UNKNOWN]) + catatan "Harga menyusul — chat WA untuk penawaran".
- [ ] Layanan minimal: grooming sehat, grooming kutu/jamur, lion cut (add-on), penitipan harian, penitipan lebaran (musiman), antar-jemput, free snack.
- [ ] Tidak ada harga yang difabricate (Truth-Level). [UNKNOWN].
- [ ] `npm run build` jalan (JSON import).

## Dependencies
Task 04 (types).

## Catatan
- Harga asli menunggu konfirmasi owner (PRD §18.1). [UNKNOWN].
- Jangan klaim CCTV/medis (PRD §18.3, §18.5). [UNKNOWN].
