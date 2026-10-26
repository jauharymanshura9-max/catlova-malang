# Task: Footer + WhatsApp Float + Breadcrumb

## Layer
Structure

## Deskripsi
Buat footer (NAP, jam, IG, privacy/terms, sitemap links), WhatsApp floating button (sticky mobile, 48x48), dan breadcrumb (opsional, untuk SEO). 

## Referensi dari Dokumen
- App-Flow §2 (footer), §7 (CTA flow), §8 (mobile).
- UI-UX Brief §L (trust placement footer).
- TRD §13 (touch target 44x44, sticky CTA 48x48).
- Impl §12.2, §12.3.
- Backend-Schema §7 (BreadcrumbList JSON-LD).

## Acceptance Criteria
- [ ] File `src/components/layout/footer.tsx`.
- [ ] Footer: NAP (alamat Jl. Terusan Mergan Raya No.Kav.1/20, Sukun, Malang), jam 08-17, IG @cat_lova_malang, link privacy/terms, sitemap links.
- [ ] WhatsApp float: `src/components/layout/sticky-cta.tsx`, fixed bottom-right, min 48x48, `waLink(..., 'sticky')`.
- [ ] Breadcrumb component (opsional) + JSON-LD BreadcrumbList.
- [ ] Mobile: float visible; desktop: float visible (atau header CTA cukup — keputusan FRIDAY konsisten).
- [ ] A11y: aria-label, focus visible.
- [ ] `npm run build` jalan.

## Dependencies
Task 02-structure/01, foundation 07 (wa lib), foundation 08 (komponen).

## Catatan
- NAP [VERIFIED] riset #1. Jam [UNKNOWN] (7 hari vs Senin-Sabtu) → tampilkan "08.00-17.00" tanpa klaim hari. [UNKNOWN] PRD §18.2.
- IG @cat_lova_malang [VERIFIED] riset #1.
- Privacy/terms halaman statis [ESTIMATED] Backend-Schema §5.
