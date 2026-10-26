# Task: Layout Root (app/layout.tsx)

## Layer
Structure

## Deskripsi
Buat root layout: html lang id, font var, globals.css, metadata default (title, description, OG, Twitter), skip link (a11y), Lenis/GSAP provider placeholder. Struktur App Router.

## Referensi dari Dokumen
- TRD §10: folder structure (app/layout.tsx).
- TRD §14: SEO teknis (metadata, OG, Twitter).
- TRD §13: aksesibilitas (skip link, semantic).
- UI-UX Brief §G: responsive & a11y.
- Impl §12.6.

## Acceptance Criteria
- [ ] `src/app/layout.tsx` export `RootLayout` dengan children.
- [ ] `<html lang="id">`, `<body>` pakai font var `--font-body`.
- [ ] Import `globals.css`.
- [ ] Metadata default: title, description, openGraph, twitter, icons.
- [ ] Skip link "Lewati ke konten" → `#main`.
- [ ] `<main id="main">` wrapper.
- [ ] `npm run build` jalan.

## Dependencies
Task foundation 01-10 (semua layer 01).

## Catatan
- Metadata per halaman override via `buildMetadata` (lib/seo). [ESTIMATED] accessor lib.
- Jangan tambah provider berat (no Redux). [ESTIMATED] TRD §1.
