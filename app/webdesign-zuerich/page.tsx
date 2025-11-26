// app/webdesign-zuerich/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Palette,
  LayoutPanelLeft,
  Rocket,
  Search,
  MousePointerClick,
  CheckCircle2,
  MapPin,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Webdesign in Zürich – Moderne Webseiten für KMU | SargasWeb",
  description:
    "Professionelles Webdesign in Zürich: SargasWeb entwickelt moderne, schnelle und mobiloptimierte Webseiten für KMU, Praxen und Dienstleister – mit Fokus auf Sichtbarkeit, Vertrauen und Anfragen.",
  keywords: [
    "Webdesign Zürich",
    "Webdesigner Zürich",
    "Webdesign Agentur Zürich",
    "Webseite erstellen Zürich",
    "Website Relaunch Zürich",
    "WordPress Webdesign Zürich",
    "Webdesign für KMU Zürich",
  ],
  alternates: {
    canonical: "/webdesign-zuerich",
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
    title: "Webdesign in Zürich – Moderne Webseiten für KMU | SargasWeb",
    description:
      "SargasWeb ist Ihre Webdesign-Partnerin in Zürich für moderne, schnelle und verkaufsstarke Webseiten – von der Konzeption bis zum Launch.",
    url: "https://www.sargasweb.ch/webdesign-zuerich",
    type: "website",
  },
};

export default function WebdesignZuerichPage() {
  return (
    <div className="bg-slate-950 text-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 pt-24 md:pt-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute right-[-40px] top-24 h-72 w-72 rounded-full bg-violet-500/25 blur-3xl" />
          <div className="absolute bottom-[-60px] left-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-16 md:pb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-3 py-1 text-xs text-sky-200">
            <MapPin className="h-3.5 w-3.5" />
            <span>Webdesign in Zürich &amp; Region</span>
          </div>

          <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            Webdesign in Zürich
            <span className="block text-sky-400">
              für Unternehmen, die online professional auftreten wollen.
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
            SargasWeb realisiert moderne, schnelle und mobiloptimierte Webseiten
            für Zürcher Unternehmen, Praxen und Dienstleister. Vom ersten
            Konzept über das Design bis zur technischen Umsetzung – mit klarem
            Fokus auf Sichtbarkeit, Vertrauen und qualifizierte Anfragen.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-slate-200">
              <Palette className="h-4 w-4 text-sky-400" />
              Individuelles Webdesign statt Standard-Templates
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-slate-200">
              <Rocket className="h-4 w-4 text-sky-400" />
              Schnell, mobiloptimiert &amp; SEO-freundlich
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-slate-200">
              <MapPin className="h-4 w-4 text-sky-400" />
              Fokus Zürich &amp; Deutschschweiz
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 active:scale-[0.98]"
            >
              Webdesign-Anfrage starten
              <Rocket className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center text-sm text-sky-300 hover:text-sky-200"
            >
              Portfolio &amp; Beispiele ansehen
              <ArrowRightIcon className="ml-1 h-3.5 w-3.5" />
            </Link>
          </div>

          <p className="mt-5 text-xs text-slate-400 sm:text-sm">
            Ideal für: KMU, Praxen, Agenturen, Beratungen, Immobilien, Events
            &amp; mehr in Zürich und Umgebung.
          </p>
        </div>
      </section>

      {/* SEKCIJA – WARUM WEBdesign IN ZÜRICH WICHTIG IST */}
      <section className="border-y border-white/5 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
            <div>
              <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
                Warum professionelles Webdesign in Zürich entscheidend ist
              </h2>
              <p className="mt-3 text-sm text-slate-300 md:text-base">
                In einer Region mit vielen starken Anbietern reicht eine
                durchschnittliche Website nicht aus. Ihre Zielgruppe vergleicht
                innerhalb von Sekunden: wirkt die Seite vertrauenswürdig, klar
                und professionell – oder unübersichtlich und veraltet?
              </p>
              <p className="mt-3 text-sm text-slate-300 md:text-base">
                Professionelles Webdesign sorgt dafür, dass Besucher:innen
                verstehen, wer Sie sind, was Sie anbieten und warum sie
                ausgerechnet mit Ihnen in Zürich zusammenarbeiten sollten. Dazu
                gehören eine klare Struktur, ein modernes Layout, schnelle
                Ladezeiten und Inhalte, die auf Ihre Zielgruppe zugeschnitten
                sind.
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                  <Search className="h-4 w-4 text-sky-400" />
                  Besser gefunden werden in Zürich
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Technisch sauberes Webdesign ist eine wichtige Grundlage für
                  SEO. Strukturierte Inhalte, optimierte Ladezeiten und
                  mobilfreundliche Seiten helfen, in Google &amp; Co. sichtbarer
                  zu werden – insbesondere bei lokalen Suchanfragen.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                  <MousePointerClick className="h-4 w-4 text-sky-400" />
                  Aus Besuchern werden Anfragen
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Wir achten auf klare Call-to-Actions, gut sichtbare
                  Kontaktmöglichkeiten und logische Nutzerführung – damit aus
                  Besucher:innen Kund:innen, Patient:innen oder Mandant:innen
                  werden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCIJA – LEISTUNGEN WEBdesign ZÜRICH */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mb-10 max-w-2xl">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-slate-50 md:text-3xl">
              <LayoutPanelLeft className="h-6 w-6 text-sky-400" />
              Webdesign-Leistungen in Zürich
            </h2>
            <p className="mt-2 text-sm text-slate-300 md:text-base">
              Wir begleiten Sie von der ersten Idee bis zum Go-Live – mit einem
              Prozess, der zu Ihrer Unternehmensgrösse und Ihren Zielen passt.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                <Palette className="h-4 w-4 text-sky-400" />
                Individuelles Webdesign
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Gestaltung, die zu Ihrer Marke passt – keine generischen
                Templates. Wir entwickeln Layouts, die Ihre Inhalte klar
                strukturieren und Ihre Stärken hervorheben.
              </p>
              <ul className="mt-3 list-disc space-y-1 text-xs text-slate-300 pl-4">
                <li>Startseiten, Unterseiten &amp; Landingpages</li>
                <li>UX-orientierte Struktur &amp; Navigation</li>
                <li>Responsive Design für alle Geräte</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                <Search className="h-4 w-4 text-sky-400" />
                SEO-freundliche Umsetzung
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Sauberer Code, strukturierte Inhalte und technische Grundlagen,
                damit Ihre Website in Zürich und Umgebung besser gefunden
                werden kann.
              </p>
              <ul className="mt-3 list-disc space-y-1 text-xs text-slate-300 pl-4">
                <li>Optimierte Überschriften &amp; Metadaten</li>
                <li>Gute Ladezeiten &amp; Core Web Vitals-Basis</li>
                <li>Saubere interne Verlinkung</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                <Rocket className="h-4 w-4 text-sky-400" />
                Relaunch &amp; Weiterentwicklung
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Wenn Ihre aktuelle Website veraltet ist, übernehmen wir den
                Relaunch – inklusive inhaltlicher Struktur, Designmodernisierung
                und technischer Migration.
              </p>
              <ul className="mt-3 list-disc space-y-1 text-xs text-slate-300 pl-4">
                <li>Analyse der bestehenden Website</li>
                <li>Neukonzeption von Struktur &amp; Design</li>
                <li>Schonender Übergang ohne Datenverlust</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCIJA – PROZESS */}
      <section className="border-y border-white/5 bg-slate-900/60">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
              Wie ein Webdesign-Projekt in Zürich mit SargasWeb abläuft
            </h2>
            <p className="mt-2 text-sm text-slate-300 md:text-base">
              Klar strukturierter Prozess – damit Sie jederzeit wissen, wo Ihr
              Projekt steht und wann Sie mit Ergebnissen rechnen können.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Kennenlernen & Ziele",
                text: "Wir besprechen Ihr Unternehmen in Zürich, Ihre Zielgruppe und welche Rolle die Website in Ihrem Marketing spielen soll.",
              },
              {
                step: "2",
                title: "Konzept & Webdesign",
                text: "Wir erarbeiten Struktur, Inhalte und Designvorschläge – abgestimmt auf Ihre Marke und Ihre Besucher:innen.",
              },
              {
                step: "3",
                title: "Umsetzung & Testing",
                text: "Technische Entwicklung, Integration der Inhalte und Tests auf verschiedenen Geräten & Browsern.",
              },
              {
                step: "4",
                title: "Launch & Betreuung",
                text: "Liveschaltung, Monitoring und auf Wunsch laufende Anpassungen oder Erweiterungen.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/10 bg-slate-950/80 p-5"
              >
                <span className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-500 text-xs font-semibold text-white">
                  {item.step}
                </span>
                <h3 className="text-sm font-semibold text-slate-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEKCIJA – WARUM SARGASWEB IN ZÜRICH */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
              Warum SargasWeb für Webdesign in Zürich?
            </h2>
            <p className="mt-2 text-sm text-slate-300 md:text-base">
              Wir kombinieren technische Stärke mit einem Verständnis für
              Geschäftsmodelle in Zürich und der Schweiz.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                <Sparkles className="h-4 w-4 text-sky-400" />
                Fokus auf Qualität statt Masse
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Wir setzen nicht hunderte Projekte im Jahr um, sondern arbeiten
                eng mit ausgewählten Kund:innen zusammen – mit genügend Zeit für
                Strategie, Design und Details.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                <CheckCircle2 className="h-4 w-4 text-sky-400" />
                Transparente Zusammenarbeit
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Klare Angebote, verständliche Sprache ohne unnötigen
                Technik-Jargon und direkte Ansprechpartner:innen – auch nach dem
                Launch.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                <MapPin className="h-4 w-4 text-sky-400" />
                Verständnis für den Zürcher Markt
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Ob KMU, Praxis, Agentur oder Dienstleistung: wir kennen die
                Anforderungen lokaler Unternehmen und richten das Webdesign
                entsprechend aus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCIJA – FAQ / SEO CONTENT */}
      <section className="border-t border-white/5 bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
                Häufige Fragen zu Webdesign in Zürich
              </h2>
              <p className="mt-3 text-sm text-slate-300 md:text-base">
                Damit Sie besser einschätzen können, was Sie erwartet, wenn Sie
                Ihre Website in Zürich neu gestalten oder relaunchen lassen.
              </p>
            </div>

            <div className="space-y-5 text-sm text-slate-300">
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Was kostet professionelles Webdesign in Zürich?
                </h3>
                <p className="mt-2">
                  Das hängt von Umfang, Funktionen und Designanspruch ab. Eine
                  kleine, aber saubere Unternehmenswebsite ist deutlich
                  günstiger als ein komplexer Auftritt mit vielen Unterseiten,
                  Blog, Terminbuchung oder Schnittstellen. Nach einem kurzen
                  Gespräch können wir eine transparente Offerte erstellen.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Wie lange dauert ein Webdesign-Projekt?
                </h3>
                <p className="mt-2">
                  Für kleinere Webauftritte in Zürich sind oft einige Wochen
                  realistisch. Bei umfangreicheren Projekten mit mehreren
                  Stakeholdern, viel Inhalt und speziellen Funktionen kann es
                  entsprechend länger dauern. Wir arbeiten mit klaren Milestones
                  und Zwischenabstimmungen.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Können bestehende Inhalte und Bilder übernommen werden?
                </h3>
                <p className="mt-2">
                  Ja. Wo sinnvoll, integrieren wir bestehende Inhalte, überarbeiten
                  diese und ergänzen sie. Gleichzeitig prüfen wir, welche Seiten
                  wirklich benötigt werden und wie Inhalte strukturiert sein
                  sollten, damit sie für Besucher:innen und Suchmaschinen
                  verständlich sind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-slate-900/90 p-8 text-center shadow-xl shadow-black/40">
            <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
              Webdesign in Zürich – bereit für den nächsten Schritt?
            </h2>
            <p className="mt-3 text-sm text-slate-300 md:text-base">
              Beschreiben Sie uns kurz Ihr Unternehmen und Ihre aktuelle
              Website-Situation. Wir melden uns mit einer ersten Einschätzung
              und konkreten Vorschlägen für Ihr Webdesign in Zürich.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-2.5 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 active:scale-[0.98]"
              >
                Unverbindliche Webdesign-Anfrage
              </Link>
              <Link
                href="/portfolio"
                className="text-sm text-sky-300 hover:text-sky-200"
              >
                Beispiele umgesetzter Projekte ansehen
              </Link>
            </div>

            <p className="mt-4 text-xs text-slate-400 sm:text-sm">
              Oder direkt per E-Mail:{" "}
              <span className="font-mono text-slate-200">
                info@sargasweb.ch
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <path
        d="M4 8h7m0 0L9 5m2 3-2 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
