import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MainNav } from "./components/Navbar";
import { Footer } from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🔧 GLOBAL SEO + domena
export const metadata: Metadata = {
  metadataBase: new URL("https://www.sargasweb.ch"),
  title: {
    default:
      "SargasWeb – Moderne Webseiten, Webanwendungen & Online-Shops",
    template: "%s | SargasWeb",
  },
  description:
    "SargasWeb ist Ihre Webagentur für moderne Webseiten, individuelle Webanwendungen und performante Online-Shops auf Basis von Next.js.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title:
      "SargasWeb – Moderne Webseiten, Webanwendungen & Online-Shops",
    description:
      "Wir entwickeln performante Webseiten, Webanwendungen und Online-Shops mit klarem Fokus auf Conversion und Branding.",
    url: "/",
    type: "website",
    siteName: "SargasWeb",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100`}
      >
        <MainNav />
        {/* veći padding da sadržaj ne ide ispod navbara */}
        <main className="min-h-screen pt-24 md:pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
