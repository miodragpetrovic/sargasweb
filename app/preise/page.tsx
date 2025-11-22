import type { Metadata } from "next";
import Link from "next/link";

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

// -----------------------------------------------------------------------------
// Stranica
// -----------------------------------------------------------------------------

const projectPackages = [
  {
    title: "Onepager / Landingpage",
    tag: "Ideal für kleine Unternehmen & Kampagnen",
    price: "ab CHF 950.–",
    marketPrice: "Ø CHF 1’800 – 2’500",
    features: [
      "1 Seite mit bis zu 6 Abschnitten (Hero, Leistungen, Referenzen, Kontakt usw.)",
      "Responsives Design (Desktop, Tablet, Mobile)",
      "Kontaktformular inkl. Spam-Schutz",
      "Grundlegende SEO-Optimierung (Meta-Tags, Struktur, Pagespeed)",
      "Integration von Google Analytics / Matomo (falls gewünscht)",
    ],
  },
  {
    title: "Business Website (3–10 Seiten)",
    tag: "Für KMU mit mehreren Angeboten & Bereichen",
    price: "ab CHF 1’750.–",
    marketPrice: "Ø CHF 3’500 – 6’000",
    features: [
      "Individuelles Design auf Basis deines Brandings",
      "Bis zu 10 Inhaltsseiten (z.B. Startseite, Über uns, Leistungen, Blog, Kontakt)",
      "Blog-/Newsbereich vorbereitet",
      "OnPage-SEO & strukturierte Inhalte",
      "Performance-Optimierung & technische Best Practices",
    ],
  },
  {
    title: "Online-Shop",
    tag: "Für Produkte, Buchungen & digitale Leistungen",
    price: "ab CHF 2’900.–",
    marketPrice: "Ø CHF 5’000 – 10’000",
    features: [
      "Shop mit Produktkatalog, Kategorien & Varianten",
      "Zahlungsanbieter (Stripe, PayPal, TWINT, Kreditkarte nach Bedarf)",
      "Checkout-Flow & Bestell-E-Mails",
      "Mehrsprachigkeit optional vorbereitet",
      "Grundlegendes E-Commerce-Tracking (z.B. via Analytics)",
    ],
  },
  {
    title: "Individuelle Webapplikation",
    tag: "Web-App, Portale, Dashboards, SaaS-Lösungen",
    price: "ab CHF 4’900.–",
    marketPrice: "Ø ab CHF 10’000+",
    features: [
      "Individuelle Konzeption & UX-Design",
      "Next.js Web-App mit moderner Architektur",
      "Anbindung an APIs, Datenbanken & Drittsysteme",
      "Rollen- & Rechteverwaltung (z.B. Admin, User, Kunden)",
      "Technische Dokumentation & Übergabe",
    ],
  },
];

const carePackages = [
  {
    title: "Website Betreuung",
    tag: "Onepager & kleinere Business-Webseiten",
    price: "ab CHF 69.– / Monat",
    details: [
      "Sicherheits- & Systemupdates",
      "Monatliche Backups & Recovery-Check",
      "Monitoring & Uptime-Überwachung",
      "Kleine Inhaltsanpassungen inkl. (bis 30 Min / Monat)",
    ],
  },
  {
    title: "Online-Shop Betreuung",
    tag: "Shops mit regelmässigen Änderungen",
    price: "ab CHF 129.– / Monat",
    details: [
      "Updates für Shop-System & Plugins",
      "Backup-Management & Recovery-Tests",
      "Produkt-/Preis-Anpassungen nach Bedarf",
      "Performance-Checks & Basis-SEO-Monitoring",
    ],
  },
  {
    title: "Webapp / Portal Betreuung",
    tag: "Individuelle Webapplikationen & SaaS",
    price: "ab CHF 190.– / Monat",
    details: [
      "Monitoring & Error-Tracking",
      "Security-Updates & Dependency-Management",
      "Staging-Umgebung für neue Features",
      "Technischer Support nach SLA-Vereinbarung",
    ],
  },
];

export default function PreisePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 pt-5">
      <section className="border-b border-slate-800/60 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950/90">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sky-300">
              Preise
            </span>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
              Faire Preise für moderne Weblösungen
            </h1>
            <p className="mt-3 text-sm md:text-base text-slate-300">
              Wir arbeiten mit transparenten, klar definierten Paketen –{" "}
              <span className="font-medium text-sky-300">
                rund 50% unter den üblichen Agenturpreisen in der Schweiz
              </span>{" "}
              – ohne versteckte Kosten. Ideal für KMU, Selbständige und
              Startups, die Wert auf Qualität und Budgetkontrolle legen.
            </p>
            <p className="mt-3 text-xs text-slate-400">
              Individuelle Wünsche und
              komplexere Projekte kalkulieren wir gerne in einem persönlichen
              Angebot.
            </p>
          </div>
        </div>
      </section>

      {/* Projekt-Pakete */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-50 md:text-2xl">
              Projekt-Pakete
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Von Onepager bis individueller Webapplikation – wir decken den
              gesamten Bereich moderner Webentwicklung ab.
            </p>
          </div>
          <p className="text-xs text-slate-400">
            Richtwerte – je nach Funktionsumfang und Designaufwand können die
            effektiven Kosten leicht variieren.
          </p>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {projectPackages.map((pkg) => (
            <div
              key={pkg.title}
              className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/60 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.6)] transition-transform hover:-translate-y-1 hover:border-sky-500/50 hover:shadow-[0_22px_50px_rgba(8,47,73,0.65)]"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-semibold text-slate-50 md:text-lg">
                    {pkg.title}
                  </h3>
                  <span className="rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300">
                    {pkg.price}
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-400">{pkg.tag}</p>

                <p className="mt-3 text-[11px] text-slate-500">
                  Marktpreis Schweiz (Agenturen):{" "}
                  <span className="font-medium text-slate-300">
                    {pkg.marketPrice}
                  </span>
                </p>

                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-[6px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-sky-400" />
                      <span className="text-[13px] leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-3">
                <span className="text-[11px] text-slate-400">
                  Fixpreis nach Briefing & Leistungsumfang
                </span>
                <Link
                  href="/kontakt"
                  className="text-xs font-medium text-sky-300 hover:text-sky-200"
                >
                  Unverbindliches Angebot ↗
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Betreuung & Wartung */}
      <section className="mx-auto max-w-6xl px-4 pb-16 md:pb-20">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-50 md:text-2xl">
              Betreuung & Wartung
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Langfristige Betreuung für Websites, Online-Shops und Webapps –
              damit dein Auftritt stabil, sicher und performant bleibt.
            </p>
          </div>
          <p className="text-xs text-slate-400">
            Laufende Betreuung ist jederzeit monatlich kündbar, sofern im
            Vertrag nichts anderes vereinbart wird.
          </p>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {carePackages.map((pkg) => (
            <div
              key={pkg.title}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.6)]"
            >
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  {pkg.title}
                </h3>
                <p className="mt-1 text-xs text-slate-400">{pkg.tag}</p>
                <p className="mt-3 text-sm font-semibold text-sky-300">
                  {pkg.price}
                </p>

                <ul className="mt-3 space-y-2 text-xs text-slate-200">
                  {pkg.details.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[5px] h-[4px] w-[4px] flex-shrink-0 rounded-full bg-sky-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 border-t border-slate-800 pt-3 text-[11px] text-slate-400">
                Individuelle Service-Level-Agreements (SLA) auf Anfrage möglich.
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start gap-3 rounded-2xl border border-sky-500/30 bg-sky-500/5 p-4 text-xs text-slate-200 md:flex-row md:items-center md:justify-between">
          <p>
            Du bist unsicher, welches Paket zu dir passt? Schick uns einfach
            eine kurze Beschreibung deines Projekts – wir empfehlen dir die
            sinnvollste Variante.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-full bg-sky-500/90 px-4 py-2 text-xs font-medium text-white shadow-lg shadow-sky-500/30 hover:bg-sky-400"
          >
            Projekt anfragen ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
