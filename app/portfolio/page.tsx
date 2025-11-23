import type { Metadata } from "next";
import Script from "next/script";
import { PortfolioClient } from "./PortfolioClient";

export const metadata: Metadata = {
  title:
    "Portfolio – SargasWeb | Webseiten, Webanwendungen & Online-Shops",
  description:
    "Portfolio von SargasWeb: ausgewählte Webseiten, individuelle Webanwendungen und performante Online-Shops für Unternehmen in der Schweiz und der DACH-Region.",
  keywords: [
    "Webdesign Portfolio",
    "Webagentur Portfolio",
    "Webseiten Beispiele",
    "Online-Shop Referenzen",
    "Webanwendung Projekte",
    "Next.js Projekte",
    "SargasWeb Portfolio",
  ],
  alternates: {
    canonical: "/portfolio",
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
      "Portfolio – SargasWeb | Webseiten, Webanwendungen & Online-Shops",
    description:
      "Entdecken Sie das Portfolio von SargasWeb – digitale Projekte für KMU, Praxen, E-Commerce, Events und mehr.",
    url: "https://www.sargasweb.ch/portfolio",
    type: "website",
  },
};

// strukturierte Daten für Portfolio-Seite
const PORTFOLIO_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name:
    "Portfolio – SargasWeb | Webseiten, Webanwendungen & Online-Shops",
  description:
    "Übersicht ausgewählter Webprojekte und Referenzen von SargasWeb.",
  url: "https://www.sargasweb.ch/portfolio",
  hasPart: [
    {
      "@type": "CreativeWork",
      name: "EventExclusive – Webanwendung für Event-Locations",
      about:
        "Web-App von Sargas IT GmbH zur Verwaltung von Event-Locations, Anfragen und Buchungen.",
      url: "https://eventexclusive-com.vercel.app/",
    },
    {
      "@type": "CreativeWork",
      name: "Online-Medikamentenbestellung",
      about:
        "Individuelles Bestellformular für Dauermedikamente auf WordPress-Basis für eine Apotheke.",
    },
    {
      "@type": "CreativeWork",
      name: "Fashion Online-Shop",
      about:
        "E-Commerce-Lösung mit Fokus auf User Experience und Conversion-Optimierung.",
    },
  ],
};

export default function PortfolioPage() {
  return (
    <>
      <Script
        id="portfolio-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PORTFOLIO_JSON_LD) }}
      />
      <PortfolioClient />
    </>
  );
}
