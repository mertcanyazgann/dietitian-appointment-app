import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diyetisyen Randevu Sistemi",
  description: "Diyetisyenler için online randevu talep ve yönetim sistemi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">{children}</body>
    </html>
  );
}
