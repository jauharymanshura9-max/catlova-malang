# Riset #4 — SEO Lokal & Google Business Profile (GBP) Optimization

**Proyek:** CatLova Malang (salon & penitipan kucing, Sukun, Malang)
**Tanggal riset:** 2026-10-26 (keyword live via Google Suggest; sumber GBP/SEO via web_extract 2026-10-26)
**Scope:** Keyword lokal (grooming/penitipan/salon hewan Malang), search intent, SERP features, GBP (kategori, atribut, foto, review, posting, Q&A, service list, area layanan, NAP), posisi kompetitor local pack, gap CatLova, quick win, technical SEO (structured data, meta, sitemap, robots, OG, mobile, CWV). Input untuk website CatLova + GBP optimization.
**Metode:** Google Suggest endpoint `suggestqueries.google.com/complete/search` (client=firefox, hl=id, gl=id) + web_search/web_extract (GBP best practices 2026, local SEO pet services) + Riset #1/#2/#3. Tanpa CamoFox live; OpenCLI tidak digunakan.
**Konvensi sumber:** [VERIFIED] = data langsung dari endpoint/sumber; URL lengkap di §8. [ESTIMATED] = rekomendasi/best practice; [UNKNOWN] = belum diverifikasi (terutama status GBP CatLova live).

---

## 0. Ringkasan eksekutif

- **Keyword inti** (Google Suggest, 2026-10-26): "grooming kucing malang", "grooming kucing malang terdekat", "harga grooming kucing malang", "grooming kucing panggilan malang", "grooming kucing murah malang", "grooming kucing malang reviews", "penitipan kucing malang", "harga penitipan kucing malang", "penitipan kucing murah di malang", "pet hotel malang" (+ varian), "salon kucing malang". [VERIFIED] Google Suggest.
- **Tidak ada saran** untuk: "salon hewan malang", "grooming kucing sukun", "grooming kucing malang 24 jam", "grooming kucing malang antar jemput", "klinik hewan malang grooming" → [VERIFIED] Google Suggest (kasus negatif = bukti bernilai).
- **Volume pencarian [UNKNOWN]** — tidak ada tool volume gratis yang reliable; jangan fabricate. Estimasi [ESTIMATED]: "grooming kucing malang" = medium (local, intent transaksional); "penitipan kucing malang" = medium-tinggi (peak lebaran, musiman).
- **Local pack top-3** (PETFIRST 5,0/610-670, Dr.Meoww 4,9/308-325, Pet Bum 4,9-5,0/410-466) menang karena: rating tinggi + review volume + kategori tepat + foto + website + area layanan + posting. CatLova (5,0/211) absen → gap prominens (review volume) + relevansi (nama/kategori) + GBP completeness [ESTIMATED].
- **Quick win CatLova:** (1) klaim & lengkapi GBP (kategori "Pet Groomer" + secondary "Pet Boarding Service"), (2) kumpulkan review (target 300+), (3) foto before/after + fasilitas, (4) posting rutin, (5) NAP konsisten + website dengan structured data LocalBusiness/Service/FAQ.
- **Technical SEO:** LocalBusiness schema (name, address, phone, geo, openingHours, priceRange, image, url), Service schema per layanan, FAQPage schema, meta title/desc, sitemap, robots, OG, mobile-first, CWV (LCP <2,5s, CLS <0,1, INP <200ms).

---

## 1. Keyword research (Google Suggest, 2026-10-26) — [VERIFIED]

### 1.1 Query induk & saran

| Query induk | Saran Google (persis) | Subtype |
|---|---|---|
| grooming kucing malang | grooming kucing malang; grooming kucing malang terdekat; grooming kucing malang reviews; harga grooming kucing malang; grooming kucing panggilan malang; grooming kucing murah malang | 512 + 22/30 |
| grooming kucing di malang | grooming kucing di malang; biaya grooming kucing di malang; grooming kucing malang terdekat; grooming kucing panggilan malang; grooming kucing murah malang; grooming kucing malang reviews | 512 + 22/30 |
| penitipan kucing malang | penitipan kucing malang; harga penitipan kucing malang; penitipan kucing murah di malang | 512 + 22/30 |
| penitipan kucing murah malang | penitipan kucing murah di malang | 22/30 |
| pet hotel malang | pet hotel malang; pet friendly hotel malang; harga pet hotel malang; pet hotel murah malang; gamel pet hotel malang; hotel pet friendly batu malang | 512 + 22/30 |
| grooming kucing murah malang | grooming kucing murah malang | 22/30 |
| grooming kucing terdekat malang | grooming kucing malang terdekat | 22/30 |
| salon kucing malang | salon kucing malang | 22/30 |

### 1.2 Query tanpa saran (kasus negatif — bukti bernilai)

| Query induk | Hasil |
|---|---|
| salon hewan malang | (tidak ada saran) |
| grooming kucing sukun | (tidak ada saran) |
| grooming kucing malang 24 jam | (tidak ada saran) |
| grooming kucing malang antar jemput | (tidak ada saran) |
| klinik hewan malang grooming | (tidak ada saran) |

Interpretasi: "salon hewan malang", "grooming kucing sukun", "24 jam", "antar jemput", "klinik hewan grooming" = istilah yang belum populer di autocomplete → peluang niche/long-tail, tapi volume rendah [ESTIMATED]. "grooming kucing malang 24 jam" tidak disarankan → jangan klaim "24 jam" di copy (sesuai lesson Lisensi Coffee: kata populer ≠ kata aman).

### 1.3 Keyword master list (prioritas)

| Prioritas | Keyword | Intent | Label |
|---|---|---|---|
| 1 | grooming kucing malang | transaksional (cari jasa) | [VERIFIED] Suggest |
| 2 | grooming kucing malang terdekat | navigasional (maps/near me) | [VERIFIED] Suggest |
| 3 | harga grooming kucing malang / biaya grooming kucing di malang | informasional-transaksional (harga) | [VERIFIED] Suggest |
| 4 | grooming kucing panggilan malang | transaksional (home service) | [VERIFIED] Suggest |
| 5 | grooming kucing murah malang | transaksional (budget) | [VERIFIED] Suggest |
| 6 | grooming kucing malang reviews | evaluatif (trust) | [VERIFIED] Suggest |
| 7 | penitipan kucing malang | transaksional | [VERIFIED] Suggest |
| 8 | harga penitipan kucing malang | informasional-transaksional | [VERIFIED] Suggest |
| 9 | penitipan kucing murah di malang | transaksional (budget) | [VERIFIED] Suggest |
| 10 | pet hotel malang (+ varian) | transaksional (boarding) | [VERIFIED] Suggest |
| 11 | salon kucing malang | transaksional | [VERIFIED] Suggest |
| 12 | grooming kucing di malang | transaksional | [VERIFIED] Suggest |

**Catatan:** saran Google Suggest bisa berbeda antar waktu/pengguna; label [VERIFIED: Suggest 2026-10-26]. Re-verifikasi live sebelum dipakai di copy/meta.

---

## 2. Search intent & SERP features

| Intent | Contoh query | SERP feature yang muncul | Peluang CatLova |
|---|---|---|---|
| Transaksional (langsung booking) | "grooming kucing malang", "grooming kucing malang terdekat" | Local pack (3 listing), Maps, website, IG | GBP + website dengan CTA Chat WA |
| Harga | "harga grooming kucing malang", "biaya grooming kucing di malang" | Artikel, listing, GBP service list | Tampilkan pricelist transparan di website + GBP service |
| Evaluatif (trust) | "grooming kucing malang reviews" | Review Google, artikel rekomendasi | Kumpulkan review segar 5★, respond |
| Musiman | "penitipan kucing malang" (peak lebaran) | Local pack, artikel "penitipan hewan terbaik Malang" | Content musiman + GBP post |
| Niche/long-tail | "grooming kucing panggilan malang", "pet hotel malang" | Listing panggilan, pet hotel | Halaman service khusus (home service, pet hotel) |

**SERP competitors (dari Riset #1 & web):** PETFIRST (petfirst.id, website + GBP 5,0/610-670), Dr.Meoww (voofla IG + GBP 4,9/308-325), Pet Bum (GBP 4,9-5,0/410-466, home service), plus direktori: caribisnis.id, aboutmalang.com, idntimes, radar malang, exa.ai/places, groomingkucing.id (Faunafella).

---

## 3. Google Business Profile (GBP) optimization

### 3.1 Kategori & atribut

| Elemen | Rekomendasi | Label |
|---|---|---|
| Primary category | "Pet Groomer" (sesuai GBP best practice 2026) | [ESTIMATED] (best practice, bukan data CatLova) |
| Secondary categories | "Pet Boarding Service", "Pet Supply Store" (jika jual supplies), "Veterinary Pharmacy" (jika ada obat) | [ESTIMATED] |
| Atribut | "Women-owned" (jika berlaku), "By appointment only", "Accepts credit cards", "Wheelchair accessible" (jika berlaku) | [ESTIMATED] |
| Service area | Jika salon (brick-and-mortar): tight radius sekitar Sukun/Malang; jika juga antar-jemput: tambah area layanan Kota Malang | [ESTIMATED] |

**Catatan:** CatLova GBP status (claimed/verified, kategori saat ini, atribut) = [UNKNOWN] — perlu verifikasi live (CamoFox) sebelum eksekusi. Jangan asumsikan.

### 3.2 Foto (GBP)

Best practice 2026 (Google Internal Data, GBP playbook): bisnis dengan foto → 42% lebih banyak request arah, 90% lebih likely dikunjungi, 35% lebih banyak klik website. Rekomendasi:
- Min 20+ foto: fasad/exterior, interior (grooming table, kandang, AC), before/after grooming, tim, anabul bahagia, signage.
- Update 5–10 foto baru per bulan; refresh 30% foto setiap kuartal.
- Foto natural, cahaya baik, filename deskriptif, geotag enabled.
- [ESTIMATED] (best practice, bukan data CatLova).

CatLova foto status = [UNKNOWN] (perlu cek GBP live).

### 3.3 Review (volume & velocity)

Fakta (Petboost 2025 GBP research): 81% konsumen pakai Google review untuk evaluasi; 73% hanya percaya review 30 hari terakhir; top-3 posisi rata-rata 200+ review; review positif naik konversi 15–20%. GroomBoard: groomer dengan 80 review 4,8★ hampir selalu mengalahkan 12 review 5,0★.

Implikasi CatLova: rating 5,0/211 sudah bagus, tapi gap vs PETFIRST (610-670) dan Pet Bum (410-466) = prominens. Target: 300+ review dalam 6–12 bulan; review velocity (baru per bulan) lebih penting daripada rating sempurna.

Strategi (best practice): minta review saat pickup (owner senang, anabul segar); link langsung review; QR code di struk; balas semua review (positif & negatif); jangan meminta hanya yang puas (policy Google). [ESTIMATED].

CatLova review collection status = [UNKNOWN].

### 3.4 Posting (GBP Posts)

Best practice: posting rutin (1–2x/minggu) — promo, tips perawatan, before/after, musiman (lebaran/mudik), event. Foto + CTA (Chat WA, booking). [ESTIMATED].

### 3.5 Q&A (GBP)

Seed Q&A dengan pertanyaan yang sering muncul (harga, jam, antar-jemput, syarat vaksin, kandang, CCTV). Jawab sendiri sebagai owner (transparan). [ESTIMATED] (best practice).

### 3.6 Service list (GBP Services)

Tambahkan setiap layanan dengan deskripsi + harga (range ok): Grooming Sehat, Grooming Kutu/Jamur, Lion Cut, Penitipan (per malam), Antar-jemput, Home service, Paket lebaran. [ESTIMATED] (best practice; harga CatLova [UNKNOWN]).

### 3.7 Area layanan (service area)

Jika salon (brick-and-mortar): alamat fisik Sukun + radius kecil. Jika antar-jemput: tambah area layanan Kota Malang (semua kecamatan). [ESTIMATED].

### 3.8 NAP consistency (Name, Address, Phone)

NAP harus identik di semua platform: Google GBP, website, IG, FB, direktori (caribisnis, exa, polomap, yandex). Audit kuartalan: duplikat, alamat lama, nomor salah. [ESTIMATED] (best practice).

CatLova NAP saat ini: "CatLova", "Jl. Terusan Mergan Raya No.Kav.1/20, Sukun, Malang", WA 0877-5205-1970. [VERIFIED] lead dossier. Konsistensi di platform lain = [UNKNOWN].

---

## 4. Posisi kompetitor local pack — GBP signals

| Kompetitor | Rating/Review | Website | GBP signals (est.) | Label |
|---|---|---|---|---|
| PETFIRST Sawojajar | 5,0 / 610-670 | petfirst.id (tracking booking) | foto banyak, kategori pet groomer, 2 cabang, posting, antar-jemput, service list | [VERIFIED] Riset #1 + petfirst.id |
| Dr.Meoww Cabang 2 | 4,9 / 308-325 | (tidak ada domain; IG @grooming.drmeow, voofla) | rating tinggi, review volume, IG aktif, sterilisasi harian, antar-jemput | [VERIFIED] Riset #1 + voofla |
| Pet Bum | 4,9-5,0 / 410-466 | (tidak ada domain; IG @petbum.grooming) | brand authority drh. Eca, CCTV 24 jam, home service, klinik | [VERIFIED] Riset #1 + idntimes |
| CatLova | 5,0 / 211 | tidak ada domain (hanya linktr.ee) | rating tertinggi tapi review volume rendah; IG 801 follower/165 post (last post 2026-07-06); tanpa website domain | [VERIFIED] Riset #1/#2 |

**Catatan:** CatLova absen dari local pack bukan karena rating (5,0 > 4,9) tapi prominens (211 vs 308-670 review) + relevansi (nama/kategori) + GBP completeness [ESTIMATED].

---

## 5. Posisi CatLova — gap & quick win

### 5.1 Gap

| Gap | Dampak | Prioritas |
|---|---|---|
| Review volume rendah (211 vs 308-670) | prominens rendah → tidak masuk local pack | Tinggi |
| Tanpa website domain (hanya linktr.ee) | relevansi & CTR rendah; GBP "website" kosong/lemah | Tinggi |
| GBP completeness [UNKNOWN] (kategori, atribut, foto, service list, area, posting) | GBP kurang kuat | Tinggi |
| IG posting tidak segar (last post 2026-07-06) | sinyal aktif rendah | Sedang |
| Tanpa CCTV (boarding) | trust signal boarding lebih lemah vs Pet Bum/PETFIRST | Sedang |
| Tanpa harga publik | intent harga tidak terjawab di SERP | Sedang |

### 5.2 Quick win (urutan eksekusi)

1. **Klaim & verifikasi GBP** (jika belum) — 1–2 minggu. [ESTIMATED] (GBP playbook 2026).
2. **Lengkapi GBP 100%**: kategori, atribut, deskripsi 750 karakter (first 250 = USP), jam, layanan + harga, area layanan, foto 20+, Q&A seed, posting awal 3-5. [ESTIMATED].
3. **Kumpulkan review**: target 300+ dalam 6–12 bulan; minta saat pickup; link langsung; QR code; balas semua. [ESTIMATED].
4. **Buat website domain** (catlova.com / .id) dengan structured data + pricelist + CTA Chat WA + foto before/after + FAQ. [ESTIMATED].
5. **Posting rutin** (1–2x/minggu): before/after, tips, promo, musiman. [ESTIMATED].
6. **NAP audit** di semua platform. [ESTIMATED].
7. **Content musiman** (lebaran/mudik): landing "penitipan kucing Malang lebaran" + GBP post. [ESTIMATED].

### 5.3 Target keyword per halaman website

| Halaman | Target keyword | Label |
|---|---|---|
| Home | grooming kucing malang, salon kucing malang | [ESTIMATED] |
| Layanan grooming | grooming kucing malang, harga grooming kucing malang, grooming kucing panggilan malang | [ESTIMATED] |
| Penitipan/pet hotel | penitipan kucing malang, pet hotel malang, harga penitipan kucing malang | [ESTIMATED] |
| FAQ | grooming kucing malang reviews, biaya grooming kucing di malang | [ESTIMATED] |
| Kontak/area | grooming kucing malang terdekat, grooming kucing sukun | [ESTIMATED] |

---

## 6. Technical SEO

### 6.1 Structured data (schema.org)

| Schema | Field wajib | Label |
|---|---|---|
| LocalBusiness (PetGrooming / LocalBusiness) | name, address (streetAddress, addressLocality, addressRegion, postalCode), telephone, geo (latitude, longitude), openingHoursSpecification, priceRange, image, url, sameAs (IG/FB) | [ESTIMATED] best practice |
| Service | name, description, provider (LocalBusiness), areaServed, offers (price/priceRange) | [ESTIMATED] |
| FAQPage | mainEntity (Question/Answer) — dari FAQ website | [ESTIMATED] |
| Review / AggregateRating | ratingValue, reviewCount (jika tampilkan review di website) — hati-hati policy Google (jangan self-review) | [ESTIMATED] |
| BreadcrumbList | untuk navigasi | [ESTIMATED] |

### 6.2 On-page meta

| Elemen | Rekomendasi | Label |
|---|---|---|
| Title tag | ≤60 karakter, keyword + brand + lokasi: "Grooming & Penitipan Kucing Malang | CatLova" | [ESTIMATED] |
| Meta description | ≤160 karakter, CTA + USP + lokasi | [ESTIMATED] |
| H1 | 1 per halaman, keyword utama | [ESTIMATED] |
| H2/H3 | subtopik (layanan, harga, FAQ, area) | [ESTIMATED] |
| Canonical | 1 URL kanonik per halaman | [ESTIMATED] |
| OG tags | og:title, og:description, og:image, og:url, og:type | [ESTIMATED] |
| Twitter card | summary_large_image | [ESTIMATED] |

### 6.3 Sitemap & robots

| Elemen | Rekomendasi | Label |
|---|---|---|
| sitemap.xml | daftar semua URL (home, layanan, harga, FAQ, kontak, blog) | [ESTIMATED] |
| robots.txt | allow all; disallow admin; sitemap reference | [ESTIMATED] |
| robots meta | index, follow untuk halaman publik | [ESTIMATED] |

### 6.4 Mobile & Core Web Vitals

| Metrik | Target | Label |
|---|---|---|
| Mobile-first | responsive, tap target ≥48px, font ≥16px | [ESTIMATED] (Google standard) |
| LCP | <2,5s | [ESTIMATED] (Google standard) |
| CLS | <0,1 | [ESTIMATED] (Google standard) |
| INP | <200ms | [ESTIMATED] (Google standard) |
| Image optimization | WebP/AVIF, lazy load, srcset | [ESTIMATED] |
| HTTPS | wajib | [ESTIMATED] |

### 6.5 URL & arsitektur

| Elemen | Rekomendasi | Label |
|---|---|---|
| URL slug | pendek, keyword, lowercase, hyphen: /grooming-kucing, /penitipan-kucing, /harga | [ESTIMATED] |
| Internal linking | home ↔ layanan ↔ harga ↔ FAQ ↔ kontak | [ESTIMATED] |
| Breadcrumb | home > layanan > grooming | [ESTIMATED] |
| Alt text gambar | deskriptif + keyword natural | [ESTIMATED] |

---

## 7. Residual [UNKNOWN]

1. **CatLova GBP status** (claimed/verified, kategori saat ini, atribut, foto, review, posting, Q&A, service list, area layanan) — belum diverifikasi live. [UNKNOWN].
2. **Volume pencarian** (keyword) — tidak ada tool volume gratis reliable; jangan fabricate. [UNKNOWN].
3. **CatLova website status** (domain, hosting, template) — [UNKNOWN] (lead dossier: tanpa website domain, hanya linktr.ee).
4. **CatLova NAP konsistensi** di platform selain GBP (caribisnis, exa, polomap, yandex, IG, FB) — [UNKNOWN].
5. **Competitor GBP detail** (foto count, posting frequency, Q&A) — [UNKNOWN] (estimasi dari Riset #1).
6. **CatLova IG posting terakhir** 2026-07-06 (801 follower/165 post) — [VERIFIED] Riset #2; aktivitas terkini [UNKNOWN].

---

## 8. Sumber (URL lengkap)

- Google Suggest endpoint (keyword live, 2026-10-26): `https://suggestqueries.google.com/complete/search?client=firefox&hl=id&gl=id&q=<query>` (curl, 12 query induk).
- GBP Best Practices Playbook 2026 (Google): https://services.google.com/fh/files/helpcenter/services_gbp_best_practices_playbook_2026.pdf
- GroomBoard (GBP for Groomers): https://groomboard.com/blog/google-business-profile-groomers
- Petboost (GBP for Pet Businesses): https://petboost.com.au/business/blog/google-business-profile-guide-pet-businesses/
- Petbase.ai (Local SEO for vets/groomers): https://www.petbase.ai/blog/73-local-seo-for-vets-groomers-and-trainers-master-gbp-services-and-location-pages/
- Webiti (GBP setup scope): https://webiti.id/layanan/gbp-setup
- Serpong Tech (GBP spec 2026): https://serpongtech.web.id/spec-google-business-profile-2026/
- Ranktracker (SEO penitipan hewan & layanan hewan, ID): https://www.ranktracker.com/id/blog/pet-sitting-seo/ ; https://www.ranktracker.com/id/blog/animal-services-seo/
- petfirst.id (competitor GBP/website): https://petfirst.id/
- aboutmalang.com (penitipan hewan Malang): https://www.aboutmalang.com/malang-raya/14214850938/7-tempat-penitipan-hewan-terbaik-dan-nyaman-di-malang-mudik-tanpa-anabul-jadi-lebih-tenang
- Riset #1/#2/#3 (internal): `/home/jauhary/Projects/catlova-malang/research/01-kompetitor-local-pack.md`, `02-target-pasar-psikologi.md`, `03-layanan-harga.md`
- web_search DDGS (2026-10-26).

**Batasan:** tanpa CamoFox live; GBP CatLova status [UNKNOWN]; volume keyword [UNKNOWN]; aset publik baru tidak ditambah (foto GBP butuh CamoFox/login); aset yang ada di assets/ = 3 file dari riset #1.

---

*File ini standalone. Riset #5 dst. mengikuti RENCANA TOPIK RISET di root (tugas JARVIS).*
