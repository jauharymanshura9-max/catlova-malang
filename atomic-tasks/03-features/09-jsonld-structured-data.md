# Task: JSON-LD Structured Data (LocalBusiness, Service, FAQPage, BreadcrumbList)

## Layer
Features

## Deskripsi
Tambahkan JSON-LD structured data: LocalBusiness (NAP, jam, geo, rating), Service (grooming, penitipan), FAQPage (dari faq.json), BreadcrumbList. Pakai Next.js metadata / script tag.

## Referensi dari Dokumen
- TRD §14: SEO teknis (JSON-LD).
- Backend-Schema §7: structured data.
- Impl §12.6.
- Riset #4 §6.1.

## Acceptance Criteria
- [ ] LocalBusiness JSON-LD di layout/kontak: name "CatLova", address (Jl. Terusan Mergan Raya No.Kav.1/20, Sukun, Malang), telephone 0877-5205-1970, openingHours 08:00-17:00, aggregateRating 5.0/211.
- [ ] Service JSON-LD di /layanan/grooming dan /penitipan.
- [ ] FAQPage JSON-LD di /faq (dari faq.json).
- [ ] BreadcrumbList JSON-LD di semua halaman (opsional).
- [ ] Validasi via Google Rich Results Test (manual).
- [ ] `npm run build` jalan.

## Dependencies
Task 03-features/07, 03-features/06, 03-features/03/04.

## Catatan
- Rating 5.0/211 [VERIFIED] riset #1. [VERIFIED].
- Jam [UNKNOWN] (7 hari vs Senin-Sabtu) → openingHours "Mo-Su 08:00-17:00" hanya jika dikonfirmasi; kalau [UNKNOWN], tulis "08:00-17:00" tanpa hari. [UNKNOWN] PRD §18.2.
- Jangan klaim CCTV/medis. [UNKNOWN] PRD §18.3-5.
- GEO (lat/long) [UNKNOWN] → omit atau [ESTIMATED] dari alamat. [UNKNOWN].
