# App Flow — CatLova Malang (Navigation & User Journey)

**Proyek:** CatLova Malang — salon & penitipan kucing, Sukun, Malang
**Dokumen:** 03 / App Flow
**Versi:** 1.0 (Loop 4)
**Tanggal:** 2026-10-27
**Sumber otoritatif:** skill `veronica-prd` v4.1.14; `DESIGN.md`; `PRD.md`; `TRD.md`; riset EDITH 15 file.
**Status label:** [VERIFIED] = data langsung; [ESTIMATED] = rekomendasi; [UNKNOWN] = belum diverifikasi.

---

## 1. Pages List (tujuan halaman)

| Route | Halaman | Tujuan |
|---|---|---|
| `/` | Home (landing) | Hook + trust + service + process + FAQ + final CTA. Konversi utama. |
| `/layanan/grooming` | Layanan Grooming | Detail paket grooming, harga placeholder, CTA WA. |
| `/penitipan` | Penitipan (Pet Hotel) | Detail penitipan, syarat, harga placeholder, CTA WA. |
| `/harga` | Harga | Pricelist transparan (placeholder + CTA WA). |
| `/faq` | FAQ | 8-12 pertanyaan + jawaban + CTA WA. |
| `/kontak` | Kontak & Area | NAP, jam, Maps, WA, IG, area layanan. |
| `/404` | Not Found | Custom 404 + CTA kembali home/WA. |

[ESTIMATED] PRD §16 (10 elemen landing), TRD §10 (folder structure).

## 2. Navigation Type

Flat navigation (header top bar) + footer links + sticky mobile CTA (floating WA). [ESTIMATED] riset #6 §2.1.

Header: logo (kiri) + nav links (Layanan, Penitipan, Harga, FAQ, Kontak) + CTA "Chat WA" (kanan, button-primary). Mobile: hamburger → drawer. [ESTIMATED].

Footer: NAP, jam, IG, privacy/terms, sitemap links. [ESTIMATED].

## 3. Entry Points (first screen 3 detik pertama)

Visitor dari Google local search / IG / WA referral. First screen hero: tagline + rating 5,0 badge + free antar-jemput highlight + CTA Chat WA (above fold) + foto asli (jika ada). [ESTIMATED] riset #6 §3.1, riset #12 §1.3.

## 4. Core User Journey 1 — Booking Grooming (primary)

1. Landing hero → lihat rating 5,0 + free antar-jemput → klik "Chat WA — Booking Grooming" (sticky floating). [ESTIMATED]
2. WA terbuka dengan pre-filled message: "Halo CatLova, saya mau booking grooming untuk [nama kucing]. Alamat: [alamat]. Tanggal: [tanggal]. Terima kasih." [ESTIMATED] riset #6 §3.2.
3. Owner balas <1 jam (SLA [ESTIMATED]) → konfirmasi slot + jadwal pickup. [ESTIMATED]
4. Pickup → grooming → update WA harian → siap dijemput. [ESTIMATED] riset #6 §3.1.

Target: ≤3 klik dari hero ke WA terbuka. [ESTIMATED].

## 5. Core User Journey 2 — Booking Penitipan (secondary)

1. Landing → section "Penitipan" → klik "Lihat Syarat & Harga" → `/penitipan`. [ESTIMATED]
2. Baca syarat (vaksin, sehat, bebas kutu, 1 kamar 1 pet) + harga placeholder + kapasitas. [ESTIMATED] riset #12 §5.
3. Klik "Chat WA — Booking Penitipan" → pre-filled message dengan tanggal check-in/out. [ESTIMATED]
4. Owner konfirmasi slot + syarat + drop-off. [ESTIMATED].

## 6. Secondary Path (belum siap booking)

"Belum siap booking? Chat WA dulu tanya-tanya." → WA pre-filled message tanya info. [ESTIMATED] riset #6 §3.1.

## 7. CTA Flow & Conversion Path

- Primary CTA: Chat WA (button-primary, Terracotta, min 48x48). Sticky floating bottom-right (mobile) + header (desktop). [ESTIMATED] riset #6 §2.1.
- Secondary CTA: "Lihat Layanan" / "Lihat Harga" (button-secondary, Sage). [ESTIMATED].
- Form minimal (≤4 field) → submit → redirect ke WA pre-filled (client-side). [ESTIMATED] riset #6 §2.2.
- Semua CTA punya hover state (button-primary-hover: Cocoa bg + Ivory text). [ESTIMATED] DESIGN.md.

## 8. Mobile Journey

- Mobile-first: bottom floating WA CTA (sticky), hamburger nav, single column. [ESTIMATED] riset #6 §2.1.
- Touch target min 48x48 (sticky CTA), spacing cukup. [ESTIMATED].
- No sideways scroll @320px. [ESTIMATED] DESIGN.md.
- Form input font-size ≥16px (hindari zoom iOS). [ESTIMATED].

## 9. Error States

- 404: custom page + CTA "Kembali ke Home" + "Chat WA". [ESTIMATED] skill resep §6.
- Form validation: inline error (apa yang terjadi + kenapa + solusi), focus ke field error. [ESTIMATED] riset #6 §2.2.
- WA link gagal (no internet): fallback tel: link + pesan "Coba lagi / hubungi via telepon". [ESTIMATED].
- Image load fail: alt text + placeholder color. [ESTIMATED].
- JS disabled: konten statis tetap terbaca (SSG). [ESTIMATED].

## 10. Empty States

- Pricelist kosong (harga [UNKNOWN]): placeholder "Harga menyusul — chat WA untuk penawaran" + CTA. [ESTIMATED] PRD §18.
- Before/after kosong (aset [UNKNOWN]): placeholder "Foto asli menyusul" + CTA. [ESTIMATED].
- Review kosong: fallback rating 5,0/211 + CTA. [VERIFIED] rating.

## 11. Loading States

- Skeleton untuk card/section (bukan spinner). [ESTIMATED] skill veronica-prd §04.
- Hero image: blur placeholder (LQIP) + priority. [ESTIMATED] TRD §15.
- Font swap: next/font (no FOUT). [ESTIMATED] TRD §16.

## 12. Micro-interactions

- Button hover: scale 1,01 + shadow deepen (150-200ms ease-out). [ESTIMATED] skill resep §9.
- Card hover: lift + shadow. [ESTIMATED].
- Nav item: underline grow. [ESTIMATED].
- Scroll reveal: opacity 0→1 + translateY 20px→0 (0,4-0,6s). [ESTIMATED] skill resep §9.
- Honey badge: subtle pulse (opsional, ≤1 momen). [ESTIMATED].
- prefers-reduced-motion: disable semua. [VERIFIED].

## 13. Page Transitions

- Fade + slight slide (0,3s) antar route. [ESTIMATED] skill veronica-prd §03.
- Next.js App Router default (no heavy). [ESTIMATED].

## 14. Modal / Overlay

- Mobile nav drawer (slide dari kanan). [ESTIMATED].
- FAQ accordion (inline, bukan modal). [ESTIMATED].
- Cookie consent banner (bottom, dismissible). [ESTIMATED] riset #11.
- Tidak ada modal berat di v1. [ESTIMATED].

## 15. Redirects

- `/` canonical. [ESTIMATED].
- Trailing slash normalisasi. [ESTIMATED].
- 404 → home (manual CTA, bukan auto redirect). [ESTIMATED].
- Login/logout: N/A (no auth v1). [VERIFIED].

## 16. Signatur Moment (Anti-Slop)

Satu momen: hero dengan rating 5,0 badge + review segar quote + free antar-jemput highlight + foto before/after (jika aset). Sisanya tenang. [ESTIMATED] DESIGN.md, skill resep §8.

## 17. Related

- `PRD.md` §12 (Conversion Goal), §16 (Landing Structure Gate).
- `TRD.md` §13 (a11y), §15 (image), §16 (font).
- `DESIGN.md` (token, anti-pattern).

---

*App Flow = input untuk UI/UX Design Brief (04).*
