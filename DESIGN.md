---
version: alpha
name: CatLova Malang
description: Warm premium-friendly identity for a cat grooming and boarding salon in Sukun, Malang — ivory ground, cocoa type, terracotta interaction.
colors:
  primary: "#2B211C"
  secondary: "#7B9E87"
  tertiary: "#C97A5A"
  neutral: "#F7F2EC"
  on-primary: "#F7F2EC"
  on-tertiary: "#2B211C"
  biscuit: "#F4EAD8"
  honey: "#E9A23B"
  warmgray: "#B5AAA3"
  coral: "#E46B5A"
  softwhite: "#FBF8F4"
  muted: "#6B5F57"
typography:
  h1:
    fontFamily: Quicksand
    fontSize: 5rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  h2:
    fontFamily: Quicksand
    fontSize: 2.5rem
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  h3:
    fontFamily: Quicksand
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.25
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
  label-caps:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.08em"
  button:
    fontFamily: Quicksand
    fontSize: 1rem
    fontWeight: 600
    lineHeight: 1.2
rounded:
  sm: 8px
  md: 12px
  lg: 20px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  2xl: 80px
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 14px
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 14px
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-tertiary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 14px
  button-secondary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 14px
  badge-honey:
    backgroundColor: "{colors.honey}"
    textColor: "{colors.on-tertiary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.full}"
    padding: 6px
  badge-sage:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-tertiary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.full}"
    padding: 6px
  badge-error:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.on-tertiary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.full}"
    padding: 6px
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 24px
  card-soft:
    backgroundColor: "{colors.biscuit}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 24px
  chip:
    backgroundColor: "{colors.warmgray}"
    textColor: "{colors.primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: 8px
  input:
    backgroundColor: "{colors.softwhite}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 12px
  text-muted:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.muted}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: 0px
---

## Gaya & Asal Keputusan (Design System Gate)

Gaya katalog: `muted pastels / warm neutrals + warm earth tones (terracotta + sage) — bagian palet dari riset #7 §2.3` · Diputuskan oleh: `VERONICA dari riset EDITH` · Preferensi kasar klien: `tidak ada (Bos ikut VERONICA)`.

Motion system: satu gaya (Lenis lerp 0.1, Tier-1 ≤5 efek: parallax multi-layer, stagger reveal, counter, progress rail, SVG draw-on-scroll) + 1 signature moment (parallax hero). Budget LCP ≤2.5s, TBT ≤200ms, preloader ≤2s, prefers-reduced-motion fallback wajib. Apple-liquid-glass DITOLAK (brand hangat/lokal).

## Scope

Satu halaman landing (home) + halaman layanan (grooming, penitipan) + FAQ + kontak/area layanan + 404. Di luar scope: booking online (Fase 2), blog, multi-bahasa, PWA.

## Reader & Task

Pembaca = pemilik kucing urban Malang (perempuan 20-35, mahasiswa/anak kos) yang mencari jasa grooming/penitipan. Keputusan 10 detik pertama: "apakah ini tempat yang aman & telaten untuk anabulku, dan bagaimana cara booking?" → CTA Chat WA atau scroll ke pricelist. Semua struktur halaman tunduk ke keputusan ini.

## Overview

CatLova Malang adalah salon dan penitipan kucing di Sukun, Malang, dengan rating 5,0 (211 ulasan Google) dan free antar-jemput. Identitas visualnya harus terasa **hangat, personal, dan meyakinkan** — bukan klinis seperti Dr.Meoww, bukan modern-corporate seperti PETFIRST. Ground ivory hangat dengan type coklat hangat; terracotta sebagai satu-satunya pendorong interaksi; sage sebagai aksen kepercayaan; honey untuk badge dan highlight. Whitespace lega, rounded lembut, tanpa glassmorphism berat. Satu momen signatur per halaman, sisanya tenang.

## Colors

- **Primary / Cocoa (#2B211C):** type utama, heading, body text. Kontras 14,11:1 di Ivory — lolos WCAG AA. [ESTIMATED] label sesuai riset #7 §2.3.
- **Secondary / Sage (#7B9E87):** aksen kepercayaan, status sukses, button sekunder. Kontras 5,30:1 dengan Cocoa text. [ESTIMATED].
- **Tertiary / Terracotta (#C97A5A):** SATU-SATUNYA pendorong interaksi (button primary, link penting). Dipakai dengan text Cocoa (4,80:1). Jangan ada warna kedua yang bersaing. [ESTIMATED].
- **Neutral / Ivory (#F7F2EC):** background halaman. [ESTIMATED].
- **Biscuit (#F4EAD8):** soft ground untuk card harga / section alternatif. [ESTIMATED].
- **Honey (#E9A23B):** badge, highlight, offer. Text Cocoa (7,25:1). [ESTIMATED].
- **Warm Gray (#B5AAA3):** chip, divider, muted surface. Text Cocoa (6,91:1). [ESTIMATED].
- **Coral (#E46B5A):** error, alert. Text Cocoa (4,90:1). [ESTIMATED].
- **Soft White (#FBF8F4):** surface input/form. [ESTIMATED].
- **Muted (#6B5F57):** text sekunder/caption di Ivory (5,55:1). [ESTIMATED] (turunan).
- **on-primary (#F7F2EC):** text di atas Cocoa. **on-tertiary (#2B211C):** text di atas warna interaksi.

Hindari: baby blue + cartoon paw print (sudah dipakai banyak pet business lokal); coral+cream milik PETFIRST (#F47752) agar tidak tertukar. [VERIFIED] Gradiently + riset #7 §2.3.

## Typography

Satu personality face (Quicksand, rounded friendly) + satu neutral body (Inter). Dua personality face bertarung — dilarang. Fredoka hanya untuk logotype, bukan body. Serif editorial (Petoria-style) sebagai alternatif premium jika owner prefer — keputusan Bos. Hierarchy dari weight/size, bukan ganti font. Fluid typography via CSS clamp() di level implementasi. Min 16px body, line-height 1.5, letter-spacing normal untuk aksesibilitas.

H1 hero 5rem (80px) desktop — premium scale. Label caps letter-spacing 0.08em untuk microcopy.

## Layout

Baseline spacing 4px. Intra-component: xs-sm (4-8px). Inter-component: md-lg (16-24px). Antar-section: xl-2xl (48-80px). Lebar konten max 1200px; prose max 66ch (WCAG 1.4.8). Tabel (pricelist) pakai full available width, bukan selebar prose. Mobile-first; no sideways scroll @320px.

## Elevation & Depth

Default flat. Shadow hanya untuk elemen terangkat (modal, dropdown, sticky CTA). Hairline border 1px Warm Gray untuk pemisah section. Grain halus (opacity <6%) boleh sebagai tekstur premium. Rim-light pada hero CTA. Tidak ada glassmorphism berat (anti-pattern Hero-Kaca-Seragam).

## Shapes

Radius: sm 8px (button, input), md 12px (card), lg 20px (section container), full 9999px (avatar, pill, badge). `full` hanya untuk avatar/pill/badge. Button rounded sm konsisten di semua CTA.

## Components

Daftar komponen yang BOLEH dipakai. Satu high-emphasis action per layar (button-primary). Variant = sibling key, bukan nested.

- **button-primary** (Terracotta bg + Cocoa text): CTA utama (Chat WA, Booking). Satu per layar.
- **button-primary-hover** (Cocoa bg + Ivory text): state hover/pressed.
- **button-secondary** (Sage bg + Cocoa text): aksi sekunder (Lihat Layanan, Lihat Harga).
- **button-secondary-hover**: state hover.
- **badge-honey**: badge promo/highlight (Honey bg + Cocoa text).
- **badge-sage**: badge status/trust (Sage bg + Cocoa text).
- **badge-error**: badge error/alert (Coral bg + Cocoa text).
- **card**: konten utama di Ivory bg + Cocoa text.
- **card-soft**: konten alternatif di Biscuit bg (pricelist, FAQ).
- **chip**: pill kecil (Warm Gray bg + Cocoa text).
- **input**: form field (Soft White bg + Cocoa text).
- **text-muted**: caption/secondary text (Muted text on Ivory).

## Primitives

Class/token yang BOLEH dipakai FRIDAY (disalin dari theme.css project ini). Yang tidak ada di daftar = DILARANG dikarang sendiri.

- Warna: `--color-primary` (Cocoa), `--color-secondary` (Sage), `--color-tertiary` (Terracotta), `--color-neutral` (Ivory), `--color-on-primary` (Ivory), `--color-on-tertiary` (Cocoa), `--color-biscuit`, `--color-honey`, `--color-warmgray`, `--color-coral`, `--color-softwhite`, `--color-muted`.
- Type: `--text-h1`, `--text-h2`, `--text-h3`, `--text-body-lg`, `--text-body-md`, `--text-body-sm`, `--text-label-caps`, `--text-button`.
- Spacing: `--space-xs` ... `--space-2xl`. Radius: `--radius-sm/md/lg/full`.
- Font family: `--font-display` (Quicksand), `--font-body` (Inter).

## Do's and Don'ts

- **Do** pakai token reference (`{colors.tertiary}`), bukan hex literal di komponen.
- **Do** tampilkan rating 5,0 (211 ulasan) + review segar sebagai trust badge di hero.
- **Do** gunakan dark text (Cocoa) di atas warna interaksi (Terracotta/Sage/Honey/Coral) — kontras WCAG AA.
- **Don't** tambah warna/font/spacing di luar palette — extend palette dulu via amendemen.
- **Don't** pakai Ivory/putih text di atas Terracotta/Sage/Honey (gagal WCAG AA).
- **Don't** gunakan dua button high-emphasis bersaing dalam satu layar (anti-pattern CTA-Kembar).
- **Don't** klaim CCTV/update WA/medis jika status CatLova belum diverifikasi (lihat riset #5 residual).

## Anti-Pattern (pola generik yang dilarang — beri NAMA eksplisit)

- **"Hero-Kaca-Seragam":** hero full glassmorphism tanpa foto brand.
- **"Grid-3-Kolom-Template":** 3 kartu fitur generik tanpa bukti/review.
- **"CTA-Kembar":** dua button high-emphasis bersaing dalam satu layar.
- **"Koridor-Klinik":** visual medical-adjacent (putih steril + biru) — bukan identitas CatLova.
- **"Paw-Print-Spam":** paw print di setiap sudut (keep fun in one place).
- **"Stock-Photo-Pet":** foto stock hewan generik, bukan foto asli salon/anabul.

## Asset Rules

Logo: custom illustration cat motif + clean wordmark; linework stroke width = typography stroke width. Versi: primary, stacked, compact badge/icon. Min size TBD (owner supply logo vektor). Foto: asli salon (fasad, grooming table, kandang, before/after, tim, anabul) dari `assets/`; WebP/AVIF, hero ≤200KB. Dilarang: stock photo, foto kompetitor, paw print berulang. Favicon + OG image 1200x630 wajib.

## Copy Voice

Ramah, profesional, empatik — "knowledgeable friend", bukan corporate brochure, bukan baby-talk. Lead with pet, not transaction ("kucing kamu pulang wangi & tenang" beats "layanan grooming profesional"). Konkret (cara handle kucing galak, rutinitas kebersihan, update WA). Konsisten di signage, website, IG, WA. Grooming = ramah/playful boleh; penitipan = lebih tenang/reassuring. Hindari jargon tanpa penjelasan dan "premium"/"passionate" tanpa bukti. Bahasa Indonesia. Sapaan: "kamu" untuk pemilik, "anabul" untuk kucing.

Kalimat yang disarankan (dari riset #7): "Kami yang datang ke kamu." / "Satu kucing, satu perhatian." / "Pulang wangi, pulang tenang." Semua [ESTIMATED].

## Eval Rubric (diisi VERONICA per project)

- [x] Fakta dari riset selamat (WA 0877-5205-1970, alamat Jl. Terusan Mergan Raya No.Kav.1/20 Sukun Malang, jam 08-17, rating 5,0/211).
- [x] Harga tidak difabricate — placeholder + CTA WA.
- [x] Keputusan pembaca 10-detik jelas (Chat WA + pricelist).
- [x] Tidak ada anti-pattern di atas.
- [ ] Lint DESIGN.md: 0 error + 0 warning contrast-ratio (verifikasi setelah tulis).
- [ ] Kontras WCAG AA terverifikasi (semua pair di atas).
