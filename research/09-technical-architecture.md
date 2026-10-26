# Riset #9 — Website Technical Architecture & Performa

**Proyek:** CatLova Malang — salon & penitipan kucing, Sukun, Malang
**Topik:** Website technical architecture & performa (stack, hosting, aksesibilitas, Core Web Vitals, SEO teknis, PWA, analytics)
**File:** `/home/jauhary/Projects/catlova-malang/research/09-technical-architecture.md`
**Standar:** Truth-Level [VERIFIED]/[ESTIMATED]/[UNKNOWN]; sumber wajib dicantumkan; tidak mengarang.

---

## 0. Ringkasan eksekutif

- **CatLova saat ini:** tidak punya domain sendiri — hanya linktr.ee bio + IG [VERIFIED] Riset #1/#6. Catatan: exa place listing website = instagram.com/cat_lova_malang (link IG), bukan domain web [VERIFIED] exa 2026-10-27.
- **Stack rekomendasi:** Next.js 15 (App Router) + React 19 + TypeScript strict + Tailwind CSS 4 + next/font + next/image [VERIFIED] apex-template + Foundgrove.
- **Hosting rekomendasi:** Vercel (default, free tier, image optimization built-in) ATAU Cloudflare Pages (free, edge, Brotli, HTTP/3) [VERIFIED] web sources.
- **Core Web Vitals target:** LCP ≤2,5s, INP ≤200ms, CLS ≤0,1 (75th percentile) [VERIFIED] web.dev.
- **Aksesibilitas:** WCAG 2.2 AA — contrast ≥4,5:1 (normal) / 3:1 (large), keyboard nav, alt text, labeled form, headings in order [VERIFIED] WCAG 2.2.
- **SEO teknis:** sitemap.ts + robots.ts, JSON-LD LocalBusiness/Service/FAQPage, OG/Twitter Card, canonical, mobile-first [VERIFIED] Foundgrove.
- **Image pipeline:** AVIF → WebP → JPEG, fetchpriority high pada LCP, lazy below fold, explicit width/height [VERIFIED] Candid Creative + Vercel.
- **Analytics:** GA4 + Meta Pixel + consent banner + Web Vitals RUM [VERIFIED] Foundgrove + dev.to.
- **PWA:** opsional untuk salon lokal — service worker + offline + manifest; ROI [ESTIMATED] (bukan must-have).
- **Kompetitor website:** PETFIRST (petfirst.id) = benchmark terbaik di local pack: hero jelas, 2 layanan, pricelist transparan, tracking booking 5 langkah, team bios, syarat hotel, bilingual ID/EN, responsive [ESTIMATED] (belum test real device — Riset #6). Social proof "2.000+ anabul" [VERIFIED] petfirst.id (akurasi [UNKNOWN] — Riset #6). Dr.Meoww = subdomain api.drmeoww.my.id (Cloudflare, 5d old) [VERIFIED] web_search + urlscan + Riset #6. Pet Bum = tidak punya domain publik [VERIFIED] web_search.
- **Residual [UNKNOWN]:** PETFIRST stack (Next.js? WordPress?) belum diverifikasi (builtwith/wappalyzer), performa LCP aktual PETFIRST, aksesibilitas PETFIRST (audit axe), hosting PETFIRST, CMS PETFIRST, PWA status, analytics PETFIRST, harga hosting aktual (free tier limits).

---

## 1. Status CatLova (technical)

| Item | Nilai | Label |
|---|---|---|
| Domain sendiri | Tidak ada (hanya linktr.ee bio + IG) | [VERIFIED] Riset #1/#6 |
| Hosting | [UNKNOWN] — belum punya | [UNKNOWN] |
| Stack | [UNKNOWN] — belum punya | [UNKNOWN] |
| CMS | [UNKNOWN] — belum punya | [UNKNOWN] |
| Analytics | [UNKNOWN] — belum punya | [UNKNOWN] |
| PWA | [UNKNOWN] — belum punya | [UNKNOWN] |
| Aksesibilitas | [UNKNOWN] — belum diaudit | [UNKNOWN] |
| CWV | [UNKNOWN] — belum diukur | [UNKNOWN] |
| SEO teknis | [UNKNOWN] — belum ada | [UNKNOWN] |

**Peluang:** CatLova bisa menjadi #2 (setelah PETFIRST) di local pack dengan website domain + WA-first [ESTIMATED] Riset #6.

---

## 2. Stack rekomendasi

| Layer | Pilihan | Alasan | Sumber |
|---|---|---|---|
| Framework | Next.js 15 (App Router) + React 19 + TS strict | RSC by default, SSG/ISR, streaming SSR, metadata API, image/font optimization built-in | [VERIFIED] apex-template + Foundgrove |
| Styling | Tailwind CSS 4 + clsx + tailwind-merge | Utility-first, mobile-first, design token | [VERIFIED] apex-template |
| Database (opsional) | PostgreSQL + Prisma (jika booking online) | Type-safe ORM, read replicas | [VERIFIED] apex-template |
| Cache | Upstash Redis (dev fallback in-memory) | Cache-aside, session | [VERIFIED] apex-template |
| Auth (opsional) | Auth.js v5 (HttpOnly/Secure/SameSite) | Jika ada akun pelanggan | [VERIFIED] apex-template |
| CMS (opsional) | Sanity atau Payload (headless) | Typed content, TypeScript types dari schema | [VERIFIED] Foundgrove |
| Hosting | Vercel (default) / Cloudflare Pages | Edge, image optimization, free tier | [VERIFIED] web sources |
| Observability | Web Vitals RUM + Sentry + OpenTelemetry | Real user monitoring | [VERIFIED] apex-template |

**Catatan untuk CatLova (salon lokal, tanpa booking online kompleks):**
- Mulai dengan static site (SSG) + form minimal (3-4 field) → WA-first [ESTIMATED] Riset #6.
- Database/auth/CMS opsional — tambah hanya jika butuh booking online / konten dinamis [ESTIMATED].
- Jangan over-engineer: "The best code is the code never written" [ESTIMATED].

---

## 3. Hosting comparison

| Platform | Kelebihan | Kekurangan | Biaya | Sumber |
|---|---|---|---|---|
| Vercel | Next.js native, image optimization built-in, free tier, edge | Image optimization billed per transform; free tier limits | Free → usage-based | [VERIFIED] Vercel docs |
| Cloudflare Pages | Free, edge, Brotli 11, HTTP/3, Cloudflare Images, no egress | Next.js image optimizer perlu custom loader; transform billed | Free → usage-based | [VERIFIED] blog.blazingcdn + Candid Creative |
| Netlify | Static host mudah, forms built-in | Image optimization terbatas | Free → $19/mo | [VERIFIED] OptionWeb |
| Shared hosting ($3-15/mo) | Murah, mudah | Lambat, terbatas | $3-15/mo | [VERIFIED] fhseohub |

**Rekomendasi CatLova:** Vercel (jika pakai Next.js + next/image) ATAU Cloudflare Pages (jika budget minimal + static export) [ESTIMATED]. Keduanya punya free tier cukup untuk salon lokal [ESTIMATED].

**Catatan biaya hosting:** [UNKNOWN] — Vercel free tier limits (image transformations, bandwidth) perlu verifikasi sebelum commit; Cloudflare Images billed per transform/store [VERIFIED] blog.blazingcdn.

---

## 4. Core Web Vitals

| Metrik | Target (good) | Pengukuran | Sumber |
|---|---|---|---|
| LCP (Largest Contentful Paint) | ≤2,5s | 75th percentile, mobile+desktop | [VERIFIED] web.dev |
| INP (Interaction to Next Paint) | ≤200ms | 75th percentile | [VERIFIED] web.dev |
| CLS (Cumulative Layout Shift) | ≤0,1 | 75th percentile | [VERIFIED] web.dev |

**Cara pass:**
- LCP: faster server/CDN, image optimization, preload hero image, no lazy on LCP [VERIFIED] fhseohub + Candid Creative.
- INP: less JavaScript, break up long tasks, defer third-party scripts (chat widgets, tag managers) [VERIFIED] fhseohub.
- CLS: set image dimensions, reserve space for ads/embeds, font fallback metrics (next/font adjustFontFallback) [VERIFIED] fhseohub + Make Sense.

**Catatan:** INP replaced FID (March 2024); lebih sulit fix karena mengukur worst interaction latency, bukan first [VERIFIED] gauravtiwari.

**CatLova target:** LCP <2s ideal (mobile 4G), INP <200ms, CLS <0,1 [ESTIMATED] Riset #6.

---

## 5. Image pipeline

| Praktik | Detail | Sumber |
|---|---|---|
| Format | AVIF → WebP → JPEG (fallback) | [VERIFIED] Candid Creative + Vercel |
| LCP image | fetchpriority="high", no lazy, explicit width/height, modern format, srcset/sizes | [VERIFIED] Candid Creative |
| Below fold | loading="lazy" | [VERIFIED] Candid Creative |
| Explicit dimensions | width + height selalu (kills CLS) | [VERIFIED] Candid Creative |
| Quality | 75 (default next/image), 60 untuk aggressive (allowlist qualities: [60,75]) | [VERIFIED] Vercel academy |
| Cache TTL | minimumCacheTTL 30 hari (default Next.js = 60s-4 jam tergantung versi) | [VERIFIED] Vercel academy |
| sizes prop | Tuned per breakpoint (e.g. "(max-width: 768px) 100vw, 50vw") | [VERIFIED] Vercel academy |
| Pre-generate | AVIF + WebP variants at build via sharp (static export) | [VERIFIED] OptionWeb |
| Build gate | Fail on raw JPEG >200KB | [VERIFIED] Candid Creative |
| Cloudflare | Polish/Images untuk transcode on-the-fly; custom loader untuk next/image | [VERIFIED] blog.blazingcdn |

**Catatan:** Vercel image optimization billed per transform → cap loader ke fixed widths [VERIFIED] blog.blazingcdn.

---

## 6. Font optimization

| Praktik | Detail | Sumber |
|---|---|---|
| next/font | Self-host + preload + display: swap + adjustFontFallback: true | [VERIFIED] Vercel + Make Sense |
| Subset | Latin only (untuk Indonesia: latin + latin-ext) | [VERIFIED] OptionWeb |
| Weights | 2-3 weights max (400, 600, 700) | [VERIFIED] OptionWeb |
| Variable font | 1 variable font untuk display (range 500-700) | [VERIFIED] OptionWeb |
| Trim | Transfonter (trim >50% font size) | [VERIFIED] Vercel |
| Preload | fetchPriority=high pada display font | [VERIFIED] OptionWeb |

**Catatan:** Custom font via Google Fonts CDN dengan font-display: swap = CLS (fallback Arial shifts paragraphs) [VERIFIED] Make Sense. Pakai next/font untuk fix.

---

## 7. Aksesibilitas (WCAG 2.2 AA)

| Kriteria | Target | Sumber |
|---|---|---|
| Contrast normal text | ≥4,5:1 | [VERIFIED] WCAG 2.2 + codeandpencil |
| Contrast large text (≥24px / ≥18,66px bold) | ≥3:1 | [VERIFIED] WCAG 2.2 |
| Contrast UI components | ≥3:1 | [VERIFIED] dynomapper |
| Tap targets | ≥24×24 CSS px (main buttons much bigger) | [VERIFIED] codeandpencil + WCAG 2.2 (2.5.8) |
| No sideways scroll @320px | WCAG 1.4.10 | [VERIFIED] codeandpencil |
| Alt text meaningful images | text alternative; decorative alt="" | [VERIFIED] codeandpencil |
| Keyboard nav | Tab through all; focus outline visible (2.4.7) | [VERIFIED] codeandpencil |
| Labeled form fields | label/instruction, bukan placeholder saja (3.3.2) | [VERIFIED] codeandpencil |
| Headings in order | 1 H1, H2/H3 outline; link text meaningful | [VERIFIED] codeandpencil |
| Zoom 200% | no loss (1.4.4) | [VERIFIED] codeandpencil |
| Focus not obscured | 2.4.11 | [VERIFIED] dynomapper |
| Dragging movements | 2.5.7 | [VERIFIED] dynomapper |
| Redundant entry | 3.3.7 | [VERIFIED] dynomapper |
| Accessible authentication | 3.3.8 | [VERIFIED] dynomapper |

**Tools:** axe DevTools, WAVE, Microsoft Accessibility Insights (automated catch ~30-40% issues) + manual keyboard/screen reader [VERIFIED] dynomapper.

**Legal:** European Accessibility Act (June 2025, EU), ADA Title II (April 2027/2028, US gov) [VERIFIED] fhseohub. Indonesia: [UNKNOWN] — regulasi aksesibilitas web spesifik [UNKNOWN].

**Catatan CatLova:** palet cream/ivory + warm brown/terracotta dari Riset #7 — kontras WAJIB dihitung (WCAG) sebelum commit [ESTIMATED] (resep loop 12 Lisensi Coffee: hitung luminansi relatif, rasio (L1+0.05)/(L2+0.05)).

---

## 8. SEO teknis

| Elemen | Detail | Sumber |
|---|---|---|
| sitemap.ts + robots.ts | Generated from route tree, including dynamic pages | [VERIFIED] Foundgrove |
| JSON-LD | Organization, LocalBusiness, Service, FAQPage, Breadcrumb, Article | [VERIFIED] Foundgrove + apex-template |
| Metadata API | Per-route title, description, canonical, OG, Twitter Card | [VERIFIED] Foundgrove |
| Mobile-first | Google indexes mobile version | [VERIFIED] codeandpencil + fhseohub |
| HTTPS | Must-pass | [VERIFIED] codeandpencil |
| Structured data | LocalBusiness (name, address, phone, hours, geo) | [VERIFIED] Riset #4 |
| Hreflang | Bilingual ID/EN (jika 2 bahasa) | [ESTIMATED] (PETFIRST punya bilingual ID/EN [VERIFIED] petfirst.id) |

**Catatan:** keywords/volume [UNKNOWN] (Riset #4 — no reliable free tool). Jangan fabricate.

---

## 9. PWA (opsional)

| Item | Detail | Label |
|---|---|---|
| Service worker + offline | Cache assets, fallback offline page | [ESTIMATED] |
| Web App Manifest | name, icons, theme_color, display: standalone | [ESTIMATED] |
| Push notifications | Booking reminder, promo (butuh consent) | [ESTIMATED] |
| Install prompt | "Add to home screen" | [ESTIMATED] |
| ROI untuk salon lokal | [UNKNOWN] — belum ada data adoption | [UNKNOWN] |

**Rekomendasi:** PWA opsional (bukan must-have) untuk CatLova v1; tambah jika ada demand (booking online, repeat client) [ESTIMATED].

---

## 10. Analytics & tracking

| Tool | Fungsi | Sumber |
|---|---|---|
| GA4 | Page views, events, conversions, CWV RUM | [VERIFIED] Foundgrove + dynomapper |
| Meta Pixel | FB/IG ads conversion tracking | [VERIFIED] Foundgrove |
| Plausible / Fathom | Privacy-friendly alternative (no cookie banner) | [VERIFIED] dynomapper |
| Hotjar / FullStory | Session replay, heatmaps | [VERIFIED] dynomapper |
| web-vitals library | Send CWV to analytics | [VERIFIED] dev.to |
| Consent banner | Wajib jika pakai GA4/Meta Pixel (cookie) | [VERIFIED] Foundgrove |

**Catatan:** WA-first conversion tracking = "dari mana tahu CatLova?" di WA + UTM params [ESTIMATED] Riset #6.

---

## 11. Analisis kompetitor website

### 11.1 PETFIRST (petfirst.id) — benchmark terbaik local pack
| Aspek | Detail | Label |
|---|---|---|
| Domain | petfirst.id (bilingual ID/EN) | [VERIFIED] petfirst.id |
| Hero | "Tempat setiap anabul serasa di rumah." + social proof 2.000+ anabul (akurasi [UNKNOWN] — Riset #6), 2 cabang, ★4.9 | [VERIFIED] petfirst.id |
| Layanan | Grooming (Standard/Premium/Kids) + Pet Hotel (Kamar kecil/besar) | [VERIFIED] petfirst.id |
| Pricelist | Transparan per cabang (Sawojajar/Tidar), per ukuran (kucing/anjing) | [VERIFIED] petfirst.id |
| Tracking booking | 5 langkah real-time (check-in → mandi → drying → final → ready) | [VERIFIED] petfirst.id |
| Team bios | 9 orang (Elizabeth, Nando, Singgih, Yudi, Nayu, Farhan, Ajeng, Arief, Rava & Momo media sosial) | [VERIFIED] petfirst.id |
| Syarat hotel | Vaksin min 2 dosis, sehat, bebas kutu/jamur, 1 kamar 1 kucing | [VERIFIED] petfirst.id |
| Door-to-door | Arief driver, seluruh Kota Malang, gratis dengan paket 60 hari | [VERIFIED] petfirst.id |
| Stack | [UNKNOWN] — belum diverifikasi (builtwith/wappalyzer) | [UNKNOWN] |
| Hosting | [UNKNOWN] — belum diverifikasi | [UNKNOWN] |
| CMS | [UNKNOWN] — belum diverifikasi | [UNKNOWN] |
| Performa (LCP/INP/CLS) | [UNKNOWN] — belum diukur (PageSpeed Insights) | [UNKNOWN] |
| Aksesibilitas (axe audit) | [UNKNOWN] — belum diaudit | [UNKNOWN] |
| Analytics (GA4/Pixel) | [UNKNOWN] — belum diverifikasi (view source) | [UNKNOWN] |
| PWA | [UNKNOWN] — belum diverifikasi | [UNKNOWN] |

### 11.2 Dr.Meoww (drmeoww.com / api.drmeoww.my.id)
| Aspek | Detail | Label |
|---|---|---|
| Domain | api.drmeoww.my.id (Cloudflare, 5d old per urlscan 2026-10-26) — domain matang [UNKNOWN] | [UNKNOWN] |
| Website publik matang | Tidak ada (hanya subdomain API) | [ESTIMATED] Riset #6 |
| Stack/hosting/CMS/performa/a11y | [UNKNOWN] — belum diverifikasi | [UNKNOWN] |

### 11.3 Pet Bum
| Aspek | Detail | Label |
|---|---|---|
| Domain publik | Tidak ada (hanya caribisnis/exa/IG) | [VERIFIED] web_search |
| Stack/hosting/CMS/performa/a11y | [UNKNOWN] — tidak ada website untuk diaudit | [UNKNOWN] |

**Peluang CatLova:** menjadi #2 (setelah PETFIRST) dengan website domain + WA-first + pricelist transparan [ESTIMATED] Riset #6.

---

## 12. Rekomendasi CatLova — Technical Architecture Plan

### 12.1 Fase 1 (v1, WA-first, static)
1. Next.js 15 (App Router) + TS strict + Tailwind 4 [ESTIMATED].
2. Static site (SSG) — no database/auth/CMS di v1 [ESTIMATED].
3. Hosting: Vercel free tier (atau Cloudflare Pages jika budget minimal) [ESTIMATED].
4. Form minimal 3-4 field → WA (pre-filled message) [ESTIMATED] Riset #6.
5. Image pipeline: AVIF/WebP, fetchpriority high pada hero, lazy below fold, explicit dimensions [ESTIMATED].
6. Font: next/font (Inter body + Quicksand/Nunito display), 2-3 weights, latin+latin-ext [ESTIMATED] Riset #7.
7. SEO: sitemap.ts + robots.ts, JSON-LD LocalBusiness/Service/FAQPage, OG/Twitter Card, canonical [ESTIMATED].
8. Analytics: GA4 + Meta Pixel + consent banner + web-vitals RUM [ESTIMATED].
9. Aksesibilitas: WCAG 2.2 AA (contrast, keyboard, alt, labels, headings) [ESTIMATED].
10. Mobile-first: no sideways scroll @320px, tap targets ≥24px, tel:/mailto: links [ESTIMATED].

### 12.2 Fase 2 (jika butuh)
- Booking online (database + auth) [ESTIMATED].
- Headless CMS (Sanity/Payload) untuk konten dinamis [ESTIMATED].
- PWA (service worker + offline + manifest) [ESTIMATED].
- A/B test (headline, CTA, form) [ESTIMATED].

### 12.3 Checklist pre-launch (codeandpencil 30 checks)
- HTTPS everywhere [VERIFIED] codeandpencil.
- No sideways scroll on phone [VERIFIED] codeandpencil.
- Contact path works end-to-end [VERIFIED] codeandpencil.
- Nothing fake or out of date [VERIFIED] codeandpencil.
- LCP ≤2,5s, INP ≤200ms, CLS ≤0,1 [VERIFIED] web.dev.
- Contrast ≥4,5:1 (normal) / 3:1 (large) [VERIFIED] WCAG 2.2.
- Alt text, keyboard nav, labeled forms, headings in order [VERIFIED] codeandpencil.

---

## 13. Sumber

- [VERIFIED] web.dev — Core Web Vitals (LCP/INP/CLS thresholds) — https://web.dev/articles/vitals
- [VERIFIED] codeandpencil.com — Small Business Website Design Checklist (30 checks, 2026) — https://codeandpencil.com/small-business-website-design-checklist/
- [VERIFIED] fhseohub.com — Web Development Best Practices 2026 (hosting, mobile-first, CWV, a11y) — https://fhseohub.com/web-development-best-practices/
- [VERIFIED] dynomapper.com — 18 Usability Guidelines & Website Design Standards 2026 (WCAG 2.2, tools) — https://dynomapper.com/blog/ux/18-usability-guidelines-and-website-design-standards/
- [VERIFIED] apex-template (GitHub) — Next.js 15 + Tailwind 4 + Vercel + Cloudflare, WCAG 2.2 AA — https://github.com/Prabaharan-nagappan/apex-template
- [VERIFIED] Foundgrove — Next.js for Marketing Sites 2026 (9 non-negotiable layers) — https://foundgrove.com/blog/nextjs-for-marketing-sites-complete-guide-2026
- [VERIFIED] Vercel docs/academy — Image Optimization, next/image, AVIF/WebP, cache TTL — https://vercel.com/docs/image-optimization
- [VERIFIED] Candid Creative — Default web stack (Astro on Cloudflare), image pipeline AVIF/WebP/JPEG — https://candidcreative.ca/kb/default-web-stack
- [VERIFIED] blog.blazingcdn.com — Next.js on Cloudflare (Pages, Workers, Images, custom loader) — https://blog.blazingcdn.com/en-us/nextjs-cloudflare-deployment-guide-pages-workers-images
- [VERIFIED] OptionWeb — Next.js static export & CWV 2026 (fonts, images, hosting, Brotli) — https://optionweb.dev/en/blog/nextjs-static-export-core-web-vitals/
- [VERIFIED] Make Sense — Core Web Vitals 2026 Next.js checklist (LCP hero, CLS font) — https://make-sense.fr/blog/core-web-vitals-2026-checklist-nextjs
- [VERIFIED] gauravtiwari.org — Modern Web Development Practices 2026 (INP harder to fix) — https://gauravtiwari.org/modern-web-development-practices/
- [VERIFIED] dev.to (rocky_digitalcave) — CWV checklist small business WordPress — https://dev.to/rocky_digitalcave/a-practical-core-web-vitals-checklist-for-small-business-wordpress-sites-2i5i
- [VERIFIED] petfirst.id — competitor website (benchmark) — https://petfirst.id/
- [VERIFIED] LinkedIn (petfirst-id) — website traffic, IG handle — https://linkedin.com/company/petfirst-id
- [VERIFIED] Riset #1-#8 (kompetitor, target pasar, layanan/harga, SEO/GBP, trust signals, website conversion, branding, content marketing)
- [VERIFIED] exa.ai — CatLova place listing (website = IG link, bukan domain) — https://exa.ai/library/place/jy289ypcfvs

---

## 14. Residual [UNKNOWN] (belum terkupas)

1. PETFIRST stack (Next.js/WordPress/Astro?) — belum diverifikasi (builtwith/wappalyzer) — perlu CamoFox.
2. PETFIRST hosting (Vercel/Cloudflare/shared?) — [UNKNOWN].
3. PETFIRST CMS (Sanity/Payload/WordPress?) — [UNKNOWN].
4. PETFIRST performa LCP/INP/CLS aktual — [UNKNOWN] (PageSpeed Insights).
5. PETFIRST aksesibilitas (axe audit) — [UNKNOWN].
6. PETFIRST analytics (GA4/Pixel) — [UNKNOWN] (view source).
7. PETFIRST PWA status — [UNKNOWN].
8. Dr.Meoww domain matang (api.drmeoww.my.id Cloudflare 5d old) — [UNKNOWN] apakah ada website publik.
9. Pet Bum domain publik — [UNKNOWN] (tidak ditemukan).
10. CatLova hosting/stack/CMS/analytics/PWA/CWV/a11y — [UNKNOWN] (belum punya website).
11. Indonesia regulasi aksesibilitas web spesifik — [UNKNOWN].
12. Vercel free tier limits (image transforms, bandwidth) — [UNKNOWN] (perlu verifikasi sebelum commit).
13. Cloudflare Images pricing (per transform/store) — [VERIFIED] blog.blazingcdn (billed per transform/store).
14. Owner capacity (dev/maintenance) — [UNKNOWN].