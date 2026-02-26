import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Udhayam 2026 — Smart Campus Navigator",
  description:
    "Find your way around campus during Udhayam 2026. Scan a QR code, search for your event, and get step-by-step walking directions to any venue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen text-white">
        {children}
      </body>
    </html>
  );
}
