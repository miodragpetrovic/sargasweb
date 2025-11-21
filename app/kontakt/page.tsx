import type { Metadata } from "next";
import Script from "next/script";
import { KontaktSection } from "./KontaktSection";

export const metadata: Metadata = {
  title:
    "Kontakt – Nova Media | Webagentur für moderne Webseiten, Webanwendungen & Online-Shops",
  description:
    "Nehmen Sie Kontakt mit Nova Media auf. Wir planen, designen und entwickeln moderne Webseiten, Webanwendungen und Online-Shops für Unternehmen in Deutschland.",
  keywords: [
    "Webagentur Kontakt",
    "Webseite erstellen lassen",
    "Webdesign Agentur Deutschland",
    "Online-Shop Agentur",
    "Webanwendung Entwicklung",
    "Next.js Agentur",
    "Nova Media Kontakt",
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
      "Kontakt – Nova Media | Webagentur für moderne Webseiten, Webanwendungen & Online-Shops",
    description:
      "Jetzt Kontakt zu Nova Media aufnehmen und Ihr nächstes Webprojekt starten – von der Unternehmenswebseite bis zur individuellen Webanwendung.",
    url: "/kontakt",
    type: "website",
  },
};

// ⬅️ Ovdje OBAVEZNO zamijeni domen sa stvarnim
const CONTACT_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name:
    "Kontakt – Nova Media | Webagentur für moderne Webseiten, Webanwendungen & Online-Shops",
  description:
    "Kontaktseite von Nova Media, Ihrer Webagentur für Webseiten, Webanwendungen und Online-Shops.",
  url: "https://www.example.com/kontakt",
  mainEntity: {
    "@type": "Organization",
    name: "Nova Media",
    url: "https://www.example.com",
    logo: "https://www.example.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "kontakt@ihre-agentur.de",
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
