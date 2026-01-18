"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  CheckCircle2,
  Globe2,
  Mail,
  MessageCircle,
  Target,
  Users2,
  Building2,
  Wrench,
} from "lucide-react";

export default function WebsiteReviewSection() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const formWrapperRef = useRef<HTMLDivElement | null>(null);
  const asideRef = useRef<HTMLDivElement | null>(null);

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(headerRef.current, { opacity: 0, y: 30, duration: 0.6 })
        .from(formWrapperRef.current, { opacity: 0, y: 30, duration: 0.6 }, "-=0.3")
        .from(asideRef.current, { opacity: 0, y: 30, duration: 0.6 }, "-=0.4");
    }, rootRef);

    return () => ctx.revert();
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: (formData.get("name") as string) || "",
      email: (formData.get("email") as string) || "",
      company: (formData.get("company") as string) || "",
      website: (formData.get("website") as string) || "",
      goal: (formData.get("goal") as string) || "",
      audience: (formData.get("audience") as string) || "",
      industry: (formData.get("industry") as string) || "",
      competitors: (formData.get("competitors") as string) || "",
      stack: (formData.get("stack") as string) || "",
      analyticsAccess: formData.get("analyticsAccess") === "on",
      message: (formData.get("message") as string) || "",
      source: (formData.get("source") as string) || "",
    };

    // required: name, email, website, goal
    if (!data.name || !data.email || !data.website || !data.goal) {
      setStatus("error");
      setErrorMessage("Bitte füllen Sie alle Pflichtfelder aus.");
      return;
    }

    try {
      const res = await fetch("/api/website-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json.error || "Fehler beim Senden der Anfrage.");

      setStatus("success");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(
        err?.message ||
          "Beim Senden der Anfrage ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."
      );
    }
  }

  return (
    <section ref={rootRef} className="bg-slate-950 pb-10 pt-4 md:pb-24 md:pt-28">
      <div className="mx-auto max-w-6xl px-4">
        {/* HEADER */}
        <div ref={headerRef} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-xs text-sky-300">
            <Wrench className="h-3.5 w-3.5" />
            <span>Website Review: SEO • UX • Performance • Conversion</span>
          </div>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Website Review (Audit) – klare Fixes statt Bauchgefühl
          </h1>

          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            Senden Sie uns Ihre Website und Ihr Ziel. Wir prüfen die wichtigsten Hebel für
            bessere Rankings, schnellere Ladezeiten, bessere UX und mehr Anfragen – und
            erstellen eine priorisierte To-Do-Liste.
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-300 sm:text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              Quick Wins + Maßnahmenplan
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
              <Target className="h-4 w-4 text-sky-400" />
              Fokus auf Impact & Prioritäten
            </span>
          </div>
        </div>

        {/* GRID */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          {/* FORM */}
          <div
            ref={formWrapperRef}
            className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/40 backdrop-blur"
          >
            <form
              id="website-review-form"
              onSubmit={handleSubmit}
              className="space-y-6"
              aria-label="Website Review Formular"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-200">
                    <Building2 className="h-4 w-4 text-sky-400" />
                    Name<span className="text-sky-400">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-slate-50 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                    placeholder="Max Mustermann"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-200">
                    <Mail className="h-4 w-4 text-sky-400" />
                    E-Mail<span className="text-sky-400">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-slate-50 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                    placeholder="name@unternehmen.ch"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-200">
                    <Building2 className="h-4 w-4 text-sky-400" />
                    Unternehmen / Marke
                  </label>
                  <input
                    name="company"
                    type="text"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-slate-50 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                    placeholder="Ihr Unternehmensname"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-200">
                    <Globe2 className="h-4 w-4 text-sky-400" />
                    Website URL<span className="text-sky-400">*</span>
                  </label>
                  <input
                    name="website"
                    type="url"
                    required
                    className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-slate-50 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                    placeholder="https://www.ihre-website.ch"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-slate-200">
                  <Target className="h-4 w-4 text-sky-400" />
                  Ziel der Website<span className="text-sky-400">*</span>
                </label>
                <input
                  name="goal"
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-slate-50 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                  placeholder="Mehr Anfragen, bessere Rankings, mehr Verkäufe, …"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-200">
                    <Users2 className="h-4 w-4 text-sky-400" />
                    Zielgruppe
                  </label>
                  <input
                    name="audience"
                    type="text"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-slate-50 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                    placeholder="B2B Entscheider, lokale Kunden, …"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-200">
                    <Building2 className="h-4 w-4 text-sky-400" />
                    Branche
                  </label>
                  <input
                    name="industry"
                    type="text"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-slate-50 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                    placeholder="Dienstleistung, Industrie, E-Commerce, …"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-slate-200">
                  <Globe2 className="h-4 w-4 text-sky-400" />
                  Wettbewerber / Beispiele (URLs)
                </label>
                <input
                  name="competitors"
                  type="text"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-slate-50 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                  placeholder="https://… , https://…"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-slate-200">
                  <Wrench className="h-4 w-4 text-sky-400" />
                  Tech / CMS (optional)
                </label>
                <input
                  name="stack"
                  type="text"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-slate-50 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                  placeholder="WordPress, Shopify, Next.js, Webflow, …"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-slate-200">
                  <MessageCircle className="h-4 w-4 text-sky-400" />
                  Kontext / Probleme (optional)
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-slate-50 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                  placeholder="Was funktioniert nicht? Wo verlieren Sie Nutzer? Was soll besser werden?"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-slate-200">
                  <Users2 className="h-4 w-4 text-sky-400" />
                  Wie haben Sie von uns erfahren?
                </label>
                <input
                  name="source"
                  type="text"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-slate-50 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                  placeholder="Google, Empfehlung, Social Media, …"
                />
              </div>

              <div className="flex items-start gap-3 text-xs text-slate-400">
                <input
                  id="analyticsAccess"
                  name="analyticsAccess"
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-900 text-sky-500 focus:ring-sky-500"
                />
                <label htmlFor="analyticsAccess">
                  Ich kann (optional) Zugriff auf Analytics/Search Console bereitstellen, falls nötig.
                </label>
              </div>

              <div className="flex items-start gap-3 text-xs text-slate-400">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-900 text-sky-500 focus:ring-sky-500"
                />
                <label htmlFor="privacy">
                  Ich stimme zu, dass meine Angaben zur Bearbeitung verarbeitet werden.{" "}
                  <Link href="/datenschutz" className="text-sky-400 hover:text-sky-300">
                    Datenschutzerklärung
                  </Link>
                  .
                </label>
              </div>

              {status === "success" && (
                <p className="mt-2 text-sm text-emerald-400">
                  Vielen Dank! Wir melden uns zeitnah mit den nächsten Schritten.
                </p>
              )}
              {status === "error" && (
                <p className="mt-2 text-sm text-red-400">{errorMessage}</p>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {status === "loading" ? "Wird gesendet..." : "Website Review anfragen"}
                </button>
                <p className="mt-2 text-xs text-slate-400">
                  In der Regel antworten wir innerhalb von 1–2 Werktagen.
                </p>
              </div>
            </form>
          </div>

          {/* ASIDE */}
          <aside ref={asideRef} className="space-y-6 text-sm text-slate-300">
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-5">
              <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Was Sie bekommen
              </h2>
              <ul className="mt-3 space-y-1">
                <li>• Priorisierte Quick Wins</li>
                <li>• SEO/UX/Performance Findings</li>
                <li>• Konkrete Empfehlungen & Next Steps</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-5">
              <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                <Mail className="h-4 w-4 text-sky-400" />
                Direkt per E-Mail
              </h2>
              <p className="mt-2">
                Falls Sie lieber direkt schreiben, senden Sie uns einfach die URL und Ihr Ziel.
              </p>
              <p className="mt-4 font-mono text-sky-400">info@sargasweb.ch</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
