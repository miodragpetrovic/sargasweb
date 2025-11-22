import type { Metadata } from "next";
import PreiseClient from "./PreiseClient";

export const metadata: Metadata = {
  title: "Preise Webdesign & Webentwicklung Schweiz | SargasWeb",
  description:
    "Transparente Webdesign-Preise in der Schweiz: Onepager, mehrseitige Websites, Online-Shops & individuelle Webapps – rund 50% günstiger als klassische Agenturen.",
  alternates: {
    canonical: "/preise",
  },
  openGraph: {
    title: "Preise für Websites, Online-Shops & Webapps | SargasWeb",
    description:
      "Faire, transparente Preise für moderne Websites, Online-Shops und individuelle Webapplikationen – ideal für KMU, Selbständige und Startups in der Schweiz.",
    url: "/preise",
    type: "website",
  },
};

export default function PreisePage() {
  return <PreiseClient />;
}
