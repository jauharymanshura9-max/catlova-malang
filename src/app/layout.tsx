import type { Metadata } from "next";
import { Quicksand, Inter } from "next/font/google";
import "@/styles/globals.css";
import { buildMetadata } from "@/lib/seo";
import { Header } from "@/components/layout/header";
import { MotionWrapper } from "@/components/layout/motion-wrapper";
import { Footer } from "@/components/layout/footer";
import { StickyCta } from "@/components/layout/sticky-cta";
import { CookieBanner } from "@/components/layout/cookie-banner";

const display = Quicksand({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = buildMetadata({
  title: "CatLova Malang",
  description: "Grooming & penitipan kucing telaten di Sukun, Malang — antar-jemput gratis.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body className="bg-neutral text-primary font-body antialiased">
        <MotionWrapper>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-tertiary focus:px-3 focus:py-2 focus:text-on-tertiary"
        >
          Lewati ke konten
        </a>
        <Header />
        <main id="main" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <StickyCta />
        <CookieBanner />
        </MotionWrapper>
      </body>
    </html>
  );
}
