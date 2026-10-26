# Task: Init Project + Install Dependencies

## Layer
Foundation

## Deskripsi
Buat project Next.js 15 App Router + TypeScript di root workspace dengan `create-next-app`, lalu install dependencies PERSIS daftar TRD §9 dan §10. Ini langkah pertama — semua task berikut bergantung pada struktur project yang valid dan bisa di-build.

## Referensi dari Dokumen
- TRD §1: stack final (Next.js 15 App Router, TS strict, Tailwind v4) — keputusan Bos, WAJIB.
- TRD §9: daftar lengkap dependencies + anti-bloat rule.
- Impl §1: Phase 1 Project Init.
- Impl §19: pre-flight (path diverifikasi).

## Acceptance Criteria
- [ ] `npx create-next-app@latest . --typescript --app --tailwind --use-npm --src-dir --eslint` sukses di `/home/jauhary/Projects/catlova-malang`.
- [ ] `package.json` dependencies = next ^15, react ^19, react-dom ^19, gsap ^3, lenis ^1, react-hook-form ^7, zod ^3, lucide-react.
- [ ] `package.json` devDependencies = typescript ^5, @types/node, @types/react, @types/react-dom, eslint, eslint-config-next, sharp.
- [ ] TIDAK ada dependency di luar daftar TRD §9 (framer-motion, axios, react-query, date-fns, supabase, UI library lain = DILARANG) tanpa putusan VERONICA.
- [ ] `npm install` selesai tanpa error.
- [ ] `npm run dev` / `npm run build` berjalan (template default masih boleh).
- [ ] `tsconfig.json` strict = true.

## Dependencies
Tidak ada (task pertama).

## Catatan
- `--tailwind` WAJIB (TRD §1 — Tailwind v4).
- Setiap library baru WAJIB punya alasan tertulis di TRD §9. Kalau error build butuh library baru di luar daftar → catat di PROGRESS.md + tanya via JARVIS, JANGAN install sendiri.
- Pelajaran FOS GYM/RAGA: jangan lupa `sharp` di devDependencies (dipakai pipeline aset task 09).
