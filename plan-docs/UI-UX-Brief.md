# UI/UX Design Brief — CatLova Malang

**Proyek:** CatLova Malang — salon & penitipan kucing, Sukun, Malang
**Dokumen:** 04 / UI/UX Design Brief
**Versi:** 1.0 (Loop 5)
**Tanggal:** 2026-10-27
**Sumber otoritatif:** skill `veronica-prd` v4.1.14; `DESIGN.md`; `PRD.md`; `TRD.md`; `App-Flow.md`; riset EDITH 15 file.
**Status label:** [VERIFIED] = data langsung; [ESTIMATED] = rekomendasi; [UNKNOWN] = belum diverifikasi.

---

## 0. Kontrak Rasa (E2) — WAJIB, Bos 2026-10-11

1. Rasa 5 detik pertama: "Ini bukan salon kucing biasa" — hangat, personal, meyakinkan; Ivory ground + Cocoa type + Terracotta CTA; rating 5,0 badge di hero. [ESTIMATED]
2. Satu momen tanda tangan: hero dengan rating 5,0 (211 ulasan) + review segar quote + free antar-jemput highlight + foto before/after (jika aset). [ESTIMATED]
3. Yang dilarang muncul: kartu seragam 3 kolom, ikon generik, testimoni tanpa nama, angka statistik tanpa sumber, claim CCTV/medis tanpa verifikasi, "premium"/"passionate" tanpa bukti. [ESTIMATED] riset #7 §1.2.

## A. Brand-Driven Design Foundation

- Brand Archetype: Caregiver + Sage. [VERIFIED] riset #7 §1.2.
- Design Philosophy: "Kami yang datang ke kamu. Satu kucing, satu perhatian." [ESTIMATED] riset #7 §1.2.
- Aesthetic Direction: warm organic, personal, reassuring — bukan klinis, bukan corporate. [ESTIMATED] DESIGN.md.

## B. Color System (derive dari brand)

- Primary / Cocoa #2B211C — type utama, heading, body. [ESTIMATED] riset #7 §2.3.
- Secondary / Sage #7B9E87 — aksen kepercayaan, button sekunder. [ESTIMATED].
- Tertiary / Terracotta #C97A5A — SATU-SATUNYA pendorong interaksi. [ESTIMATED].
- Neutral / Ivory #F7F2EC — background. [ESTIMATED].
- Biscuit #F4EAD8 — soft ground card harga/section alt. [ESTIMATED].
- Honey #E9A23B — badge, highlight, offer. [ESTIMATED].
- Warm Gray #B5AAA3 — chip, divider. [ESTIMATED].
- Coral #E46B5A — error/alert. [ESTIMATED].
- Soft White #FBF8F4 — surface input. [ESTIMATED].
- Muted #6B5F57 — text sekunder/caption. [ESTIMATED].
- on-primary #F7F2EC (text di atas Cocoa). on-tertiary #2B211C (text di atas warna interaksi). [ESTIMATED].

Aturan: hex HANYA di token file; styling via `var(--color-*)`. Palet ≤3 warna + 1 aksen. [ESTIMATED] skill resep §1.

## C. Typography System

- Heading: Quicksand (weights 600/700) — rounded friendly, brand signature. [VERIFIED] riset #7 §3.1.
- Body: Inter (weights 400/500/600). [VERIFIED] riset #7 §3.1.
- Mono: opsional (code/ID) — JetBrains Mono. [ESTIMATED].
- Type scale: H1 5rem (80px) desktop / 2,5rem (40px) mobile; H2 2,5rem; H3 1,5rem; body-lg 1,125rem; body-md 1rem; body-sm 0,875rem; label-caps 0,75rem. [ESTIMATED] DESIGN.md.
- Line-height: H1 1,05; H2 1,15; H3 1,25; body 1,6; body-sm 1,5. [ESTIMATED] DESIGN.md.
- Letter-spacing: H1 -0,02em; H2 -0,01em; label-caps 0,08em. [ESTIMATED] DESIGN.md.
- Prose max-width 66ch (WCAG 1.4.8). Tabel pricelist full width. [ESTIMATED] DESIGN.md.
- Min body 16px (mobile). [ESTIMATED].

## D. Spatial System

- Baseline spacing 4px. Intra-component xs-sm (4-8px). Inter-component md-lg (16-24px). Antar-section xl-2xl (48-80px). [ESTIMATED] DESIGN.md.
- Container max 1200px; prose max 66ch. [ESTIMATED] DESIGN.md.
- Layout architecture: single column mobile, split (text+visual) desktop hero, full-width pricelist. [ESTIMATED].
- Card design: rounded md (12px), padding 24px, Ivory bg + Cocoa text (card) atau Biscuit (card-soft). [ESTIMATED] DESIGN.md.
- White space: lega (luxury/mindfulness) sesuai brand. [ESTIMATED].

## E. Visual Signature (Anti-Slop Weapon)

- Signature animation: Terracotta CTA hover + before/after reveal + honey badge pulse (≤1 momen). [ESTIMATED] DESIGN.md.
- Micro-interactions: button hover scale 1,01 + shadow deepen; card hover lift; nav underline grow. [ESTIMATED] App-Flow §12.
- Page transitions: fade + slight slide 0,3s. [ESTIMATED] App-Flow §13.
- Loading experience: skeleton (bukan spinner) + blur placeholder LQIP. [ESTIMATED] App-Flow §11.
- Cursor/scroll: Lenis smooth scroll (lerp 0,08-0,12); no custom cursor (anti-slop). [ESTIMATED].
- Illustration/icon style: Lucide outline (konsisten). [ESTIMATED] TRD §9.

Anti-slop rules (DESIGN.md Anti-Pattern): no "Hero-Kaca-Seragam", no "Grid-3-Kolom-Template", no "CTA-Kembar", no "Koridor-Klinik", no "Paw-Print-Spam", no "Stock-Photo-Pet".

## E2. Kontrak Rasa (diulang — sumber: PRD §14)

1. Rasa 5 detik: "Ini bukan salon kucing biasa" — hangat, personal, meyakinkan. [ESTIMATED]
2. Momen tanda tangan: hero rating 5,0 + review segar + free antar-jemput + before/after. [ESTIMATED]
3. Yang dilarang: kartu seragam 3 kolom, ikon generik, testimoni tanpa nama, angka tanpa sumber, claim CCTV/medis tanpa verifikasi, "premium"/"passionate" tanpa bukti. [ESTIMATED]

## F. Component Design Tokens

- Border radius: sm 8px (button, input), md 12px (card), lg 20px (section container), full 9999px (avatar, pill, badge). [ESTIMATED] DESIGN.md.
- Shadow: multi-layered (premium reference). Default flat; shadow hanya elemen terangkat (modal, dropdown, sticky CTA). [ESTIMATED] skill veronica-prd.
- Button styles: primary (Terracotta bg + Cocoa text), primary-hover (Cocoa bg + Ivory text), secondary (Sage bg + Cocoa text), secondary-hover (Cocoa bg + Ivory text). [ESTIMATED] DESIGN.md.
- Input styles: Soft White bg + Cocoa text, focus ring Terracotta, error Coral. [ESTIMATED] DESIGN.md.
- Spacing scale: --space-xs (4px) s/d --space-2xl (80px). [ESTIMATED] DESIGN.md.

## G. Responsive & Accessibility

- Mobile-first. Breakpoints: mobile <768px, tablet 768-1024px, desktop >1024px. [ESTIMATED].
- Mobile: single column, hamburger nav, sticky floating WA CTA (48x48). [ESTIMATED] riset #6 §2.1.
- Tablet: adaptive (bukan hanya stacked mobile). [ESTIMATED].
- Dark/light: light only v1 (Ivory ground). [ESTIMATED].
- Accessibility: WCAG 2.2 AA, focus visible, keyboard nav, screen reader, prefers-reduced-motion. [VERIFIED] TRD §13.
- Touch target min 44x44px (sticky CTA 48x48). [ESTIMATED].

## H. Conversion Architecture (WAJIB — halaman harus MENJUAL)

- Primary Conversion Goal: Rule of One — 1 aksi utama per halaman = Chat WA. [ESTIMATED] PRD §12.
- Trust Signal Placement: ≥1 social proof dalam 1 scroll dari CTA (rating 5,0/211 [VERIFIED], review segar [VERIFIED], before/after [UNKNOWN], free snack [VERIFIED], free antar-jemput [VERIFIED]). [ESTIMATED] PRD §15.
- CTA Hierarchy: 1 CTA dominan (Terracotta, ≥48x48, sticky floating). Copy = outcome ("Chat WA — Booking Grooming"). [ESTIMATED] riset #6 §2.1.
- Form Design: ≤4 field (nama, WA, layanan, tanggal + catatan opsional). Confirmation message jelas. [ESTIMATED] riset #6 §2.2.
- Microcopy: spesifik + angka + time + risk removal. Error state = apa + kenapa + solusi. [ESTIMATED] riset #6 §2.2.
- Urgency & Scarcity: hanya kalau JUJUR (kapasitas peak lebaran). [ESTIMATED] riset #6 §2.4.

## I. Section Layout (Home — 10 elemen Landing Structure Gate)

1. Hero: tagline H1 + rating 5,0 badge (Honey) + free antar-jemput highlight (Sage chip) + CTA Chat WA (button-primary) + foto asli (jika ada) + jam buka + alamat singkat. [ESTIMATED] PRD §16.
2. Social proof: review Google 3-5 quote + rating 5,0/211 + foto before/after. [ESTIMATED].
3. Results nyata: angka (rating 5,0, 211 ulasan, jam 08-17, free antar-jemput). [VERIFIED].
4. Problem: konsistensi kualitas grooming, penitipan khawatir, harga tidak jelas. [VERIFIED] riset #2 §3.
5. Solution: personal, telaten, free antar-jemput, update WA. [ESTIMATED].
6. Fitur 5-8 × (manfaat + visual): grooming sehat, grooming kutu/jamur, lion cut add-on, penitipan 2 tier, antar-jemput, free snack, update WA. [ESTIMATED] riset #3 §8.2.
7. Process 3-4 langkah: booking → pickup → grooming → siap dijemput. [ESTIMATED].
8. FAQ accordion 8-12. [ESTIMATED].
9. Final CTA: headline benefit-driven "Pulang wangi, pulang tenang — Chat WA". [ESTIMATED].
10. Footer: NAP, jam, IG, privacy/terms. [VERIFIED] NAP.

## J. Component Spec (FRIDAY wajib ikut)

- button-primary: Terracotta bg + Cocoa text, radius sm 8px, padding 14px, font Quicksand 600 1rem. Hover → Cocoa bg + Ivory text. [ESTIMATED] DESIGN.md.
- button-secondary: Sage bg + Cocoa text, radius sm, padding 14px. Hover → Cocoa bg + Ivory text. [ESTIMATED].
- badge-honey: Honey bg + Cocoa text, radius full, padding 6px, label-caps. [ESTIMATED].
- badge-sage: Sage bg + Cocoa text, radius full, padding 6px. [ESTIMATED].
- badge-error: Coral bg + Cocoa text, radius full, padding 6px. [ESTIMATED].
- card: Ivory bg + Cocoa text, radius md 12px, padding 24px. [ESTIMATED].
- card-soft: Biscuit bg + Cocoa text, radius md, padding 24px. [ESTIMATED].
- chip: Warm Gray bg + Cocoa text, radius full, padding 8px. [ESTIMATED].
- input: Soft White bg + Cocoa text, radius sm, padding 12px. Focus ring Terracotta. [ESTIMATED].
- text-muted: Muted text on Ivory, body-sm. [ESTIMATED].

## K. Visual Hierarchy

- H1 hero 5rem (80px) desktop — satu elemen dominan. [ESTIMATED] DESIGN.md.
- Rating badge Honey di dekat H1 (trust). [ESTIMATED].
- CTA button-primary Terracotta (satu-satunya pendorong interaksi). [ESTIMATED].
- Sisanya muted/secondary. [ESTIMATED].

## L. Trust Placement (≥1 dalam 1 scroll dari CTA)

- Hero: rating 5,0/211 badge + free antar-jemput chip. [VERIFIED/ESTIMATED].
- Section 2: review quote + before/after. [ESTIMATED].
- Footer: NAP + jam + IG. [VERIFIED].
- Sticky CTA mobile: selalu visible. [ESTIMATED].

## M. Animation Spec

- Hero entrance: fade-up 0,7-0,8s (ease-out). [ESTIMATED] skill resep §9.
- Scroll reveal: opacity 0→1 + translateY 20px→0 (0,4-0,6s). [ESTIMATED].
- Button hover: scale 1,01 + shadow deepen (150-200ms ease-out). [ESTIMATED].
- Honey badge: subtle pulse (opsional, ≤1). [ESTIMATED].
- Lenis smooth scroll (lerp 0,08-0,12). [ESTIMATED].
- prefers-reduced-motion: disable semua. [VERIFIED].

## N. Accessibility (WCAG 2.2 AA)

- Kontras AA semua pair (DESIGN.md). [ESTIMATED].
- Focus visible, keyboard nav, skip link. [ESTIMATED].
- Alt text semua gambar. [ESTIMATED].
- Touch target min 44x44. [ESTIMATED].
- Screen reader: semantic HTML, ARIA labels, landmark. [ESTIMATED].

## O. Related

- `DESIGN.md` — kontrak visual (token, anti-pattern).
- `PRD.md` §14 (Kontrak Rasa), §15 (Conversion Architecture).
- `App-Flow.md` — journey + states.
- `TRD.md` — a11y, image, font, analytics.

---

*UI/UX Brief = input untuk Backend Schema (05, minimal) + Implementation Plan (06).*
