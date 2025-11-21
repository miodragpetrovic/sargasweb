import type { Metadata } from "next";
import Link from "next/link";
import {
  Palette,
  LayoutTemplate,
  Sparkles,
  Smartphone,
  Image as ImageIcon,
  PenTool,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Webdesign in der Schweiz | SargasWeb",
  description:
    "SargasWeb gestaltet moderne, nutzerfreundliche Webdesigns für Unternehmen in der Schweiz – klare Struktur, starke Markenwirkung und hohe Conversion.",
  alternates: {
    canonical: "/webdesign",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Webdesign für Unternehmen – SargasWeb",
    description:
      "Professionelles Webdesign aus Affoltern am Albis: klare Layouts, responsive Design und starke Markenauftritte für Webseiten, Webanwendungen und Online-Shops.",
    type: "website",
    url: "/webdesign",
  },
};

export default function WebdesignPage() {
  return (
    <div className="bg-slate-950 text-slate-50">
      {/* HERO – bez desnog boxa */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 pt-24 md:pt-28">
        {/* blur pozadina */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-0 h-64 w-64 rounded-full bg-sky-500/15 blur-3xl" />
          <div className="absolute right-[-60px] top-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute bottom-[-40px] left-10 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-18 md:pb-20">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
              <Palette className="h-3.5 w-3.5 text-sky-400" />
              <span>Webdesign aus der Schweiz · SargasWeb</span>
            </p>

            <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Webdesign, das Ihre Marke stärkt{" "}
              <span className="block text-sky-400">
                und Besucher zu Kund:innen macht.
              </span>
            </h1>

            <p className="mt-4 text-sm text-slate-300 sm:text-base">
              SargasWeb entwickelt Webdesigns, die schön aussehen – aber vor
              allem funktionieren. Klare Struktur, starke visuelle Hierarchie
              und ein Layout, das Nutzer:innen intuitiv zum nächsten Schritt
              führt – egal ob auf Desktop, Tablet oder Smartphone.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-200 sm:text-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
                <LayoutTemplate className="h-3.5 w-3.5 text-sky-400" />
                Individuelles Webdesign für KMU, Praxen, Agenturen
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
                <Smartphone className="h-3.5 w-3.5 text-sky-400" />
                Responsive Layouts für alle Endgeräte
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
                <Sparkles className="h-3.5 w-3.5 text-sky-400" />
                UX-orientiertes Design mit Fokus auf Conversion
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 active:scale-[0.98]"
              >
                Webdesign-Projekt anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <p className="text-xs text-slate-400 sm:text-sm">
                Teilen Sie uns in 2–3 Sätzen mit, was Sie planen – wir melden
                uns mit einer ersten Einschätzung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCIJA – WARUM WEBDESIGN WICHTIG IST */}
      <section className="border-b border-white/5 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
                Webdesign ist mehr als “schön aussehen”
              </h2>
              <p className="mt-3 text-sm text-slate-300 md:text-base">
                Viele Websites sehen auf den ersten Blick modern aus – doch
                Besucher:innen finden sich nicht zurecht, verlassen die Seite
                schnell oder finden nicht, was sie suchen. Gutes Webdesign
                verbindet visuelle Gestaltung, Struktur und Inhalt zu einem
                klaren Nutzererlebnis.
              </p>
              <p className="mt-3 text-sm text-slate-300 md:text-base">
                Gemeinsam mit Ihnen entwickeln wir ein Webdesign, das Ihre
                Marke widerspiegelt, Vertrauen aufbaut und Ihren wichtigsten
                Zielen dient: mehr Anfragen, mehr Termine oder mehr Verkäufe.
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                  <Sparkles className="h-4 w-4 text-sky-400" />
                  Klarer, moderner Look
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Wir setzen auf zeitloses Design statt kurzlebiger Trends –
                  damit Ihr Auftritt auch in zwei Jahren noch professionell
                  wirkt.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                  <Smartphone className="h-4 w-4 text-sky-400" />
                  Mobile-First &amp; responsive
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Viele Ihrer Besucher:innen kommen über das Smartphone. Wir
                  gestalten Designs, die mobil genauso gut funktionieren wie
                  auf dem Desktop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCIJA – LEISTUNGEN WEBDESIGN */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
              Was umfasst unser Webdesign-Angebot?
            </h2>
            <p className="mt-2 text-sm text-slate-300 md:text-base">
              Wir begleiten Sie von der ersten Idee bis zum fertigen Design –
              und setzen dieses auf Wunsch direkt in einer modernen
              Webentwicklung um.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="flex flex-col rounded-2xl border border-white/10 bg-slate-900 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                <LayoutTemplate className="h-4 w-4 text-sky-400" />
                Webseiten &amp; Landingpages
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Individuelle Layouts für Unternehmensseiten, Landingpages,
                Praxis-Websites oder Portfolio-Seiten – abgestimmt auf Ihre
                Zielgruppe.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-slate-300">
                <li>Startseite, Unterseiten &amp; Navigationskonzept</li>
                <li>Visuelle Hierarchie &amp; Call-to-Action-Elemente</li>
                <li>Design-Elemente für Formulare &amp; Kontakt</li>
              </ul>
            </article>

            <article className="flex flex-col rounded-2xl border border-white/10 bg-slate-900 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                <ImageIcon className="h-4 w-4 text-sky-400" />
                Markenauftritt &amp; Bildsprache
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Ein konsistenter visueller Stil sorgt dafür, dass Ihr Auftritt
                professionell wahrgenommen wird – online wie offline.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-slate-300">
                <li>Farbschema &amp; Typografie</li>
                <li>Bild- und Icon-Stil, Pattern &amp; Module</li>
                <li>Basis für ein kleines Design- oder Brand-Guide</li>
              </ul>
            </article>

            <article className="flex flex-col rounded-2xl border border-white/10 bg-slate-900 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                <PenTool className="h-4 w-4 text-sky-400" />
                UI/UX für Webanwendungen
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Für Dashboards, Portale und individuelle Webanwendungen
                gestalten wir Oberflächen, die komplexe Inhalte leicht
                bedienbar machen.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-slate-300">
                <li>Komponenten-basierte UI-Systeme</li>
                <li>Benutzerflüsse &amp; Navigationskonzepte</li>
                <li>Design für Desktop &amp; komplexe Interfaces</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* SEKCIJA – DESIGNPRINZIPIEN */}
      <section className="border-y border-white/5 bg-slate-900/60">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
              Unsere Prinzipien im Webdesign
            </h2>
            <p className="mt-2 text-sm text-slate-300 md:text-base">
              Unabhängig davon, ob es um eine kleine Website oder eine
              umfangreiche Webapplikation geht – diese Grundsätze leiten jedes
              Design bei SargasWeb.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Klarheit vor Effekten",
                text: "Der Besucher soll sofort verstehen, worum es geht und wohin er klicken soll – ohne Ablenkung durch unnötige Spielereien.",
              },
              {
                title: "Konsistenz & Wiedererkennung",
                text: "Farben, Abstände, Buttons und Typografie folgen einem klaren System, damit der Auftritt ruhig und vertrauenswürdig wirkt.",
              },
              {
                title: "Inhalte im Zentrum",
                text: "Design unterstützt Ihre Botschaft – nicht umgekehrt. Texte, Bilder und Strukturen werden aufeinander abgestimmt.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-5"
              >
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                  <CheckCircle2 className="h-4 w-4 text-sky-400" />
                  {item.title}
                </p>
                <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEKCIJA – SEO + TEXT */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
                Webdesign &amp; SEO gehören zusammen
              </h2>
              <p className="mt-3 text-sm text-slate-300 md:text-base">
                Gutes Webdesign legt die Grundlage für Suchmaschinenoptimierung:
                klare Seitenstrukturen, passende Überschriften, gute Lesbarkeit
                und eine sinnvolle Aufteilung von Inhalten. Dadurch können
                Suchmaschinen Ihre Seite besser verstehen – und Besucher:innen
                finden schneller, was sie suchen.
              </p>
              <p className="mt-3 text-sm text-slate-300 md:text-base">
                Für Unternehmen in der Schweiz – ob lokal in Zürich, im Kanton
                Zürich, in der Deutschschweiz oder darüber hinaus – ist ein
                durchdachtes Webdesign ein wichtiger Baustein für Sichtbarkeit
                und Vertrauen im Netz.
              </p>
            </div>

            <div className="space-y-5 text-sm text-slate-300">
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Arbeiten Sie nach bestehenden Brand-Guidelines?
                </h3>
                <p className="mt-2">
                  Ja, wenn bereits ein Corporate Design vorhanden ist, integrieren
                  wir dieses in das Webdesign. Falls noch kein klares Design
                  existiert, entwickeln wir eine einfache, digitale
                  Designbasis, die später erweitert werden kann.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Übernehmen Sie auch die Umsetzung des Designs?
                </h3>
                <p className="mt-2">
                  Auf Wunsch setzen wir das Webdesign direkt in einer modernen
                  Webentwicklung um – zum Beispiel mit Next.js, React oder
                  WordPress. So vermeiden Sie Reibungsverluste zwischen Design
                  und Umsetzung.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Mit wem arbeiten Sie zusammen?
                </h3>
                <p className="mt-2">
                  Unsere Kunden sind vor allem KMU, Praxen, Beratungen,
                  Agenturen und E-Commerce-Unternehmen, die Wert auf einen
                  professionellen und gleichzeitig pragmatischen Auftritt legen.
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
              Bereit für ein Webdesign, das zu Ihnen passt?
            </h2>
            <p className="mt-3 text-sm text-slate-300 md:text-base">
              Erzählen Sie uns kurz, wie Ihre aktuelle Website aussieht oder
              was Sie neu aufbauen möchten – wir melden uns mit konkreten
              Vorschlägen und dem möglichen Vorgehen.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-2.5 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 active:scale-[0.98]"
              >
                Unverbindliches Gespräch vereinbaren
              </Link>
              <Link
                href="/referenzen"
                className="text-sm text-sky-400 hover:text-sky-300"
              >
                Webdesign-Referenzen ansehen ↗
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
