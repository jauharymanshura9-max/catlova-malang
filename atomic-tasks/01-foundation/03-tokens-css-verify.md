# Task: Token CSS + Tailwind Config + Font Setup + Verifikasi Logo

## Layer
Foundation

## Deskripsi
Terapkan token dari DESIGN.md ke `globals.css` (CSS var) dan Tailwind config. Setup font (Quicksand + Inter) via next/font. Verifikasi logo aset [UNKNOWN] — placeholder jika belum ada.

## Referensi dari Dokumen
- DESIGN.md: Colors, Typography, Layout, Shapes, Primitives, Do's/Don'ts.
- TRD §16: font strategy (next/font, 2-3 weights).
- Impl §2.1-2.3.

## Acceptance Criteria
- [ ] `src/styles/globals.css` berisi var: `--color-primary` (#2B211C), `--color-secondary` (#7B9E87), `--color-tertiary` (#C97A5A), `--color-neutral` (#F7F2EC), `--color-on-primary` (#F7F2EC), `--color-on-tertiary` (#2B211C), `--color-biscuit`, `--color-honey`, `--color-warmgray`, `--color-coral`, `--color-softwhite`, `--color-muted`.
- [ ] Var type: `--text-h1` s/d `--text-button`; spacing `--space-xs` s/d `--space-2xl`; radius `--radius-sm/md/lg/full`.
- [ ] Var font: `--font-display` (Quicksand), `--font-body` (Inter).
- [ ] Tailwind config extend: colors, fontFamily, borderRadius, spacing dari token.
- [ ] `src/app/layout.tsx` pakai next/font/google Quicksand (600,700) + Inter (400,500,600), CSS var `--font-display`/`--font-body`.
- [ ] Font render tanpa FOUT; body min 16px.
- [ ] Logo aset: jika ada di `assets/`, copy ke `public/logo.svg`; jika [UNKNOWN], placeholder teks "CatLova" dengan font-display.
- [ ] `npm run build` jalan.

## Dependencies
Task 01, Task 02.

## Catatan
- Hex HANYA di token file; komponen pakai var/CSS class. [ESTIMATED] DESIGN.md Do's.
- Jangan tambah warna/font di luar palette (amendemen eksplisit). [ESTIMATED] DESIGN.md.
