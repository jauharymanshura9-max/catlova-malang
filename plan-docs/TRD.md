# TRD — CatLova Malang (Technical Requirements Document)

**Proyek:** CatLova Malang — salon & penitipan kucing, Sukun, Malang
**Dokumen:** 02 / TRD (Technical Requirements Document)
**Versi:** 1.0 (Loop 3)
**Tanggal:** 2026-10-27
**Sumber otoritatif:** skill `veronica-prd` v4.1.14; `DESIGN.md`; `PRD.md` (209 baris); riset EDITH 15 file; Next.js 15 docs [ESTIMATED].
**Status label:** [VERIFIED] = data langsung dari sumber; [ESTIMATED] = rekomendasi/best practice; [UNKNOWN] = belum diverifikasi.

---

## 1. Frontend

- Framework: Next.js 15 App Router (React 19), TypeScript strict. [ESTIMATED] riset #9 §2.1.
- Rendering: Static Site Generation (SSG) untuk semua halaman. Tidak ada server-side dynamic data (harga/layanan dari JSON static). [ESTIMATED] riset #9 §2.1.
- Styling: Tailwind CSS v4 + CSS variables dari token DESIGN.md. [ESTIMATED] riset #9 §2.1, #12 §5.
- UI library: shadcn/ui (base) + custom token sendiri (radius, warna, font). [ESTIMATED] Design System Gate (B) default shadcn-baseline.
- Animation: GSAP + ScrollTrigger (signature moment) + Lenis (smooth scroll) + CSS transitions (micro-interaction). [ESTIMATED] skill resep §2-3.
- Form: React Hook Form + Zod (validasi). [ESTIMATED].
- State: React Server Components default; client state minimal (useState/useForm). Tidak perlu global store. [ESTIMATED].

## 2. Backend

Tidak ada backend di v1 (out of scope booking online). [VERIFIED] PRD §9. Form kontak → WA pre-filled (client-side) + email fallback (opsional). [ESTIMATED] riset #9 §2.1.

Jika nanti butuh backend (V2): Next.js Route Handlers + Vercel Functions (Node runtime) + DB (Supabase/Neon) + auth (Clerk). [ESTIMATED].

## 3. Database

Tidak ada database di v1. Data statis di `src/data/*.json` (layanan, harga, FAQ, area). [ESTIMATED] PRD §18 (owner bisa edit JSON). V2: Supabase Postgres + RLS. [ESTIMATED].

## 4. Auth

Tidak ada auth di v1. [VERIFIED] PRD §9. V2: Clerk atau NextAuth (Google OAuth). [ESTIMATED].

## 5. Hosting

- Platform utama: Vercel (Hobby/Pro) — App Router native, Edge network, preview deploy otomatis, analytics built-in. [ESTIMATED] riset #9 §2.1, #14.
- Fallback: Cloudflare Pages (jika Vercel akses terbatas). [ESTIMATED] riset #14.
- Domain: [UNKNOWN] — beli setelah deal (Pasca-Deal Checklist). Canonical tetap domain final. [VERIFIED] PRD §18.
- Deploy target: production + preview. Preview URL `*.vercel.app`. [ESTIMATED].

## 6. Third-party APIs

- WhatsApp click-to-chat (wa.me) — primary conversion. [VERIFIED] riset #6 §3.2.
- Google Maps embed (lokasi + NAP). [ESTIMATED].
- Google Analytics 4 (GA4) — analytics. [ESTIMATED] riset #9 §2.1.
- Meta Pixel — retargeting (opsional, consent-based). [ESTIMATED].
- Google Search Console — SEO (Pasca-Deal). [ESTIMATED].
- Google Business Profile — local SEO (Pasca-Deal). [ESTIMATED].
- Email (Resend) — fallback form (opsional). [ESTIMATED].

## 7. Performance Budget

- LCP ≤2,5s, INP ≤200ms, CLS ≤0,1. [VERIFIED] web.dev (riset #9 §4).
- FCP ≤1,8s, TTFB ≤800ms. [ESTIMATED].
- JS bundle initial ≤170KB gzipped. [ESTIMATED] riset #9 §4.
- CSS ≤50KB. [ESTIMATED] riset #9 §4.
- Hero image ≤200KB (AVIF/WebP). [ESTIMATED] DESIGN.md Asset Rules.
- Preloader/gate <2s (boleh skip jika LCP menekan). [ESTIMATED] skill resep §3.
- Lighthouse score >90 (Performance, Accessibility, Best Practices, SEO). [ESTIMATED] skill veronica-prd §06.

## 8. Animation Framework

- GSAP 3 + ScrollTrigger (signature moment, reveal, parallax). [ESTIMATED].
- Lenis (smooth scroll, lerp 0,08-0,12, ≥30-45% delta ≤100ms, berhenti 800-1200ms). [ESTIMATED] skill resep §3.
- CSS transitions (micro-interaction 150-300ms, hover scale 1,01-1,02). [ESTIMATED] skill resep §9.
- prefers-reduced-motion respect. [VERIFIED] riset #9 §4.
- Maks 1 pinned chapter per site (bukan kewajiban). [ESTIMATED] skill resep §3.
- Budget LCP: animasi ≤1 momen signatur; sisanya tenang. [ESTIMATED].

## 9. Key Libraries

- next, react, react-dom, typescript. [ESTIMATED].
- tailwindcss, postcss, autoprefixer. [ESTIMATED].
- gsap, lenis. [ESTIMATED].
- react-hook-form, zod. [ESTIMATED].
- lucide-react (ikon). [ESTIMATED].
- next-seo (atau metadata API bawaan). [ESTIMATED].
- @vercel/analytics (opsional). [ESTIMATED].
- Tidak ada dependency baru tanpa putusan VERONICA. [ESTIMATED] skill resep §2.

## 10. Folder Structure

```
src/
  app/
    (site)/
      page.tsx                 # home
      layanan/grooming/page.tsx
      penitipan/page.tsx
      harga/page.tsx
      faq/page.tsx
      kontak/page.tsx
      not-found.tsx            # custom 404
    layout.tsx
    robots.ts
    sitemap.ts
  components/
    ui/                        # shadcn base
    sections/                  # hero, trust, services, process, faq, cta
    layout/                    # header, footer, sticky-cta
  data/
    services.json
    pricing.json
    faq.json
    areas.json
  lib/
    utils.ts
    seo.ts
  styles/
    globals.css                # token CSS var
public/
  images/                      # hero, before-after, og
  favicon.ico, icon.svg, apple-icon.png
```
[ESTIMATED] riset #9 §2.1.

## 11. Environment Variables

- `NEXT_PUBLIC_SITE_URL` (domain final). [ESTIMATED].
- `NEXT_PUBLIC_WA_NUMBER` (087752051970). [VERIFIED].
- `NEXT_PUBLIC_GA_ID` (opsional). [ESTIMATED].
- `NEXT_PUBLIC_META_PIXEL_ID` (opsional). [ESTIMATED].
- `RESEND_API_KEY` (opsional, server-only). [ESTIMATED].
- Semua `NEXT_PUBLIC_` aman di client; secret tanpa prefix. [ESTIMATED].

## 12. Constraints

- Budget: tanpa backend → hosting murah (Vercel Hobby cukup). [ESTIMATED].
- Timeline: 6 dokumen → atomic tasks → preview. [ESTIMATED].
- Free-tier limitations: Vercel Hobby 100GB bandwidth/bulan. [ESTIMATED] riset #14.
- No paid GSAP Club plugins (SplitText/ScrambleText). [ESTIMATED] skill resep §2.
- Tanpa domain sampai deal. [VERIFIED] PRD §18.
- Data klien [UNKNOWN] (harga, jam, foto, CCTV) → placeholder + CTA WA. [UNKNOWN] PRD §18.

## 13. Aksesibilitas (WCAG 2.2 AA)

- Kontras AA (4,5:1 normal text, 3:1 large). [VERIFIED] WCAG; DESIGN.md pair semua ≥4,5. [ESTIMATED].
- Focus visible, keyboard navigation, skip link. [ESTIMATED] riset #9 §4.
- Alt text semua gambar. [ESTIMATED].
- Touch target min 44x44px (sticky CTA 48x48). [ESTIMATED] riset #6 §2.1.
- prefers-reduced-motion. [VERIFIED].
- Screen reader: semantic HTML, ARIA labels, landmark. [ESTIMATED].
- No sideways scroll @320px. [ESTIMATED] DESIGN.md.

## 14. SEO Teknis

- Metadata API (title, description, OG, Twitter Card) per halaman. [ESTIMATED].
- sitemap.xml + robots.txt (Next.js metadata route). [ESTIMATED].
- JSON-LD: LocalBusiness, Service, FAQPage, BreadcrumbList. [ESTIMATED] riset #4 §6.1.
- Canonical URL (domain final). [ESTIMATED].
- OG image 1200x630. [ESTIMATED] DESIGN.md.
- Alt text + descriptive filename. [ESTIMATED].
- Internal linking (nav + footer + breadcrumbs). [ESTIMATED].

## 15. Image Pipeline

- Format: AVIF → WebP → JPEG fallback (Next.js Image). [ESTIMATED] riset #9 §2.1.
- Quality: 75 (default Next.js). [ESTIMATED].
- Cache: 30 hari (stale-while-revalidate). [ESTIMATED].
- Sizes: hero ≤200KB, thumbnail ≤50KB, OG 1200x630. [ESTIMATED] DESIGN.md.
- Lazy loading di bawah fold; priority pada hero LCP. [ESTIMATED].
- Placeholder: blur (LQIP) atau color. [ESTIMATED].
- Asli salon (no stock). [VERIFIED] DESIGN.md Asset Rules.

## 16. Font Strategy

- next/font/google: Quicksand (display, weights 600/700) + Inter (body, weights 400/500/600). [ESTIMATED] DESIGN.md.
- 2-3 weights per font (total ≤6 weight files). [ESTIMATED].
- Self-hosted via next/font (no FOUT, subset latin). [ESTIMATED].
- font-display: swap. [ESTIMATED].
- Variable font opsional (Matter.js = library baru, keputusan VERONICA). [ESTIMATED] skill resep §9.

## 17. Analytics

- GA4 (gtag) + consent banner (UU PDP). [ESTIMATED] riset #9 §2.1, #11.
- Meta Pixel (opsional, consent-based). [ESTIMATED].
- Event tracking: WA click, form submit, scroll depth, CTA view. [ESTIMATED].
- Vercel Analytics (Web Vitals). [ESTIMATED].
- No tracking tanpa consent. [VERIFIED] riset #11.

## 18. PWA

- Tidak di v1 (out of scope). [VERIFIED] PRD §9.
- V2: manifest.json, service worker, offline fallback, install prompt. [ESTIMATED].

## 19. Security

- Headers: CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy. [ESTIMATED] riset #11.
- Form: client-side validation + sanitization; no server endpoint di v1. [ESTIMATED].
- Cookie banner + privacy policy + terms (UU PDP). [VERIFIED] riset #11.
- No secret di client (NEXT_PUBLIC_ hanya non-secret). [ESTIMATED].
- Dependency audit (npm audit) sebelum deploy. [ESTIMATED].
- HTTPS only (Vercel default). [ESTIMATED].

## 20. Testing

- Unit: Vitest (opsional, form validation). [ESTIMATED].
- E2E: Playwright (smoke: home load, WA click, form submit, 404). [ESTIMATED].
- A11y: axe-core (0 violation). [ESTIMATED].
- Performance: Lighthouse CI (score >90). [ESTIMATED].
- Visual: screenshot desktop 1440x900 + mobile 390x844 (chromium headless) → vision cek. [ESTIMATED] skill resep §8.
- Cross-browser: Chrome, Safari, Firefox. [ESTIMATED].

## 21. Constraints (ringkas)

- Static only (no DB/auth/backend v1). [VERIFIED] PRD §9.
- No paid plugins. [ESTIMATED].
- No domain sampai deal. [VERIFIED] PRD §18.
- Data klien [UNKNOWN] → placeholder. [UNKNOWN] PRD §18.

## 22. Related

- `DESIGN.md` — kontrak visual.
- `PRD.md` — 19 section (scope, conversion, residual).
- `research/01..15-*.md`.
- Skill `veronica-prd` — 6 dokumen + Premium Execution Engine.

---

*TRD = input untuk App Flow (03), UI/UX Brief (04), Backend Schema (05, minimal), Implementation Plan (06).*
