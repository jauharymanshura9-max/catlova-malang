# Task: Playwright Smoke Test

## Layer
Finishing

## Deskripsi
Buat smoke test Playwright: home load, WA click, form submit redirect, 404 page. Jalankan di preview/local.

## Referensi dari Dokumen
- TRD §20: testing (Playwright smoke).
- Impl §14.3.
- App-Flow §4, §9: journey + error states.

## Acceptance Criteria
- [ ] File `tests/smoke.spec.ts` (atau `e2e/smoke.spec.ts`).
- [ ] Test 1: home load (title, hero, CTA visible).
- [ ] Test 2: WA click → link wa.me/6287752051970 valid.
- [ ] Test 3: form submit → redirect WA pre-filled.
- [ ] Test 4: 404 page render + CTA.
- [ ] Semua test pass (exit 0).
- [ ] Laporan ringkas: jumlah test + pass/fail.

## Dependencies
Task 05-finishing/01-03, 03-features (halaman selesai).

## Catatan
- Test di local + preview. [ESTIMATED].
- Jangan test data asli [UNKNOWN] (harga) — test placeholder. [UNKNOWN] PRD §18.1.
- Klaim "bersih" WAJIB disertai metode + hasil terukur. [ESTIMATED] skill sweep.
