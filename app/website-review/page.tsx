import type { Metadata } from "next";
import Link from "next/link";
import WebsiteReviewSection from "../website-review/website-review-section";

export const metadata: Metadata = {
  title:
    "Technisches Website Audit – Performance, SEO & Shop/Web-App Review | SargasWeb",
  description:
    "Technische Website Review für die Schweiz: Performance (Core Web Vitals), technisches SEO, Tracking-Setup, Sicherheit & Stabilität für Websites, Onlineshops und Web-Apps. Mit priorisiertem Massnahmenplan.",
  alternates: {
    canonical: "/website-review",
  },
  openGraph: {
    title:
      "Technisches Website Audit – Performance, SEO & Shop/Web-App Review",
    description:
      "Technisches Audit für Websites, Onlineshops & Web-Apps: Core Web Vitals, technisches SEO, Crawling/Indexierung, Tracking, Sicherheit & Code-Qualität – inkl. priorisiertem Massnahmenplan.",
    url: "/website-review",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Technisches Website Audit – Performance, SEO & Shop/Web-App Review",
    description:
      "Technisches Audit für Websites, Onlineshops & Web-Apps: Core Web Vitals, technisches SEO, Crawling/Indexierung, Tracking, Sicherheit & Code-Qualität – inkl. priorisiertem Massnahmenplan.",
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
    name: "Technisches Website Audit (Website/Shop/Web-App Review)",
    provider: { "@type": "Organization", name: orgName, url: siteUrl },
    areaServed: { "@type": "Country", name: "Switzerland" },
    serviceType: "Technisches Website-, Shop- & Web-App Audit (Performance & SEO)",
    url: pageUrl,
    description:
      "Technische Analyse von Performance (Core Web Vitals), technischem SEO, Tracking, Sicherheit, Stabilität und Code-Qualität – inkl. priorisiertem Massnahmenplan.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Was umfasst das technische Website Audit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wir prüfen Performance (Core Web Vitals, Ladezeiten, Asset-Optimierung), technisches SEO (Crawling, Indexierung, Canonicals, Meta/Schema, interne Verlinkung), Tracking (GA4/Events), sowie Sicherheit und Stabilität (Header, Cookies, Fehler, Redirects) – und liefern konkrete Fixes mit Prioritäten.",
        },
      },
      {
        "@type": "Question",
        name: "Wie schnell bekomme ich Ergebnisse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In der Regel erhalten Sie innerhalb weniger Werktage eine strukturierte Auswertung inkl. priorisiertem Massnahmenplan (Quick Wins vs. grössere Hebel) und Empfehlungen für die Umsetzung.",
        },
      },
      {
        "@type": "Question",
        name: "Ist das Audit auch für Onlineshops und Web-Apps geeignet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Wir auditieren Websites, Onlineshops (z.B. Shopify/WooCommerce) und Web-Apps (z.B. Next.js/React). Der Fokus wird an Ihr Setup angepasst, z.B. Checkout, Tracking, Performance und technische SEO-Signale.",
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
                Technisches Website Audit für Websites, Onlineshops & Web-Apps in der
                Schweiz
              </h2>

              <p className="mt-4 text-slate-300">
                Eine Seite kann modern aussehen – und trotzdem langsam laden, schlecht
                crawlbar sein oder im Checkout/Lead-Funnel Nutzer verlieren. Mit unserem
                technischen Website Review identifizieren wir Performance-Bremsen,
                Tracking-Lücken und technische SEO-Hürden. Sie erhalten klare
                Handlungsempfehlungen, was sich kurzfristig (Quick Wins) und strategisch
                (grössere Hebel) lohnt.
              </p>

              <h3 className="mt-8 text-xl font-semibold text-slate-50">
                Was wir im technischen Review prüfen
              </h3>

              <ul className="mt-4 space-y-2 text-slate-300">
                <li>
                  • Performance: Core Web Vitals, Ladezeiten, Bild-/Font-Optimierung,
                  JavaScript-Budget, unnötige Skripte/Assets
                </li>
                <li>
                  • Technisches SEO: Crawling &amp; Indexierung, Canonicals, Meta/Robots,
                  interne Verlinkung, strukturierte Daten (Schema), Duplicate Content Signale
                </li>
                <li>
                  • Shops &amp; Web-Apps: kritische User-Flows (Checkout, Formulare, Login),
                  Routing/Rendering, Fehlerquellen, Caching, Redirect-Logik
                </li>
                <li>
                  • Tracking &amp; Messbarkeit: GA4 Setup, Events, Consent/Cookie-Banner
                  Basics, Datenqualität für Entscheidungen
                </li>
                <li>
                  • Stabilität &amp; Sicherheit: HTTPS, Security Headers, 404/500, Redirect-Ketten,
                  Third-Party-Risiken, technische Hygiene
                </li>
              </ul>

              <h3 className="mt-8 text-xl font-semibold text-slate-50">
                Ergebnis: priorisierter Massnahmenplan mit konkreten Fixes
              </h3>

              <p className="mt-4 text-slate-300">
                Sie erhalten eine klare Liste mit konkreten Fixes, priorisiert nach Impact
                und Aufwand. So wissen Sie exakt, welche Massnahmen die grösste Wirkung für
                Performance, technische SEO-Signale und Conversion bringen – ohne Rätselraten.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                <h3 className="text-lg font-semibold text-slate-50">
                  Nächster Schritt
                </h3>
                <p className="mt-2 text-slate-300">
                  Füllen Sie das Formular aus und senden Sie uns die URL sowie Ihr Ziel
                  (z.B. mehr Leads, bessere Rankings, stabilerer Checkout). Wir melden uns
                  mit Rückfragen oder einem Vorschlag für das Audit-Setup.
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
                    Website Audit starten
                  </a>
                </div>
              </div>
            </div>

            {/* FAQ (SEO-friendly) */}
            <aside className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-50">FAQ</h2>

              <details className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <summary className="cursor-pointer text-slate-100">
                  Brauche ich Zugriff auf Analytics oder Search Console?
                </summary>
                <p className="mt-2 text-sm text-slate-300">
                  Nicht zwingend. Für Tracking- und Conversion-Fragen ist Zugriff hilfreich,
                  aber wir können das technische Audit auch ohne Analytics durchführen. Falls
                  nötig, fragen wir gezielt nach den passenden Zugängen.
                </p>
              </details>

              <details className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <summary className="cursor-pointer text-slate-100">
                  Ist das Audit eher technisch oder inhaltlich?
                </summary>
                <p className="mt-2 text-sm text-slate-300">
                  Der Fokus ist technisch: Performance, technisches SEO, Tracking, Stabilität
                  und kritische User-Flows (z.B. Checkout/Formulare). Content/UX betrachten
                  wir nur dort, wo es technische Auswirkungen auf Conversion oder Indexierung
                  gibt.
                </p>
              </details>

              <details className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <summary className="cursor-pointer text-slate-100">
                  Bekommt man eine Liste mit konkreten Fixes?
                </summary>
                <p className="mt-2 text-sm text-slate-300">
                  Ja – inklusive Prioritäten (Impact/Aufwand), Quick Wins und Empfehlungen für
                  die Umsetzung in Ihrem Setup (Website, Shop oder Web-App).
                </p>
              </details>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
