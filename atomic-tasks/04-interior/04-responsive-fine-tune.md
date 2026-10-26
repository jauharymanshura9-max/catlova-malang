# Task: Responsive Fine-Tune (Breakpoints + Mobile Drawer + Touch)

## Layer
Interior

## Deskripsi
Fine-tune responsive: mobile (<768px), tablet (768-1024px), desktop (>1024px). Mobile drawer polish, touch targets, single column, no sideways scroll @320px.

## Referensi dari Dokumen
- TRD §13: responsive & a11y.
- UI-UX Brief §G: responsive.
- App-Flow §8: mobile journey.
- DESIGN.md: Layout (max 1200px, prose 66ch).
- Impl §14.1.

## Acceptance Criteria
- [ ] Mobile (<768px): single column, hamburger drawer, sticky WA CTA visible.
- [ ] Tablet (768-1024px): adaptive (bukan hanya stacked mobile).
- [ ] Desktop (>1024px): split hero (text+visual), nav horizontal.
- [ ] No sideways scroll @320px (manual test).
- [ ] Touch target min 44x44 (sticky CTA 48x48).
- [ ] Form input font-size ≥16px (hindari zoom iOS).
- [ ] Prose max 66ch; pricelist full width.
- [ ] `npm run build` jalan.

## Dependencies
Task 04-interior/03, 02-structure/02 (header drawer).

## Catatan
- Mobile-first. [ESTIMATED] TRD §13.
- Breakpoint konsisten dengan Tailwind (md: 768, lg: 1024). [ESTIMATED].
- Test real device (jika tersedia) — [ESTIMATED] riset #6 (Unicorn).
