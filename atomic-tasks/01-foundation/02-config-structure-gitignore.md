# Task: Config + Struktur Folder + .gitignore

## Layer
Foundation

## Deskripsi
Konfigurasi project: `next.config.ts` (image domains, experimental), `tailwind.config.ts` extend token, `tsconfig` path alias `@/*`, struktur folder sesuai TRD §10, `.gitignore` + `.env.example`.

## Referensi dari Dokumen
- TRD §10: folder structure (src/app, components, data, lib, styles, public/images).
- TRD §11: env vars (NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_WA_NUMBER, opsional GA/Meta/Resend).
- TRD §15: image pipeline (AVIF/WebP, quality 75, cache 30 hari).
- Impl §1.2, §1.3.

## Acceptance Criteria
- [ ] Folder `src/app`, `src/components/{ui,sections,layout}`, `src/data`, `src/lib`, `src/styles`, `public/images` ada.
- [ ] `tsconfig.json` paths: `"@/*": ["./src/*"]`.
- [ ] `next.config.ts`: `images.formats = ['image/avif','image/webp']`, `minimumCacheTTL = 2592000` (30 hari).
- [ ] `.env.example` berisi `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_WA_NUMBER`, `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_META_PIXEL_ID`, `RESEND_API_KEY`.
- [ ] `.gitignore` mencakup `.env.local`, `node_modules`, `.next`, `out`.
- [ ] `npm run build` jalan tanpa error.

## Dependencies
Task 01 (init project + deps).

## Catatan
- Jangan commit `.env.local` (secret). [ESTIMATED] TRD §11.
- Image domain eksternal (Google Maps thumbnail) ditambahkan ke `remotePatterns` jika dipakai.
