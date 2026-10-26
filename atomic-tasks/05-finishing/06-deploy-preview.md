# Task: Deploy Preview (Vercel)

## Layer
Finishing

## Deskripsi
Push ke GitHub, link Vercel project, set env vars, deploy preview. Endpoint = `*.vercel.app`. Verifikasi URL live.

## Referensi dari Dokumen
- TRD §5: hosting (Vercel).
- Impl §16: deploy preview (endpoint).
- Skill veronica-prd DEAL GATE: endpoint = preview live.
- Memori: deploy client → Vercel/Netlify/Cloudflare (bukan HERE.NOW).

## Acceptance Criteria
- [ ] Repo pushed ke GitHub.
- [ ] Vercel project linked + env vars set (NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_WA_NUMBER, opsional).
- [ ] Preview deploy sukses → URL `https://catlova-malang-*.vercel.app`.
- [ ] URL live, no error (cek manual + smoke test).
- [ ] Canonical tetap domain final (fallback). [ESTIMATED] DEAL GATE.
- [ ] Laporan ringkas: URL preview + status.

## Dependencies
Task 05-finishing/01-05 (semua test pass).

## Catatan
- Domain belum dibeli (Pasca-Deal). Canonical fallback. [UNKNOWN] PRD §18.7.
- Platform deploy = keputusan planning (Vercel). [ESTIMATED] TRD §5.
- Jangan ganti platform seenaknya. [ESTIMATED] skill veronica-prd DEAL GATE.
