"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { waLink } from "@/lib/wa";
import services from "@/data/services.json";

const schema = z.object({
  nama: z.string().min(2, "Nama minimal 2 karakter. Isi nama lengkap."),
  wa: z.string().regex(
    /^(0|62|\+62)8[0-9]{8,11}$/,
    "Nomor WA tidak valid. Gunakan format 08xxxxxxxxxx.",
  ),
  layanan: z.string().min(1, "Layanan wajib dipilih. Pilih salah satu layanan."),
  tanggal: z.string().min(1, "Tanggal wajib diisi. Pilih tanggal booking."),
  catatan: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    setError,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: { nama: "", wa: "", layanan: "", tanggal: "", catatan: "" },
  });
  const [status, setStatus] = useState("");

  const onSubmit = (data: FormValues) => {
    const result = schema.safeParse(data);
    if (!result.success) {
      const first = result.error.issues[0];
      if (first) {
        const field = first.path[0] as keyof FormValues;
        setError(field, { message: first.message });
        setFocus(field);
      }
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof FormValues;
        setError(field, { message: issue.message });
      }
      return;
    }

    setStatus("Mengarahkan ke WhatsApp...");
    const message = [
      "Halo CatLova, saya mau booking.",
      `Nama: ${data.nama}`,
      `WA: ${data.wa}`,
      `Layanan: ${data.layanan}`,
      `Tanggal: ${data.tanggal}`,
      `Catatan: ${data.catatan || "-"}`,
    ].join("\n");
    const url = waLink(message, "form");
    window.open(url, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 space-y-5 rounded-md bg-softwhite p-5 md:p-6"
      noValidate
    >
      <div>
        <label
          htmlFor="nama"
          className="mb-1.5 block text-body-sm font-medium text-primary"
        >
          Nama
        </label>
        <Input
          id="nama"
          className="min-h-[48px] text-base"
          autoComplete="name"
          {...register("nama")}
          aria-invalid={!!errors.nama}
          aria-describedby={errors.nama ? "nama-error" : undefined}
        />
        {errors.nama ? (
          <p id="nama-error" className="mt-1 text-body-sm text-coral">
            {errors.nama.message}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="wa"
          className="mb-1.5 block text-body-sm font-medium text-primary"
        >
          Nomor WhatsApp
        </label>
        <Input
          id="wa"
          className="min-h-[48px] text-base"
          inputMode="tel"
          autoComplete="tel"
          {...register("wa")}
          aria-invalid={!!errors.wa}
          aria-describedby={errors.wa ? "wa-error" : undefined}
        />
        {errors.wa ? (
          <p id="wa-error" className="mt-1 text-body-sm text-coral">
            {errors.wa.message}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="layanan"
          className="mb-1.5 block text-body-sm font-medium text-primary"
        >
          Layanan
        </label>
        <select
          id="layanan"
          {...register("layanan")}
          aria-invalid={!!errors.layanan}
          aria-describedby={errors.layanan ? "layanan-error" : undefined}
          className="min-h-[48px] w-full rounded-sm bg-softwhite px-3 py-3 text-primary font-body text-base focus:outline-none focus:ring-2 focus:ring-tertiary"
        >
          <option value="">Pilih layanan</option>
          {services.map((s) => (
            <option key={s.id} value={s.nama}>
              {s.nama}
            </option>
          ))}
        </select>
        {errors.layanan ? (
          <p id="layanan-error" className="mt-1 text-body-sm text-coral">
            {errors.layanan.message}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="tanggal"
          className="mb-1.5 block text-body-sm font-medium text-primary"
        >
          Tanggal
        </label>
        <Input
          id="tanggal"
          type="date"
          className="min-h-[48px] text-base"
          {...register("tanggal")}
          aria-invalid={!!errors.tanggal}
          aria-describedby={errors.tanggal ? "tanggal-error" : undefined}
        />
        {errors.tanggal ? (
          <p id="tanggal-error" className="mt-1 text-body-sm text-coral">
            {errors.tanggal.message}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="catatan"
          className="mb-1.5 block text-body-sm font-medium text-primary"
        >
          Catatan (opsional)
        </label>
        <textarea
          id="catatan"
          rows={3}
          className="min-h-[48px] w-full rounded-sm bg-softwhite px-3 py-3 text-primary font-body text-base focus:outline-none focus:ring-2 focus:ring-tertiary"
          {...register("catatan")}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="min-h-[48px] w-full md:w-auto"
      >
        Kirim via WhatsApp
      </Button>

      {status ? (
        <p className="text-body-sm text-muted" role="status">
          {status}
        </p>
      ) : null}
    </form>
  );
}
