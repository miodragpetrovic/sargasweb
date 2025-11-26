"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Image from "next/image";
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

        <div className="mx-auto max-w-6xl px-4 pb-20 pt-24 md:pb-28 md:pt-28">
          <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
            {/* LEVO – tekst */}
            <div className="max-w-3xl">
              <div
                ref={heroBadgeRef}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Webagentur für moderne Unternehmen</span>
              </div>

              <h1
                ref={heroTitleRef}
                className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-4xl lg:text-5xl"
              >
                Wir entwickeln Webseiten, Webanwendungen &{" "}
                <span className="whitespace-nowrap">Online-Shops,</span>
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
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>Next.js 2025 &amp; moderne Frontend-Stacks</span>
                  </li>
                  <li className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-slate-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>Fokus auf Leads, Verkäufe &amp; Branding</span>
                  </li>
                  <li className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-slate-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>Transparente Preise &amp; klarer Zeitplan</span>
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
                  <span className="ml-2 text-base leading-none">↗</span>
                </Link>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-6 py-2.5 text-sm font-medium text-slate-100 hover:bg-white/5"
                >
                  Portfolio ansehen
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

            {/* DESNO – custom webapp + design vizual (bez ikonica) */}
            <div className="w-full max-w-sm md:max-w-xs lg:max-w-sm">
              <div className="relative mx-auto h-64 w-full max-w-sm">
                {/* Pozadinski “window” za osjećaj slojeva */}
                <div className="absolute left-6 top-0 h-40 w-40 -rotate-3 rounded-3xl border border-slate-800 bg-slate-950/60" />

                {/* Glavna web-app kartica */}
                <div className="absolute inset-4 rounded-3xl border border-white/10 bg-slate-950/90 p-4 shadow-[0_22px_55px_rgba(0,0,0,0.9)]">
                  {/* “Browser” header */}
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-slate-600" />
                      <span className="h-2 w-2 rounded-full bg-slate-600/70" />
                      <span className="h-2 w-2 rounded-full bg-slate-600/40" />
                    </div>
                    <span className="truncate">sargasweb.app · Dashboard</span>
                  </div>

                  {/* Top navigation tabs */}
                  <div className="mt-3 flex gap-2 text-[10px]">
                    <span className="rounded-full bg-sky-500/20 px-3 py-1 text-sky-200">
                      Dashboard
                    </span>
                    <span className="rounded-full bg-slate-800/80 px-3 py-1 text-slate-300">
                      Seiten
                    </span>
                    <span className="hidden rounded-full bg-slate-800/80 px-3 py-1 text-slate-400 sm:inline">
                      Analytics
                    </span>
                  </div>

                  {/* Layout grid: jasno “web app” + “layout design” */}
                  <div className="mt-4 grid grid-cols-5 gap-3">
                    {/* Main content area */}
                    <div className="col-span-3 space-y-2 rounded-2xl bg-slate-900/80 p-3">
                      <div className="flex justify-between text-[10px] text-slate-300">
                        <span>Landingpage</span>
                        <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9px] text-emerald-300">
                          live
                        </span>
                      </div>
                      <div className="mt-1 space-y-1.5">
                        <div className="h-2 w-24 rounded-full bg-slate-700" />
                        <div className="h-1.5 w-full rounded-full bg-sky-500/70" />
                        <div className="flex gap-1.5">
                          <span className="h-10 flex-1 rounded-xl bg-slate-800" />
                          <span className="h-10 flex-1 rounded-xl bg-slate-800/80" />
                        </div>
                        <div className="flex gap-1.5">
                          <span className="h-1.5 flex-1 rounded-full bg-slate-700" />
                          <span className="h-1.5 flex-1 rounded-full bg-slate-700/80" />
                        </div>
                      </div>
                    </div>

                    {/* Sidebar – navigacija + CTA blok */}
                    <div className="col-span-2 flex flex-col justify-between rounded-2xl bg-slate-900/70 p-3">
                      <div className="space-y-1.5 text-[9px] text-slate-300">
                        <div className="h-1.5 w-16 rounded-full bg-slate-700" />
                        <div className="h-1.5 w-12 rounded-full bg-slate-700/80" />
                        <div className="h-1.5 w-20 rounded-full bg-slate-700/70" />
                        <div className="h-1.5 w-10 rounded-full bg-slate-700/60" />
                      </div>
                      <div className="mt-3 space-y-1">
                        <div className="h-1 w-16 rounded-full bg-slate-600" />
                        <div className="h-7 rounded-xl bg-gradient-to-br from-sky-500/70 via-sky-500/40 to-violet-500/60" />
                      </div>
                    </div>
                  </div>

                  {/* Donji red: Web-App KPIs */}
                  <div className="mt-4 grid grid-cols-3 gap-2 text-[9px] text-slate-300">
                    <div className="space-y-1 rounded-xl bg-slate-900/70 p-2">
                      <p className="text-slate-400">Conversion</p>
                      <p className="text-sm font-semibold text-sky-300">+37%</p>
                      <div className="h-1.5 w-full rounded-full bg-slate-800">
                        <div className="h-1.5 w-[70%] rounded-full bg-sky-500/80" />
                      </div>
                    </div>
                    <div className="space-y-1 rounded-xl bg-slate-900/70 p-2">
                      <p className="text-slate-400">Pagespeed</p>
                      <p className="text-sm font-semibold text-emerald-300">98</p>
                      <div className="h-1.5 w-full rounded-full bg-slate-800">
                        <div className="h-1.5 w-[88%] rounded-full bg-emerald-400/80" />
                      </div>
                    </div>
                    <div className="space-y-1 rounded-xl bg-slate-900/70 p-2">
                      <p className="text-slate-400">Bounce Rate</p>
                      <p className="text-sm font-semibold text-slate-200">-24%</p>
                      <div className="flex gap-1.5">
                        <span className="h-1.5 flex-1 rounded-full bg-slate-700" />
                        <span className="h-1.5 flex-1 rounded-full bg-slate-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gornja mala pločica – “Design System / Colors” */}
                <div className="absolute -top-4 left-0 w-40 -translate-x-2 rounded-2xl border border-slate-700/60 bg-slate-900/95 p-3 text-[9px] text-slate-200 backdrop-blur">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-300">
                    Design System
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="h-5 w-5 rounded-full bg-sky-500" />
                      <span className="h-5 w-5 rounded-full bg-violet-500" />
                      <span className="h-5 w-5 rounded-full bg-emerald-400" />
                      <span className="h-5 w-5 rounded-full bg-slate-200" />
                    </div>
                  </div>
                  <div className="mt-2 space-y-1">
                    <div className="h-1 w-24 rounded-full bg-slate-700" />
                    <div className="h-1 w-16 rounded-full bg-slate-700/70" />
                  </div>
                </div>

                {/* Donja mala pločica – “Responsive Layout” */}
                <div className="absolute -bottom-4 right-0 w-40 translate-x-2 rounded-2xl border border-slate-700/60 bg-slate-900/95 p-3 text-[9px] text-slate-200 backdrop-blur">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-300">
                    Responsive Layout
                  </p>
                  <div className="mt-2 flex items-end gap-2">
                    <div className="h-8 w-6 rounded-md bg-slate-800" />
                    <div className="h-10 w-10 rounded-lg bg-slate-800/90" />
                    <div className="h-6 flex-1 rounded-lg bg-slate-800/70" />
                  </div>
                  <div className="mt-2 h-1 w-24 rounded-full bg-slate-700" />
                </div>
              </div>
            </div>
            {/* KRAJ DESNE STRANE */}
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
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300"
            >
              Alle Projekte ansehen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
          {/* Karte 1 */}
          <div className="flex flex-col rounded-2xl border border-white/10 bg-slate-900 p-4">
            <div className="relative h-32 w-full overflow-hidden rounded-xl bg-slate-900">
              <Image
                src="/img/ivan-travel-gmbh.png" // ista slika za sve 3, posle menjaš
                alt="Projektbeispiel – Referenz"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="mt-4">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                <Target className="h-4 w-4 text-sky-400" />
                OnePage-Webseite für Ivan Vtravel GmbH
              </p>
              <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                Individuell entwickelte OnePage-Seite mit PHP, JavaScript und Bootstrap –
                zweisprachig auf Deutsch und Englisch für eine klare Präsentation der Reiseangebote.
              </p>
            </div>
          </div>

          {/* Karte 2 */}
          <div className="flex flex-col rounded-2xl border border-white/10 bg-slate-900 p-4">
            <div className="relative h-32 w-full overflow-hidden rounded-xl bg-slate-900">
              <Image
                src="/img/annavi.png"
                alt="Projektbeispiel – Referenz"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="mt-4">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                <Code2 className="h-4 w-4 text-sky-400" />
                Annavi Online-Shop (WordPress)
              </p>
              <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                Individueller WooCommerce-Shop für Annavi mit klarer Produktstruktur,
                mobil-optimiertem Checkout und einfacher Pflege im WordPress-Backend.
              </p>
            </div>
          </div>

          {/* Karte 3 */}
          <div className="flex flex-col rounded-2xl border border-white/10 bg-slate-900 p-4">
            <div className="relative h-32 w-full overflow-hidden rounded-xl bg-slate-900">
              <Image
                src="/img/hausarztpraxis.png"
                alt="Projektbeispiel – Referenz"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="mt-4">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                <ShoppingBag className="h-4 w-4 text-sky-400" />
                Hausarztpraxis Au-Wädenswil
              </p>
              <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                Moderne Praxis-Website für eine Hausarztpraxis in Au-Wädenswil – klar
                strukturierte Informationen für Patient:innen, mobil optimiert und
                umgesetzt mit PHP, JavaScript &amp; Bootstrap.
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
