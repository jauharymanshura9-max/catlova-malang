export type Service = {
  id: string;
  nama: string;
  deskripsi: string;
  durasi: number | null;
  harga: number | null;
  catatan?: string;
};

export type PricingItem = {
  id: string;
  layanan: string;
  harga: number | null;
  satuan: string;
  catatan?: string;
};

export type FaqItem = {
  id: string;
  pertanyaan: string;
  jawaban: string;
};

export type Area = {
  id: string;
  nama: string;
  slug: string;
  coverage: string;
};

export type Review = {
  id: string;
  nama: string;
  rating: number;
  teks: string;
  tanggal: string;
};
