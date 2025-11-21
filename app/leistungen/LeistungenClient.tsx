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
  Target,
  Cpu,
  Users2,
  Search,
  Rocket,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function LeistungenClient() {
  const pageRef = useRef<HTMLDivElement | null>(null);

  const heroRef = useRef<HTMLElement | null>(null);
  const heroBadgeRef = useRef<HTMLDivElement | null>(null);
  const heroTitleRef = useRef<HTMLHeadingElement | null>(null);
  const heroTextRef = useRef<HTMLDivElement | null>(null);

  const overviewRef = useRef<HTMLElement | null>(null);
  const detailsRef = useRef<HTMLElement | null>(null);
  const processRef = useRef<HTMLElement | null>(null);
  const faqRef = useRef<HTMLElement | null>(null);
  const ctaRef = useRef<HTMLElement | null>(null);

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
          { opacity: 0, y: 26, duration: 0.6 },
          "-=0.1"
        )
        .from(
          heroTextRef.current,
          { opacity: 0, y: 18, duration: 0.5 },
          "-=0.3"
        );

      // Scroll animacije za sekcije
      const sections = [overviewRef, detailsRef, processRef, faqRef, ctaRef];

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
            <Workflow className="h-3.5 w-3.5" />
            <span>Leistungen im Überblick</span>
          </div>

          <h1
            ref={heroTitleRef}
            className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-4xl lg:text-5xl"
          >
            Alles, was Sie für einen starken digitalen Auftritt brauchen.
          </h1>

          <p
            ref={heroTextRef}
            className="mt-4 max-w-3xl text-sm text-slate-300 sm:text-base"
          >
            Von der ersten Idee über das passende Konzept bis zur technischen
            Umsetzung – wir entwickeln Webseiten, Webanwendungen und
            Online-Shops, die Ihre Marke sichtbar machen und neue Anfragen oder
            Verkäufe bringen.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-300 sm:text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
              <Cpu className="h-4 w-4 text-sky-400" />
              Next.js 2025 &amp; aktueller Tech-Stack
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
              <Target className="h-4 w-4 text-sky-400" />
              Fokus auf messbare Ergebnisse
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
              <Users2 className="h-4 w-4 text-sky-400" />
              Ideal für B2B, SaaS &amp; E-Commerce
            </span>
          </div>
        </div>
      </section>

      {/* SEKCIJA 1 – KATEGORIJE LEISTUNGEN */}
      <section
        ref={overviewRef}
        className="border-y border-white/5 bg-slate-950"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mb-10 max-w-2xl">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-slate-50 md:text-3xl">
              <Workflow className="h-6 w-6 text-sky-400" />
              Unsere Kernleistungen
            </h2>
            <p className="mt-2 text-sm text-slate-300 md:text-base">
              Drei Bereiche, die wir bis ins Detail beherrschen – flexibel
              kombinierbar, je nachdem, was Ihr Unternehmen braucht.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Webseiten */}
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-5 shadow-md shadow-black/30">
              <div className="flex items-center gap-2">
                <LayoutPanelLeft className="h-5 w-5 text-sky-400" />
                <h3 className="text-lg font-semibold text-slate-50">
                  Webseiten
                </h3>
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Klare, moderne Unternehmens-Webseiten, Landingpages und
                Microsites, die Ihre Angebote verständlich präsentieren.
              </p>
              <ul className="mt-4 space-y-1 text-sm text-slate-300">
                <li>• Corporate Websites &amp; Landingpages</li>
                <li>• SEO-Basis &amp; schnelle Ladezeiten</li>
                <li>• Einfach zu pflegende Inhalte</li>
              </ul>
              <p className="mt-4 text-xs text-slate-400">
                Ideal, wenn Sie Ihre Marke professionell positionieren und mehr
                Anfragen über Ihre Website erhalten möchten.
              </p>
            </div>

            {/* Webanwendungen */}
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-5 shadow-md shadow-black/30">
              <div className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-sky-400" />
                <h3 className="text-lg font-semibold text-slate-50">
                  Webanwendungen
                </h3>
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Individuelle Portale, Dashboards und Tools – genau auf Ihre
                Prozesse zugeschnitten.
              </p>
              <ul className="mt-4 space-y-1 text-sm text-slate-300">
                <li>• Kunden- &amp; Partnerportale</li>
                <li>• Dashboards &amp; interne Tools</li>
                <li>• API-Integrationen &amp; Authentifizierung</li>
              </ul>
              <p className="mt-4 text-xs text-slate-400">
                Perfekt, wenn Standardsoftware nicht ausreicht und Abläufe
                digitalisiert oder automatisiert werden sollen.
              </p>
            </div>

            {/* Online-Shops */}
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-5 shadow-md shadow-black/30">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-sky-400" />
                <h3 className="text-lg font-semibold text-slate-50">
                  Online-Shops
                </h3>
              </div>
              <p className="mt-2 text-sm text-slate-300">
                E-Commerce-Lösungen mit klarem Fokus auf Usability,
                Conversion-Rate und einfache Skalierung.
              </p>
              <ul className="mt-4 space-y-1 text-sm text-slate-300">
                <li>• Shop-Konzept &amp; Informationsarchitektur</li>
                <li>• Conversion-orientiertes Design</li>
                <li>• Zahlungs-, Versand- &amp; ERP-Anbindungen</li>
              </ul>
              <p className="mt-4 text-xs text-slate-400">
                Optimal, wenn Sie Produkte online verkaufen oder bestehende
                E-Commerce-Prozesse verbessern möchten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCIJA 2 – DETAILS PRO LEISTUNG */}
      <section
        ref={detailsRef}
        className="bg-slate-950"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mb-10 max-w-2xl">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-slate-50 md:text-3xl">
              <Search className="h-6 w-6 text-sky-400" />
              Was Sie konkret von uns bekommen
            </h2>
            <p className="mt-2 text-sm text-slate-300 md:text-base">
              Jede Leistung besteht aus klar definierten Bausteinen – so wissen
              Sie genau, was im Projekt enthalten ist.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Webseiten-Paket */}
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-400">
                Webseiten-Pakete
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-50">
                Analyse, Konzept, Design &amp; Launch
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                <li>• Workshop / Kick-off</li>
                <li>• Seitenstruktur &amp; Content-Empfehlungen</li>
                <li>• UI-Design passend zu Ihrer Marke</li>
                <li>• Umsetzung mit Next.js</li>
                <li>• Technische SEO-Basis &amp; Performance</li>
              </ul>
            </div>

            {/* Webanwendung-Paket */}
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-400">
                Webanwendungen
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-50">
                Individuelle Features statt Standardlösungen
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                <li>• Use-Case-Analyse &amp; technische Konzeption</li>
                <li>• Daten- &amp; Rollenmodelle</li>
                <li>• API-Design &amp; Schnittstellen</li>
                <li>• Authentifizierung &amp; Berechtigungen</li>
                <li>• Monitoring &amp; Weiterentwicklung</li>
              </ul>
            </div>

            {/* Online-Shop-Paket */}
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-400">
                Online-Shops
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-50">
                Von der Produktstruktur bis zum Checkout
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                <li>• Shop-Architektur &amp; Kategoriestruktur</li>
                <li>• Produkt-Detailseiten &amp; Listen</li>
                <li>• Warenkorb &amp; Checkout-Flows</li>
                <li>• Zahlungs- &amp; Versandmethoden</li>
                <li>• Conversion-Tracking &amp; A/B-Tests (optional)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCIJA 3 – PROZESS / WIE WIR ARBEITEN */}
      <section
        ref={processRef}
        className="border-y border-white/5 bg-slate-900/60"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="flex items-center gap-2 text-2xl font-semibold text-slate-50 md:text-3xl">
                <Workflow className="h-6 w-6 text-sky-400" />
                Wie wir mit Ihnen zusammenarbeiten
              </h2>
              <p className="mt-2 text-sm text-slate-300 md:text-base">
                Ein klarer Prozess, der trotzdem genug Platz für individuelle
                Anforderungen lässt.
              </p>
            </div>
            <p className="text-xs text-slate-400 md:text-sm">
              Transparent, strukturiert und ohne technisches Blabla.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                title: "Kick-off & Analyse",
                text: "Wir sprechen über Ziele, Zielgruppen, Inhalte und Rahmenbedingungen.",
              },
              {
                title: "Konzept & Design",
                text: "Struktur, Wireframes und UI-Design werden gemeinsam abgestimmt.",
              },
              {
                title: "Entwicklung & Testing",
                text: "Umsetzung mit Next.js, Integrationen und gründliche Tests.",
              },
              {
                title: "Launch & Weiterentwicklung",
                text: "Begleitung beim Go-Live und auf Wunsch laufende Optimierung.",
              },
            ].map((step, i) => (
              <div
                key={step.title}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-5"
              >
                <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-xs font-semibold text-white">
                  {i + 1}
                </span>
                <h3 className="text-sm font-semibold text-slate-50">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEKCIJA 4 – FAQ */}
      <section
        ref={faqRef}
        className="bg-slate-950"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mb-8 max-w-2xl">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-slate-50 md:text-3xl">
              <Search className="h-6 w-6 text-sky-400" />
              Häufige Fragen zu unseren Leistungen
            </h2>
            <p className="mt-2 text-sm text-slate-300 md:text-base">
              Ein paar Punkte, die Unternehmen uns vor Projektstart am häufigsten
              fragen.
            </p>
          </div>

          <div className="space-y-4 text-sm text-slate-300">
            <details className="group rounded-2xl border border-white/10 bg-slate-900 p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-slate-100">
                Arbeiten Sie mit Pauschalpreisen oder Stundensätzen?
                <span className="text-slate-400 group-open:rotate-90 transition">
                  ▸
                </span>
              </summary>
              <p className="mt-2 text-sm text-slate-300">
                Für klar umrissene Projekte (z.&nbsp;B. eine Unternehmens-Website)
                arbeiten wir in der Regel mit Paket- bzw. Festpreisen. Bei
                laufender Weiterentwicklung oder offenen Anforderungen nutzen wir
                transparente Stundensätze mit klaren Reportings.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-slate-900 p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-slate-100">
                Mit welchen Systemen und Tools integrieren Sie?
                <span className="text-slate-400 group-open:rotate-90 transition">
                  ▸
                </span>
              </summary>
              <p className="mt-2 text-sm text-slate-300">
                Häufig binden wir CRM-Systeme, Newsletter-Tools, Zahlungs-
                provider oder interne Schnittstellen an. Wichtig ist eine
                saubere API-Dokumentation – alles Weitere klären wir im
                Erstgespräch.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-slate-900 p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-slate-100">
                Können Sie auch bestehende Projekte übernehmen?
                <span className="text-slate-400 group-open:rotate-90 transition">
                  ▸
                </span>
              </summary>
              <p className="mt-2 text-sm text-slate-300">
                Ja, sofern der technologische Rahmen sinnvoll ist. Wir starten
                dann meist mit einem technischen Audit und einem Vorschlag, wie
                wir weiter vorgehen können – von Optimierung bis zu einem
                kontrollierten Relaunch.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* SEKCIJA 5 – CTA */}
      <section
        ref={ctaRef}
        className="border-t border-white/5 bg-slate-900"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="flex items-center justify-center gap-2 text-2xl font-semibold text-slate-50 md:text-3xl">
              <Rocket className="h-6 w-6 text-sky-400" />
              Welche Leistung passt zu Ihrem Projekt?
            </h2>
            <p className="mt-3 text-sm text-slate-300 md:text-base">
              Schreiben Sie uns kurz, was Sie planen – wir empfehlen Ihnen das
              passende Setup aus Webseite, Webanwendung und/oder Online-Shop.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-2.5 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 active:scale-[0.98]"
              >
                Unverbindliche Beratung anfragen
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
