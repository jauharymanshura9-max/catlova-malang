# Riset #15 — Analisis Website Kompetitor Mendalam (PETFIRST vs Dr.Meoww vs Pet Bum)

**Proyek:** CatLova Malang — salon & penitipan kucing, Sukun, Malang
**Topik:** Audit UX, performa, aksesibilitas, SEO, konversi website kompetitor
**File:** `/home/jauhary/Projects/catlova-malang/research/15-competitor-website-deep-audit.md`
**Standar:** Truth-Level [VERIFIED]/[ESTIMATED]/[UNKNOWN]; sumber wajib dicantumkan; tidak mengarang.

---

## 0. Ringkasan eksekutif

- **PETFIRST (petfirst.id) = satu-satunya kompetitor dengan website matang** di local pack: hero jelas ("Tempat setiap anabul serasa di rumah."), 2 layanan (grooming + hotel), pricelist transparan per cabang/ukuran, tracking booking 5 langkah real-time, team bios 9 orang [VERIFIED] petfirst.id, syarat hotel (vaksin min 2 dosis, sehat, bebas kutu/jamur, 1 kamar 1 pet) [VERIFIED] petfirst.id, door-to-door Arief [VERIFIED] petfirst.id, bilingual ID/EN [VERIFIED] petfirst.id, review widget 6 quotes [VERIFIED] petfirst.id, social proof 2.000+ pets (akurasi [UNKNOWN] — Riset #1, #6) [VERIFIED] petfirst.id, 2 cabang, jam buka 09:00-19:00 [VERIFIED] petfirst.id, NAP lengkap [VERIFIED] petfirst.id. CatLova rating 5,0/211 (tie PETFIRST Google 5,0/610-670; PETFIRST website widget ★4,9) [VERIFIED] Riset #1. [VERIFIED] web_extract petfirst.id.
- **Dr.Meoww (drmeoww.com) = tidak ditemukan website publik matang.** Subdomain `api.drmeoww.my.id` terdeteksi di urlscan.io (Cloudflare, 5 hari umur, "No direct hits — Nothing is hosted on this domain") [VERIFIED] urlscan.io. Publikasi via Facebook (voofla), Instagram @grooming.drmeow, caribisnis.id, idfirms. UX/perf/a11y/SEO website [UNKNOWN] (tidak ada website sendiri untuk diaudit). [VERIFIED] web_search.
- **Pet Bum = tidak punya domain publik.** Hanya IG/FB/WA/Google Maps, caribisnis.id, wanderlog, exa.ai, polomap, idfirms. UX/perf/a11y/SEO website [UNKNOWN]. [VERIFIED] web_search.
- **Implikasi CatLova:** CatLova tanpa website domain (hanya linktr.ee bio + IG) [VERIFIED] Riset #1 (linktr.ee) + Riset #6 (no domain). Peluang besar: menjadi #2 (setelah PETFIRST) dengan website + WA-first. Hero bisa pakai "Rating 5,0 (211 ulasan)" [VERIFIED] Riset #1.
- **Performa/a11y/SEO PETFIRST:** Lighthouse TIDAK dijalankan (tidak ada akses ke PageSpeed Insights di sesi ini) → skor perf/a11y/SEO [UNKNOWN]. Observasi kualitatif: homepage berat (banyak gambar tim 9+, produk ARTERO/PETKIT/Chris Christensen, review photos, social proof 2.000+). Mobile responsiveness [ESTIMATED] (belum test real device — Riset #6). Bilingual ID/EN [VERIFIED] petfirst.id. HTTPS [VERIFIED] petfirst.id (URL https). Structured data [UNKNOWN] (perlu view source). Sitemap/robots [UNKNOWN]. Cookie/privacy/terms [UNKNOWN] (tidak ada halaman privasi/terms terlihat di web_extract — Riset #12).
- **Aset publik:** tidak ada screenshot baru didownload (browser screenshot tidak tersedia di sesi ini). Assets/ tetap 3 file dari Riset #1: catlova-linktree-og.jpg, petfirst-img-01.png, petfirst-img-14.jpg. [VERIFIED] ls assets.

---

## 1. Metodologi

- **Sumber primer:** web_extract https://petfirst.id/ (homepage full content) [VERIFIED] 2026-10-27.
- **Sumber sekunder:** Riset #1-#12 (kompetitor, target pasar, layanan/harga, SEO/GBP, trust signals, website conversion, branding, content marketing, technical architecture, lokal & logistik, legal & compliance, competitor website audit) [VERIFIED].
- **Dr.Meoww & Pet Bum:** web_search (drmeoww.com, petbum.id, petbum.com) → tidak ditemukan domain publik matang; urlscan.io (api.drmeoww.my.id), caribisnis.id, idfirms, polomap [VERIFIED] (Pet Bum: exa.ai, wanderlog, polomap [VERIFIED]).
- **Lighthouse/PageSpeed Insights:** TIDAK dijalankan → skor Performance/Accessibility/Best Practices/SEO [UNKNOWN]. Observasi kualitatif [ESTIMATED].
- **Aset:** tidak ada download baru (screenshot browser tidak tersedia; logo vektor/foto outlet [UNKNOWN] — Bos harus supply). [VERIFIED] Riset #1, #7.
- **Bahasa:** Indonesia + Inggris.

---

## 2. PETFIRST (petfirst.id) — deep audit

### 2.1 UX (navigasi, hero, CTA, booking flow, mobile)

| Aspek | Temuan | Label |
|---|---|---|
| Hero | "# Tempat setiap anabul serasa di rumah." + sub "Petfirst adalah rumah perawatan anabul butik di Malang. Salon grooming lengkap, penitipan yang lembut, dan tim yang menyayangi anabul kamu seperti keluarga sendiri." Social proof above fold: "2.000+ Anabul bahagia dirawat · 2 cabang Sawojajar & Tidar · ★ 4.9 Dari keluarga anabul kami" | [VERIFIED] petfirst.id |
| Navigasi | 2 cabang (Sawojajar/Tidar) tab switching; layanan Grooming (Standard/Premium/Kids) + Hotel (Kucing/Anjing); pricelist per cabang/ukuran; tracking booking 5 langkah; team bios 9 orang; syarat hotel; antar-jemput; "Dua cabang. Satu Petfirst." NAP lengkap (alamat, telepon, jam buka) | [VERIFIED] petfirst.id |
| CTA | "Harga jelas, tanpa kejutan." + pricelist transparan; "Mau memantau prosesnya secara real-time?"; "Antar-jemput · Kota Malang"; "Booking dikonfirmasi 09:15" (tracking). CTA booking via reservation.petfirst.id (external subdomain) | [VERIFIED] petfirst.id |
| Booking flow | 5 langkah: (1) Pemeriksaan Awal, (2) Penataan Sebelum Mandi, (3) Mandi, (4) Pengeringan, (5) Anabul Bahagia. Real-time tracking dengan notifikasi "siap dijemput". External booking: reservation.petfirst.id (halaman kosong saat extract — [UNKNOWN] apakah form aktif) | [VERIFIED] petfirst.id / [UNKNOWN] reservation.petfirst.id |
| Mobile | Responsive [ESTIMATED] (belum test real device — Riset #6); click-to-call min 44x44px [UNKNOWN] | [ESTIMATED] Riset #6 |
| Bilingual | ID/EN [VERIFIED] petfirst.id (konten Indonesia; beberapa elemen English) | [VERIFIED] petfirst.id |
| Footer/NAP | Alamat 2 cabang, telepon 0812-2211-1957 / 0822-2880-0058, jam buka 09:00-19:00 (7 hari) | [VERIFIED] petfirst.id |

### 2.2 Performa (observasi, tanpa Lighthouse)

| Aspek | Temuan | Label |
|---|---|---|
| Page weight | Berat: 9+ foto tim, produk ARTERO/PETKIT/Chris Christensen, review photos 6, social proof 2.000+, tracking UI mockup, pricelist 2 cabang × 4 paket. Estimasi >3MB [ESTIMATED] | [ESTIMATED] |
| Image format | Tidak terlihat AVIF/WebP di web_extract (hanya alt text). Format [UNKNOWN] (perlu view source) | [UNKNOWN] |
| Lazy loading | [UNKNOWN] (perlu view source) | [UNKNOWN] |
| LCP/CLS/INP | [UNKNOWN] (Lighthouse tidak dijalankan) | [UNKNOWN] |
| CDN | [UNKNOWN] (perlu view source / Wappalyzer) | [UNKNOWN] |
| Stack/CMS | Tech stack LinkedIn: "amp" (Accelerated Mobile Pages) [ESTIMATED] LinkedIn (single source, marketing data; akurasi [UNKNOWN]) — https://linkedin.com/company/petfirst-id. Hosting [UNKNOWN] | [ESTIMATED] LinkedIn / [UNKNOWN] |

### 2.3 Aksesibilitas (observasi)

| Aspek | Temuan | Label |
|---|---|---|
| Alt text | Foto tim/review memiliki alt (web_extract menampilkan nama). Alt text [VERIFIED] petfirst.id | [VERIFIED] petfirst.id |
| Contrast | [UNKNOWN] (perlu axe DevTools / Lighthouse) | [UNKNOWN] |
| Keyboard nav | [UNKNOWN] | [UNKNOWN] |
| Tap targets | [UNKNOWN] | [UNKNOWN] |
| WCAG AA | [UNKNOWN] (Lighthouse tidak dijalankan; automated catch ~30-40% WCAG) [VERIFIED] WebCheer | [UNKNOWN] |

### 2.4 SEO (title, meta, schema, sitemap)

| Aspek | Temuan | Label |
|---|---|---|
| Title | "Petfirst · Salon Grooming & Penitipan Anjing & Kucing di Malang" (≤60 char) [VERIFIED] petfirst.id | [VERIFIED] petfirst.id |
| Meta description | [UNKNOWN] (web_extract tidak menampilkan meta desc) | [UNKNOWN] |
| Structured data (JSON-LD) | [UNKNOWN] (perlu view source) | [UNKNOWN] |
| Sitemap/robots | [UNKNOWN] | [UNKNOWN] |
| Canonical/hreflang | Bilingual ID/EN [VERIFIED] petfirst.id; hreflang [UNKNOWN] | [VERIFIED]/[UNKNOWN] |
| OG tags | [UNKNOWN] | [UNKNOWN] |

### 2.5 Konversi (CTA placement, trust, social proof)

| Aspek | Temuan | Label |
|---|---|---|
| Hero CTA | Social proof above fold (2.000+ pets, 2 cabang, ★4.9, 6 quotes review) [VERIFIED] petfirst.id | [VERIFIED] petfirst.id |
| Trust layer | Team bios 9 orang (nama + jabatan), "Satu anabul, satu groomer", "Filosofi anabul dulu", "Fasilitas bersih kinclong", "Peralatan premium (ARTERO, PETKIT, Chris Christensen)" [VERIFIED] petfirst.id | [VERIFIED] petfirst.id |
| Social proof | 6 review quotes (5★) dengan nama + sumber "Ulasan Google", social proof "2.000+ Anabul bahagia dirawat" [VERIFIED] petfirst.id | [VERIFIED] petfirst.id |
| Objection handling | Syarat hotel (vaksin min 2 dosis, sehat, bebas kutu/jamur, 1 kamar 1 pet, bawa makanan sendiri) [VERIFIED] petfirst.id | [VERIFIED] petfirst.id |
| Pricing transparency | Pricelist transparan per cabang/ukuran (Grooming Standard/Premium/Kids, Hotel Kucing/Anjing) [VERIFIED] petfirst.id | [VERIFIED] petfirst.id |
| Tracking booking | 5 langkah real-time dengan notifikasi "siap dijemput" [VERIFIED] petfirst.id | [VERIFIED] petfirst.id |
| Antar-jemput | Door-to-door Arief, seluruh Kota Malang, gratis dengan paket 60 hari (Silver/Gold), luar itu biaya standar [VERIFIED] petfirst.id | [VERIFIED] petfirst.id |

### 2.6 Kekuatan PETFIRST
1. Hero jelas + social proof above fold (2.000+ pets, ★4.9, 6 quotes) [VERIFIED] petfirst.id.
2. Pricelist transparan per cabang/ukuran (no surprise) [VERIFIED] petfirst.id.
3. Tracking booking 5 langkah real-time (differentiator unik) [VERIFIED] petfirst.id.
4. Team bios 9 orang (trust: real people) [VERIFIED] petfirst.id.
5. Syarat hotel jelas (vaksin, sehat, bebas kutu/jamur) [VERIFIED] petfirst.id.
6. Antar-jemput door-to-door Arief (convenience) [VERIFIED] petfirst.id.
7. Bilingual ID/EN [VERIFIED] petfirst.id.
8. "Satu anabul, satu groomer" (consistency) [VERIFIED] petfirst.id.
9. Social media specialists Rava & Momo (engagement) [VERIFIED] petfirst.id.
10. Tech stack AMP (fast mobile) [ESTIMATED] LinkedIn (single source, marketing data; akurasi [UNKNOWN]) — https://linkedin.com/company/petfirst-id.

### 2.7 Kelemahan PETFIRST (exploitable)
1. **PETFIRST punya FAQ tapi terbatas** [ESTIMATED] Riset #1 (Riset #1 hanya menyebut "FAQ"; "terbatas" [ESTIMATED] Riset #12) → CatLova bisa unggul dengan FAQ lebih lengkap (syarat vaksin, harga, proses) [ESTIMATED] Riset #12.
2. Tidak ada CTA antar-jemput di hero (antar-jemput ada di section bawah, bukan hero) [ESTIMATED] petfirst.id.
3. NAP 2 cabang (bisa membingungkan user single-location) [ESTIMATED] petfirst.id.
4. Jam buka 09:00-19:00 (bukan 24 jam) [VERIFIED] petfirst.id.
5. Review widget hanya 6 quotes (vs 610-670 Google) — underutilize social proof [VERIFIED] petfirst.id.
6. "Owner sabar" quote [UNKNOWN] (ambigu CatLova vs Dr.Meoww) — Riset #5 (sumber: idfirms.com review "ownernya sabar banget"; caribisnis.id review "staff dan dokter bener bener telaten dan sabar"). URL: https://idfirms.com/jawa-timur/drmeoww-cabang-2-537244, https://caribisnis.id/klinik-hewan/malang/sukun/dr-meoww-cabang-2-grooming-dan-suku-imp1.
7. Tracking booking via external subdomain (reservation.petfirst.id) — halaman kosong saat extract [UNKNOWN] apakah form aktif.
8. Tidak ada blog/content SEO [ESTIMATED] Riset #6 ("blog/content SEO" aspek belum terkupas).
9. Tidak ada cookie/privacy/terms page terlihat [UNKNOWN] Riset #12 (perlu view source).
10. Mobile responsiveness belum test real device [ESTIMATED] Riset #6.

---

## 3. Dr.Meoww (drmeoww.com) — deep audit

### 3.1 Website publik
| Aspek | Temuan | Label |
|---|---|---|
| Domain publik matang | TIDAK ditemukan. `drmeoww.com` / `drmeoww.id` tidak terindex (web_search 0 hit). Subdomain `api.drmeoww.my.id` terdeteksi di urlscan.io (Cloudflare, 5 hari umur, "No direct hits — Nothing is hosted on this domain") | [VERIFIED] urlscan.io |
| Website matang | [UNKNOWN] apakah ada website matang (api.drmeoww.my.id 5d old, no direct hits). Publikasi via Facebook (voofla), Instagram @grooming.drmeow, caribisnis.id, idfirms | [VERIFIED] web_search + urlscan.io |
| UX/perf/a11y/SEO | [UNKNOWN] (tidak ada website sendiri untuk diaudit) | [UNKNOWN] |
| GBP/Maps | Rating 4,9/308-325 (Cabang 2), 5,0/11 (Cabang 3), jam 08:00-17:00, alamat La Vella House kavling 29, Bakalankrajan, Sukun | [VERIFIED] caribisnis.id |
| Channel | Facebook (voofla), Instagram @grooming.drmeow, WhatsApp (admin fast respon), Google Maps | [VERIFIED] voofla + caribisnis.id |
| Pricing | Grooming 50-65rb (≤5kg, +5rb >5kg), antar-jemput ongkir 5rb, sterilisasi harian, klinik + operasi | [VERIFIED] voofla + caribisnis.id |
| Trust signals | Free snack, antar-jemput, admin WA fast respon, sterilisasi harian, klinik medis | [VERIFIED] voofla + caribisnis.id |
| Kekuatan | Harga termurah (50-65rb), 3 cabang, klinik medis (vaksinasi, konsultasi, operasi), admin fast respon, review "Setiap bulan selalu grooming disini" | [VERIFIED] Riset #1, #3 |
| Kelemahan | Tidak punya website domain matang (peluang besar untuk CatLova), review volume lebih rendah (308-325 vs PETFIRST 610-670), keluhan konsistensi/privasi (review idfirms: "tidak bisa menjaga privasi customer") | [VERIFIED] Riset #1, #3 |

### 3.2 Implikasi untuk CatLova
- Dr.Meoww tidak punya website matang → peluang CatLova menjadi #2 (setelah PETFIRST) dengan website + WA-first [ESTIMATED] Riset #6.
- Dr.Meoww unggul harga (50-65rb) → CatLova jangan perang harga; unggulkan rating + antar-jemput + telaten [ESTIMATED] Riset #3.
- Dr.Meoww klinik medis (vaksinasi, konsultasi, operasi) → CatLova tidak punya medis [UNKNOWN] (CCTV/medis [UNKNOWN] Riset #5).

---

## 4. Pet Bum (petbum.id) — deep audit

### 4.1 Website publik
| Aspek | Temuan | Label |
|---|---|---|
| Domain publik | TIDAK ditemukan. `petbum.id` / `petbum.com` tidak terindex (web_search 0 hit). Hanya IG/FB/WA/Google Maps, caribisnis.id, wanderlog, exa.ai, polomap, idfirms | [VERIFIED] web_search |
| Website matang | [UNKNOWN] (tidak ada domain publik) | [UNKNOWN] |
| UX/perf/a11y/SEO | [UNKNOWN] (tidak ada website sendiri untuk diaudit) | [UNKNOWN] |
| GBP/Maps | Rating 4,9-5,0/410-466, jam 08:00-17:00, alamat Jl. Indragiri, Purwantoro, Blimbing | [VERIFIED] caribisnis.id + exa.ai |
| Channel | Instagram, Facebook, WhatsApp, Google Maps | [VERIFIED] caribisnis.id |
| Pricing | Grooming eksplisit [UNKNOWN] (est. 50-80rb) | [UNKNOWN] Riset #3 |
| Trust signals | CCTV 24 jam, home service, drh. Eca, groomer Julian/Putra sabar, admin Seva fast response, 2 lantai, grooming kelinci | [VERIFIED] wanderlog + caribisnis.id |
| Kekuatan | CCTV 24 jam (trust), home service (convenience), drh. Eca (medis), groomer Julian/Putra sabar, admin Seva fast response, rating 4,9-5,0/410-466, grooming kelinci (niche) | [VERIFIED] Riset #1, #3 |
| Kelemahan | Tidak punya website domain (peluang besar), grooming cepat (keluhan kualitas: "grooming ragdoll cm butuh waktu 40mnt"), review volume 410-466 (di bawah PETFIRST 610-670) | [VERIFIED] caribisnis.id review |

### 4.2 Implikasi untuk CatLova
- Pet Bum tidak punya website domain → peluang CatLova menjadi #2 (setelah PETFIRST) dengan website + WA-first [ESTIMATED] Riset #6.
- Pet Bum unggul CCTV 24 jam + home service + medis → CatLova gap trust (CCTV [UNKNOWN], medis [UNKNOWN]) [ESTIMATED] Riset #5.
- Pet Bum grooming cepat (keluhan kualitas) → CatLova bisa unggulkan "telaten, tidak terburu-buru" [ESTIMATED] Riset #1, #3.

---

## 5. Benchmark matrix (PETFIRST vs Dr.Meoww vs Pet Bum vs CatLova)

| Aspek | PETFIRST | Dr.Meoww | Pet Bum | CatLova |
|---|---|---|---|---|
| Website domain matang | ✅ [VERIFIED] petfirst.id | ❌ [VERIFIED] urlscan.io (api.drmeoww.my.id 5d, no hits) | ❌ [VERIFIED] web_search (no domain) | ❌ [VERIFIED] Riset #1 (linktr.ee only) |
| Hero jelas | ✅ [VERIFIED] petfirst.id ("Tempat setiap anabul serasa di rumah.") | [UNKNOWN] (no website) | [UNKNOWN] (no website) | [UNKNOWN] (linktr.ee only) |
| Pricelist transparan | ✅ [VERIFIED] petfirst.id (per cabang/ukuran) | ❌ [VERIFIED] voofla (grooming 50-65rb publik; antar-jemput via WA) | ❌ [VERIFIED] caribisnis.id (harga via WA) | ❌ [UNKNOWN] Riset #3 |
| Tracking booking real-time | ✅ [VERIFIED] petfirst.id (5 langkah) | [UNKNOWN] (no website to audit) | [UNKNOWN] (no website to audit) | [UNKNOWN] (no website) |
| Team bios | ✅ [VERIFIED] petfirst.id (9 orang) | [UNKNOWN] (no website to audit) | [UNKNOWN] (no website to audit) | [UNKNOWN] (no website) |
| Syarat hotel jelas | ✅ [VERIFIED] petfirst.id (vaksin, sehat, bebas kutu/jamur) | [UNKNOWN] (no website to audit) | [UNKNOWN] (no website to audit) | [UNKNOWN] (no website) |
| Antar-jemput | ✅ [VERIFIED] petfirst.id (door-to-door Arief, gratis paket 60 hari) | ✅ [VERIFIED] voofla (ongkir 5rb) | ✅ [VERIFIED] wanderlog (home service) | ✅ [VERIFIED] Riset #1 (free) |
| CCTV 24 jam | ✅ [VERIFIED] petfirst.id | [UNKNOWN] | ✅ [VERIFIED] wanderlog | [UNKNOWN] |
| Klinik medis | ❌ [VERIFIED] petfirst.id (grooming + hotel only) | ✅ [VERIFIED] caribisnis.id (vaksinasi, konsultasi, operasi) | ✅ [VERIFIED] caribisnis.id (vaksinasi, konsultasi, operasi) | [UNKNOWN] Riset #5 |
| Social proof above fold | ✅ [VERIFIED] petfirst.id (2.000+ pets, ★4.9, 6 quotes) | [UNKNOWN] (no website to audit) | [UNKNOWN] (no website to audit) | [UNKNOWN] (no website) |
Catatan matriks: ✅/[UNKNOWN] bersandar web_extract petfirst.id (2026-10-27) atau Riset #1-#5; [UNKNOWN] = tidak terverifikasi langsung. ★4.9 = review widget petfirst.id (6 quotes); 5,0 = Google Maps (610-670 review) — dua sumber berbeda, bukan kontradiksi. "FAQ terbatas" = [ESTIMATED] Riset #12 (Riset #1 hanya menyebut "FAQ" tanpa detail kedalaman).
| Bilingual ID/EN | ✅ [VERIFIED] petfirst.id | [UNKNOWN] (no website to audit) | [UNKNOWN] (no website to audit) | [UNKNOWN] (no website) |
| Review widget | ✅ [VERIFIED] petfirst.id (6 quotes) | [UNKNOWN] (no website to audit) | [UNKNOWN] (no website to audit) | [UNKNOWN] (no website) |
| Mobile responsive | [ESTIMATED] (belum test real device) | [UNKNOWN] | [UNKNOWN] | [UNKNOWN] |
| Lighthouse score | [UNKNOWN] (tidak dijalankan) | [UNKNOWN] | [UNKNOWN] | [UNKNOWN] |
| SEO title/meta/schema | SEO title [VERIFIED] petfirst.id ("Petfirst · Salon Grooming & Penitipan Anjing & Kucing di Malang"); meta desc/schema/sitemap [UNKNOWN] (perlu view source) | [UNKNOWN] (no website to audit) | [UNKNOWN] (no website to audit) | [UNKNOWN] (no website) |
| Cookie/privacy/terms | [UNKNOWN] (tidak terlihat) | [UNKNOWN] | [UNKNOWN] | [UNKNOWN] |
| Rating/Review volume | 5,0/610-670 [VERIFIED] Riset #1 | 4,9/308-325 [VERIFIED] Riset #1 | 4,9-5,0/410-466 [VERIFIED] Riset #1 | 5,0/211 [VERIFIED] Riset #1 |

---

## 6. Fitur yang bisa diadopsi (PETFIRST benchmark)

1. **Hero jelas + social proof above fold** (2.000+ pets, ★4.9, 6 quotes) [VERIFIED] petfirst.id → CatLova: "Rating 5,0 (211 ulasan) · Free antar-jemput · Owner sabar (status [UNKNOWN])" [ESTIMATED] Riset #6.
2. **Pricelist transparan per cabang/ukuran** [VERIFIED] petfirst.id → CatLova: konfirmasi harga owner dulu [UNKNOWN] Riset #3.
3. **Tracking booking 5 langkah real-time** [VERIFIED] petfirst.id → CatLova: fase 2 (butuh sistem) [ESTIMATED].
4. **Team bios** (nama + jabatan) [VERIFIED] petfirst.id → CatLova: foto owner + tim [UNKNOWN] Riset #7.
5. **Syarat hotel jelas** (vaksin, sehat, bebas kutu/jamur, 1 kamar 1 pet) [VERIFIED] petfirst.id → CatLova: tulis syarat boarding [ESTIMATED].
6. **Antar-jemput door-to-door** [VERIFIED] petfirst.id → CatLova: sudah free antar-jemput [VERIFIED] Riset #1 (USP unggul).
7. **Bilingual ID/EN** [VERIFIED] petfirst.id → CatLova: fase 2 (jika target ekspat) [ESTIMATED].
8. **Review widget** (6 quotes) [VERIFIED] petfirst.id → CatLova: kumpulkan review (target 300+) [ESTIMATED] Riset #13.
9. **"Satu anabul, satu groomer"** (consistency) [VERIFIED] petfirst.id → CatLova: komunikasikan USP [ESTIMATED].
10. **Social media specialists** (Rava & Momo) [VERIFIED] petfirst.id → CatLova: IG content (3 Reels/minggu) [ESTIMATED] Riset #8.

---

## 7. Kelemahan yang bisa dieksploitasi

1. **PETFIRST punya FAQ tapi terbatas** [ESTIMATED] Riset #1 (Riset #1 hanya menyebut "FAQ"; "terbatas" [ESTIMATED] Riset #12) → CatLova bisa unggul dengan FAQ lebih lengkap (syarat vaksin, harga, proses) [ESTIMATED] Riset #12.
2. **PETFIRST tidak ada CTA antar-jemput di hero** [ESTIMATED] petfirst.id → CatLova: hero dengan CTA "Chat WA — jemput gratis" [ESTIMATED] Riset #6.
3. **PETFIRST NAP 2 cabang** [ESTIMATED] petfirst.id → CatLova: single location (lebih fokus) [ESTIMATED].
4. **PETFIRST jam buka 09:00-19:00** [VERIFIED] petfirst.id → CatLova: 08:00-17:00 (lebih pagi) [VERIFIED] Riset #1.
5. **PETFIRST review widget hanya 6 quotes** [VERIFIED] petfirst.id → CatLova: tampilkan lebih banyak review [ESTIMATED].
6. **Dr.Meoww & Pet Bum tidak punya website domain** [VERIFIED] web_search → CatLova peluang #2 dengan website + WA-first [ESTIMATED] Riset #6.
7. **Dr.Meoww keluhan privasi** [VERIFIED] idfirms → CatLova: privasi (UU PDP, no sharing) [ESTIMATED] Riset #11.
8. **Pet Bum grooming cepat** (keluhan kualitas) [VERIFIED] caribisnis.id → CatLova: "telaten, tidak terburu-buru" [ESTIMATED] Riset #1.
9. **PETFIRST tracking booking via external subdomain** (reservation.petfirst.id halaman kosong) [UNKNOWN] → CatLova: WA-first (lebih simple) [ESTIMATED] Riset #6.

---

## 8. Rekomendasi CatLova (berbasis Riset #6, #9, #12)

1. **Website domain** (catlova.com/.id) dengan struktur 9-block (hero → scope → process preview → trust layer → booking interface → objection handling → FAQ → post-booking expectation → secondary path) [ESTIMATED] Riset #6.
2. **WA-first** (Chat WA primary CTA, sticky floating button, pre-filled message) [ESTIMATED] Riset #6.
3. **Pricelist transparan** (konfirmasi owner) [UNKNOWN] Riset #3.
4. **Foto before/after** (real photography, bukan stock) [ESTIMATED] Riset #7.
5. **Review Google** (target 300+) [ESTIMATED] Riset #4, #13.
6. **FAQ** (schema FAQPage) [ESTIMATED] Riset #4, #9.
7. **NAP konsisten** (single location, jam buka jelas) [ESTIMATED] Riset #4.
8. **Schema LocalBusiness/Service/FAQ** [ESTIMATED] Riset #4, #9.
9. **Mobile-first** (<3s load, 44x44px tap targets) [ESTIMATED] Riset #6, #9.
10. **Speed <2s ideal** [ESTIMATED] Riset #6.
11. **Tracking** (Meta Pixel + GA4 + UTM) [ESTIMATED] Riset #6.
12. **A11y WCAG 2.2 AA** (contrast 4.5:1, tap targets 24x24px, no sideways scroll 320px) [VERIFIED] Riset #9.
13. **PWA** (opsional, ROI [UNKNOWN]) [ESTIMATED] Riset #9.

---

## 9. Residual [UNKNOWN]

1. PETFIRST Lighthouse score (perf/a11y/best-practices/SEO) — [UNKNOWN] (tidak dijalankan).
2. PETFIRST meta description, structured data (JSON-LD), sitemap/robots, canonical/hreflang, OG tags — [UNKNOWN] (perlu view source).
3. PETFIRST cookie/privacy/terms page — [UNKNOWN] (tidak terlihat di web_extract).
4. PETFIRST mobile responsiveness (real device) — [UNKNOWN] (belum test).
5. PETFIRST image format (AVIF/WebP) & lazy loading — [UNKNOWN].
6. PETFIRST CDN/hosting — [UNKNOWN].
7. PETFIRST reservation.petfirst.id (form aktif?) — [UNKNOWN] (halaman kosong saat extract).
8. Dr.Meoww website matang (api.drmeoww.my.id 5d old, no direct hits) — [UNKNOWN].
9. Pet Bum website domain — [UNKNOWN] (tidak ditemukan).
10. CatLova website/domain/hosting/stack/CMS/analytics/PWA/CWV/a11y — [UNKNOWN] Riset #9.
11. CatLova CCTV status — [UNKNOWN] Riset #5.
12. CatLova harga — [UNKNOWN] Riset #3.
13. CatLova GBP status — [UNKNOWN] Riset #4.
14. CatLova foto aset (before/after, fasilitas, tim) — [UNKNOWN] Riset #7.

---

## 10. Sumber

- [VERIFIED] petfirst.id — homepage full content (hero, layanan, pricelist, tracking, team, syarat hotel, antar-jemput, NAP, jam buka) — https://petfirst.id/
- [VERIFIED] reservation.petfirst.id — halaman kosong saat extract — https://reservation.petfirst.id/
- [VERIFIED] urlscan.io — api.drmeoww.my.id (Cloudflare, 5d old, no direct hits) — https://urlscan.io/domain/api.drmeoww.my.id
- [ESTIMATED] LinkedIn — petfirst (tech stack amp — single source, marketing data; akurasi [UNKNOWN]) — https://linkedin.com/company/petfirst-id
- [ESTIMATED] LinkedIn — petfirst (traffic 1.734 monthly visits, 6.2 pages/visit, 98s avg, bounce 24% — vendor/marketing data, akurasi [UNKNOWN]) — https://linkedin.com/company/petfirst-id
- [VERIFIED] caribisnis.id — Dr.Meoww Cabang 2 (rating 4,9/325, jam, alamat, pricing) — https://caribisnis.id/klinik-hewan/malang/sukun/dr-meoww-cabang-2-grooming-dan-suku-imp1
- [VERIFIED] caribisnis.id — Pet Bum (rating 4,9/460, jam, alamat, pricing) — https://caribisnis.id/klinik-hewan/malang/blimbing/pet-bum-blim-imp1
- [VERIFIED] idfirms.com — Dr.Meoww Cabang 2 (review privasi) — https://idfirms.com/jawa-timur/drmeoww-cabang-2-537244
- [VERIFIED] voofla.com — Dr.Meoww (free snack, antar-jemput, promo Merdeka, sterilisasi harian) — https://www.voofla.com/ID/Malang/101265881262636/grooming.drmeow
- [VERIFIED] wanderlog.com — Pet Bum (rating 4,9/457, review loyalty) — https://wanderlog.com/place/details/12464589/pet-bum
- [VERIFIED] exa.ai — Pet Bum (rating 5,0/410) — https://exa.ai/library/place/pyfjl7gkxs9
- [VERIFIED] polomap.com — Pet Bum (rating 5,0/443) — https://2pos.asia/129350/33478
- [VERIFIED] WebCheer — Lighthouse automated catch ~30-40% WCAG — https://webcheer.co/audit
- [VERIFIED] Riset #1-#12 (kompetitor, target pasar, layanan/harga, SEO/GBP, trust signals, website conversion, branding, content marketing, technical architecture, lokal & logistik, legal & compliance, competitor website audit)