# Premium 10x — Todo Checklist (UI/UX, 6 Sisi + Gate)

Project: CatLova Malang (`/home/jauhary/Projects/catlova-malang`)
Stack: Next.js 15, TS strict, Tailwind v4, shadcn, GSAP+Lenis, RHF+Zod
Preview live: https://catlova-malang.vercel.app
Status: SELESAI — 42/42 atomic tasks LULUS; Lapis 6-7 selesai; Iterasi Premium 10x tahap 1 selesai; Phase 2 Premium 10x (7 sides) LULUS, verdict PASS. Preview live https://catlova-malang.vercel.app (deploy updated). Siap Tawarkan Package di vault.

Skill ingestion (DONE): semua skill relevan dibaca & disync ke profile jarvis/friday/veronica/edith:
frontend-craft, website-psychology, frontend-ui-engineering, cro, copywriting, taste-skill (design-taste-frontend), emil-design-eng, frontend-design, make-interfaces-feel-better, marketing-psychology, apple-liquid-glass, jarvis-aceternity-ui, jarvis-premium-scroll-animation, 10k-websites, shadcn, impeccable, web-artifacts-builder, theme-factory.
Edith yang tadinya kurang 4 skill (10k-websites, apple-liquid-glass, frontend-craft, website-psychology) sudah disync.

Execution order (disepakati): Motion & Animation → Premium Look → UI/UX → Design System → Frontend Engineering → Interaksi & Micro-interaction → Gate & Verification.

---

## SIDE 1 — Motion & Animation
Skill: emil-design-eng, jarvis-premium-scroll-animation, 10k-websites (Tier-1 IDE BANK), make-interfaces-feel-better (animations.md)
- [x] S1-1 Load & internalize skills (emil-design-eng RESEP TOP-DUNIA, jarvis-premium-scroll-animation, 10k-websites Tier-1 IDE BANK, make-interfaces-feel-better animations)
- [x] S1-2 Define shared motion language: 1 set ease + scale durasi + motif berulang hero→footer (shared motion language, bukan efek acak)
- [x] S1-3 Lenis scroll feel: lerp 0.08-0.12, wheel 500px probe, ≥30-45% delta ≤100ms pertama, stop total 800-1200ms; probe rAF live (bukan screenshot)
- [x] S1-4 Tier-1 techniques selected ≤5 + 1 signature (parallax multi-layer, stagger reveal, counters, progress rail, SVG draw-on-scroll) dari IDE BANK TIER-1
- [x] S1-5 GPU discipline: animasi hanya transform/opacity, split sekali lalu reuse timeline, maks 1 video aktif, will-change hanya setelah profil
- [x] S1-6 Motion pitfall check: scale pada gambar di-clip (overflow:hidden, bukan clip-path), pin section ≥ viewport (min-height 100svh), state gating dengan kelas dari onUpdate
- [x] S1-7 Reduced-motion guard (@media prefers-reduced-motion: reduce → crossfade/instant) + no-JS readable content path
- [x] S1-8 Verify: rAF probe curve, Lighthouse TBT/LCP budget, overflow horizontal 0 (desktop 1440 + mobile 390 + 320)

## SIDE 2 — Premium Look
Skill: frontend-design, taste-skill (design-taste-frontend), impeccable, apple-liquid-glass (optional), jarvis-aceternity-ui
- [x] S2-1 Load skills: frontend-design, taste-skill, impeccable, apple-liquid-glass (optional — brand hangat/lokal JANGAN pakai), jarvis-aceternity-ui (component ref)
- [x] S2-2 Design system gate 4 axes: (A) visual style dari katalog, (B) component DS shadcn-baseline+token, (C) motion 1 gaya+budget LCP, (D) typography display+body+mono — tanpa pilihan eksplisit = DITOLAK
- [x] S2-3 Palette ≤3 warna + 1 aksen logam, grain/hairline wajib, hero type 80-192px vs body kecil kontras; hex HANYA di token file
- [x] S2-4 Anti-slop: no fragmented cards, no glass everywhere, no color as decoration, no default cream/sand/beige, no hero-metric template, no identical card grids
- [x] S2-5 Anti-default gate: struktur masih terlihat benar kalau logo & foto diganti industri lain? → kalau ya = HOLD (evidence-before-opinion)
- [x] S2-6 Prototypicality vs bespoke balance: prototipikal pada KATEGORI (percaya), bespoke pada EKSPRESI (nada/ritme/detail) — dua-duanya wajib
- [x] S2-7 1 momen signatur per site, sisanya tenang (semua section beranimasi = terasa murah); value-ladder konteks jualan, bukan alasan nambah motion
- [x] S2-8 Self-look: screenshot desktop 1440x900 + mobile 390x844 (chromium headless) → vision cek layout pecah/teks tabrakan/elemen terpotong/kontras sebelum serah

## SIDE 3 — UI/UX
Skill: frontend-ui-engineering, website-psychology, marketing-psychology, cro, copywriting
- [x] S3-1 Load skills: frontend-ui-engineering, website-psychology, marketing-psychology, cro, copywriting
- [x] S3-2 Landing structure gate (konversi): (1) hero hasil+rasa takut, (2) social proof, (3) results nyata, (4) problem+biaya, (5) solution, (6) 5-8 fitur×manfaat+visual, (7) 3-4 langkah, (8) FAQ, (9) final CTA benefit-driven, (10) footer
- [x] S3-3 Conversion: WA-first, Rule of One CTA (satu emphasis utama), form ≤4 field, trust ≥1 within first scroll, sticky mobile CTA (site konversi)
- [x] S3-4 Trust signals dari riset: rating 5.0/211, free antar-jemput, personal touch, review segar; testimonial attribution 'Pelanggan Google Maps' + GBP link (anonim tanpa nama)
- [x] S3-5 Copywriting: no 'menyusul/placeholder/dapur/admin/konfirmasi via WA' di frontend; placeholder visual = gradient+ikon tanpa teks; harga tampil '—' + CTA 'Tanya harga via WhatsApp'
- [x] S3-6 Accessibility WCAG 2.2 AA: skip link, focus-visible, semantic landmarks, ARIA labels, alt text semua gambar, 44px touch targets, tabular-nums, reduced-motion
- [x] S3-7 Responsive mobile-first: breakpoints, collapse to one column, secondary info hidden on mobile, no horizontal overflow (0 di 1440/390/320)
- [x] S3-8 Cognitive load: Hick's law (≤3 opsi), paradox of choice, progressive disclosure, activation energy rendah (first step trivial)

## SIDE 4 — Design System
Skill: shadcn, design-md, emil-design-eng (RESEP TOP-DUNIA)
- [x] S4-1 Load skills: shadcn (CLI/component/theming), design-md (author/validate/export DESIGN.md), emil-design-eng (RESEP TOP-DUNIA)
- [x] S4-2 DESIGN.md + lint 0 error + 0 warning contrast-ratio (baca OUTPUT lint, bukan exit code — warning lolos exit 0)
- [x] S4-3 Token file CSS vars: colors, type, spacing, radius, font; hex HANYA di token file; styling via var(--color-*)
- [x] S4-4 Tailwind config extend dari token (tidak hardcode hex/font/spacing di komponen)
- [x] S4-5 Component DS: shadcn base + custom token; radius tiers, shadow tiers, concentric border radius (outer = inner + padding)
- [x] S4-6 Typography: display+body+mono, max-width 66ch, line-height judul 1-1.35 / body ≥1.5, paragraph 2em, text-wrap balance/pretty, font-smoothing antialiased
- [x] S4-7 Motion timing dari fondasi persepsi: hover/focus 50-100ms, enter 150-250ms, exit 100-150ms, component 250-300ms, large 375-400ms; easing berpasangan (ease-out masuk, ease-in keluar, ease-in-out reposition)

## SIDE 5 — Frontend Engineering
Skill: next-best-practices, vercel-react-best-practices, shadcn (Next.js 15 specifics)
- [x] S5-1 Load skills: next-best-practices, vercel-react-best-practices (react-best-practices), shadcn (Next.js 15 specifics)
- [x] S5-2 Next.js 15 App Router, TS strict, Tailwind v4, shadcn base; SSG static, no backend/DB/auth v1
- [x] S5-3 Image optimization: AVIF→WebP→JPEG q75, minimumCacheTTL 2592000 (30d), blur placeholders (LQIP); aset real [UNKNOWN] → gradient+ikon placeholder
- [x] S5-4 Bundle budget: First Load JS ≤170KB gz; motion provider dynamic-import ssr:false untuk code-split GSAP/Lenis
- [x] S5-5 CWV target: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1; Lighthouse Performance ≥0.9 (baseline 0.55 — perlu perbaikan)
- [x] S5-6 Security headers (CSP/HSTS/X-Frame-Options) — default Vercel/Next; audit sebelum tawarkan (tiered security)
- [x] S5-7 SEO: metadata per halaman + canonical + OG/Twitter + JSON-LD (LocalBusiness/Service/FAQPage/BreadcrumbList), sitemap.xml, robots.txt; domain final [UNKNOWN] → canonical fallback vercel.app
- [x] S5-8 Testing: Vitest (unit), Playwright smoke (4 tests: home load, WA link, form submit redirect, 404), axe a11y, Lighthouse; cross-browser chromium+firefox (webkit untested — env deps)
- [x] S5-9 Deploy: Vercel preview only (no production/domain sebelum deal); env vars NEXT_PUBLIC_WA_NUMBER, NEXT_PUBLIC_SITE_URL; auto-deploy dari main

## SIDE 6 — Interaksi & Micro-interaction
Skill: make-interfaces-feel-better, emil-design-eng, jarvis-aceternity-ui
- [x] S6-1 Load skills: make-interfaces-feel-better (full review mode), emil-design-eng, jarvis-aceternity-ui (component ref)
- [x] S6-2 Hover/focus/active states: interruptible CSS transitions (exact properties, never transition:all), scale on press 0.96, hit area 44px (extend pseudo-element), will-change sparingly
- [x] S6-3 Stagger enter ~100ms untuk infrequent entrances (semantic chunks); contextual icon animations (opacity 0→1, scale 0.25→1, blur 4px→0) dengan spring bounce 0
- [x] S6-4 Concentric border radius, optical alignment, image outlines (1px low opacity black/white), font smoothing antialiased, tabular-nums
- [x] S6-5 Form UX: inline validation, error state what/why/solution, loading state 'Mengarahkan...', success redirect ke WA (≤4 field, RHF+Zod)
- [x] S6-6 Cookie banner dismiss (sessionStorage), sticky CTA floating, header opaque bg-softwhite/95 backdrop-blur, skip link ke #main
- [x] S6-7 Microcopy: active voice, specific labels (verb exact), no filler, sentence case, tone matched brand; error/empty states sebagai invitation to act
- [x] S6-8 One SVG recolored per state (currentColor), icon stroke matching text weight (1.5px regular / 2px semibold), outline default + fill active

## SIDE 7 — Gate & Verification (sebelum declare preview live)
- [x] S7-1 Lint Visual (Lapis 6): scroll 700px bertahap, screenshot desktop 1440x900 + mobile 390x844, persona-walkthrough + visual-pixel-audit + batch-vision-site-audit; temuan per section, coder perbaiki section yang kena saja, audit ulang sampai 0 temuan kritis
- [x] S7-2 Masterpiece (Lapis 7): IDE BANK TIER-1, pilih ≤5 teknik + 1 signature, perf diukur SETELAH fase ini (bukan gate tengah), reduced-motion, no-JS path; boleh beberapa ronde sampai terasa cukup
- [x] S7-3 Design contract check (gate spec→DOM): 5-12 angka penentu dari dokumen → cek DOM (getComputedStyle/grep), selisih >10% = HOLD; anti-default (struktur masih benar kalau logo/foto diganti industri lain?) = HOLD; kontrak per layar + verdict HOLD/PASS + wajib isi 'Keep'
- [x] S7-4 Finish-gate + persona walkthrough (persona-walkthrough skill) — final check sebelum preview
- [x] S7-5 15-item quality checklist dengan bukti (path file/commit) per item: 12 wajib (404, CTA above fold, meta title/desc, OG image, favicon, robots, sitemap, alt text, responsive, loading, form error) + 3 kondisional (success page, sticky CTA, NAP)
- [x] S7-6 Self-look: screenshot desktop+mobile → vision cek layout pecah/teks tabrakan/elemen terpotong/kontras; angka dulu, MATA sebelum klaim
- [x] S7-7 Tulis 'Untuk-Bos-Sebelum-Tawarkan.md' di repo (7 section: sesuai planning, beda dari planning+kenapa, belum pasti, risiko tawaran, pertanyaan klien, catatan JARVIS, rekomendasi) — baru lapor Preview Live
- [x] S7-8 Siap Tawarkan Package di vault (02-🏢-Agensi/catlova-malang/): screenshot, video walkthrough, link preview, talking points WA, FAQ, template penawaran; Bos WAJIB baca dokumen Bos dulu

---

## Residual [UNKNOWN] (owner data) — catat, jangan blokir pipeline
Harga CatLova, durasi layanan, hari buka, CCTV/medis, frekuensi update WA, syarat vaksin, kapasitas boarding, range antar-jemput, metode pembayaran, kebijakan reschedule, foto/logo asli, nama reviewer, domain final, status GBP. Semua masuk ke dokumen Bos sebagai residual, bukan pertanyaan penghenti.

## Aturan berhenti (Bos 2026-10-11)
Berhenti & tanya HANYA kalau benar-benar darurat (merugikan klien / ilegal / merusak) dan tidak ada di riset EDITH maupun planning VERONICA. Sisanya — termasuk yang belum diketahui atau butuh keputusan — catat sebagai residual di dokumen serah-terima dan jalan terus.
