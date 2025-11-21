import type { Metadata } from "next";
import Script from "next/script";
import { KontaktSection } from "./KontaktSection";

export const metadata: Metadata = {
  title:
    "Kontakt – SargasWeb | Webagentur für moderne Webseiten, Webanwendungen & Online-Shops",
  description:
    "Nehmen Sie Kontakt mit SargasWeb auf. Wir planen, designen und entwickeln moderne Webseiten, Webanwendungen und Online-Shops für Unternehmen in Deutschland.",
  keywords: [
    "Webagentur Kontakt",
    "Webseite erstellen lassen",
    "Webdesign Agentur Deutschland",
    "Online-Shop Agentur",
    "Webanwendung Entwicklung",
    "Next.js Agentur",
    "SargasWeb Kontakt",
  ],
  alternates: {
    canonical: "/kontakt",
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
      "Kontakt – SargasWeb | Webagentur für moderne Webseiten, Webanwendungen & Online-Shops",
    description:
      "Jetzt Kontakt zu SargasWeb aufnehmen und Ihr nächstes Webprojekt starten – von der Unternehmenswebseite bis zur individuellen Webanwendung.",
    url: "/kontakt",
    type: "website",
  },
};

// ⬅️ Ovdje OBAVEZNO zamijeni domen sa stvarnim
const CONTACT_JSON_LD = {
  "@context": "https://www.sargasweb.ch",
  "@type": "ContactPage",
  name:
    "Kontakt – SargasWeb | Webagentur für moderne Webseiten, Webanwendungen & Online-Shops",
  description:
    "Kontaktseite von SargasWeb, Ihrer Webagentur für Webseiten, Webanwendungen und Online-Shops.",
  url: "https://www.sargasweb.ch/kontakt",
  mainEntity: {
    "@type": "Organization",
    name: "SargasWeb",
    url: "https://www.sargasweb.ch",
    logo: "https://www.sargasweb.ch/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "info@sargasweb.ch",
      availableLanguage: ["de"],
    },
  },
};

export default function KontaktPage() {
  return (
    <>
      <Script
        id="contact-page-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CONTACT_JSON_LD) }}
      />
      <KontaktSection />
    </>
  );
}
