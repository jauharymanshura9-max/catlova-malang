# Task: Micro-interactions (Hover, Card, Nav)

## Layer
Interior

## Deskripsi
Implement micro-interactions: button hover (scale 1,01 + shadow deepen), card hover (lift + shadow), nav item underline grow. Timing 150-200ms ease-out.

## Referensi dari Dokumen
- App-Flow §12: micro-interactions.
- UI-UX Brief §E (visual signature), §M (animation spec).
- DESIGN.md: Do's (hover state), Premium Execution (hover subtle).
- TRD §8: animation framework (CSS transitions 150-300ms).

## Acceptance Criteria
- [ ] Button hover: scale 1,01 + shadow deepen (150-200ms ease-out) — semua variant.
- [ ] Card hover: lift (translateY -2px) + shadow deepen.
- [ ] Nav item hover: underline grow (left-to-right).
- [ ] Honey badge: subtle pulse (opsional, ≤1 momen).
- [ ] prefers-reduced-motion: disable semua transform.
- [ ] `npm run build` jalan.

## Dependencies
Task 03-features (komponen selesai), foundation 08 (komponen dasar).

## Catatan
- Animasi hanya transform/opacity (GPU discipline). [ESTIMATED] skill resep §8.
- Tidak ada animasi tanpa tujuan. [ESTIMATED] skill resep §8.
- Satu momen signatur per site; sisanya tenang. [ESTIMATED] skill resep §8.
