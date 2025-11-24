"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  LayoutPanelLeft,
  Code2,
  ShoppingBag,
  Filter,
  ArrowRight,
  Target,
  Users2,
  TrendingUp,
  Globe2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type ProjectType = "all" | "website" | "webapp" | "shop";

interface Project {
  id: number;
  title: string;
  type: ProjectType;
  industry: string;
  summary: string;
  result: string;
  tags: string[];
  color: string;
  image?: string; // slika iz /public
  url?: string;   // opcioni link
}

const projects: Project[] = [
  {
    id: 1,
    title: "Online-Medikamentenbestellung",
    type: "webapp",
    industry: "Gesundheit · Apotheke",
    summary:
      "Individuelles Bestellformular für Dauermedikamente auf WordPress-Basis – inkl. dynamischen Feldern, Validierung und strukturierter Übermittlung.",
    result:
      "Deutlich vereinfachter Bestellprozess & weniger Telefonaufwand für das Apotheken-Team.",
    tags: ["WordPress & PHP", "Individuelles Formular", "Praxisprojekt"],
    color: "from-rose-400/80 via-rose-500/60 to-rose-900/90",
    image: "/img/Medikamentenbestellung.png",
    url: "https://medikamenten.facodaqo.cyon.site/",
  },
  {
    id: 2,
    title: "EventExclusive – Webanwendung für Event-Locations",
    type: "webapp",
    industry: "Events · Sargas IT GmbH",
    summary:
      "Webanwendung für Event-Locations zur Verwaltung von Anfragen, Verfügbarkeiten und Buchungen – mit klarer Übersicht und moderner Oberfläche.",
    result:
      "Zentralisierte Verwaltung von Event-Locations & effizientere Bearbeitung von Anfragen.",
    tags: ["Web-App", "Event-Plattform", "next.js", "Tailwind CSS", "MongoDB"],
    color: "from-violet-500/60 via-slate-700 to-slate-900",
    image: "/img/event-exclusive.png", // screenshot EventExclusive
    url: "https://eventexclusive-com.vercel.app/",
  },
  {
    id: 3,
    title: "Fashion Online-Shop",
    type: "shop",
    industry: "E-Commerce · Fashion · ANNAVI",
    summary:
      "Konzeption und Umsetzung eines modernen Online-Shops mit Fokus auf User Experience und Conversion-Rate.",
    result: "+28% höherer Umsatz nach Relaunch im Vergleich zum Vorjahr.",
    tags: ["E-Commerce", "UX-Design", "Checkout-Optimierung"],
    color: "from-emerald-500/60 via-slate-700 to-slate-900",
    image: "/img/annavi.png",
    url: "https://annavi.fr/",
  },
  {
  id: 4,
  title: "Autoportal & Fahrzeugbörse",
  type: "website",
  industry: "Automobil · Fahrzeughandel",
  summary:
    "Webportal für den Verkauf von Fahrzeugen, umgesetzt mit WordPress und PHP – inklusive Fahrzeugübersicht, Filtermöglichkeiten und Kontaktformularen.",
  result:
    "Mehr qualifizierte Anfragen für Fahrzeuge & einfachere Verwaltung der Inserate.",
  tags: ["WordPress & PHP", "Auto-Portal", "Fahrzeugbörse"],
  color: "from-sky-400/60 via-slate-700 to-slate-900",
  image: "/img/autogrid.png",
  url: "https://www.autogrid.ch/",
  },

  {
  id: 5,
  title: "Ivan Travel – OnePage Website",
  type: "website",
  industry: "Reise · Tourismus",
  summary:
    "Mehrsprachige OnePage-Website (2 Sprachen) für ein Reiseunternehmen, umgesetzt mit Custom PHP, Bootstrap und JavaScript – inklusive Angebotssektionen, Bildergalerie und Kontaktbereich.",
  result:
    "Moderner Auftritt, bessere Darstellung der Reiseangebote und mehr qualifizierte Anfragen über die Website.",
  tags: ["Custom PHP", "Bootstrap", "JavaScript", "OnePage", "Mehrsprachig"],
  color: "from-fuchsia-500/60 via-slate-700 to-slate-900",
  image: "/img/ivan-travel-gmbh.png", 
  url: "https://ivantravel.ch/",
},

{
  id: 6,
  title: "Hausarztpraxis Au-Wädenswil – Praxiswebsite",
  type: "website",
  industry: "Gesundheit · Hausarztpraxis",
  summary:
    "Moderne Praxis-Website für eine Hausarztpraxis in Au-Wädenswil, umgesetzt als individuelle OnePage-Lösung mit PHP, Bootstrap, JavaScript und AOS-Animationen. Übersichtliche Darstellung von Leistungen, Team, Öffnungszeiten und Kontakt.",
  result:
    "Klarer, vertrauenswürdiger Online-Auftritt, bessere Auffindbarkeit der Praxisinformationen und mehr Online-Anfragen.",
  tags: [
    "Custom PHP",
    "Bootstrap",
    "JavaScript",
    "AOS Animations",
    "Praxiswebsite",
  ],
  color: "from-teal-400/60 via-slate-700 to-slate-900",
  image: "/img/hausarztpraxis-au-waedenswil.png",
  url: "https://hausarztpraxis-au-waedenswil.ch/",
},

{
  id: 7,
  title: "Arztpraxis Dr. Lazić – Praxiswebsite",
  type: "website",
  industry: "Gesundheit · Arztpraxis",
  summary:
    "Praxis-Website für die Arztpraxis Dr. Lazić, umgesetzt mit WordPress, PHP und JavaScript. Übersichtlich strukturierte Darstellung von Leistungen, Sprechzeiten, Standort und Kontaktmöglichkeiten – optimiert für mobile Endgeräte.",
  result:
    "Moderner und vertrauenswürdiger Online-Auftritt mit klarer Informationsstruktur und vereinfachter Kontaktaufnahme für Patient:innen.",
  tags: [
    "WordPress",
    "PHP",
    "JavaScript",
    "Praxiswebsite",
    "Responsive Design",
  ],
  color: "from-sky-500/60 via-slate-700 to-slate-900",
  image: "/img/arztpraxis.png",
  url: "https://praxisdrlazic.ch/",
},

{
  id: 8,
  title: "Vito Automobile GmbH – Autoankauf & Fahrzeugverkauf",
  type: "website",
  industry: "Automobil · Autoankauf & Verkauf",
  summary:
    "Unternehmens-Website für Vito Automobile GmbH, umgesetzt mit WordPress, PHP und JavaScript. Inklusive individuell entwickeltem Formular für Autoankauf, Fahrzeugübersichten und Kontaktmöglichkeiten.",
  result:
    "Mehr qualifizierte Anfragen für den Autoankauf und eine professionelle Online-Präsenz für den Fahrzeugverkauf.",
  tags: [
    "WordPress",
    "PHP",
    "JavaScript",
    "Autoankauf Formular",
    "Fahrzeughandel",
  ],
  color: "from-amber-400/60 via-slate-700 to-slate-900",
  image: "/img/vito-automobile.png",
  url: "https://vito-automobile.ch/",
},

{
  id: 9,
  title: "Fahrschule Stambo – Website für Fahrschule",
  type: "website",
  industry: "Ausbildung · Fahrschule",
  summary:
    "Moderne Website für die Fahrschule Stambo, umgesetzt mit WordPress, PHP und JavaScript. Übersichtliche Darstellung von Führerscheinkategorien, Preisen, Standorten und Kontaktmöglichkeiten – inklusive Formular für Kurs- und Fahrstundenanfragen.",
  result:
    "Professioneller Online-Auftritt, mehr Online-Anfragen für Fahrstunden und bessere Übersicht für Fahrschüler:innen.",
  tags: [
    "WordPress",
    "PHP",
    "JavaScript",
    "Fahrschule Website",
    "Online-Anfragen",
  ],
  color: "from-indigo-500/60 via-slate-700 to-slate-900",
  image: "/img/fahrschule-stambo.png",
  url: "https://www.fahrschulestambo.ch/",
},


];

const filterOptions: { value: ProjectType; label: string }[] = [
  { value: "all", label: "Alle" },
  { value: "website", label: "Webseiten" },
  { value: "webapp", label: "Webanwendungen" },
  { value: "shop", label: "Online-Shops" },
];

export function PortfolioClient() {
  const pageRef = useRef<HTMLDivElement | null>(null);

  const heroRef = useRef<HTMLElement | null>(null);
  const heroBadgeRef = useRef<HTMLDivElement | null>(null);
  const heroTitleRef = useRef<HTMLHeadingElement | null>(null);
  const heroTextRef = useRef<HTMLParagraphElement | null>(null);

  const filterSectionRef = useRef<HTMLElement | null>(null);
  const highlightRef = useRef<HTMLElement | null>(null);
  const ctaRef = useRef<HTMLElement | null>(null);

  const [activeFilter, setActiveFilter] = useState<ProjectType>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // HERO animacija
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(heroBadgeRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.4,
      })
        .from(
          heroTitleRef.current,
          {
            opacity: 0,
            y: 26,
            duration: 0.6,
          },
          "-=0.1"
        )
        .from(
          heroTextRef.current,
          {
            opacity: 0,
            y: 18,
            duration: 0.5,
          },
          "-=0.3"
        );

      // Scroll animacije za sekcije
      const sections = [filterSectionRef, highlightRef, ctaRef];

      sections.forEach((ref) => {
        if (!ref.current) return;

        gsap.from(ref.current, {
          opacity: 0,
          y: 40,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-slate-950 text-slate-50 pt-5">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
      >
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-16 pt-16 md:pb-20 md:pt-20">
          <div
            ref={heroBadgeRef}
            className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-xs text-sky-300"
          >
            <LayoutPanelLeft className="h-3.5 w-3.5" />
            <span>Portfolio &amp; ausgewählte Webprojekte</span>
          </div>

          <h1
            ref={heroTitleRef}
            className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-4xl lg:text-5xl"
          >
            Portfolio – Webseiten, Webanwendungen &amp; Online-Shops,
            die für unsere Kund:innen Ergebnisse bringen.
          </h1>

          <p
            ref={heroTextRef}
            className="mt-4 max-w-3xl text-sm text-slate-300 sm:text-base"
          >
            Ein Einblick in Projekte von SargasWeb und Sargas IT GmbH: von
            individuellen Formular-Lösungen über komplette Webauftritte bis zu
            spezialisierten Webanwendungen wie EventExclusive.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-300 sm:text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
              <Users2 className="h-4 w-4 text-sky-400" />
              KMU, Praxen, E-Commerce &amp; Events
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
              <TrendingUp className="h-4 w-4 text-sky-400" />
              Fokus auf messbare Ergebnisse
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
              <Globe2 className="h-4 w-4 text-sky-400" />
              Projekte in der ganzen DACH-Region
            </span>
          </div>
        </div>
      </section>

      {/* SEKCIJA 1 – FILTER + GRID */}
      <section
        ref={filterSectionRef}
        className="border-y border-white/5 bg-slate-950"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-semibold text-slate-50 md:text-3xl">
                <Filter className="h-6 w-6 text-sky-400" />
                Portfolio nach Bereich
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300 md:text-base">
                Filtern Sie unser Portfolio nach Webseiten, Webanwendungen oder
                Online-Shops – oder lassen Sie sich alle Projekte anzeigen.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
              {filterOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setActiveFilter(opt.value)}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 transition ${
                    activeFilter === opt.value
                      ? "border-sky-500 bg-sky-500/20 text-sky-200"
                      : "border-white/10 bg-slate-900 text-slate-200 hover:bg-white/5"
                  }`}
                >
                  {opt.value === "website" && (
                    <LayoutPanelLeft className="h-4 w-4" />
                  )}
                  {opt.value === "webapp" && <Code2 className="h-4 w-4" />}
                  {opt.value === "shop" && <ShoppingBag className="h-4 w-4" />}
                  {opt.value === "all" && <LayoutPanelLeft className="h-4 w-4" />}
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="flex flex-col rounded-2xl border border-white/10 bg-slate-900 p-4 shadow-md shadow-black/30"
              >
                {/* Slika ili gradient */}
                <div className="relative h-28 w-full overflow-hidden rounded-xl bg-slate-900">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  ) : (
                    <div
                      className={`h-full w-full bg-gradient-to-br ${project.color}`}
                    />
                  )}
                </div>

                <div className="mt-4 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-400">
                    {project.industry}
                  </p>

                  <h3 className="mt-1 text-sm font-semibold text-slate-50 sm:text-base">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 hover:text-sky-300"
                      >
                        {project.title}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>

                  <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                    {project.summary}
                  </p>

                  <p className="mt-3 flex items-center gap-2 text-xs font-medium text-emerald-300">
                    <TrendingUp className="h-4 w-4" />
                    {project.result}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-300">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/5 px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="mt-6 text-sm text-slate-400">
              Für diesen Filter gibt es aktuell keine Projekte im Portfolio.
            </p>
          )}
        </div>
      </section>

      {/* SEKCIJA 2 – WIE WIR ARBEITEN */}
      <section ref={highlightRef} className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-semibold text-slate-50 md:text-3xl">
                <Target className="h-6 w-6 text-sky-400" />
                Wie wir Projekte im Portfolio umsetzen
              </h2>
              <p className="mt-2 text-sm text-slate-300 md:text-base">
                Hinter jedem Projekt im Portfolio steckt ein klarer Prozess: von
                der Analyse über Konzeption und Design bis zur technischen
                Umsetzung und Optimierung.
              </p>

              <div className="mt-6 space-y-4 text-sm text-slate-300">
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <p className="flex items-center gap-2 font-semibold text-slate-50">
                    <Target className="h-4 w-4 text-sky-400" />
                    Klare Ziele &amp; Fokus
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    Zu Beginn klären wir gemeinsam, was das Projekt erreichen
                    soll: mehr Anfragen, Verkäufe, bessere Prozesse oder
                    Sichtbarkeit – und richten die Umsetzung danach aus.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <p className="flex items-center gap-2 font-semibold text-slate-50">
                    <TrendingUp className="h-4 w-4 text-sky-400" />
                    Design &amp; Technik im Gleichgewicht
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    Wir verbinden UX-Design, moderne Frontend-Entwicklung und
                    stabile Backends – damit Webprojekte nicht nur gut
                    aussehen, sondern auch performen.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <p className="flex items-center gap-2 font-semibold text-slate-50">
                    <Users2 className="h-4 w-4 text-sky-400" />
                    Direkter Kontakt
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    Sie arbeiten direkt mit den Menschen, die Ihr Projekt
                    planen, gestalten und entwickeln – ohne unnötige
                    Zwischenstationen.
                  </p>
                </div>
              </div>
            </div>

            {/* Mini Case Study */}
            <aside className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-black/40">
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-400">
                Beispiel aus dem Portfolio
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-50 sm:text-base">
                Relaunch einer B2B-Website mit Fokus auf Leads
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Ein Industrieunternehmen wollte weg von einer veralteten Website
                hin zu einem klaren, modernen Auftritt mit Fokus auf qualifizierte
                Produktanfragen.
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                <li>• Neukonzeption von Struktur &amp; Content</li>
                <li>• Technischer Relaunch mit Next.js</li>
                <li>• Optimierte Kontaktstrecken &amp; CTAs</li>
              </ul>
              <p className="mt-4 flex items-center gap-2 text-xs font-medium text-emerald-300">
                <TrendingUp className="h-4 w-4" />
                +42% mehr qualifizierte Anfragen innerhalb der ersten 3 Monate
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* SEKCIJA 3 – CTA */}
      <section ref={ctaRef} className="border-t border-white/5 bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
              Möchten Sie ein Projekt wie in unserem Portfolio starten?
            </h2>
            <p className="mt-3 text-sm text-slate-300 md:text-base">
              Ob neue Website, Webanwendung oder Online-Shop – schildern Sie uns
              kurz Ihre Ausgangssituation. Wir melden uns mit Ideen und einer
              ersten Einschätzung.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-2.5 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 active:scale-[0.98]"
              >
                Projektanfrage starten
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="mt-6 text-xs text-slate-400 sm:text-sm">
              <p>Oder direkt per E-Mail:</p>
              <p className="mt-1 font-mono text-slate-200">
                info@sargasweb.ch
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
