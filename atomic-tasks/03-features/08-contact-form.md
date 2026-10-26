# Task: Contact Form Component (RHF + Zod → WA Redirect)

## Layer
Features

## Deskripsi
Buat komponen form kontak minimal (≤4 field) dengan React Hook Form + Zod. Submit → buka WA pre-filled (client-side). Error state inline.

## Referensi dari Dokumen
- App-Flow §7 (CTA flow, form).
- PRD §15 (form ≤4 field, microcopy).
- UI-UX Brief §H (conversion architecture).
- TRD §1 (RHF+Zod).
- Backend-Schema §3 (contact form → WA).

## Acceptance Criteria
- [ ] File `src/components/sections/contact-form.tsx`.
- [ ] Field: nama, WA, layanan (select), tanggal, catatan (opsional) — ≤4 wajib + 1 opsional.
- [ ] Validasi Zod: nama min 2, WA regex Indonesia, layanan required, tanggal required.
- [ ] Submit → `waLink(preFilledMessage, 'form')` → window.open.
- [ ] Error state inline (apa+kenapa+solusi), focus ke field error.
- [ ] Confirmation message sebelum redirect: "Mengarahkan ke WhatsApp...".
- [ ] A11y: label, aria-invalid, aria-describedby.
- [ ] `npm run build` jalan.

## Dependencies
Task 03-features/05, foundation 07 (wa lib), foundation 08 (komponen).

## Catatan
- Form conversion ≤4 field (Baymard). [VERIFIED] riset #6 §2.2.
- Telepon opsional. [ESTIMATED] riset #6 §2.2.
- Tidak ada server endpoint v1. [VERIFIED] Backend-Schema §3.
