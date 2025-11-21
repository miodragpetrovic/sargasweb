import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe2,
  LayoutTemplate,
  Rocket,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Building2,
  Users,
  Wand2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Website erstellen lassen in der Schweiz | SargasWeb",
  description:
    "Website erstellen lassen in der Schweiz: SargasWeb entwickelt moderne, schnelle und SEO-optimierte Webseiten für KMU, Praxen, Agenturen und Dienstleister.",
  alternates: {
    canonical: "/website-erstellen-lassen",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Professionelle Website erstellen lassen – SargasWeb",
    description:
      "Lassen Sie Ihre Website von SargasWeb erstellen: moderne Gestaltung, klare Struktur, schnelle Ladezeiten und suchmaschinenfreundliche Umsetzung.",
    type: "website",
    url: "/website-erstellen-lassen",
  },
};

export default function WebsiteErstellenLassenPage() {
  return (
    <div className="bg-slate-950 text-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 pt-24 md:pt-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute right-[-40px] top-28 h-72 w-72 rounded-full bg-violet-500/25 blur-3xl" />
          <div className="absolute bottom-[-60px] left-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-18 md:pb-20">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
              <Globe2 className="h-3.5 w-3.5 text-sky-400" />
              <span>Website erstellen lassen · SargasWeb Schweiz</span>
            </p>

            <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Website erstellen lassen –
              <span className="block text-sky-400">
                professionell, schnell und auf Ihr Unternehmen zugeschnitten.
              </span>
            </h1>

            <p className="mt-4 text-sm text-slate-300 sm:text-base">
              Ihre Website ist oft der erste Kontaktpunkt mit neuen Kund:innen.
              SargasWeb erstellt moderne Webseiten, die gut aussehen, technisch
              sauber umgesetzt sind und Ihre Zielgruppe klar ansprechen – von
              der ersten Idee bis zum Go-Live.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-200 sm:text-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
                <LayoutTemplate className="h-3.5 w-3.5 text-sky-400" />
                Individuelle Websites statt Standard-Templates
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
                <Rocket className="h-3.5 w-3.5 text-sky-400" />
                Schnell, mobiloptimiert &amp; SEO-freundlich
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
                <Sparkles className="h-3.5 w-3.5 text-sky-400" />
                Ideal für KMU, Praxen &amp; Dienstleister
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 active:scale-[0.98]"
              >
                Website-Projekt anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <p className="text-xs text-slate-400 sm:text-sm">
                Beschreiben Sie Ihr Vorhaben in wenigen Sätzen – wir melden uns
                mit einer ersten Einschätzung und möglichen nächsten Schritten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCIJA – FÜR WEN */}
      <section className="border-b border-white/5 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
              Für wen ist „Website erstellen lassen“ sinnvoll?
            </h2>
            <p className="mt-2 text-sm text-slate-300 md:text-base">
              Ob neue Website oder Relaunch – wir arbeiten vor allem mit
              Unternehmen, die einen professionellen, klar strukturierten und
              langfristig tragfähigen Online-Auftritt möchten.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="flex flex-col rounded-2xl border border-white/10 bg-slate-900 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                <Building2 className="h-4 w-4 text-sky-400" />
                KMU &amp; Dienstleister
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Für Unternehmen, die online seriös auftreten, Vertrauen
                aufbauen und klare Anfragen generieren wollen – ohne sich selbst
                mit allen technischen Details befassen zu müssen.
              </p>
            </article>

            <article className="flex flex-col rounded-2xl border border-white/10 bg-slate-900 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                <Users className="h-4 w-4 text-sky-400" />
                Praxen, Kanzleien &amp; Beratungen
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Für Ärzt:innen, Therapeut:innen, Kanzleien und Beratungen, die
                eine gut strukturierte Website mit klaren Leistungen,
                Öffnungszeiten und Kontaktmöglichkeiten benötigen.
              </p>
            </article>

            <article className="flex flex-col rounded-2xl border border-white/10 bg-slate-900 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                <Wand2 className="h-4 w-4 text-sky-400" />
                Start-ups &amp; neue Projekte
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Für neue Marken, Produkte oder Projekte, die vom Start weg
                einen professionellen und modernen Webauftritt benötigen, der
                mitwachsen kann.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SEKCIJA – WAS SIE BEKOMMEN */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
              Was Sie bekommen, wenn Sie Ihre Website von SargasWeb erstellen lassen
            </h2>
            <p className="mt-2 text-sm text-slate-300 md:text-base">
              Kein Baukasten, kein anonymer Massenservice – sondern eine
              Website, die genau zu Ihrem Unternehmen passt.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="flex flex-col rounded-2xl border border-white/10 bg-slate-900 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                <LayoutTemplate className="h-4 w-4 text-sky-400" />
                Individuelles Design
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Wir entwickeln ein Webdesign, das Ihre Marke widerspiegelt und
                Ihre Inhalte klar strukturiert – statt einfach ein Template zu
                “überstülpen”.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-slate-300">
                <li>Startseite, Leistungsseiten, Über-uns &amp; Kontakt</li>
                <li>Übersichtliche Navigation &amp; klare Nutzerführung</li>
                <li>Visuelle Hierarchie für wichtige Inhalte</li>
              </ul>
            </article>

            <article className="flex flex-col rounded-2xl border border-white/10 bg-slate-900 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                <Sparkles className="h-4 w-4 text-sky-400" />
                Moderne Umsetzung
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Technisch saubere Umsetzung mit modernen Technologien (Next.js,
                React, WordPress oder PHP) – je nach Projektanforderungen.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-slate-300">
                <li>Schnelle Ladezeiten &amp; sauberes Markup</li>
                <li>Responsive Design für alle Geräte</li>
                <li>Integration von Formularen &amp; Tracking</li>
              </ul>
            </article>

            <article className="flex flex-col rounded-2xl border border-white/10 bg-slate-900 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                <Rocket className="h-4 w-4 text-sky-400" />
                SEO-Basis &amp; Inhalte
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Struktur, Texte und technische Umsetzung werden so gestaltet,
                dass Suchmaschinen Ihre Seite leichter verstehen und bewerten
                können.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-slate-300">
                <li>Überschriften-Hierarchien &amp; interne Verlinkung</li>
                <li>Meta-Daten &amp; suchmaschinenfreundliche Inhalte</li>
                <li>Grundlage für spätere SEO-Massnahmen</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* SEKCIJA – ABLAUF */}
      <section className="border-y border-white/5 bg-slate-900/60">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
              So läuft es ab, wenn Sie Ihre Website von uns erstellen lassen
            </h2>
            <p className="mt-2 text-sm text-slate-300 md:text-base">
              Ein klarer Prozess sorgt dafür, dass Sie zu jedem Zeitpunkt wissen,
              wo Ihr Projekt steht – ohne endlose Schleifen.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Kennenlernen & Ziele",
                text: "Kurzes Gespräch, um Ihr Unternehmen, Ihre Zielgruppe und Ihre Ziele mit der neuen Website zu verstehen.",
              },
              {
                step: "2",
                title: "Struktur & Design",
                text: "Seitenstruktur, Inhalte, Wireframes und Designentwurf – abgestimmt auf Ihre Marke und Ihre Besucher:innen.",
              },
              {
                step: "3",
                title: "Umsetzung",
                text: "Technische Entwicklung, Integration von Inhalten, Formularen und Tracking sowie Optimierung für Mobilgeräte.",
              },
              {
                step: "4",
                title: "Launch & Übergabe",
                text: "Testing, Live-Schaltung und Übergabe inkl. kurzer Einführung – auf Wunsch mit laufender Betreuung.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-5"
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

      {/* SEKCIJA – SEO/FAQ TEXT */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
                Warum Sie Ihre Website professionell erstellen lassen sollten
              </h2>
              <p className="mt-3 text-sm text-slate-300 md:text-base">
                Eine selbst erstellte Website über einen Baukasten kann für
                einen ersten Test funktionieren – stößt aber oft schnell an
                Grenzen: eingeschränkte Gestaltung, langsame Ladezeiten oder
                Probleme bei der Suchmaschinenoptimierung.
              </p>
              <p className="mt-3 text-sm text-slate-300 md:text-base">
                Wenn Ihre Website ein wichtiger Teil Ihrer Kundengewinnung ist,
                lohnt sich eine professionelle Umsetzung: sauberer Code,
                durchdachtes Design und eine Struktur, die sowohl für
                Besucher:innen als auch für Suchmaschinen Sinn ergibt.
              </p>
            </div>

            <div className="space-y-5 text-sm text-slate-300">
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Was kostet es, eine Website erstellen zu lassen?
                </h3>
                <p className="mt-2">
                  Das hängt von Umfang, Funktionsumfang und gewünschter
                  Gestaltung ab. Kleinere, klare Unternehmensseiten liegen
                  deutlich unter komplexen, mehrsprachigen Webauftritten mit
                  vielen Unterseiten. Nach einem kurzen Gespräch erhalten Sie
                  eine transparente Offerte.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Können bestehende Inhalte übernommen werden?
                </h3>
                <p className="mt-2">
                  Ja, bestehende Texte und Bilder können – wo sinnvoll –
                  übernommen, strukturiert und optimiert werden. Gleichzeitig
                  schauen wir, welche Inhalte ergänzt oder klarer formuliert
                  werden sollten.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Übernehmen Sie auch Hosting &amp; Wartung?
                </h3>
                <p className="mt-2">
                  Auf Wunsch unterstützen wir bei der Auswahl eines passenden
                  Hostings und übernehmen Updates, kleinere Anpassungen und
                  technische Betreuung, damit Ihre Website langfristig stabil
                  läuft.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-slate-950/80 p-8 text-center shadow-xl shadow-black/40">
            <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
              Website erstellen lassen – mit einem Partner, der mitdenkt.
            </h2>
            <p className="mt-3 text-sm text-slate-300 md:text-base">
              Schicken Sie uns ein paar Eckdaten zu Ihrem Projekt – wir melden
              uns mit konkreten Vorschlägen, wie Ihre neue Website aussehen und
              umgesetzt werden kann.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-2.5 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 active:scale-[0.98]"
              >
                Unverbindliche Anfrage senden
              </Link>
              <Link
                href="/referenzen"
                className="text-sm text-sky-400 hover:text-sky-300"
              >
                Beispiele umgesetzter Websites ↗
              </Link>
            </div>

            <p className="mt-4 text-xs text-slate-400 sm:text-sm">
              Oder direkt per E-Mail:{" "}
              <span className="font-mono text-slate-200">
                info@sargasweb.ch
              </span>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
