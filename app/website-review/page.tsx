import type { Metadata } from "next";
import Link from "next/link";
import WebsiteReviewSection from "../website-review/website-review-section";

export const metadata: Metadata = {
  title: "Website Review (Audit) – UX, SEO & Performance Analyse | SargasWeb",
  description:
    "Professionelle Website Review: Wir analysieren SEO, Performance, UX, Content & Conversion. Sie erhalten einen klaren Massnahmenplan mit priorisierten Quick Wins.",
  alternates: {
    canonical: "/website-review",
  },
  openGraph: {
    title: "Website Review (Audit) – UX, SEO & Performance Analyse",
    description:
      "SEO, Performance, UX & Conversion Audit inkl. Massnahmenplan. Ideal für Relaunch, Optimierung oder Wachstum.",
    url: "/website-review",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Review (Audit) – UX, SEO & Performance Analyse",
    description:
      "SEO, Performance, UX & Conversion Audit inkl. Massnahmenplan. Ideal für Relaunch, Optimierung oder Wachstum.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function getJsonLd() {
  const orgName = "SargasWeb";
  const siteUrl = "https://www.sargasweb.ch"; // ako ti je drugi domen, promeni ovde
  const pageUrl = `${siteUrl}/website-review`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website Review (Website Audit)",
    provider: { "@type": "Organization", name: orgName, url: siteUrl },
    areaServed: { "@type": "Country", name: "Switzerland" },
    serviceType: "SEO, UX & Performance Website Audit",
    url: pageUrl,
    description:
      "Analyse von SEO, Performance, UX, Content und Conversion inkl. priorisiertem Massnahmenplan.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Was umfasst die Website Review?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wir prüfen SEO-Basics (Indexierung, On-Page, technische Signale), Performance (Core Web Vitals), UX/IA, Content-Qualität, Conversion-Pfade und klare Empfehlungen.",
        },
      },
      {
        "@type": "Question",
        name: "Wie schnell bekomme ich Ergebnisse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In der Regel erhalten Sie innerhalb weniger Werktage eine strukturierte Auswertung plus priorisierte Quick Wins und nächste Schritte.",
        },
      },
      {
        "@type": "Question",
        name: "Kann ich auch eine Web-App oder einen Shop prüfen lassen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja – wir auditieren klassische Webseiten, Landingpages, Shops sowie Next.js/React-Webapps. Der Fokus wird entsprechend angepasst.",
        },
      },
    ],
  };

  return [serviceSchema, faqSchema];
}

export default function WebsiteReviewPage() {
  const jsonLd = getJsonLd();

  return (
    <main className="bg-slate-950">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO + FORM */}
      <WebsiteReviewSection />

      {/* SEO CONTENT (nije “thin” page) */}
      <section className="bg-slate-950 pb-16 md:pb-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
                Website Audit für bessere Rankings, mehr Anfragen und höhere Conversion
              </h2>
              <p className="mt-4 text-slate-300">
                Eine Website kann optisch gut aussehen – und trotzdem schlecht ranken oder
                Leads verlieren. Mit unserer Website Review identifizieren wir technische,
                inhaltliche und UX-Probleme und liefern Ihnen einen klaren Plan, was Sie als
                Nächstes umsetzen sollten.
              </p>

              <h3 className="mt-8 text-xl font-semibold text-slate-50">
                Was wir in der Review prüfen
              </h3>
              <ul className="mt-4 space-y-2 text-slate-300">
                <li>• SEO Basics: Indexierung, Titles/Meta, interne Struktur, Content Signale</li>
                <li>• Performance: Core Web Vitals, Ladezeiten, unnötige Skripte/Assets</li>
                <li>• UX & Informationsarchitektur: Navigation, Klarheit, mobile Usability</li>
                <li>• Conversion: CTA-Führung, Formulare, Vertrauen (Social Proof, Klarheit)</li>
                <li>• Content: Nutzenkommunikation, Keyword-Intention, Struktur, Redundanzen</li>
              </ul>

              <h3 className="mt-8 text-xl font-semibold text-slate-50">
                Ergebnis: priorisierter Massnahmenplan
              </h3>
              <p className="mt-4 text-slate-300">
                Sie erhalten konkrete Empfehlungen mit Prioritäten (Quick Wins vs. grössere
                Hebel), damit Sie schnell Verbesserungen sehen – ohne Rätselraten.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                <h3 className="text-lg font-semibold text-slate-50">
                  Nächster Schritt
                </h3>
                <p className="mt-2 text-slate-300">
                  Füllen Sie das Formular aus – wir melden uns mit Rückfragen oder einem
                  Vorschlag für das Review-Setup.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/kontakt"
                    className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-100 hover:bg-white/10"
                  >
                    Allgemeine Anfrage
                  </Link>
                  <a
                    href="#website-review-form"
                    className="rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-400"
                  >
                    Website Review starten
                  </a>
                </div>
              </div>
            </div>

            {/* FAQ (SEO-friendly) */}
            <aside className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-50">FAQ</h2>
              <details className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <summary className="cursor-pointer text-slate-100">
                  Brauche ich Zugriff auf Analytics?
                </summary>
                <p className="mt-2 text-sm text-slate-300">
                  Nicht zwingend. Für Conversion/Behavior ist Zugriff hilfreich, aber wir
                  können auch ohne Analytics eine fundierte Review machen.
                </p>
              </details>
              <details className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <summary className="cursor-pointer text-slate-100">
                  Ist das nur für SEO?
                </summary>
                <p className="mt-2 text-sm text-slate-300">
                  Nein. SEO, Performance, UX und Conversion hängen zusammen – wir behandeln
                  die Seite ganzheitlich.
                </p>
              </details>
              <details className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <summary className="cursor-pointer text-slate-100">
                  Bekommt man eine Liste mit konkreten Fixes?
                </summary>
                <p className="mt-2 text-sm text-slate-300">
                  Ja – inklusive Prioritäten, Impact-Einschätzung und nächsten Schritten.
                </p>
              </details>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
