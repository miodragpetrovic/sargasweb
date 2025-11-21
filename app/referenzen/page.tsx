import type { Metadata } from "next";
import Script from "next/script";
import { ReferenzenClient } from "./ReferenzenClient";

export const metadata: Metadata = {
  title:
    "Referenzen – Nova Media | Ausgewählte Webseiten, Webanwendungen & Online-Shops",
  description:
    "Ein Einblick in ausgewählte Projekte von Nova Media: moderne Webseiten, individuelle Webanwendungen und performante Online-Shops für Unternehmen.",
  keywords: [
    "Webagentur Referenzen",
    "Webdesign Portfolio",
    "Webseiten Beispiele",
    "Online-Shop Referenzen",
    "Webanwendung Projekte",
    "Next.js Referenzen",
  ],
  alternates: {
    canonical: "/referenzen",
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
      "Referenzen – Nova Media | Ausgewählte Webseiten, Webanwendungen & Online-Shops",
    description:
      "Entdecken Sie Referenzen von Nova Media – digitale Projekte für B2B, SaaS, E-Commerce und mehr.",
    url: "/referenzen",
    type: "website",
  },
};

// ⬅️ OVDJE zamijeni domen kad budeš imao pravi (i og-image ako želiš)
const REFERENZEN_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name:
    "Referenzen – Nova Media | Ausgewählte Webseiten, Webanwendungen & Online-Shops",
  description:
    "Übersicht ausgewählter Referenzen und Projekte von Nova Media.",
  url: "https://www.example.com/referenzen",
  hasPart: [
    {
      "@type": "CreativeWork",
      name: "B2B Industrie-Webseite",
      about: "Corporate Website für ein Industrieunternehmen",
    },
    {
      "@type": "CreativeWork",
      name: "SaaS Webanwendung",
      about: "Web-App und Dashboard für ein SaaS-Produkt",
    },
    {
      "@type": "CreativeWork",
      name: "Fashion Online-Shop",
      about: "E-Commerce-Lösung für eine Fashion-Marke",
    },
  ],
};

export default function ReferenzenPage() {
  return (
    <>
      <Script
        id="referenzen-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(REFERENZEN_JSON_LD) }}
      />
      <ReferenzenClient />
    </>
  );
}
