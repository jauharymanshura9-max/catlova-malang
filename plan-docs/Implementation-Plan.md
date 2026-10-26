# Implementation Plan — CatLova Malang

**Proyek:** CatLova Malang — salon & penitipan kucing, Sukun, Malang
**Dokumen:** 06 / Implementation Plan
**Versi:** 1.0 (Loop 7)
**Tanggal:** 2026-10-27
**Sumber otoritatif:** skill `veronica-prd` v4.1.14; `DESIGN.md`; `PRD.md`; `TRD.md`; `App-Flow.md`; `UI-UX-Brief.md`; `Backend-Schema.md`; riset EDITH 15 file.
**Status label:** [VERIFIED] = data langsung; [ESTIMATED] = rekomendasi; [UNKNOWN] = belum diverifikasi.
**Endpoint planning:** deploy PREVIEW (Vercel `*.vercel.app`). [VERIFIED] PRD §18, skill DEAL GATE.

---

## 0. Ringkasan Eksekusi

Stack: Next.js 15 App Router + TS strict + Tailwind v4 + shadcn/ui base + token DESIGN.md. Static SSG. Deploy Vercel preview. Coding via FRIDAY (`hermes -p friday`). [ESTIMATED] TRD.

Urutan build: init → design system → content/copy → core features (home + 5 halaman) → nav/flow → micro-interactions → responsive/test → performance → deploy preview. Database/Auth di-skip (v1 statis). [ESTIMATED] skill veronica-prd §06.

## 1. Phase 1 — Project Init

Task 1.1: Init repo Next.js 15 (App Router, TS, Tailwind, ESLint). [ESTIMATED]
- File: `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `postcss.config.mjs`, `.eslintrc.json`, `.gitignore`. [ESTIMATED]
- Done: `npm run dev` jalan di localhost:3000. [ESTIMATED]

Task 1.2: Setup folder structure (TRD §10). [ESTIMATED]
- File: `src/app/`, `src/components/`, `src/data/`, `src/lib/`, `src/styles/`, `public/images/`. [ESTIMATED]
- Done: struktur sesuai TRD §10. [ESTIMATED]

Task 1.3: Env vars (`.env.local` + `.env.example`). [ESTIMATED]
- File: `.env.local`, `.env.example`. [ESTIMATED]
- Done: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_WA_NUMBER`, opsional GA/Meta/Resend. [ESTIMATED]

Task 1.4: Install deps (gsap, lenis, react-hook-form, zod, lucide-react). [ESTIMATED]
- Done: `npm install` sukses, no audit critical. [ESTIMATED]

Estimasi Phase 1: 0,5 hari. [ESTIMATED]

## 2. Phase 2 — Design System (tokens + primitives)

Task 2.1: Token CSS var di `src/styles/globals.css` dari DESIGN.md (color, type, spacing, radius, font). [ESTIMATED]
- File: `src/styles/globals.css`. [ESTIMATED]
- Done: semua var `--color-*`, `--text-*`, `--space-*`, `--radius-*`, `--font-*` ada. [ESTIMATED]

Task 2.2: Tailwind config extend (color, fontFamily, borderRadius, spacing). [ESTIMATED]
- File: `tailwind.config.ts`. [ESTIMATED]
- Done: class `bg-tertiary`, `text-primary`, `font-display` jalan. [ESTIMATED]

Task 2.3: Font setup (next/font/google: Quicksand 600/700 + Inter 400/500/600). [ESTIMATED]
- File: `src/app/layout.tsx`. [ESTIMATED]
- Done: font render, no FOUT. [ESTIMATED]

Task 2.4: shadcn/ui base install (button, card, input, badge, accordion). [ESTIMATED]
- File: `src/components/ui/*`. [ESTIMATED]
- Done: komponen base ada, token override sesuai DESIGN.md. [ESTIMATED]

Task 2.5: Component primitives (button-primary/secondary, badge-honey/sage/error, card/card-soft, chip, input, text-muted). [ESTIMATED]
- File: `src/components/ui/*.tsx`. [ESTIMATED]
- Done: semua variant sesuai UI-UX Brief §J. [ESTIMATED]

Estimasi Phase 2: 1 hari. [ESTIMATED]

## 3. Phase 3 — Content & Copy (semua copy asli dari riset)

Task 3.1: Tulis `src/data/services.json`, `pricing.json`, `faq.json`, `areas.json`, `reviews.json`. [ESTIMATED]
- Harga [UNKNOWN] → placeholder "Harga menyusul — chat WA". [ESTIMATED]
- FAQ 8-12 dari riset #6. [ESTIMATED]
- Review quote verifikasi per-quote (riset #5 §6.9). [ESTIMATED]
- Done: JSON valid, no lorem ipsum. [ESTIMATED]

Task 3.2: Copy hero, section headline, CTA, form, error/empty state (formula: spesifik + outcome + angka). [ESTIMATED]
- File: komponen sections. [ESTIMATED]
- Done: semua copy asli, tone konsisten. [ESTIMATED]

Estimasi Phase 3: 0,5 hari. [ESTIMATED]

## 4. Phase 4 — Database (SKIP v1)

Tidak ada DB di v1. [VERIFIED] PRD §9. Skip.

## 5. Phase 5 — Auth (SKIP v1)

Tidak ada auth di v1. [VERIFIED] PRD §9. Skip.

## 6. Phase 6 — Core Feature 1: Home sections

Task 6.1: Hero section (H1 + rating badge + free antar-jemput chip + CTA + foto/placeholder + jam + alamat). [ESTIMATED]
- File: `src/components/sections/hero.tsx`. [ESTIMATED]
- Done: hero above fold, CTA WA primary. [ESTIMATED]

Task 6.2: Social proof section (review quotes + rating 5,0/211 + before/after placeholder). [ESTIMATED]
- File: `src/components/sections/social-proof.tsx`. [ESTIMATED]

Task 6.3: Results nyata section (angka). [ESTIMATED]
- File: `src/components/sections/results.tsx`. [ESTIMATED]

Task 6.4: Problem + Solution section. [ESTIMATED]
- File: `src/components/sections/problem-solution.tsx`. [ESTIMATED]

Task 6.5: Fitur 5-8 section (manfaat + visual). [ESTIMATED]
- File: `src/components/sections/features.tsx`. [ESTIMATED]

Task 6.6: Process 3-4 langkah section. [ESTIMATED]
- File: `src/components/sections/process.tsx`. [ESTIMATED]

Task 6.7: FAQ accordion section (home, 8-12). [ESTIMATED]
- File: `src/components/sections/faq.tsx`. [ESTIMATED]

Task 6.8: Final CTA section (headline benefit-driven). [ESTIMATED]
- File: `src/components/sections/final-cta.tsx`. [ESTIMATED]

Task 6.9: Compose home `src/app/page.tsx`. [ESTIMATED]
- Done: semua 10 elemen landing ada + urutan logis. [ESTIMATED]

Estimasi Phase 6: 2 hari. [ESTIMATED]

## 7. Phase 7 — Core Feature 2: Layanan Grooming page

Task 7.1: Route `/layanan/grooming` + detail paket + harga placeholder + CTA WA. [ESTIMATED]
- File: `src/app/layanan/grooming/page.tsx`. [ESTIMATED]
- Done: halaman render, CTA WA primary. [ESTIMATED]

Estimasi: 0,5 hari. [ESTIMATED]

## 8. Phase 8 — Core Feature 3: Penitipan page

Task 8.1: Route `/penitipan` + detail + syarat + harga placeholder + CTA WA. [ESTIMATED]
- File: `src/app/penitipan/page.tsx`. [ESTIMATED]
- Done: halaman render, syarat + CTA. [ESTIMATED]

Estimasi: 0,5 hari. [ESTIMATED]

## 9. Phase 9 — Core Feature 4: Harga page

Task 9.1: Route `/harga` + pricelist full-width (placeholder) + CTA WA. [ESTIMATED]
- File: `src/app/harga/page.tsx`. [ESTIMATED]
- Done: pricelist render, placeholder jelas. [ESTIMATED]

Estimasi: 0,5 hari. [ESTIMATED]

## 10. Phase 10 — Core Feature 5: FAQ page

Task 10.1: Route `/faq` + accordion (semua FAQ). [ESTIMATED]
- File: `src/app/faq/page.tsx`. [ESTIMATED]
- Done: semua FAQ render, JSON-LD FAQPage. [ESTIMATED]

Estimasi: 0,5 hari. [ESTIMATED]

## 11. Phase 11 — Core Feature 6: Kontak + 404

Task 11.1: Route `/kontak` (NAP, jam, Maps embed, WA, IG, area layanan). [ESTIMATED]
- File: `src/app/kontak/page.tsx`. [ESTIMATED]
- Done: NAP + Maps + CTA. [ESTIMATED]

Task 11.2: Custom 404 (`src/app/not-found.tsx`) + CTA home/WA. [ESTIMATED]
- Done: 404 render + CTA. [ESTIMATED]

Estimasi: 0,5 hari. [ESTIMATED]

## 12. Phase 12 — App Flow & Navigation

Task 12.1: Header (logo + nav + CTA) + mobile drawer. [ESTIMATED]
- File: `src/components/layout/header.tsx`. [ESTIMATED]

Task 12.2: Footer (NAP, jam, IG, privacy/terms). [ESTIMATED]
- File: `src/components/layout/footer.tsx`. [ESTIMATED]

Task 12.3: Sticky floating WA CTA (mobile, 48x48). [ESTIMATED]
- File: `src/components/layout/sticky-cta.tsx`. [ESTIMATED]

Task 12.4: Contact form component (RHF+Zod) → WA redirect pre-filled. [ESTIMATED]
- File: `src/components/sections/contact-form.tsx`. [ESTIMATED]

Task 12.5: Cookie consent banner. [ESTIMATED]
- File: `src/components/layout/cookie-banner.tsx`. [ESTIMATED]

Task 12.6: SEO metadata (title, desc, OG, Twitter) per halaman + sitemap + robots + JSON-LD. [ESTIMATED]
- File: `src/app/layout.tsx`, `src/app/robots.ts`, `src/app/sitemap.ts`, `src/lib/seo.ts`. [ESTIMATED]

Estimasi Phase 12: 1,5 hari. [ESTIMATED]

## 13. Phase 13 — Micro-interactions

Task 13.1: Lenis smooth scroll setup. [ESTIMATED]
- File: `src/lib/lenis.ts` + layout. [ESTIMATED]

Task 13.2: GSAP ScrollTrigger reveal (opacity+translateY). [ESTIMATED]
- File: `src/lib/gsap.ts`. [ESTIMATED]

Task 13.3: Button hover + card hover + nav underline. [ESTIMATED]
- Done: semua interactive element punya hover state. [ESTIMATED]

Task 13.4: prefers-reduced-motion respect. [ESTIMATED]

Estimasi Phase 13: 1 hari. [ESTIMATED]

## 14. Phase 14 — Responsive & Testing

Task 14.1: Mobile QA (320-768px), tablet (768-1024px), desktop (>1024px). [ESTIMATED]
Task 14.2: axe-core 0 violation. [ESTIMATED]
Task 14.3: Playwright smoke (home load, WA click, form submit, 404). [ESTIMATED]
Task 14.4: Cross-browser (Chrome, Safari, Firefox). [ESTIMATED]

Estimasi Phase 14: 1 hari. [ESTIMATED]

## 15. Phase 15 — Performance

Task 15.1: Lighthouse audit (score >90). [ESTIMATED]
Task 15.2: Image opt (AVIF/WebP, quality 75, priority hero, lazy below fold). [ESTIMATED]
Task 15.3: Bundle size check (JS ≤170KB gz). [ESTIMATED]
Task 15.4: CWV (LCP ≤2,5s, CLS ≤0,1, INP ≤200ms). [ESTIMATED]

Estimasi Phase 15: 0,5 hari. [ESTIMATED]

## 16. Phase 16 — Deploy Preview (ENDPOINT)

Task 16.1: Push ke GitHub (repo client). [ESTIMATED]
Task 16.2: Vercel project link + env vars + deploy preview. [ESTIMATED]
- Endpoint: `https://catlova-malang-*.vercel.app`. [ESTIMATED]
Task 16.3: Verify preview (URL live, no error). [ESTIMATED]
Task 16.4: Laporan siap-tawarkan (template `Siap-Tawarkan-Package-Template.md`). [ESTIMATED]

Estimasi Phase 16: 0,5 hari. [ESTIMATED]

Total estimasi: ~10 hari kerja. [ESTIMATED]

## 17. Pasca-Deal Checklist (POST-DEAL — BUKAN task kanban)

Bagian ini REFERENSI untuk Bos setelah klien deal. JARVIS/FRIDAY TIDAK mengeksekusi otomatis.

- Beli domain (sesuai keputusan Bos). [UNKNOWN] domain pilihan.
- DNS setup (Vercel). [ESTIMATED]
- Connect custom domain + HTTPS. [ESTIMATED]
- GSC submit + sitemap. [ESTIMATED]
- Google Business Profile (NAP, foto, review). [ESTIMATED]
- GA4 production (ganti env). [ESTIMATED]
- Direktori listing (Yellow Pages, Foursquare, Apple Maps). [ESTIMATED]
- Compliance §5b (UU PDP, cookie, privacy/terms final). [ESTIMATED] riset #11.

Sumber: `03-⚙️-Toolkit/Pasca-Deal-Website-Checklist.md`. [ESTIMATED]

## 18. Checklist 15 Item Kualitas Build (FRIDAY install + bukti)

12 wajib: custom 404, CTA above fold, meta title per halaman, meta description per halaman, OG image, favicon/ikon, robots.txt, sitemap.xml, alt text semua gambar, mobile responsive/breakpoint, loading state, form error state. [VERIFIED] skill resep §6.

3 kondisional: halaman sukses/terima-kasih (jika ada form) — YA (form ada); sticky mobile CTA (site konversi) — YA; alamat kontak asli (jika data klien ada) — YA (NAP verified). [ESTIMATED].

Pelaku: FRIDAY memasang + mencantumkan bukti (path/commit) per item di report. JARVIS cek di review. [ESTIMATED] skill resep §6.

## 19. Pre-flight (sebelum spawn judge)

- Path file diverifikasi (grep setiap path). [ESTIMATED] skill veronica-prd pre-flight (e).
- Angka diverifikasi ke file (bukan ingatan). [ESTIMATED] pre-flight (e).
- Sitasi `file:baris` diverifikasi (`wc -l`). [ESTIMATED] pre-flight (i).
- Sinkron angka lintas dokumen (PRD/TRD/App-Flow/UIUX/Backend/ImplPlan). [ESTIMATED] pre-flight (j).

## 20. Residual [UNKNOWN]

Sama dengan PRD §18 (harga, jam, CCTV, update WA, medis, foto aset, domain, booking system, quote owner sabar, volume keyword). [UNKNOWN].

## 21. Related

- `DESIGN.md` — kontrak visual.
- `PRD.md` — scope, conversion, residual.
- `TRD.md` — stack, hosting, a11y, image, font, analytics, security, testing.
- `App-Flow.md` — journey + states.
- `UI-UX-Brief.md` — visual + conversion.
- `Backend-Schema.md` — data + V2 roadmap.
- `research/01..15-*.md`.

---

*Implementation Plan = input untuk FRIDAY (hermes -p friday) eksekusi atomic tasks. Endpoint = preview live. Post-deal = section 17 (referensi Bos).*
