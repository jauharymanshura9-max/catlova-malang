# Task: Accessor Lib (utils, seo, wa)

## Layer
Foundation

## Deskripsi
Buat `src/lib/utils.ts` (cn helper), `src/lib/seo.ts` (metadata builder), `src/lib/wa.ts` (WA link builder pre-filled + source-tagged). Dipakai semua halaman & komponen.

## Referensi dari Dokumen
- TRD §10: folder structure (lib).
- Backend-Schema §3: contact form → WA redirect.
- App-Flow §4: WA pre-filled message.
- Impl §12.6.

## Acceptance Criteria
- [ ] `src/lib/utils.ts`: export `cn(...)` (clsx + tailwind-merge).
- [ ] `src/lib/seo.ts`: export `buildMetadata({title, description, path})` → Metadata (OG, Twitter, canonical).
- [ ] `src/lib/wa.ts`: export `waLink(message, source)` → `https://wa.me/6287752051970?text=...` (URL-encoded, source-tagged).
- [ ] Nomor WA = 0877-5205-1970 → 6287752051970. [VERIFIED] riset #1.
- [ ] `tsc --noEmit` jalan tanpa error.

## Dependencies
Task 02, Task 04.

## Catatan
- WA pre-filled message template dari riset #6 §3.2. [ESTIMATED].
- Source tag: `hero`, `sticky`, `footer`, `form`. [ESTIMATED].
