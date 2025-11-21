import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  Globe2,
  Rocket,
  PanelsTopLeft,
  Blocks,
  Cpu,
  Server,
  Database,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Webentwicklung in der Schweiz | SargasWeb",
  description:
    "SargasWeb entwickelt performante Webseiten, Webanwendungen und Online-Shops für Unternehmen in der Schweiz – mit Fokus auf moderne Webentwicklung, SEO und Conversion.",
  alternates: {
    canonical: "/webentwicklung",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Webentwicklung für Unternehmen – SargasWeb",
    description:
      "Moderne Webentwicklung aus Affoltern am Albis: Next.js, React, WordPress und individuelle Lösungen für KMU, Praxen, Dienstleister und E-Commerce.",
    type: "website",
    url: "/webentwicklung",
  },
};

export default function WebentwicklungPage() {
  return (
    <div className="bg-slate-950 text-slate-50">
      {/* HERO – dvokolona, drugačiji layout nego na glavnoj */}
      <section className="relative overflow-hidden border-b border-white/5 bg-slate-950 pt-24 md:pt-28">
        {/* blur pozadina */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-0 h-64 w-64 rounded-full bg-sky-500/15 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)] md:pb-20">
          {/* LEVA STRANA */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
              <Code2 className="h-3.5 w-3.5 text-sky-400" />
              <span>Webentwicklung aus der Schweiz · SargasWeb</span>
            </p>

            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Webentwicklung, die aus einem Konzept{" "}
              <span className="block text-sky-400">
                ein funktionierendes digitales Produkt macht.
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
              SargasWeb entwickelt Webseiten, Webanwendungen und Online-Shops
              für Unternehmen in der Schweiz. Technisch sauber umgesetzt mit
              Next.js, React, PHP oder WordPress – immer mit Fokus auf
              Performance, SEO und eine klare Nutzerführung.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-200 sm:text-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
                <Sparkles className="h-3.5 w-3.5 text-sky-400" />
                Moderne Frontend-Stacks &amp; sauberes Markup
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
                <Rocket className="h-3.5 w-3.5 text-sky-400" />
                Core Web Vitals &amp; Performance im Blick
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
                <Globe2 className="h-3.5 w-3.5 text-sky-400" />
                Projekte für KMU, Praxen &amp; E-Commerce
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 active:scale-[0.98]"
              >
                Webprojekt besprechen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <p className="text-xs text-slate-400 sm:text-sm">
                In einem kurzen Erstgespräch klären wir, welche Lösung für Ihre
                Situation sinnvoll ist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCIJA – DREI BEREICHE DER WEBENTWICKLUNG */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
              Webentwicklung für drei typische Szenarien
            </h2>
            <p className="mt-2 text-sm text-slate-300 md:text-base">
              Oft startet ein Projekt in einem dieser drei Bereiche – von der
              schlanken Website bis zur individuellen Webapplikation mit
              Schnittstellen.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="flex flex-col rounded-2xl border border-white/10 bg-slate-900 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                <PanelsTopLeft className="h-4 w-4 text-sky-400" />
                Webseiten &amp; Landingpages
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Klare Struktur, mobil optimiert und technisch aufgeräumt – ideal
                für Unternehmen, Praxen und Agenturen, die online professionell
                auftreten wollen.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-slate-300">
                <li>CMS-basiert (z.&nbsp;B. WordPress) oder Headless</li>
                <li>SEO-freundliche Struktur &amp; sauberes Markup</li>
                <li>Integration von Formularen &amp; Tracking</li>
              </ul>
            </article>

            <article className="flex flex-col rounded-2xl border border-white/10 bg-slate-900 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                <Blocks className="h-4 w-4 text-sky-400" />
                Webanwendungen &amp; Tools
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Maßgeschneiderte Webapplikationen für interne Prozesse,
                Kundenportale oder SaaS-Produkte – statt Kompromisse mit
                Standard-Software.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-slate-300">
                <li>Login-Bereiche, Rollen &amp; Berechtigungen</li>
                <li>APIs &amp; Integrationen (z.&nbsp;B. CRM, ERP)</li>
                <li>Individuelle Frontends mit React / Next.js</li>
              </ul>
            </article>

            <article className="flex flex-col rounded-2xl border border-white/10 bg-slate-900 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                <Rocket className="h-4 w-4 text-sky-400" />
                Online-Shops &amp; E-Commerce
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Moderne Shop-Lösungen mit Fokus auf Bestellprozess,
                Performance und eine einfache Pflege – z.&nbsp;B. mit
                WooCommerce oder Headless Commerce.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-slate-300">
                <li>Konversionsorientiertes Frontend</li>
                <li>Zahlungs- &amp; Versand-Anbindungen</li>
                <li>Produkt- &amp; Kategorie-Strukturen, die Sinn ergeben</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* SEKCIJA – TECH-STACK & ARCHITEKTUR */}
      <section className="border-y border-white/5 bg-slate-900/60">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div>
              <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
                Moderner Tech-Stack statt veralteter Systeme
              </h2>
              <p className="mt-3 text-sm text-slate-300 md:text-base">
                Wir setzen auf moderne Webtechnologien, die performant, gut
                wartbar und zukunftssicher sind. Wo es sinnvoll ist, verwenden
                wir etablierte Systeme wie WordPress – wo mehr Flexibilität
                gefragt ist, setzen wir auf Headless-Setups oder individuelle
                Anwendungen.
              </p>
              <p className="mt-3 text-sm text-slate-300 md:text-base">
                Dabei achten wir darauf, die Komplexität so gering wie möglich
                zu halten. Lieber eine schlanke, gut gedachte Lösung als ein
                überdimensionierter Tech-Zoo.
              </p>

              <div className="mt-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs text-emerald-100 sm:text-sm">
                <p className="flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="h-4 w-4" />
                  Technisch stark &amp; pragmatisch
                </p>
                <p className="mt-1">
                  Sie erhalten eine Lösung, die technisch überzeugt – aber
                  gleichzeitig im Alltag einfach bedienbar bleibt.
                </p>
              </div>
            </div>

            <aside className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
                TECH-STACK
              </p>
              <div className="mt-3 grid grid-cols-2 gap-3 text-xs text-slate-300 sm:text-sm">
                <div className="space-y-1.5">
                  <p className="flex items-center gap-2 font-semibold text-slate-50">
                    <Cpu className="h-4 w-4 text-sky-400" />
                    Frontend
                  </p>
                  <ul className="space-y-1">
                    <li>• Next.js &amp; React</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                  </ul>
                </div>
                <div className="space-y-1.5">
                  <p className="flex items-center gap-2 font-semibold text-slate-50">
                    <Server className="h-4 w-4 text-sky-400" />
                    Backend
                  </p>
                  <ul className="space-y-1">
                    <li>• Node.js / API Routes</li>
                    <li>• PHP / WordPress</li>
                    <li>• Headless CMS</li>
                  </ul>
                </div>
                <div className="space-y-1.5">
                  <p className="flex items-center gap-2 font-semibold text-slate-50">
                    <Database className="h-4 w-4 text-sky-400" />
                    Daten &amp; Integrationen
                  </p>
                  <ul className="space-y-1">
                    <li>• REST / GraphQL</li>
                    <li>• Dritt-APIs (CRM, ERP, Payment)</li>
                    <li>• Tracking &amp; Analytics</li>
                  </ul>
                </div>
                <div className="space-y-1.5">
                  <p className="flex items-center gap-2 font-semibold text-slate-50">
                    <Sparkles className="h-4 w-4 text-sky-400" />
                    Qualität
                  </p>
                  <ul className="space-y-1">
                    <li>• Code Reviews</li>
                    <li>• Testing &amp; Monitoring</li>
                    <li>• SEO &amp; Performance-Tuning</li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SEKCIJA – SEO TEXT + FAQ LIGHT */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
                Webentwicklung und SEO gehören zusammen
              </h2>
              <p className="mt-3 text-sm text-slate-300 md:text-base">
                Viele technische SEO-Themen werden direkt bei der
                Webentwicklung entschieden: Seitenstruktur, Überschriften,
                Ladezeiten, interne Verlinkung oder der Umgang mit Bildern und
                Skripten. Deshalb denken wir Suchmaschinenfreundlichkeit von
                Anfang an mit.
              </p>
              <p className="mt-3 text-sm text-slate-300 md:text-base">
                Für Unternehmen in der Schweiz – egal ob Sie lokal in Zürich,
                im Kanton Zürich, in der Deutschschweiz oder darüber hinaus
                aktiv sind – ist ein sauber umgesetzter Webauftritt die Basis,
                um online gefunden zu werden und Vertrauen aufzubauen.
              </p>
            </div>

            <div className="space-y-5 text-sm text-slate-300">
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Wie läuft der Start einer Zusammenarbeit ab?
                </h3>
                <p className="mt-2">
                  Im ersten Schritt sprechen wir kurz über Ihr Vorhaben, Budget
                  und Zeitrahmen. Danach erhalten Sie eine Einschätzung, ob
                  wir die richtige Anlaufstelle sind und wie ein
                  sinnvolles Setup aussehen kann.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Übernehmen Sie auch bestehende Projekte?
                </h3>
                <p className="mt-2">
                  Ja, häufig steigen wir in bestehende Websites oder
                  Webanwendungen ein – etwa, um sie zu stabilisieren, zu
                  optimieren oder schrittweise in eine modernere Architektur zu
                  überführen.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Entwickeln Sie nur für die Schweiz?
                </h3>
                <p className="mt-2">
                  Der Schwerpunkt liegt auf Kund:innen in der Schweiz, wir
                  arbeiten aber auch mit Unternehmen aus Deutschland und
                  Österreich zusammen – insbesondere, wenn Projekte auf
                  Deutschsprachigkeit und den DACH-Markt ausgerichtet sind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA – drugačiji od glavne */}
      <section className="border-t border-white/5 bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-slate-950/80 p-8 text-center shadow-xl shadow-black/40">
            <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
              Bereit, Ihre Webentwicklung auf das nächste Level zu bringen?
            </h2>
            <p className="mt-3 text-sm text-slate-300 md:text-base">
              Beschreiben Sie kurz Ihr Vorhaben – wir melden uns mit konkreten
              Ideen, wie eine passende Lösung aussehen kann und welche Schritte
              dafür notwendig sind.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-2.5 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 active:scale-[0.98]"
              >
                Unverbindliche Anfrage
              </Link>
              <Link
                href="/referenzen"
                className="text-sm text-sky-400 hover:text-sky-300"
              >
                Umgesetzte Projekte ansehen ↗
              </Link>
            </div>

            <p className="mt-4 text-xs text-slate-400 sm:text-sm">
              Oder schreiben Sie direkt an{" "}
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
