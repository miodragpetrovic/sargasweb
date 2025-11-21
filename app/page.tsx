import type { Metadata } from "next";
import { HomeClient } from "./HomeClient";

export const metadata: Metadata = {
  title:
    "Nova Media – Moderne Webseiten, Webanwendungen & Online-Shops für Unternehmen",
  description:
    "Nova Media ist Ihre Webagentur für moderne Webseiten, individuelle Webanwendungen und performante Online-Shops auf Basis von Next.js.",
  keywords: [
    "Webagentur",
    "Webdesign Agentur",
    "Webseite erstellen lassen",
    "Webanwendung Entwicklung",
    "Online-Shop Agentur",
    "Next.js Agentur",
    "Webentwicklung Deutschland",
  ],
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
      "Nova Media – Moderne Webseiten, Webanwendungen & Online-Shops für Unternehmen",
    description:
      "Wir entwickeln performante Webseiten, Webanwendungen und Online-Shops mit klarem Fokus auf Conversion und Branding.",
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
