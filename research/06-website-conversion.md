# Riset #6 — Website Conversion Patterns & Booking Flow (Grooming Hewan)

**Proyek:** CatLova Malang (salon & penitipan kucing, Sukun, Malang)
**Tanggal riset:** 2026-10-26 (web_extract petfirst.id 2026-10-26 + web_search CRO 2026-10-26 + Riset #1-#5)
**Scope:** Analisis website kompetitor (PETFIRST petfirst.id, Dr.Meoww, Pet Bum), conversion patterns (CTA, booking flow, landing structure, social proof placement, mobile-first, speed), best practice CRO (WA-first Indonesia, form minimal, trust above fold), rekomendasi untuk website CatLova. Input untuk VERONICA PRD + FRIDAY build.
**Metode:** web_extract (petfirst.id ID+EN) + web_search (CRO pet care, WA-first Indonesia, booking landing page) + Riset #1-#5. drmeoww.com & petbum.id tidak dapat di-extract (blocked/private) → data dari caribisnis/exa/idfirms [VERIFIED].
**Konvensi sumber:** [VERIFIED] = data langsung dari sumber; URL lengkap di §6. [ESTIMATED] = rekomendasi/best practice; [UNKNOWN] = belum diverifikasi.

---

## 0. Ringkasan eksekutif

- **PETFIRST (petfirst.id) = benchmark website terbaik** di local pack: hero jelas, 2 layanan (grooming + hotel), pricelist transparan 2 cabang, tracking booking 5 langkah (real-time), social proof (review Google + 2.000+ anabul [VERIFIED] petfirst.id — klaim website, akurasi [UNKNOWN]), team bios, syarat hotel (vaksin, sehat, bebas kutu), FAQ (per Riset #1), CTA antar-jemput, NAP 2 cabang, jam buka. Mobile-friendly (responsive, belum test real device) [ESTIMATED]. [VERIFIED] petfirst.id + Riset #1 (mobile [ESTIMATED]; 2.000+ anabul [VERIFIED] petfirst.id, akurasi [UNKNOWN]).
- **Dr.Meoww punya subdomain api.drmeoww.my.id (Cloudflare, 5d old) tapi tidak ada website publik matang; Pet Bum tidak punya domain publik** (hanya caribisnis/exa/IG) → peluang besar untuk CatLova menjadi #2 (setelah PETFIRST) dengan website + WA-first [ESTIMATED]. [VERIFIED] web_search (keberadaan domain).
- **Conversion pattern terbaik untuk jasa lokal Indonesia:** WA-first (Chat WA primary CTA, sticky floating button, pre-filled message), landing page dengan hero jelas (service + lokasi + trust + CTA), pricelist transparan, social proof above the fold, form minimal (3-4 field), mobile-first (<3s load), tracking (Meta Pixel + GA4 + UTM). [VERIFIED] best practice dari sumber cited + [ESTIMATED] rekomendasi.
- **Booking flow optimal (Unicorn 9-block):** hero → scope → process preview → trust layer near CTA → booking interface low-friction → objection handling → FAQ → post-booking expectation → secondary path. [VERIFIED] unicornplatform.
- **Mobile:** 65%+ pet service searches di smartphone (muffingroup: "Over 65%"; Bali market jasadigitaladsbali: "lebih dari 85%"). [ESTIMATED] muffingroup + jasadigitaladsbali.
- **CatLova rekomendasi:** website domain (catlova.com/.id) dengan struktur 9-block, WA-first (Chat WA primary, form minimal secondary), pricelist transparan (konfirmasi owner), foto before/after, review Google, FAQ, NAP konsisten, schema LocalBusiness/Service/FAQ, mobile-first, speed <2s, tracking. [ESTIMATED].

---

## 1. Analisis website kompetitor

### 1.1 PETFIRST (petfirst.id) — [VERIFIED]

| Elemen | Detail | Label |
|---|---|---|
| Hero | "Tempat setiap anabul serasa di rumah." + social proof (2.000+ anabul [VERIFIED] petfirst.id, akurasi [UNKNOWN]; ★ 4.9 "Dari keluarga anabul kami" di website = klaim website [VERIFIED] petfirst.id; Google Maps Sawojajar 5,0/610-670) + "Dibuat dengan cinta di Malang" | [VERIFIED] petfirst.id (rating website [ESTIMATED]) |
| USP | "Anabul nomor satu. Selalu." + "Satu anabul, satu groomer" + "Filosofi anabul dulu" + "Tangan terlatih" + "Fasilitas bersih" + "Peralatan premium" | [VERIFIED] |
| Layanan | 2 layanan: Grooming (Standard/Premium/Kids) + Pet Hotel (Kamar kecil/besar) — 2 cabang (Sawojajar/Tidar) | [VERIFIED] |
| Pricelist | Transparan per cabang: Sawojajar (grooming Rp80K/120K/45K, hotel Rp50K/75K), Tidar (Signature Rp95K/135K/55K, hotel Rp75K/100K/100-150K dog) | [VERIFIED] |
| Tracking booking | 5 langkah real-time (check-in → mandi → pengeringan → sentuhan akhir → siap dijemput) + notifikasi siap dijemput | [VERIFIED] |
| Social proof | 6 review Google (5★) dengan quote + nama reviewer | [VERIFIED] |
| Team | 9 anggota tim (foto + nama + jabatan) | [VERIFIED] petfirst.id (single-source, belum cross-check) |
| Antar-jemput | Section khusus: coverage Kota Malang, gratis hanya paket 60 hari (Silver/Gold), biaya standar di luar itu | [VERIFIED] |
| Syarat hotel | Vaksin min 2 dosis, sehat, bebas kutu/jamur, bawa makanan, 1 kamar 1 kucing | [VERIFIED] |
| NAP | 2 cabang: Sawojajar (Jl. Danau Toba No.06, WA 0812-2211-1957), Tidar (Jl. Villa Puncak Tidar, WA 0822-2880-0058), jam 09:00-19:00 (7 hari) per website (konflik idntimes: 08:00-16:00) | [VERIFIED] petfirst.id + idntimes |
| CTA | "Mau memantau prosesnya secara real-time?" (tracking), "Pesan jauh-jauh hari" (booking), WA (+6281222111957 / +6282228800058) | [VERIFIED] |
| Add-on | Medicated, whitening, lion cut, styling, parfum premium (menu lengkap di salon/WhatsApp) | [VERIFIED] |
| Bahasa | Bilingual ID/EN (URL /en) | [VERIFIED] |
| Mobile | Responsive (terlihat dari struktur) | [ESTIMATED] (belum test real device) |
| Booking system | reservation.petfirst.id (external) | [VERIFIED] exa.ai |
| Kelemahan | Hanya 2 cabang (Sawojajar/Tidar); tidak ada blog/content SEO; tracking external (reservation.petfirst.id) → friction tambahan; review widget hanya 6 quote ditampilkan (vs 610 Google) | [ESTIMATED] |

### 1.2 Dr.Meoww (Cabang 2, Sukun) — [VERIFIED via caribisnis/exa/idfirms]

| Elemen | Detail | Label |
|---|---|---|
| Website domain | Tidak ada website publik matang; subdomain api.drmeoww.my.id (Cloudflare, urlscan snapshot 2026-10-26, "5d old") + caribisnis.id listing + IG @grooming.drmeow (via voofla). Riset #1 melaporkan "FB saja" — konflik; rekonfirmasi | [VERIFIED] web_search + urlscan + Riset #1 |
| Layanan | Grooming kucing Rp50K-65K, hotel Rp30K-90K, klinik (vaksinasi, konsultasi, operasi), antar-jemput ongkir Rp5K | [VERIFIED] Riset #3 |
| CTA | via caribisnis listing / IG DM / WA 0878-7737-3987 | [VERIFIED] idfirms |
| Kelemahan | Tanpa website → relevansi SEO rendah, booking via DM/WA (friction), tidak ada pricelist publik, tidak ada tracking | [ESTIMATED] |

### 1.3 Pet Bum (Blimbing) — [VERIFIED via caribisnis/exa]

| Elemen | Detail | Label |
|---|---|---|
| Website domain | Tidak ada domain matang; hanya caribisnis.id listing + exa.ai + IG @petbum.grooming | [VERIFIED] web_search |
| Layanan | Klinik hewan (vaksinasi, konsultasi, operasi), grooming kucing (termasuk kelinci), penitipan, home service | [VERIFIED] caribisnis |
| CTA | via caribisnis listing / IG DM / WA 0878-4800-0827 | [VERIFIED] idfirms/exa |
| Kelemahan | Tanpa website → relevansi SEO rendah, booking via DM/WA, tidak ada pricelist publik, tidak ada tracking | [ESTIMATED] |

**Implikasi:** PETFIRST satu-satunya kompetitor dengan website matang. CatLova dengan website + WA-first bisa menjadi #2 di SERP lokal dengan effort moderat. [ESTIMATED].

---

## 2. Conversion patterns (best practice)

### 2.1 CTA (Call-to-Action)

| Pattern | Bukti | Label |
|---|---|---|
| "Chat WA" primary CTA (sticky floating button) | jasadigitaladsbali: "Tombol WhatsApp Melayang (Sticky Floating Button)" + "CTA WhatsApp yang Kuat" | [VERIFIED] |
| Above-the-fold mobile WA CTA (contrasting, not tiny icon) | Zenos: "Above-the-fold mobile WhatsApp CTA with contrasting button — not a tiny green icon lost in a footer" | [VERIFIED] |
| Prefilled message (source-tagged) | Zenos: "Prefer a single canonical click-to-chat URL pattern so GTM can trigger reliably" + "Prefilled messages that tell sales which campaign, offer and ad the buyer came from" | [VERIFIED] |
| One primary action (not equal-weight grid) | Zenos: "Offer one primary action. 'Call / WhatsApp / Form / Chatbot / Calendar' equal-weight grids dilute tracking and conversion rate" | [VERIFIED] |
| CTA language action-oriented ("Chat WA", "Booking Sekarang", "Reserve My Session") | Unicorn: "CTA text should describe the action users are taking" + muffingroup: "'Book Now' beats 'Learn More'" | [VERIFIED] |
| Sticky header phone number on mobile | muffingroup: "Sticky header with phone number visible on mobile" | [VERIFIED] |

### 2.2 Booking flow

| Pattern | Bukti | Label |
|---|---|---|
| 4-step flow: confirm fit → select date/service → submit pet details + contact → confirmation + next checklist | Unicorn: "A practical four-step flow" | [VERIFIED] |
| Form minimal (2-3 field) — name, WA number, preferred date, service, notes | Arion: "The form does not need to be long. It can start with the essentials" + Unicorn: "Ask for only the fields you need at this stage" | [VERIFIED] |
| Long forms increase abandonment | Unicorn: "Long forms increase abandonment and often produce low-quality submissions" + muffingroup: "Mobile booking completion rates drop when forms exceed three steps" | [VERIFIED] |
| Post-submit expectation (confirmation timing, calendar invite, prep items) | Unicorn: "Post-booking clarity improves show-up rates and reduces cancellation risk" | [VERIFIED] |
| Real-time availability display | muffingroup: "Real-time availability display" (booking system must-have) | [VERIFIED] |

### 2.3 Landing page structure

| Pattern | Bukti | Label |
|---|---|---|
| Hero: service statement + location + trust cue + dominant CTA | Unicorn: "The first screen should resolve four questions without scrolling: what service, where, why trustworthy, what action" | [VERIFIED] |
| 9-block architecture: hero → scope → process → trust → booking → objection → FAQ → post-booking → secondary path | Unicorn: "9-Block Booking Page Architecture" | [VERIFIED] |
| Trust layer near first action point | Unicorn: "Place credibility cues close to the first booking action" | [VERIFIED] |
| Reviews integrated throughout (not buried on single page) | muffingroup: "Client reviews integrated throughout, not buried on a single testimonial page" | [VERIFIED] |
| Objection handling (cancellation, rescheduling, payment, outcome) | Unicorn: "Address common blockers directly" | [VERIFIED] |
| Post-booking expectation block | Unicorn: "Explain what users receive after submission" | [VERIFIED] |
| Secondary path for not-yet-ready users (lower commitment) | Unicorn: "Optional secondary path for not-yet-ready users" | [VERIFIED] |

### 2.4 Social proof placement

| Pattern | Bukti | Label |
|---|---|---|
| Reviews above the fold (trust cue in hero) | Unicorn: "Trust layer near first action point" + muffingroup: "Client reviews integrated throughout" | [VERIFIED] |
| Before/after photos | GroomBoard (Riset #5): "A matted Goldendoodle transformed into a clean teddy bear cut tells a client everything" | [VERIFIED] |
| Rating + review count + recency | Petboost (Riset #5): "81% konsumen pakai Google review; 73% hanya percaya review 30 hari terakhir" | [VERIFIED] |
| Brand authority (drh., author, "2.000+ anabul") | PETFIRST (Riset #5): "2.000+ Anabul bahagia dirawat" [VERIFIED] petfirst.id (akurasi [UNKNOWN]) + Pet Bum drh. Eca | [VERIFIED] petfirst.id + idntimes |

### 2.5 Mobile-first

| Pattern | Bukti | Label |
|---|---|---|
| 65%+ pet service searches di smartphone (muffingroup: "Over 65%"; Bali market jasadigitaladsbali: "lebih dari 85%") | muffingroup + jasadigitaladsbali | [ESTIMATED] (sumber: blog marketing, bukan studi peer-reviewed) |
| Click-to-call min 44x44px, sticky | muffingroup: "Click-to-call buttons need thumb-friendly sizing (minimum 44x44 pixels) and fixed positioning on mobile" | [VERIFIED] |
| Page speed <3s (4G); <2s ideal | muffingroup: "Page speed benchmarks: under 3 seconds on 4G connections" + jasadigitaladsbali: "halaman berkecepatan tinggi (di bawah 2 detik)" | [ESTIMATED] (sumber: blog marketing) |
| Mobile QA before launch (real device, average network) | Unicorn: "Test on real devices with average network conditions. Desktop emulation alone can miss friction patterns" | [VERIFIED] |
| Sticky CTA visible in early scroll | Unicorn: "Primary CTA visible in early scroll depth" | [VERIFIED] |

### 2.6 Speed & performance

| Pattern | Bukti | Label |
|---|---|---|
| Static site (Astro/Next static) passes CWV | Pipeline: "Built on Astro as static pages, so they pass Core Web Vitals" | [VERIFIED] |
| Image optimization (WebP/AVIF, lazy load, srcset) | Riset #4 (CWV) + muffingroup | [ESTIMATED] |
| CWV targets: LCP <2,5s, CLS <0,1, INP <200ms | Google standard (Riset #4) | [ESTIMATED] |

---

## 3. Rekomendasi untuk website CatLova

### 3.1 Struktur halaman (9-block, [ESTIMATED])

1. **Hero (above the fold):** H1 "Grooming & Penitipan Kucing Malang | CatLova" + sub "Rating 5,0 (211 ulasan) [VERIFIED] Riset #1 · Free antar-jemput · Owner sabar (status [UNKNOWN] — konfirmasi quote per-bisnis sebelum dipakai; lihat Riset #5 Residual #9)" + CTA primary "Chat WA" (sticky) + CTA secondary "Lihat Layanan & Harga". [ESTIMATED].
2. **Scope:** 2 layanan (Grooming + Penitipan) + jam (08-17) + lokasi (Sukun, Malang) + WA. [ESTIMATED].
3. **Process preview:** 3-5 langkah (booking → pickup → grooming → update WA → siap dijemput) — trust + transparency. [ESTIMATED].
4. **Trust layer:** rating 5,0 [VERIFIED] Riset #1 + review Google (3-5 quote) + foto before/after + "free snack" [VERIFIED] Riset #1 + "free antar-jemput" [VERIFIED] Riset #1 + (jika ada) CCTV/update WA [UNKNOWN] status CatLova (Riset #5). [ESTIMATED].
5. **Booking interface (low-friction):** form minimal (nama, WA, layanan, tanggal, catatan) + CTA "Kirim via WA" (pre-filled) + secondary "Chat WA langsung". [ESTIMATED].
6. **Objection handling:** FAQ (harga, jam, vaksin, antar-jemput, update WA, CCTV, snack, garansi). [ESTIMATED].
7. **FAQ (full):** 8-12 pertanyaan. [ESTIMATED].
8. **Post-booking expectation:** "Setelah kirim, kami balas <1 jam, konfirmasi slot, jadwal pickup, update WA harian." [ESTIMATED].
9. **Secondary path:** "Belum siap booking? Chat WA dulu" (lower commitment). [ESTIMATED].

### 3.2 CTA & booking flow (WA-first, [ESTIMATED])

- **Primary CTA:** "Chat WA" (sticky floating button, bottom-right, contrasting color, min 48x48px) dengan pre-filled message: "Halo CatLova, saya mau booking grooming/penitipan. Nama: ... Anabul: ... (kucing/anjing) ... Layanan: ... Tanggal: ...". [ESTIMATED] (best practice jasadigitaladsbali + Zenos).
- **Secondary CTA:** "Booking Form" (minimal 4 field: nama, WA, layanan, tanggal + catatan) → kirim ke WA (pre-filled) atau ke email/CRM. [ESTIMATED].
- **Tertiary:** "Telepon" (click-to-call, 44x44px) + "Lihat Pricelist" (scroll ke section harga). [ESTIMATED].
- **Tracking:** Meta Pixel + GA4 + UTM + event "wa_click" (primary conversion), "form_submit" (secondary). [ESTIMATED] (Zenos).
- **Response SLA:** <1 jam (hari kerja 08-17); auto-reply WA "Terima kasih, kami balas <1 jam". [ESTIMATED].

### 3.3 Mobile-first & speed ( [ESTIMATED])

- Mobile-first design (build phone first, scale up). [ESTIMATED].
- Page speed <2s (4G); static site (Astro/Next static) + image optimization (WebP/AVIF, lazy load, srcset). [ESTIMATED].
- CWV: LCP <2,5s, CLS <0,1, INP <200ms. [ESTIMATED].
- Sticky CTA visible in early scroll; hamburger menu + search; touch-friendly gallery. [ESTIMATED].
- Mobile QA real device before launch. [ESTIMATED].

### 3.4 SEO on-page ( [ESTIMATED], lihat Riset #4)

- Title: "Grooming & Penitipan Kucing Malang | CatLova" (≤60 char). [ESTIMATED].
- Meta desc: ≤160 char + CTA + USP + lokasi. [ESTIMATED].
- Schema: LocalBusiness, Service, FAQPage, BreadcrumbList. [ESTIMATED].
- Sitemap, robots, OG, canonical, alt text. [ESTIMATED].

### 3.5 NAP & kontak ( [VERIFIED] Riset #1)

- Nama: CatLova (konsisten). [VERIFIED].
- Alamat: Jl. Terusan Mergan Raya No.Kav.1/20, Sukun, Malang. [VERIFIED].
- WA: 0877-5205-1970. [VERIFIED].
- Jam: 08:00-17:00 WIB (7 hari? [UNKNOWN] — konfirmasi). [VERIFIED jam 08-17, hari [UNKNOWN]].
- IG: @cat_lova_malang. [VERIFIED].

### 3.6 Asset yang dibutuhkan ( [ESTIMATED])

- Hero image (foto salon/owner + anabul) — WebP/AVIF, ≤200KB. [ESTIMATED]
- Foto before/after grooming (5-10 pasang). [ESTIMATED]
- Foto fasilitas (grooming table, kandang, AC, CCTV jika ada). [ESTIMATED]
- Foto tim (owner, groomer). [ESTIMATED]
- Logo CatLova (vektor/SVG). [ESTIMATED]
- Favicon + OG image (1200x630). [ESTIMATED]

---

## 4. Residual [UNKNOWN]

### 4.1 Aspek lanjutan (belum diteliti — [UNKNOWN])

a11y (WCAG), privasi/cookie (UU PDP, cookie banner), pembayaran online (deposit), pembatalan/reschedule policy, PWA/offline, chatbot/WhatsApp Flows, blog/content SEO, heatmap/A-B test, multi-bahasa, dark mode, analytics consent. [UNKNOWN] (topik lanjutan).

1. **Dr.Meoww & Pet Bum website** — tidak ada domain matang (hanya caribisnis/exa/IG); status domain drmeoww.com/petbum.id [UNKNOWN] (blocked/private saat extract). [UNKNOWN].
2. **CatLova jam buka hari** (7 hari atau Senin-Sabtu?) — [UNKNOWN].
3. **CatLova CCTV status** (ada/tidak) — [UNKNOWN] (Riset #5).
4. **CatLova update WA status** (frekuensi, format) — [UNKNOWN] (Riset #5).
5. **CatLova hosting/domain** (sudah punya? .com/.id?) — [UNKNOWN].
6. **CatLova booking system** (manual WA vs form vs calendar) — [UNKNOWN].
7. **CatLova foto aset** (before/after, fasilitas, tim) — [UNKNOWN] (belum diverifikasi IG live).
8. **Mobile performance CatLova** (belum ada website) — [UNKNOWN].

---

## 5. Sumber (URL lengkap)

- PETFIRST website (petfirst.id, ID+EN): https://petfirst.id/ ; https://petfirst.id/en
- PETFIRST reservation: https://reservation.petfirst.id/
- PETFIRST LinkedIn (traffic): https://linkedin.com/company/petfirst-id
- Dr.Meoww (idfirms listing): https://idfirms.com/jawa-timur/drmeoww-cabang-2-537244
- Dr.Meoww (api.drmeoww.my.id, urlscan): https://urlscan.io/domain/api.drmeoww.my.id
- Pet Bum (caribisnis): https://caribisnis.id/klinik-hewan/malang/blimbing/pet-bum-blim-imp1
- Pet Bum (exa): https://exa.ai/library/place/pyfjl7gkxs9
- Pet Bum (idfirms): https://idfirms.com/jawa-timur/pet-bum-874868
- Unicorn Platform (9-block booking page, CRO): https://unicornplatform.com/blog/best-booking-landing-page-examples-in-2026/
- Unicorn Platform (pet boarding landing page): https://unicornplatform.com/blog/pet-boarding-landing-page-strategy-in-2026/
- Muffingroup (pet care website design): https://muffingroup.com/blog/pet-care-website/
- Pipeline (campaign landing page WA): https://www.pipeline.co.id/service/landing-page/
- Arion (landing page vs direct WA): https://www.arion.id/en/blog/landing-page-vs-direct-whatsapp-service-business-bookings
- Zenos IT (Google Ads WA conversion tracking, APAC): https://www.zenositsolutions.com/guides/google-ads-whatsapp-conversion-tracking
- Jasa Digital Ads Bali (landing page WA efektif): https://jasadigitaladsbali.id/artikel/cara-membuat-landing-page-whatsapp-efektif
- (referensi tambahan, tidak digunakan dalam analisis utama):
- WEBSIDE (optimasi konversi WA): https://webside.id/layanan/jasa-optimasi-konversi-whatsapp/
- Ipang (WhatsApp vs form): https://ipang.net/pilih-jalur-lead-sesuai-cara-beli-calon-klien-anda/
- Riset #1-#5 (internal): `/home/jauhary/Projects/catlova-malang/research/01-kompetitor-local-pack.md`, `02-target-pasar-psikologi.md`, `03-layanan-harga.md`, `04-seo-gbp.md`, `05-trust-signals.md`
- web_search DDGS (2026-10-26).

**Batasan:** tanpa CamoFox live; drmeoww.com/petbum.id tidak dapat di-extract (blocked/private); aset publik baru tidak ditambah; aset yang ada di assets/ = 3 file dari riset #1.

---

*File ini standalone. Riset #7 dst. mengikuti RENCANA TOPIK RISET di root (tugas JARVIS).*
