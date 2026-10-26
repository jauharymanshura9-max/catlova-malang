# Task: Accessibility (WCAG 2.2 AA)

## Layer
Interior

## Deskripsi
Implement aksesibilitas: focus visible, keyboard nav, skip link, ARIA labels, semantic HTML, reduced motion, touch target min 44x44, alt text.

## Referensi dari Dokumen
- TRD §13: aksesibilitas (WCAG 2.2 AA).
- UI-UX Brief §G, §N.
- DESIGN.md: Do's (focus visible).
- Impl §14.2 (axe 0 violation).

## Acceptance Criteria
- [ ] Focus visible style (outline Terracotta, 2px) pada semua interactive element.
- [ ] Skip link "Lewati ke konten" → `#main` (layout root).
- [ ] Keyboard nav: Tab order logis, Enter/Space aktivasi button.
- [ ] ARIA labels pada icon button, nav, modal/drawer.
- [ ] Semantic HTML: header, nav, main, footer, section, article.
- [ ] Touch target min 44x44 (sticky CTA 48x48).
- [ ] Alt text semua gambar (deskriptif, bukan "image1").
- [ ] prefers-reduced-motion respect (task 02).
- [ ] axe-core 0 violation (manual + automated).
- [ ] `npm run build` jalan.

## Dependencies
Task 04-interior/02, 02-structure/01 (layout).

## Catatan
- Kontras AA semua pair (DESIGN.md). [ESTIMATED].
- Screen reader: landmark + label. [ESTIMATED] TRD §13.
- No sideways scroll @320px. [ESTIMATED] DESIGN.md.
