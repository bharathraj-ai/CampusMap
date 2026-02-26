import type { Metadata } from "next";
import { Montserrat, Cinzel_Decorative } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Udhayam 2026 — Campus Navigator",
  description:
    "Find your way around campus during Udhayam 2026. Scan a QR code, search for your event, and get step-by-step walking directions to any venue.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cinzelDecorative.variable}`}>
      <body className={`${montserrat.className} antialiased min-h-screen text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
