"use client";

import Link from "next/link";
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

const projects = [
  {
    id: 1,
    title: "B2B Industrie-Webseite",
    type: "website" as ProjectType,
    industry: "Industrie · B2B",
    summary:
      "Relaunch einer Corporate Website mit klarer Produktstruktur, verbesserten Kontaktmöglichkeiten und optimierter Performance.",
    result: "+42% mehr qualifizierte Anfragen über Kontaktformulare",
    tags: ["Corporate Website", "SEO-Optimierung", "Lead-Generierung"],
    color: "from-sky-500/60 via-slate-700 to-slate-900",
  },
  {
    id: 2,
    title: "SaaS Webanwendung & Dashboard",
    type: "webapp" as ProjectType,
    industry: "Software · SaaS",
    summary:
      "Entwicklung einer Webanwendung mit Login-Bereich, Rollenverwaltung und einem Dashboard für Kunden-Management.",
    result: "Zentralisierte Datenbasis & deutlich weniger manueller Aufwand",
    tags: ["Web-App", "Dashboard", "Rollen & Berechtigungen"],
    color: "from-violet-500/60 via-slate-700 to-slate-900",
  },
  {
    id: 3,
    title: "Fashion Online-Shop",
    type: "shop" as ProjectType,
    industry: "E-Commerce · Fashion",
    summary:
      "Konzeption und Umsetzung eines modernen Online-Shops mit Fokus auf User Experience und Conversion-Rate.",
    result: "+28% höherer Umsatz nach Relaunch im Vergleich zum Vorjahr",
    tags: ["E-Commerce", "UX-Design", "Checkout-Optimierung"],
    color: "from-emerald-500/60 via-slate-700 to-slate-900",
  },
  {
    id: 4,
    title: "Dienstleistungs-Portal",
    type: "webapp" as ProjectType,
    industry: "Dienstleistungen",
    summary:
      "Portal für Terminbuchung und Kundenkommunikation, inklusive automatisierten E-Mails und Self-Service-Bereich.",
    result: "Deutliche Reduktion von Rückfragen per E-Mail & Telefon",
    tags: ["Portal", "Automatisierung", "Self-Service"],
    color: "from-sky-400/60 via-slate-700 to-slate-900",
  },
  {
    id: 5,
    title: "Landingpage-Kampagne",
    type: "website" as ProjectType,
    industry: "Kampagnen · Marketing",
    summary:
      "Mehrere Landingpages für Performance-Kampagnen mit A/B-Tests und klaren Conversion-Zielen.",
    result: "+35% Conversion-Rate im Vergleich zur alten Kampagnenseite",
    tags: ["Landingpages", "A/B-Testing", "Performance-Marketing"],
    color: "from-fuchsia-500/60 via-slate-700 to-slate-900",
  },
];

const filterOptions: { value: ProjectType; label: string }[] = [
  { value: "all", label: "Alle" },
  { value: "website", label: "Webseiten" },
  { value: "webapp", label: "Webanwendungen" },
  { value: "shop", label: "Online-Shops" },
];

export function ReferenzenClient() {
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
    <div ref={pageRef} className="bg-slate-950 text-slate-50">
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
            <span>Ausgewählte Referenzen &amp; Projekte</span>
          </div>

          <h1
            ref={heroTitleRef}
            className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-4xl lg:text-5xl"
          >
            Digitale Projekte, die aus Besuchern Kunden machen.
          </h1>

          <p
            ref={heroTextRef}
            className="mt-4 max-w-3xl text-sm text-slate-300 sm:text-base"
          >
            Ein Auszug aus Projekten, bei denen wir Unternehmen geholfen haben,
            ihre Online-Präsenz zu schärfen, Prozesse zu digitalisieren und
            mehr Anfragen oder Verkäufe zu generieren – von der schlanken
            Landingpage bis zur komplexen Webanwendung.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-300 sm:text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
              <Users2 className="h-4 w-4 text-sky-400" />
              B2B, SaaS, E-Commerce &amp; mehr
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
              <TrendingUp className="h-4 w-4 text-sky-400" />
              Fokus auf messbare Ergebnisse
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
              <Globe2 className="h-4 w-4 text-sky-400" />
              Projekte deutschsprachig &amp; international
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
                Referenzen nach Bereich
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300 md:text-base">
                Filtern Sie Projekte nach Website, Webanwendung oder
                Online-Shop – oder lassen Sie sich alle anzeigen.
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
                <div
                  className={`h-28 rounded-xl bg-gradient-to-br ${project.color}`}
                />
                <div className="mt-4 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-400">
                    {project.industry}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-slate-50 sm:text-base">
                    {project.title}
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
              Für diesen Filter gibt es aktuell keine Referenzen.
            </p>
          )}
        </div>
      </section>

      {/* SEKCIJA 2 – HIGHLIGHT / WIE WIR ERGEBNISSE ERZIELEN */}
      <section
        ref={highlightRef}
        className="bg-slate-950"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-semibold text-slate-50 md:text-3xl">
                <Target className="h-6 w-6 text-sky-400" />
                Wie aus Projekten echte Ergebnisse werden
              </h2>
              <p className="mt-2 text-sm text-slate-300 md:text-base">
                Gute Referenzen entstehen nicht zufällig. Hinter jedem Projekt
                steckt ein klarer Prozess und der Fokus auf die richtigen
                Kennzahlen.
              </p>

              <div className="mt-6 space-y-4 text-sm text-slate-300">
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <p className="flex items-center gap-2 font-semibold text-slate-50">
                    <Target className="h-4 w-4 text-sky-400" />
                    Klare Ziele statt „mal schauen“
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    Vor jedem Projekt definieren wir gemeinsam, was ein
                    Erfolg ist – mehr Anfragen, mehr Verkäufe, bessere
                    Prozesse oder Branding-Ziele.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <p className="flex items-center gap-2 font-semibold text-slate-50">
                    <TrendingUp className="h-4 w-4 text-sky-400" />
                    Design &amp; Technik mit Conversion-Fokus
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    Wir kombinieren klares Design mit technischen Best
                    Practices – von Pagespeed über SEO-Basics bis zur
                    Tracking-Integration.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <p className="flex items-center gap-2 font-semibold text-slate-50">
                    <Users2 className="h-4 w-4 text-sky-400" />
                    Zusammenarbeit auf Augenhöhe
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    Sie sprechen direkt mit den Menschen, die an Ihrem Projekt
                    arbeiten – transparent, ehrlich und ohne unnötige
                    Fachbegriffe.
                  </p>
                </div>
              </div>
            </div>

            {/* Mini „Case Study“ blok */}
            <aside className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-black/40">
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-400">
                Beispiel Case Study
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-50 sm:text-base">
                Relaunch einer B2B-Website mit Fokus auf Leads
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Ein Industrieunternehmen wollte weg von einer in die Jahre
                gekommenen Website hin zu einem klaren Auftritt mit Fokus auf
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
      <section
        ref={ctaRef}
        className="border-t border-white/5 bg-slate-900"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
              Möchten Sie ein ähnliches Projekt umsetzen?
            </h2>
            <p className="mt-3 text-sm text-slate-300 md:text-base">
              Ob neue Webseite, Webanwendung oder Online-Shop – erzählen Sie uns
              kurz, was Sie planen. Wir zeigen Ihnen gerne, was möglich ist und
              mit welchen Ergebnissen Sie rechnen können.
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
              <p>Oder senden Sie uns direkt eine E-Mail:</p>
              <p className="mt-1 font-mono text-slate-200">
                kontakt@ihre-agentur.de
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
