import type { Metadata } from "next";
import Script from "next/script";
import { LeistungenClient } from "./LeistungenClient";

export const metadata: Metadata = {
  title:
    "Leistungen – SargasWeb | Webseiten, Webanwendungen & Online-Shops",
  description:
    "Überblick über die Leistungen von SargasWeb: moderne Webseiten, individuelle Webanwendungen und performante Online-Shops für Unternehmen.",
  keywords: [
    "Leistungen Webagentur",
    "Webseiten Entwicklung",
    "Webanwendung Agentur",
    "Online-Shop Erstellung",
    "Next.js Agentur",
    "Webdesign Leistungen",
  ],
  alternates: {
    canonical: "/leistungen",
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
      "Leistungen – SargasWeb | Webseiten, Webanwendungen & Online-Shops",
    description:
      "Entdecken Sie die Leistungen von SargasWeb – von Corporate Webseiten über individuelle Webanwendungen bis zu performanten Online-Shops.",
    url: "/leistungen",
    type: "website",
  },
};

// ⬅️ OVDJE zamijeni domen/URL-ove sa svojim kad budeš imao pravi domen
const LEISTUNGEN_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name:
    "Leistungen – SargasWeb | Webseiten, Webanwendungen & Online-Shops",
  description:
    "Überblick über die Leistungen von SargasWeb: moderne Webseiten, individuelle Webanwendungen und performante Online-Shops.",
  url: "https://www.example.com/leistungen",
  primaryImageOfPage: "https://www.example.com/og-image.png",
  about: [
    {
      "@type": "Service",
      name: "Webseiten",
      serviceType: "Corporate Websites & Landingpages",
      provider: {
        "@type": "Organization",
        name: "SargasWeb",
      },
    },
    {
      "@type": "Service",
      name: "Webanwendungen",
      serviceType: "Individuelle Webapplikationen & Dashboards",
      provider: {
        "@type": "Organization",
        name: "SargasWeb",
      },
    },
    {
      "@type": "Service",
      name: "Online-Shops",
      serviceType: "E-Commerce & Online-Shops",
      provider: {
        "@type": "Organization",
        name: "SargasWeb",
      },
    },
  ],
};

export default function LeistungenPage() {
  return (
    <>
      <Script
        id="leistungen-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LEISTUNGEN_JSON_LD) }}
      />
      <LeistungenClient />
    </>
  );
}
