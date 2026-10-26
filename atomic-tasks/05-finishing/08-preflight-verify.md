# Task: Pre-flight Verify (Path + Angka + Sitasi)

## Layer
Finishing

## Deskripsi
Pre-flight sebelum declare preview: verifikasi path file (grep), angka (wc -l / grep file), sitasi file:baris, sinkron angka lintas dokumen. Pangkas loop judge.

## Referensi dari Dokumen
- Skill veronica-prd pre-flight (e)-(j): path, angka, sitasi, sinkron.
- Impl §19: pre-flight.
- Skill resep §7: gate spec→DOM + anti-default.

## Acceptance Criteria
- [ ] Tiap path file di dokumen/atomic tasks diverifikasi (search_files).
- [ ] Tiap angka diverifikasi ke file (bukan ingatan) — wc -l / grep.
- [ ] Tiap sitasi file:baris diverifikasi.
- [ ] Sinkron angka lintas dokumen (PRD/TRD/App-Flow/UIUX/Backend/Impl/atomic).
- [ ] Gate spec→DOM: 5-12 angka penentu dibandingkan DOM (design-contract-check).
- [ ] Anti-default: "struktur ini masih terlihat benar kalau logo & foto diganti industri lain?" → jika ya, HOLD.
- [ ] Laporan ringkas: daftar cek + status.

## Dependencies
Task 05-finishing/07.

## Catatan
- Path salah = gagal grep saat eksekusi coder. [ESTIMATED] skill veronica-prd pre-flight (e).
- Angka dari brief = klaim, hitung ulang ke artefak. [ESTIMATED] skill veronica-prd pre-flight (g).
- AC grep-able diuji ke realitas output (cek build config). [ESTIMATED] pre-flight (h).
- Harga [UNKNOWN] → placeholder + CTA WA. [UNKNOWN] PRD §18.1.
