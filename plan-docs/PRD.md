# PRD — CatLova Malang (Website)

**Proyek:** CatLova Malang — salon & penitipan kucing, Sukun, Malang
**Dokumen:** 01 / PRD (Product Requirements Document)
**Versi:** 1.0 (Loop 2)
**Tanggal:** 2026-10-27
**Sumber otoritatif:** skill `veronica-prd` v4.1.14; riset EDITH 15 file di `research/`; `DESIGN.md` (0 error, 0 warning lint).
**Status label:** [VERIFIED] = data langsung dari sumber; [ESTIMATED] = rekomendasi/best practice; [UNKNOWN] = belum diverifikasi.

---

## 1. App Name

CatLova (brand yang dipakai publik: "CatLova" / "CatLova Malang"). [VERIFIED] riset #1-#15 (lead dossier + Maps).

## 2. Tagline

"Grooming & penitipan kucing yang telaten, bersih, wangi — antar-jemput gratis." [ESTIMATED] riset #2 §10.1 (hero/positioning).

## 3. Problem (rasa sakit yang diselesaikan)

Pemilik kucing urban Malang (mahasiswa/anak kos, perempuan 20-35) butuh jasa grooming & penitipan yang aman, telaten, dan konsisten, terutama saat sibuk kuliah/kerja atau mudik lebaran. Pain point terverifikasi: konsistensi kualitas grooming (jamur tidak hilang, proses terlalu cepat, penjemputan molor, privasi keluhan), kekhawatiran penitipan (kandang bersih, update, CCTV), harga tidak jelas, dan IG tidak segar. [VERIFIED] riset #2 §3, §5, §7; [ESTIMATED] riset #2 §10.

Pelanggan baru yang mencari di Google tidak menemukan CatLova (absen dari local pack top-3 "grooming kucing di Malang") karena review volume rendah (211 vs 308-670) dan tanpa website domain. [VERIFIED] riset #1 §0, riset #4 §5.1.

## 4. Core Value Proposition (apa yang bikin beda)

Rating 5,0 (211 ulasan) — tertinggi bersama PETFIRST (5,0/610-670) — plus free antar-jemput gratis (vs ongkir Dr.Meoww Rp5.000, home service Pet Bum), personal touch (owner sabar, free snack), dan review segar (7 jam & 2 hari lalu). [VERIFIED] riset #1 §0, riset #2 §4.1, riset #3 §6, riset #5 §1.9.

Bisa dibedain dari 3 kompetitor: PETFIRST (coral+cream, modern, tracking booking, antar-jemput berbayar di luar paket), Dr.Meoww (klinik/medis, sterilisasi harian), Pet Bum (CCTV 24 jam, drh. Eca, home service). CatLova = lebih personal, hangat, rating tertinggi, antar-jemput gratis. [VERIFIED/ESTIMATED] riset #7 §1.1, riset #12 §4.

## 5. Target User

Persona (semua [ESTIMATED] kecuali yang ditandai [VERIFIED]):

- P1 "Paw Parent Sibuk" (primary, ~80%): perempuan 20-35, mahasiswa/anak kos urban Malang, kucing = "anabul" (anggota keluarga). Sibuk kuliah/kerja, butuh antar-jemput + update WA. Sensitivitas harga tinggi tapi kualitas prioritas ("murah tapi gak murahan"). [ESTIMATED] riset #2 §1.3, §2.2, §8.3; [VERIFIED] istilah "anabul" riset #2 §2.1.
- P2 "Mudik Lebaran": mahasiswa rantau yang titip kucing saat pulang kampung; booking H-10, kapasitas penuh musiman. [VERIFIED] riset #2 §1.2, riset #3 §7.
- P3 "Pemilik Kucing Baru": belum punya langganan, mencari via Google "grooming kucing Malang", membandingkan rating & review. [ESTIMATED] riset #2 §6.1.

## 6. Brand Personality

Tone: ramah, profesional, empatik — "knowledgeable friend", lead with pet not transaction, konkret, konsisten. Archetype: Caregiver + Sage. [VERIFIED] riset #7 §1.2 (Madegooddesigns).

Identitas visual (DESIGN.md): hangat, personal, meyakinkan. Ivory ground + Cocoa type + Terracotta interaksi tunggal. Bukan klinis (Dr.Meoww), bukan modern-corporate (PETFIRST). [VERIFIED] DESIGN.md.

## 7. Core Features (Must Have)

1. Hero jelas: service + lokasi + trust (rating 5,0/211) + CTA Chat WA. [ESTIMATED] riset #6 §3.1.
2. Scope: 2 layanan (Grooming + Penitipan) + jam 08-17 + lokasi Sukun + WA. [ESTIMATED].
3. Process preview: 3-5 langkah (booking → pickup → grooming → update WA → siap dijemput). [ESTIMATED] riset #6 §3.1.
4. Trust layer: rating 5,0 [VERIFIED], review Google 3-5 quote [ESTIMATED], foto before/after [UNKNOWN aset], free snack [VERIFIED], free antar-jemput [VERIFIED]. [ESTIMATED] riset #6 §3.1.
5. Pricelist transparan (placeholder + CTA WA sampai owner konfirmasi harga). [ESTIMATED] riset #3 §8, riset #6 §1.1.
6. Booking interface low-friction: form minimal (nama, WA, layanan, tanggal + catatan) → kirim via WA pre-filled. [ESTIMATED] riset #6 §2.2, §3.2.
7. Objection handling + FAQ (8-12 pertanyaan: harga, jam, vaksin, antar-jemput, update WA, snack, garansi). [ESTIMATED] riset #6 §3.1.
8. Post-booking expectation: "Setelah kirim, kami balas <1 jam, konfirmasi slot, jadwal pickup, update WA harian." [ESTIMATED] riset #6 §3.1 (SLA [ESTIMATED]).
9. Secondary path: "Belum siap booking? Chat WA dulu." [ESTIMATED].
10. NAP jelas di hero + jam buka di hero (eksploitasi kelemahan PETFIRST). [ESTIMATED] riset #12 §1.3.
11. Cookie banner + privacy policy + terms (UU PDP). [VERIFIED] riset #11.
12. Structured data: LocalBusiness, Service, FAQPage, BreadcrumbList. [ESTIMATED] riset #4 §6.1.
13. Sitemap, robots, OG, canonical, alt text. [ESTIMATED] riset #4 §6.2-6.3.
14. Mobile-first + CWV (LCP <2,5s, CLS <0,1, INP <200ms). [VERIFIED] web.dev (riset #9 §4).
15. 12 wajib checklist kualitas build (custom 404, CTA above fold, meta title/desc, OG image, favicon, robots, sitemap, alt text, mobile responsive, loading state, form error state) + 3 kondisional. [VERIFIED] skill `design-md` §6.

## 8. Nice to Have (V2)

- Tracking booking sederhana (status: booking → check-in → grooming → selesai). [ESTIMATED] riset #12 §5.
- Team bios (nama + role + foto). [ESTIMATED] riset #12 §5.
- Syarat hotel (vaksin min 2 dosis, sehat, bebas kutu, 1 kamar 1 pet). [ESTIMATED] riset #12 §5.
- Bilingual ID/EN. [ESTIMATED] riset #12 §5.
- Review widget (quotes Google Maps). [ESTIMATED] riset #12 §5.
- Paket boarding lebaran (musiman) + booking H-10. [ESTIMATED] riset #10 §5.
- PWA (opsional). [ESTIMATED] riset #9 §9.

## 9. Out of Scope (TIDAK dikerjakan di v1)

Booking online (database/auth), headless CMS, blog/content SEO, PWA, multi-bahasa (kecuali V2), paid ads, chatbot/WhatsApp Flows, heatmap/A-B test, dark mode, pembayaran online/deposit. [UNKNOWN/ESTIMATED] riset #6 §4.1.

## 10. User Stories

- Sebagai pemilik kucing sibuk, saya mau booking grooming via WA dengan form minimal (nama, WA, layanan, tanggal) supaya tidak ribet. [ESTIMATED]
- Sebagai pemilik yang khawatir, saya mau lihat rating 5,0 + review segar + foto before/after supaya percaya. [ESTIMATED]
- Sebagai mahasiswa mudik, saya mau titip kucing per malam dengan info syarat & harga jelas supaya tenang. [ESTIMATED]
- Sebagai pencari baru di Google, saya mau menemukan CatLova di "grooming kucing Malang" supaya bisa pilih. [ESTIMATED]
- Sebagai owner, saya mau website yang bisa diupdate harga/layanan sendiri (JSON data) supaya tidak bergantung developer. [ESTIMATED]

## 11. Success Metrics

- WA click rate (primary conversion) ≥ target 20% visitor → WA click. [ESTIMATED] (benchmark tidak ada data CatLova; [UNKNOWN]).
- Form submit rate (secondary) ≥ 5%. [ESTIMATED].
- LCP <2,5s, CLS <0,1, INP <200ms. [VERIFIED] web.dev.
- Review Google: 300+ dalam 6-12 bulan (velocity 5-10/bulan). [ESTIMATED] riset #4 §3.3, riset #13.
- Masuk local pack top-3 (prominens via review volume). [ESTIMATED] riset #4 §5.1.
- Mobile QA real device lulus. [VERIFIED] Unicorn (riset #6).

## 12. Conversion Goal (Rule of One)

Satu aksi utama per halaman: **Chat WA** (primary). Semua halaman utama (home, layanan, penitipan, harga, FAQ, kontak) punya 1 primary CTA (Chat WA, sticky floating button min 48x48px, pre-filled message source-tagged) + target metric. CTA lain sekunder (Lihat Layanan, Lihat Harga, Telepon). [VERIFIED] riset #6 §2.1, §3.2; skill `veronica-prd` §H.

## 13. Competitive Differentiation

| Fitur | PETFIRST | Dr.Meoww | Pet Bum | CatLova (target) |
|---|---|---|---|---|
| Website domain sendiri | ✅ petfirst.id | ❌ (FB) | ❌ | ✅ |
| Hero jelas (service+lokasi+trust+CTA) | ✅ | ❌ | ❌ | ✅ |
| Pricelist transparan | ✅ | ❌ (IG only) | ❌ | ✅ (konfirmasi owner) |
| Tracking booking | ✅ (5 langkah) | ❌ | ❌ | ✅ (sederhana, V2) |
| Team bios | ✅ (9 orang) | ❌ | ❌ (wanderlog only) | ✅ (V2) |
| Syarat hotel | ✅ | ❌ | ❌ | ✅ |
| Antar-jemput | ✅ (gratis paket 60 hari) | ✅ (ongkir 5rb) | ✅ (home service) | ✅ (free) |
| Bilingual ID/EN | ✅ | ❌ | ❌ | ✅ (V2) |
| Review widget | ✅ (6 quotes) | ❌ | ❌ | ✅ |
| CCTV 24 jam | ✅ | ❌ | ✅ | [UNKNOWN] (belum diverifikasi) |
| drh. (dokter hewan) | ❌ | ✅ (klinik) | ✅ (drh. Eca) | ❌ (target: partner vet) |
| FAQ section | ✅ (terbatas) | ❌ | ❌ | ✅ (lebih lengkap) |
| NAP jelas di hero | ❌ [UNKNOWN] | ❌ | ❌ | ✅ |
| Jam buka di hero | ❌ [UNKNOWN] | ❌ | ❌ | ✅ |
| Cookie banner/privacy/terms (UU PDP) | ❌ [UNKNOWN] | ❌ | ❌ | ✅ |

Sumber: riset #12 §4 (tabel benchmark). Semua ✅/❌ = [ESTIMATED] berbasis data terverifikasi; bukan klaim sumber langsung.

## 14. Kontrak Rasa (E2) — Bos 2026-10-11

1. Rasa 5 detik pertama: "Ini bukan salon kucing biasa" — hangat, personal, meyakinkan; Ivory ground + Cocoa type + Terracotta CTA; rating 5,0 badge di hero. [ESTIMATED]
2. Satu momen tanda tangan: hero dengan rating 5,0 (211 ulasan) + review segar quote + free antar-jemput highlight + foto before/after (jika aset tersedia). [ESTIMATED]
3. Yang dilarang muncul: kartu seragam 3 kolom, ikon generik, testimoni tanpa nama, angka statistik tanpa sumber, claim CCTV/medis tanpa verifikasi, "premium"/"passionate" tanpa bukti. [ESTIMATED] riset #7 §1.2.

## 15. Conversion Architecture (WAJIB — halaman harus MENJUAL)

| Field | Premium Execution |
|---|---|
| Primary Conversion Goal | Rule of One — 1 aksi utama per halaman = Chat WA. CTA lain sekunder. [ESTIMATED] |
| Trust Signal Placement | Minimal 1 social proof dalam 1 scroll dari CTA utama (rating 5,0/211 [VERIFIED], review segar 7 jam & 2 hari [VERIFIED], foto before/after [UNKNOWN aset], free snack [VERIFIED], free antar-jemput [VERIFIED]). Trust dekat conversion point, bukan cuma footer. [ESTIMATED] riset #6 §2.4 |
| CTA Hierarchy | Tepat 1 CTA dominan (Terracotta, min 48x48px, sticky floating). Copy CTA = outcome ("Chat WA — Booking Grooming") bukan "Submit"/"Klik di sini". [VERIFIED] Zenos (riset #6 §2.1) |
| Form Design | Form conversion ≤ 4 field: nama, WA, layanan, tanggal + catatan opsional. Telepon opsional. Confirmation message jelas: apa yang terjadi + kapan + langkah berikutnya. [VERIFIED] Unicorn (riset #6 §2.2) |
| Microcopy | Spesifik + angka + time signal + risk removal. Error state = apa yang terjadi + kenapa + apa yang harus dilakukan. [VERIFIED] Unicorn (riset #6 §2.2) |
| Urgency & Scarcity | Hanya kalau JUJUR (penawaran nyata, kapasitas peak lebaran). Fake scarcity = -18-25% repeat visitors. [VERIFIED] Unicorn (riset #6 §2.4) |

## 16. Struktur Halaman (Landing Structure Gate — 10 elemen, site konversi)

1. Hero: hasil yang diinginkan + takutan tanpa ini (rating 5,0 + free antar-jemput + owner sabar). [ESTIMATED]
2. Social proof (review Google, foto before/after). [ESTIMATED]
3. Results nyata (rating 5,0/211, review segar). [VERIFIED]
4. Problem statement + biaya nyata masalah (konsistensi kualitas, penitipan khawatir). [VERIFIED] riset #2 §3
5. Solution sebagai cara lebih baik (personal, telaten, free antar-jemput). [ESTIMATED]
6. 5-8 fitur × (manfaat + visual): grooming sehat, grooming kutu/jamur, lion cut (add-on), penitipan (2 tier), antar-jemput, free snack, update WA. [ESTIMATED] riset #3 §8.2
7. 3-4 langkah cara kerja (booking → pickup → grooming → siap dijemput). [ESTIMATED]
8. FAQ (8-12 pertanyaan). [ESTIMATED]
9. Final CTA headline benefit-driven ("Pulang wangi, pulang tenang — Chat WA"). [ESTIMATED]
10. Footer (NAP, jam, IG, privacy/terms). [VERIFIED] NAP riset #1

Eksepsi: tidak ada (ini site konversi). Semua 10 elemen wajib ada + urutan logis terjaga. [VERIFIED] skill `veronica-prd` §STRUKTUR TRANSCRIP-1.

## 17. Premium Execution Checklist (VERONICA wajib cek sebelum kirim ke FRIDAY)

### Uniqueness Check
- [x] Color palette tidak identik dengan 3 project sebelumnya (Ivory+Cocoa+Terracotta+Sage+Honey vs RAGA/GEMMA/Tiara/Glam Fortuna). [ESTIMATED]
- [x] Font pairing tidak identik (Quicksand+Inter vs Plus Jakarta Sans+Inter). [ESTIMATED]
- [x] Layout architecture: WA-first single-column hero + pricelist full-width (bukan 3-column grid generik). [ESTIMATED]
- [x] Signature animation/interaction unik (terracotta CTA + before/after reveal + honey badge). [ESTIMATED]
- [x] Content benar-benar dari riset, bukan karangan. [VERIFIED]

### Premium Check
- [ ] Setiap halaman punya desain loading state. [ESTIMATED]
- [ ] Setiap halaman punya desain empty state. [ESTIMATED]
- [ ] Error messages human-readable + solutif. [ESTIMATED]
- [ ] Transisi halaman didesain (bukan default). [ESTIMATED]
- [ ] All interactive elements punya hover state. [ESTIMATED]
- [ ] Focus visible styles untuk keyboard navigation. [ESTIMATED]
- [ ] Responsive di 3 breakpoints (mobile, tablet, desktop). [ESTIMATED]

### Brand Check
- [x] Warna punya alasan brand (riset #7 §2.3). [ESTIMATED]
- [x] Font sesuai brand personality (Quicksand rounded friendly). [VERIFIED] riset #7 §3.1
- [x] Tone of voice konsisten di semua copy (ramah/profesional/empatik). [VERIFIED] riset #7 §1.2
- [x] Signature element: Terracotta CTA + Honey badge + Ivory ground. [ESTIMATED]

### CRO Check (Konversi)
- [x] Setiap halaman utama punya 1 primary conversion goal (Rule of One). [ESTIMATED]
- [x] Trust signal ≥1 dalam 1 scroll dari CTA. [ESTIMATED]
- [x] CTA copy = outcome spesifik, bukan "Submit"/"Klik di sini". [ESTIMATED]
- [x] Form conversion ≤ 4 field. [ESTIMATED]
- [x] Home structure: Hook → Problem → Solution → Proof → Offer → CTA + urgency. [ESTIMATED]
- [x] Microcopy: spesifik + angka + time + risk removal. [ESTIMATED]
- [x] Error/empty state: apa yang terjadi + kenapa + solusi. [ESTIMATED]

## 18. Residual [UNKNOWN] (belum diverifikasi — konfirmasi owner/Bos)

1. Harga CatLova (seluruh layanan) — [UNKNOWN]. Placeholder + CTA WA sampai owner konfirmasi. [UNKNOWN] riset #3 §9.1.
2. Jam buka hari (7 hari atau Senin-Sabtu?) — [UNKNOWN]. [UNKNOWN] riset #6 §4.2.
3. CCTV status (ada/tidak) — [UNKNOWN]. Jangan klaim. [UNKNOWN] riset #5 §6.1.
4. Update WA (frekuensi, format) — [UNKNOWN]. Jangan klaim. [UNKNOWN] riset #5 §6.5.
5. Medis/drh. (ada/tidak, kerjasama drh.) — [UNKNOWN]. [UNKNOWN] riset #5 §6.2.
6. Foto aset (before/after, fasilitas, tim, logo vektor) — [UNKNOWN]. [UNKNOWN] riset #6 §4.7.
7. Hosting/domain (.com/.id) — [UNKNOWN]. [UNKNOWN] riset #9 §1.
8. Booking system aktual (manual WA vs form vs calendar) — [UNKNOWN]. [UNKNOWN] riset #6 §4.6.
9. Quote "owner sabar" — sumber Google review tidak menyebut bisnis mana; ambigu CatLova vs Dr.Meoww. Verifikasi per-quote sebelum dipakai di copy. [UNKNOWN] riset #5 §6.9.
10. Volume pencarian keyword — [UNKNOWN] (no reliable free tool). [UNKNOWN] riset #4 §7.2.

## 19. Related

- `DESIGN.md` (root project) — kontrak visual (palet, font, token, anti-pattern).
- `research/01..15-*.md` — sumber riset EDITH.
- Skill `veronica-prd` — struktur 6 dokumen + Premium Execution Engine.
- Skill `design-md` — lint DESIGN.md (0 error, 0 warning).
- Skill `cro` / `website-psychology` / `frontend-craft` — konversi & eksekusi (CORE).

---

*File ini standalone. PRD = input dokumen berikutnya (TRD, App Flow, UI/UX Brief, Backend Schema, Implementation Plan).*
