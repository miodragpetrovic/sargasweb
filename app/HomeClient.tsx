"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  LayoutPanelLeft,
  Code2,
  ShoppingBag,
  Workflow,
  Cpu,
  Target,
  Users2,
  Rocket,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function HomeClient() {
  const pageRef = useRef<HTMLDivElement | null>(null);

  const heroRootRef = useRef<HTMLElement | null>(null);
  const heroBadgeRef = useRef<HTMLDivElement | null>(null);
  const heroTitleRef = useRef<HTMLHeadingElement | null>(null);
  const heroTextRef = useRef<HTMLDivElement | null>(null);
  const heroCtaRef = useRef<HTMLDivElement | null>(null);

  const leistungenRef = useRef<HTMLElement | null>(null);
  const prozessRef = useRef<HTMLElement | null>(null);
  const warumRef = useRef<HTMLElement | null>(null);
  const projekteRef = useRef<HTMLElement | null>(null);
  const ctaRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // HERO animacija (na load)
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
            y: 24,
            duration: 0.7,
          },
          "-=0.1"
        )
        .from(
          heroTextRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          heroCtaRef.current,
          {
            opacity: 0,
            y: 16,
            duration: 0.5,
          },
          "-=0.3"
        );

      // Scroll animacije za ostale sekcije
      const sections = [
        leistungenRef,
        prozessRef,
        warumRef,
        projekteRef,
        ctaRef,
      ];

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
    <div
      ref={pageRef}
      className="bg-slate-950 text-slate-50"
    >
      {/* HERO */}
      <section
        ref={heroRootRef}
        className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 pt-5"
      >
        {/* blur pozadina */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
        </div>

        <div className="mx-auto flex max-w-6xl flex-col items-start px-4 pb-20 pt-24 md:pb-28 md:pt-28">
          <div
            ref={heroBadgeRef}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Webagentur für moderne Unternehmen</span>
          </div>

          <h1
            ref={heroTitleRef}
            className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-4xl lg:text-5xl"
          >
            Wir entwickeln Webseiten, Webanwendungen &amp; Online-Shops,
            <span className="block text-sky-400">
              die messbare Ergebnisse liefern.
            </span>
          </h1>

          <div ref={heroTextRef} className="mt-4 max-w-2xl space-y-4">
            <p className="text-sm text-slate-300 sm:text-base">
              Von der ersten Idee bis zum Launch begleiten wir Sie mit einem
              klaren Prozess, modernem Design und einem Tech-Stack, der auf
              Performance und Skalierbarkeit ausgelegt ist.
            </p>

            <ul className="flex flex-wrap gap-3 text-xs sm:text-sm">
              <li className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-slate-200">
                <Cpu className="h-4 w-4 text-sky-400" />
                Next.js 2025 &amp; moderne Frontend-Stacks
              </li>
              <li className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-slate-200">
                <Target className="h-4 w-4 text-sky-400" />
                Fokus auf Leads, Verkäufe &amp; Branding
              </li>
              <li className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-slate-200">
                <Workflow className="h-4 w-4 text-sky-400" />
                Transparente Preise &amp; klarer Zeitplan
              </li>
            </ul>
          </div>

          <div
            ref={heroCtaRef}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 active:scale-[0.98]"
            >
              Projekt anfragen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/referenzen"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-6 py-2.5 text-sm font-medium text-slate-100 hover:bg-white/5"
            >
              Referenzen ansehen
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-xs text-slate-400 sm:text-sm">
            <div>
              <p className="font-semibold text-slate-100">50+ Launches</p>
              <p>Webseiten, Shops &amp; individuelle Lösungen.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-100">100% Fokus</p>
              <p>Auf Strategie, UX und Conversion.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-100">Langfristige Partner</p>
              <p>Support, Weiterentwicklung &amp; Monitoring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCIJA 1 – LEISTUNGEN */}
      <section
        ref={leistungenRef}
        className="border-y border-white/5 bg-slate-950"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-semibold text-slate-50 md:text-3xl">
                <Workflow className="h-6 w-6 text-sky-400" />
                Leistungen
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300 md:text-base">
                Alles, was Sie für einen professionellen digitalen Auftritt
                benötigen – aus einer Hand.
              </p>
            </div>
            <p className="flex items-center gap-2 text-xs text-slate-400 md:text-sm">
              <Rocket className="h-4 w-4 text-sky-400" />
              Strategie · Design · Entwicklung · Betreuung
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-5 shadow-md shadow-black/30">
              <div className="flex items-center gap-2">
                <LayoutPanelLeft className="h-5 w-5 text-sky-400" />
                <h3 className="text-lg font-semibold text-slate-50">
                  Webseiten
                </h3>
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Moderne, responsive Unternehmens-Webseiten, optimiert für
                Geschwindigkeit, SEO und klare Kommunikation Ihrer Marke.
              </p>
              <ul className="mt-4 space-y-1 text-sm text-slate-300">
                <li>• Landingpages &amp; Corporate Sites</li>
                <li>• SEO-Basis &amp; Performance-Optimierung</li>
                <li>• Einfache Pflege über CMS</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900 p-5 shadow-md shadow-black/30">
              <div className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-sky-400" />
                <h3 className="text-lg font-semibold text-slate-50">
                  Webanwendungen
                </h3>
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Individuelle Portale, Dashboards und interne Tools, die
                Geschäftsprozesse vereinfachen und automatisieren.
              </p>
              <ul className="mt-4 space-y-1 text-sm text-slate-300">
                <li>• Benutzerkonten &amp; Rollen</li>
                <li>• API-Integrationen</li>
                <li>• Skalierbare Architektur</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900 p-5 shadow-md shadow-black/30">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-sky-400" />
                <h3 className="text-lg font-semibold text-slate-50">
                  Online-Shops
                </h3>
              </div>
              <p className="mt-2 text-sm text-slate-300">
                E-Commerce-Lösungen, die Ihre Produkte ins beste Licht rücken
                und den Checkout so einfach wie möglich machen.
              </p>
              <ul className="mt-4 space-y-1 text-sm text-slate-300">
                <li>• Conversion-orientiertes Design</li>
                <li>• Flexible Produkt- &amp; Kategoriensysteme</li>
                <li>• Zahlungs- &amp; Versandintegrationen</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCIJA 2 – PROZESS */}
      <section
        ref={prozessRef}
        className="bg-slate-950"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mb-10 max-w-2xl">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-slate-50 md:text-3xl">
              <Workflow className="h-6 w-6 text-sky-400" />
              Unser Prozess
            </h2>
            <p className="mt-2 text-sm text-slate-300 md:text-base">
              Klar strukturiert, transparent und ohne unnötige Schleifen – damit
              Ihr Projekt planbar und stressfrei bleibt.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                title: "Analyse & Beratung",
                text: "Wir klären Ziele, Zielgruppen und Anforderungen – und empfehlen eine klare Strategie.",
                icon: Target,
              },
              {
                title: "Konzeption & Design",
                text: "Wireframes, UI-Design und Content-Struktur, abgestimmt auf Ihre Marke.",
                icon: LayoutPanelLeft,
              },
              {
                title: "Entwicklung",
                text: "Sauberer Code mit Next.js, responsive Layouts und Integrationen.",
                icon: Code2,
              },
              {
                title: "Launch & Growth",
                text: "Testing, Livegang und auf Wunsch laufende Optimierung & Betreuung.",
                icon: Rocket,
              },
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="relative rounded-2xl border border-white/10 bg-slate-900 p-5"
                >
                  <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-sky-400" />
                    <h3 className="text-sm font-semibold text-slate-50">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEKCIJA 3 – WARUM WIR */}
      <section
        ref={warumRef}
        className="border-y border-white/5 bg-slate-900/60"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mb-10 max-w-2xl">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-slate-50 md:text-3xl">
              <Users2 className="h-6 w-6 text-sky-400" />
              Warum mit uns arbeiten?
            </h2>
            <p className="mt-2 text-sm text-slate-300 md:text-base">
              Technisch stark, strategisch denkend und ehrlich in der Beratung.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
              <div className="flex items-center gap-2">
                <Cpu className="h-4 w-4 text-sky-400" />
                <p className="text-sm font-semibold text-slate-50">
                  Moderne Technologie
                </p>
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Wir setzen auf Next.js, TypeScript und aktuelle Best Practices –
                keine veralteten Systeme, die in einem Jahr wieder ersetzt
                werden müssen.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-sky-400" />
                <p className="text-sm font-semibold text-slate-50">
                  Conversion im Fokus
                </p>
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Design ist nicht nur schön, sondern soll verkaufen: klare
                Call-to-Actions, Struktur und Nutzerführung.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
              <div className="flex items-center gap-2">
                <Users2 className="h-4 w-4 text-sky-400" />
                <p className="text-sm font-semibold text-slate-50">
                  Direkter Kontakt
                </p>
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Sie sprechen direkt mit den Menschen, die an Ihrem Projekt
                arbeiten – ohne unnötige Zwischenstationen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCIJA 4 – PROJEKTE / REFERENZEN */}
      <section
        ref={projekteRef}
        className="bg-slate-950"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-semibold text-slate-50 md:text-3xl">
                <LayoutPanelLeft className="h-6 w-6 text-sky-400" />
                Ausgewählte Projekte
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300 md:text-base">
                Ein kurzer Einblick in Umsetzungen für unterschiedliche Branchen.
              </p>
            </div>
            <Link
              href="/referenzen"
              className="inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300"
            >
              Alle Referenzen ansehen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col rounded-2xl border border-white/10 bg-slate-900 p-4">
              <div className="h-32 rounded-xl bg-gradient-to-br from-sky-500/60 via-slate-700 to-slate-900" />
              <div className="mt-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                  <Target className="h-4 w-4 text-sky-400" />
                  B2B Industrie-Webseite
                </p>
                <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                  Relaunch mit klarer Produktstruktur, mehr Anfragen über
                  Kontaktformulare und bessere Auffindbarkeit.
                </p>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl border border-white/10 bg-slate-900 p-4">
              <div className="h-32 rounded-xl bg-gradient-to-br from-violet-500/60 via-slate-700 to-slate-900" />
              <div className="mt-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                  <Code2 className="h-4 w-4 text-sky-400" />
                  SaaS Webanwendung
                </p>
                <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                  Dashboard für Kunden-Management mit Login-Bereich, Rollen und
                  API-Anbindung.
                </p>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl border border-white/10 bg-slate-900 p-4">
              <div className="h-32 rounded-xl bg-gradient-to-br from-emerald-500/60 via-slate-700 to-slate-900" />
              <div className="mt-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                  <ShoppingBag className="h-4 w-4 text-sky-400" />
                  Fashion Online-Shop
                </p>
                <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                  Conversion-orientiertes Design, optimierter Checkout und
                  Integration von Zahlungs- &amp; Versanddienstleistern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCIJA 5 – CTA / KONTAKT */}
      <section
        ref={ctaRef}
        className="border-t border-white/5 bg-slate-900"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="flex items-center justify-center gap-2 text-2xl font-semibold text-slate-50 md:text-3xl">
              <Rocket className="h-6 w-6 text-sky-400" />
              Bereit für Ihr nächstes Projekt?
            </h2>
            <p className="mt-3 text-sm text-slate-300 md:text-base">
              Erzählen Sie uns kurz, was Sie planen – wir melden uns mit ersten
              Ideen, einer groben Aufwandsschätzung und dem weiteren Vorgehen.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-2.5 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 active:scale-[0.98]"
              >
                Unverbindliches Beratungsgespräch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="mt-6 text-xs text-slate-400 sm:text-sm">
              <p>Bevorzugen Sie E-Mail? Schreiben Sie uns jederzeit.</p>
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
