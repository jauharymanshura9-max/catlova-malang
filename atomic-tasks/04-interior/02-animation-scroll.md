# Task: Animation & Scroll (Lenis + GSAP ScrollTrigger)

## Layer
Interior

## Deskripsi
Setup Lenis smooth scroll (lerp 0,08-0,12) dan GSAP ScrollTrigger reveal (opacity 0→1 + translateY 20px→0, 0,4-0,6s). Hero entrance fade-up 0,7-0,8s. prefers-reduced-motion respect.

## Referensi dari Dokumen
- TRD §8: animation framework (GSAP, Lenis, lerp, budget).
- App-Flow §12-13: micro-interactions, page transitions.
- UI-UX Brief §M: animation spec.
- Skill resep §3: scroll feel angka (lerp 0,08-0,12, ≥30-45% delta ≤100ms, berhenti 800-1200ms).
- Skill resep §9: fondasi persepsi (durasi, easing).

## Acceptance Criteria
- [ ] `src/lib/lenis.ts` init Lenis dengan lerp 0,08-0,12.
- [ ] `src/lib/gsap.ts` register ScrollTrigger; reveal class (opacity+translateY).
- [ ] Hero entrance fade-up 0,7-0,8s ease-out.
- [ ] Scroll reveal 0,4-0,6s ease-out.
- [ ] prefers-reduced-motion: disable Lenis + GSAP (fallback native scroll).
- [ ] Maks 1 pinned chapter (jika ada) — bukan kewajiban. [ESTIMATED] skill resep §3.
- [ ] `npm run build` jalan.

## Dependencies
Task 04-interior/01, 02-structure/01 (layout).

## Catatan
- Scroll feel angka diukur live (probe rAF), bukan perasaan. [ESTIMATED] skill resep §3.
- Easing berpasangan: masuk ease-out, keluar ease-in, keluar lebih pendek dari masuk. [ESTIMATED] skill resep §9.
- Satu momen signatur per site; sisanya tenang. [ESTIMATED] skill resep §8.
