"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "catlova_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const accept = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  const decline = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "declined");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Persetujuan cookie"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-warmgray bg-neutral p-4 shadow-lg"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-body-sm text-primary">
          Kami menggunakan cookie untuk meningkatkan pengalaman. Tracking analytics
          hanya aktif setelah Anda menyetujui.
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={decline}
            className="rounded-sm border border-warmgray px-4 py-2 text-body-sm text-primary"
          >
            Tolak
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-sm bg-tertiary px-4 py-2 text-body-sm font-semibold text-on-tertiary"
          >
            Terima
          </button>
        </div>
      </div>
    </div>
  );
}
