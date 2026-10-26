# Backend Schema (Minimal) — CatLova Malang

**Proyek:** CatLova Malang — salon & penitipan kucing, Sukun, Malang
**Dokumen:** 05 / Backend Schema (minimal)
**Versi:** 1.0 (Loop 6)
**Tanggal:** 2026-10-27
**Sumber otoritatif:** skill `veronica-prd` v4.1.14; `DESIGN.md`; `PRD.md`; `TRD.md`; `App-Flow.md`; `UI-UX-Brief.md`; riset EDITH 15 file.
**Status label:** [VERIFIED] = data langsung; [ESTIMATED] = rekomendasi; [UNKNOWN] = belum diverifikasi.

---

## 1. Ringkasan

v1 = statis (SSG). Tidak ada database, auth, atau server-side API. [VERIFIED] PRD §9, TRD §2-3.

Data disimpan di file JSON statis di `src/data/`. Form kontak → redirect WA (client-side, pre-filled). Analytics + cookie consent + sitemap → client-side/Next.js metadata route. [ESTIMATED] TRD §10, §14.

## 2. Data Files (src/data/*.json)

- `services.json` — daftar layanan (grooming, penitipan, add-on). Field: id, nama, deskripsi, durasi [UNKNOWN], harga [UNKNOWN]. [ESTIMATED].
- `pricing.json` — pricelist (layanan, harga, catatan). Harga [UNKNOWN] → placeholder + CTA WA. [UNKNOWN] PRD §18.
- `faq.json` — Q&A (8-12). Field: id, pertanyaan, jawaban. [ESTIMATED].
- `areas.json` — area layanan (kota/kecamatan). Field: nama, slug, coverage. [ESTIMATED].
- `reviews.json` — quote review Google (3-5). Field: nama, rating, teks, tanggal. [ESTIMATED] (verifikasi per-quote sebelum dipakai, riset #5 §6.9).

## 3. Contact Form → WA Redirect (client-side)

- Field: nama, WA, layanan (select), tanggal, catatan (opsional). ≤4 field. [ESTIMATED] riset #6 §2.2.
- Validasi: Zod (nama min 2, WA regex Indonesia, layanan required, tanggal required). [ESTIMATED].
- Submit → buka `wa.me/6287752051970?text=...` pre-filled (source-tagged). [VERIFIED] nomor WA riset #1.
- Fallback: tel: link jika WA gagal. [ESTIMATED] App-Flow §9.
- Tidak ada server endpoint di v1. [VERIFIED] TRD §2.

## 4. Analytics Events (client-side)

- GA4 + Meta Pixel (consent-based). [ESTIMATED] TRD §17.
- Event: `wa_click` (source: hero/sticky/footer), `form_submit`, `scroll_depth` (25/50/75/100), `cta_view`. [ESTIMATED].
- Vercel Analytics (Web Vitals). [ESTIMATED].

## 5. Cookie Consent (UU PDP)

- Banner bottom, dismissible, simpan preferensi di localStorage. [ESTIMATED] riset #11.
- Tracking hanya aktif setelah consent. [VERIFIED] riset #11.
- Privacy policy + terms halaman statis. [ESTIMATED].

## 6. Sitemap & Robots

- `sitemap.ts` (Next.js metadata route) — semua route + lastmod. [ESTIMATED] TRD §14.
- `robots.ts` — allow all, sitemap URL. [ESTIMATED].

## 7. Structured Data (JSON-LD)

- LocalBusiness (NAP, jam, geo, rating 5,0/211). [ESTIMATED] riset #4 §6.1.
- Service (grooming, penitipan). [ESTIMATED].
- FAQPage (dari faq.json). [ESTIMATED].
- BreadcrumbList. [ESTIMATED].

## 8. Auth & Roles

Tidak ada di v1. [VERIFIED] PRD §9. V2: Clerk/NextAuth + roles (admin, editor, user). [ESTIMATED].

## 9. File Storage

Tidak ada upload di v1. Aset statis di `public/images/`. [ESTIMATED] TRD §10. V2: Vercel Blob / Supabase Storage. [ESTIMATED].

## 10. Caching

- Static assets: immutable, cache 1 tahun. [ESTIMATED].
- HTML: stale-while-revalidate (Vercel default). [ESTIMATED].
- Image: 30 hari (TRD §15). [ESTIMATED].

## 11. V2 (Backend) — Roadmap

- Booking online: DB (Supabase/Neon) + auth + API endpoints (booking, status, admin). [ESTIMATED].
- Tracking booking 5 langkah (PETFIRST-style). [ESTIMATED] riset #12 §5.
- Team bios, syarat hotel, bilingual, review widget. [ESTIMATED] riset #12 §5.

## 12. Related

- `PRD.md` §9 (Out of Scope), §18 (Residual).
- `TRD.md` §2-3, §10, §14-15.
- `App-Flow.md` §9 (error states).
- `UI-UX-Brief.md` §H (conversion).

---

*Backend Schema minimal = input untuk Implementation Plan (06).*
