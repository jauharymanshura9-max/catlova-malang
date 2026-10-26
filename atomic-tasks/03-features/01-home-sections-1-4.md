# Task: Home Sections 1-4 (Hero, Social Proof, Results, Problem-Solution)

## Layer
Features

## Deskripsi
Implement section hero, social proof, results nyata, problem+solution di home. Sesuai UI-UX Brief §I (10 elemen) dan PRD §16.

## Referensi dari Dokumen
- PRD §16: landing structure gate (elemen 1-4).
- UI-UX Brief §I: section layout home.
- UI-UX Brief §K: visual hierarchy (H1 5rem).
- DESIGN.md: token, anti-pattern.
- Impl §6.1-6.4.

## Acceptance Criteria
- [ ] `src/components/sections/hero.tsx`: H1 tagline, rating 5,0 badge (Honey), free antar-jemput chip (Sage), CTA "Chat WA — Booking Grooming" (button-primary, waLink source 'hero'), jam+alamat singkat, foto/placeholder.
- [ ] `src/components/sections/social-proof.tsx`: 3-5 review quote + rating 5,0/211 + before/after placeholder.
- [ ] `src/components/sections/results.tsx`: angka (rating 5,0, 211 ulasan, jam 08-17, free antar-jemput).
- [ ] `src/components/sections/problem-solution.tsx`: problem (konsistensi kualitas, penitipan khawatir) + solution (personal, telaten, free antar-jemput, update WA).
- [ ] H1 ≥64px desktop (DESIGN.md H1 5rem). [ESTIMATED] skill gate.
- [ ] Trust signal ≥1 dalam 1 scroll dari CTA. [ESTIMATED] PRD §15.
- [ ] `npm run build` jalan.

## Dependencies
Task 02-structure (layout, header, footer), foundation 08 (komponen), foundation 07 (wa lib), foundation 06 (reviews data).

## Catatan
- Quote review verifikasi per-quote (riset #5 §6.9). [UNKNOWN].
- Harga [UNKNOWN] tidak ditampilkan di hero. [UNKNOWN] PRD §18.1.
- Jangan klaim CCTV/medis. [UNKNOWN] PRD §18.3-5.
