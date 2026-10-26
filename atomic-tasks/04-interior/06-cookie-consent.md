# Task: Cookie Consent Banner (UU PDP)

## Layer
Interior

## Deskripsi
Implement cookie consent banner (bottom, dismissible) + simpan preferensi di localStorage. Tracking (GA4/Meta) hanya aktif setelah consent. Privacy policy + terms halaman statis.

## Referensi dari Dokumen
- TRD §17: analytics (consent-based).
- Backend-Schema §5: cookie consent (UU PDP).
- App-Flow §14: modal/overlay (cookie banner).
- Riset #11: UU PDP, cookie banner.

## Acceptance Criteria
- [ ] File `src/components/layout/cookie-banner.tsx`.
- [ ] Banner bottom, dismissible, simpan preferensi di localStorage.
- [ ] Tracking GA4/Meta hanya aktif setelah consent.
- [ ] Halaman `/privacy` (privacy policy) statis.
- [ ] Halaman `/terms` (terms) statis.
- [ ] A11y: role="dialog", aria-label, focus trap (opsional), keyboard dismiss.
- [ ] `npm run build` jalan.

## Dependencies
Task 04-interior/05, 02-structure/01 (layout).

## Catatan
- No tracking tanpa consent. [VERIFIED] riset #11.
- UU PDP compliance (cookie banner + privacy + terms). [VERIFIED] riset #11.
- Compliance §5b = POST-DEAL (audit sebelum tawarkan). [ESTIMATED] skill resep §16.
