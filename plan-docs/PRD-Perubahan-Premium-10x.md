# PRD Perubahan — CatLova Malang: Iterasi Premium 10x

**Proyek:** CatLova Malang — salon & penitipan kucing, Sukun, Malang
**Dokumen:** PRD Perubahan (Iterasi Premium 10x) — bukan 6 dokumen full
**Versi:** 1.0 (Loop 13 — pasca preview live)
**Tanggal:** 2026-10-27
**Preview live:** https://catlova-malang.vercel.app
**Sumber otoritatif:** PRD.md, TRD.md, App-Flow.md, UI-UX-Brief.md, Backend-Schema.md, Implementation-Plan.md, DESIGN.md, audit-traceability.md, skill `veronica-prd`, skill `cro`, skill `website-psychology`, skill `frontend-craft`.
**Status label:** [VERIFIED] = data langsung; [ESTIMATED] = rekomendasi; [UNKNOWN] = belum diverifikasi.

---

## 0. Aturan Kritis (WAJIB — Bos 2026-10-27)

1. **JANGAN bocorkan placeholder/menyusul/dapur di website.** Website harus tampil seolah aset sudah ada (foto, harga, logo, review). Tidak ada copywriter "foto menyusul", "harga menyusul", "chat admin untuk lihat", "konfirmasi via WA untuk harga", dan sejenisnya.
2. **Placeholder visual (gradient + ikon) BOLEH dipakai di codebase**, tapi TANPA teks "menyusul/placeholder". Tampil sebagai konten final.
3. **Harga:** tampilkan "—" atau range estimasi dari riset (label [ESTIMATED] di dokumentasi, bukan di website). Jangan tulis "harga menyusul".
4. **Review quote:** tampilkan quote + "— Google Review · 5★" (tanpa nama, tanpa "menyusul", tanpa "Pelanggan Google Maps").
5. **Jam buka:** tampilkan "08.00–17.00 WIB" (tanpa hari) — sudah benar.
6. **CCTV/medis/update WA:** JANGAN sebut "konfirmasi via WA" di website. Tampilkan fitur sebagai fakta (mis. "Update WA selama penitipan") tanpa "konfirmasi via WA".
7. **Placeholder info cukup di dokumentasi/codebase, bukan di frontend.**

Pelanggaran aturan 1-7 = gagal, meskipun build hijau. [ESTIMATED] skill `veronica-prd` Anti-Slop + Kontrak Rasa baris 3.

## 1. Konteks & Tujuan

Website preview sudah live (Lapis 6 Lint Visual + Lapis 7 Masterpiece selesai, 42 atomic task LULUS, audit traceability LULUS). Permintaan Bos: "lakukan fase upgrade to become website premium and 10x batter" — semua aspek (visual + animasi + performa + a11y + SEO + konversi), prioritas visual & animasi (terasa premium/bespoke). Aset nyata belum tersedia → placeholder tetap, tapi TANPA copywriter "menyusul" (aturan §0).

Tujuan iterasi: website terasa premium/bespoke, tidak terlihat AI slop, konversi WA-first tetap, performa diukur setelah selesai, a11y full, SEO lengkap, no-JS path wajib, prefers-reduced-motion wajib.

## 2. Scope

### In scope (Iterasi Premium 10x)
- Copywriting premium: hapus semua "menyusul/placeholder/dapur" dari frontend.
- Visual polish: bespoke (bukan template), spacing/rhythm, hierarchy, trust placement.
- Animasi Tier-1: tingkatkan yang sudah ada (Lenis + GSAP), ≤1 momen signatur, sisanya tenang.
- Performa: LCP ≤2,5s, TBT ≤200ms, CLS ≤0,1, bundle ≤170KB gz.
- A11y: WCAG 2.2 AA full (focus, keyboard, screen reader, reduced motion, touch target).
- SEO: schema lengkap (LocalBusiness, Service, FAQPage, BreadcrumbList, OG, Twitter).
- Konversi: WA-first, trust signals, CTA outcome, form ≤4 field, microcopy spesifik.

### Out of scope
- Penambahan dependency baru. [ESTIMATED]
- Pengarangan harga/fakta (Truth-Level). [VERIFIED] PRD §18 [UNKNOWN].
- Backend/database/auth (tetap statis v1). [VERIFIED] PRD §9.
- Domain/deploy production (pasca-deal, Bos). [VERIFIED] DEAL GATE.

## 3. Copywriting Changes (Hapus "menyusul")

Tabel old → new (frontend). Sumber lama di task foundation 05/06 + features 03-07.

| Lokasi | Copy lama (DILARANG) | Copy baru (premium) | Sumber |
|---|---|---|---|
| Pricelist (harga null) | "Harga menyusul — chat WA untuk penawaran" | "—" + CTA "Tanya harga via WhatsApp" | [ESTIMATED] TRD §7, PRD §18.1 |
| Before/after (aset [UNKNOWN]) | "Foto asli menyusul" | gradient + ikon (tanpa teks) | [ESTIMATED] DESIGN.md Asset Rules |
| Review (quote) | "Pelanggan Google Maps" / "menyusul" | quote + "— Google Review · 5★" | [ESTIMATED] riset #5 §6.9 |
| Syarat hotel | "konfirmasi via WA" | tampilkan syarat sebagai fakta | [ESTIMATED] riset #12 §5 |
| Update WA | "konfirmasi via WA" | "Update WA selama penitipan" (fakta) | [ESTIMATED] PRD §18.5 |
| CCTV/medis | "konfirmasi via WA" | JANGAN sebut (atau tampilkan fakta tanpa "konfirmasi via WA") | [UNKNOWN] PRD §18.3-5 |
| Jam buka | sudah benar | "08.00–17.00 WIB" (tanpa hari) | [UNKNOWN] PRD §18.2 |
| Hero placeholder | "Foto menyusul" | gradient + ikon (tanpa teks) | [ESTIMATED] DESIGN.md |
| Empty state | "No data" | skeleton + CTA (tanpa "menyusul") | [ESTIMATED] skill veronica-prd §03 |

Aturan: copy baru TIDAK boleh mengandung kata "menyusul", "placeholder", "admin", "konfirmasi via WA", "Pelanggan Google Maps". [ESTIMATED] §0.

## 4. Visual Polish (Bespoke, Bukan Template)

- Spacing/rhythm: antar-section xl-2xl (48-80px), intra-component xs-sm, inter-component md-lg. [ESTIMATED] DESIGN.md.
- Hierarchy: H1 5rem (80px) desktop, satu elemen dominan per layar. [ESTIMATED] DESIGN.md.
- Trust placement: ≥1 social proof dalam 1 scroll dari CTA (rating 5,0/211, review segar 7 jam & 2 hari, free snack, free antar-jemput). [ESTIMATED] PRD §15.
- Card: rounded md 12px, padding 24px, Ivory/Biscuit bg. [ESTIMATED] DESIGN.md.
- Hindari: Grid-3-Kolom-Template, Hero-Kaca-Seragam, CTA-Kembar, Paw-Print-Spam, Stock-Photo-Pet. [ESTIMATED] DESIGN.md Anti-Pattern.
- Placeholder visual: gradient + ikon (tanpa teks "menyusul"). [ESTIMATED] §0.
- Satu momen signatur per halaman, sisanya tenang. [ESTIMATED] skill resep §8.

## 5. Animasi (Tier-1, Tingkatkan yang Ada)

- Lenis smooth scroll: lerp 0,08-0,12, ≥30-45% delta ≤100ms, berhenti 800-1200ms. [ESTIMATED] skill resep §3.
- GSAP ScrollTrigger reveal: opacity 0→1 + translateY 20px→0 (0,4-0,6s ease-out). [ESTIMATED] skill resep §9.
- Hero entrance: fade-up 0,7-0,8s ease-out. [ESTIMATED] skill resep §9.
- Button hover: scale 1,01 + shadow deepen (150-200ms ease-out). [ESTIMATED] skill resep §9.
- Card hover: lift + shadow. [ESTIMATED].
- Honey badge: subtle pulse (≤1 momen). [ESTIMATED].
- prefers-reduced-motion: disable semua (fallback native). [VERIFIED] TRD §8.
- Maks 1 pinned chapter per site (bukan kewajiban). [ESTIMATED] skill resep §3.
- Easing berpasangan: masuk ease-out, keluar ease-in, keluar lebih pendek dari masuk (minus 50-100ms). [ESTIMATED] skill resep §9.
- Stagger = jeda pendek dan tetap, jangan memperlambat. [ESTIMATED] skill resep §9.

## 6. Performa (Diukur Setelah Selesai)

- LCP ≤2,5s, INP ≤200ms, CLS ≤0,1. [VERIFIED] web.dev (TRD §7).
- TBT ≤200ms. [ESTIMATED] TRD §7.
- FCP ≤1,8s, TTFB ≤800ms. [ESTIMATED] TRD §7.
- JS bundle initial ≤170KB gzipped. [ESTIMATED] TRD §7.
- CSS ≤50KB. [ESTIMATED] TRD §7.
- Hero image ≤200KB (AVIF/WebP, quality 75). [ESTIMATED] DESIGN.md.
- Preloader/gate <2s (boleh skip jika LCP menekan). [ESTIMATED] skill resep §3.
- Lighthouse score >90 (Performance, Accessibility, Best Practices, SEO). [ESTIMATED] skill veronica-prd §06.
- No-JS path wajib (konten statis terbaca). [ESTIMATED] App-Flow §9.

## 7. A11y (WCAG 2.2 AA Full)

- Kontras AA semua pair (DESIGN.md). [ESTIMATED].
- Focus visible (outline Terracotta 2px). [ESTIMATED] TRD §13.
- Keyboard nav (Tab order logis, Enter/Space). [ESTIMATED] TRD §13.
- Skip link "Lewati ke konten" → #main. [ESTIMATED].
- ARIA labels pada icon button, nav, modal/drawer. [ESTIMATED].
- Semantic HTML (header, nav, main, footer, section, article). [ESTIMATED].
- Touch target min 44x44 (sticky CTA 48x48). [ESTIMATED] TRD §13.
- Alt text semua gambar (deskriptif). [ESTIMATED] TRD §13.
- prefers-reduced-motion (disable semua). [VERIFIED] TRD §8.
- Screen reader (landmark + label). [ESTIMATED] TRD §13.
- No sideways scroll @320px. [ESTIMATED] DESIGN.md.
- axe-core 0 violation. [ESTIMATED] TRD §20.

## 8. SEO (Schema Lengkap)

- Metadata API (title, description, OG, Twitter Card) per halaman. [ESTIMATED] TRD §14.
- sitemap.xml + robots.txt. [ESTIMATED] TRD §14.
- JSON-LD: LocalBusiness (NAP, jam, geo, rating), Service, FAQPage, BreadcrumbList. [ESTIMATED] riset #4 §6.1.
- Canonical URL (domain final). [ESTIMATED] TRD §14.
- OG image 1200x630. [ESTIMATED] DESIGN.md.
- Alt text + descriptive filename. [ESTIMATED] TRD §14.
- Internal linking (nav + footer + breadcrumbs). [ESTIMATED] TRD §14.
- Google Business Profile (pasca-deal, Bos). [ESTIMATED] riset #4 §5.1.

## 9. Konversi (WA-First, Trust, CTA)

- Primary conversion goal: Chat WA (Rule of One). [ESTIMATED] PRD §12.
- Trust signal ≥1 dalam 1 scroll dari CTA (rating 5,0/211, review segar, free snack, free antar-jemput). [ESTIMATED] PRD §15.
- CTA hierarchy: 1 CTA dominan (Terracotta, ≥48x48, sticky floating). Copy = outcome. [ESTIMATED] riset #6 §2.1.
- Form ≤4 field (nama, WA, layanan, tanggal + catatan opsional). [ESTIMATED] riset #6 §2.2.
- Microcopy: spesifik + angka + time + risk removal. [ESTIMATED] riset #6 §2.2.
- Error state: apa + kenapa + solusi. [ESTIMATED] riset #6 §2.2.
- Urgency/scarcity: hanya kalau JUJUR (kapasitas peak lebaran). [ESTIMATED] riset #6 §2.4.
- Secondary path: "Belum siap booking? Chat WA dulu." [ESTIMATED] PRD §7.

## 10. Atomic Tasks Delta (ringkas)

Task baru/ubah (tidak menambah dependency). Eksekusi via FRIDAY (hermes -p friday).

1. `04-interior/08-copywriting-premium.md` — hapus semua "menyusul/placeholder/dapur" dari frontend; terapkan tabel §3. [ESTIMATED]
2. `04-interior/09-visual-polish.md` — spacing/rhythm, hierarchy, trust placement, placeholder visual (gradient+ikon tanpa teks). [ESTIMATED]
3. `05-finishing/10-performance-tbt.md` — TBT ≤200ms, code split, dynamic import komponen berat. [ESTIMATED]
4. `05-finishing/11-a11y-full.md` — axe 0 violation, screen reader, touch target, reduced motion (verifikasi). [ESTIMATED]
5. `05-finishing/12-seo-schema.md` — JSON-LD lengkap (LocalBusiness, Service, FAQPage, BreadcrumbList), OG, Twitter. [ESTIMATED]
6. `05-finishing/13-konversi-microcopy.md` — microcopy spesifik + angka + time + risk removal, error state. [ESTIMATED]
7. `05-finishing/14-self-look.md` — screenshot desktop 1440x900 + mobile 390x844 → vision cek (layout pecah/teks tabrakan/terpotong/kontras). [ESTIMATED] skill resep §8.
8. `05-finishing/15-preflight-premium.md` — path + angka + sitasi + gate spec→DOM + anti-default. [ESTIMATED] skill veronica-prd pre-flight.

## 11. Update DESIGN.md Token (bila perlu)

Tidak ada perubahan token wajib. Palet Ivory/Cocoa/Terracotta/Sage/Honey/Biscuit + Quicksand/Inter tetap. [ESTIMATED] DESIGN.md. Jika visual polish butuh token baru → amendemen eksplisit (Bos 2026-09-25). [ESTIMATED].

## 12. Residual Risk

1. Harga [UNKNOWN] → tampilkan "—" + CTA "Tanya harga via WhatsApp" (tanpa "menyusul"). [UNKNOWN] PRD §18.1.
2. Jam buka [UNKNOWN] (7 hari vs Senin-Sabtu) → tampilkan "08.00–17.00 WIB" (tanpa hari). [UNKNOWN] PRD §18.2.
3. CCTV/medis/update WA [UNKNOWN] → tampilkan fitur sebagai fakta (tanpa "konfirmasi via WA"). [UNKNOWN] PRD §18.3-5.
4. Foto asli [UNKNOWN] → placeholder visual (gradient + ikon, tanpa teks). [UNKNOWN] PRD §18.6.
5. Logo [UNKNOWN] → placeholder teks "CatLova" (font-display). [UNKNOWN] PRD §18.6.
6. Nama reviewer [UNKNOWN] → "— Google Review · 5★" (tanpa nama). [UNKNOWN] riset #5 §6.9.
7. Domain [UNKNOWN] → canonical dari env (fallback). [UNKNOWN] PRD §18.7.
8. Volume keyword [UNKNOWN] → tidak klaim angka. [UNKNOWN] riset #4 §7.2.

Aturan Truth-Level: [UNKNOWN] tetap [UNKNOWN] di dokumentasi; di website tampil sebagai konten final (tanpa "menyusul"). [ESTIMATED] §0.

## 13. Next Step

1. FRIDAY eksekusi atomic delta (task 1-8) via `hermes -p friday`. [ESTIMATED]
2. JARVIS review (Lapis 6 Lint Visual + Lapis 7 Masterpiece) setelah eksekusi. [ESTIMATED]
3. Bos review preview → iterasi kecil via terminal, besar via PRD Perubahan. [ESTIMATED] POST-PIPELINE.
4. Setelah Bos puas → "Siap Tawarkan Package". [ESTIMATED] POST-PIPELINE.
5. Pasca-deal: Bos eksekusi (domain, DNS, GSC, GBP, GA4 prod, direktori). [ESTIMATED] Pasca-Deal Checklist.

## 14. Related

- `DESIGN.md` — kontrak visual (tetap).
- `PRD.md` — scope, conversion, residual.
- `TRD.md` — stack, hosting, a11y, image, font, analytics, security, testing.
- `App-Flow.md` — journey + states.
- `UI-UX-Brief.md` — visual + conversion.
- `Backend-Schema.md` — data + V2 roadmap.
- `Implementation-Plan.md` — fase build.
- `atomic-tasks/00-index.md` — 42 task + delta.
- `atomic-tasks/audit-traceability.md` — audit LULUS.

---

*PRD Perubahan = input untuk FRIDAY eksekusi atomic delta. Endpoint = preview live Vercel. Pasca-deal = referensi Bos.*
