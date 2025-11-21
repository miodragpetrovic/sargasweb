"use client";

import Link from "next/link";
import { useEffect, useRef, useState, FormEvent } from "react";
import { gsap } from "gsap";
import {
  Mail,
  Building2,
  Globe2,
  MessageCircle,
  CheckCircle2,
  Users2,
  ShoppingBag,
  Target,
} from "lucide-react";

export function KontaktSection() {
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

      tl.from(headerRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
      })
        .from(
          formWrapperRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          asideRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
          },
          "-=0.4"
        );
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
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: (formData.get("company") as string) || "",
      website: (formData.get("website") as string) || "",
      projectType: (formData.get("projectType") as string) || "",
      budget: (formData.get("budget") as string) || "",
      message: formData.get("message") as string,
      source: (formData.get("source") as string) || "",
    };

    if (!data.name || !data.email || !data.message) {
      setStatus("error");
      setErrorMessage("Bitte füllen Sie alle Pflichtfelder aus.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Fehler beim Senden der Nachricht.");
      }

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
    <section
      ref={rootRef}
      className="bg-slate-950 pb-16 pt-4 md:pb-40 md:pt-28 pt-22"
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* HEADER BLOK */}
        <div ref={headerRef} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-xs text-sky-300">
            <MessageCircle className="h-3.5 w-3.5" />
            <span>Unverbindliche Erstberatung für Ihr Webprojekt</span>
          </div>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Lassen Sie uns über Ihr nächstes Webprojekt sprechen.
          </h1>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            Füllen Sie das Formular aus und teilen Sie uns kurz mit, worum es
            geht – wir melden uns in der Regel innerhalb von 24&nbsp;Stunden
            mit ersten Ideen, einer groben Aufwandsschätzung und dem weiteren
            Vorgehen.
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-300 sm:text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              Erstgespräch kostenlos &amp; unverbindlich
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
              <Target className="h-4 w-4 text-sky-400" />
              Fokus auf klare Ziele &amp; Ergebnisse
            </span>
          </div>
        </div>

        {/* GRID: FORMA + ASIDE */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          {/* FORMA */}
          <div
            ref={formWrapperRef}
            className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/40 backdrop-blur"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              aria-label="Kontaktformular"
            >
              {/* Ime + Email */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="flex items-center gap-2 text-sm font-medium text-slate-200"
                  >
                    <Building2 className="h-4 w-4 text-sky-400" />
                    Name<span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-slate-50 outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                    placeholder="Max Mustermann"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="flex items-center gap-2 text-sm font-medium text-slate-200"
                  >
                    <Mail className="h-4 w-4 text-sky-400" />
                    E-Mail<span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-slate-50 outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                    placeholder="name@unternehmen.ch"
                  />
                </div>
              </div>

              {/* Firma + Website */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="company"
                    className="flex items-center gap-2 text-sm font-medium text-slate-200"
                  >
                    <Building2 className="h-4 w-4 text-sky-400" />
                    Unternehmen / Marke
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-slate-50 outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                    placeholder="Ihr Unternehmensname"
                  />
                </div>

                <div>
                  <label
                    htmlFor="website"
                    className="flex items-center gap-2 text-sm font-medium text-slate-200"
                  >
                    <Globe2 className="h-4 w-4 text-sky-400" />
                    Aktuelle Website
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="url"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-slate-50 outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                    placeholder="https://www.ihre-website.ch"
                  />
                </div>
              </div>

              {/* Tip projekta + budžet */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="project-type"
                    className="flex items-center gap-2 text-sm font-medium text-slate-200"
                  >
                    <Target className="h-4 w-4 text-sky-400" />
                    Projektart<span className="text-sky-400">*</span>
                  </label>
                  <select
                    id="project-type"
                    name="projectType"
                    required
                    className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-slate-50 outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Bitte auswählen
                    </option>
                    <option value="website">Neue Webseite / Relaunch</option>
                    <option value="webapp">Individuelle Webanwendung</option>
                    <option value="shop">Online-Shop</option>
                    <option value="support">
                      Bestehendes Projekt optimieren
                    </option>
                    <option value="other">Sonstiges / nicht sicher</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="flex items-center gap-2 text-sm font-medium text-slate-200"
                  >
                    <ShoppingBag className="h-4 w-4 text-sky-400" />
                    Geschätztes Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-slate-50 outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Bitte auswählen
                    </option>
                    <option value="under3k">bis 3.000 CHF</option>
                    <option value="3k-8k">3.000 – 8.000 CHF</option>
                    <option value="8k-15k">8.000 – 15.000 CHF</option>
                    <option value="15k-plus">über 15.000 CHF</option>
                    <option value="notsure">noch nicht sicher</option>
                  </select>
                </div>
              </div>

              {/* Poruka */}
              <div>
                <label
                  htmlFor="message"
                  className="flex items-center gap-2 text-sm font-medium text-slate-200"
                >
                  <MessageCircle className="h-4 w-4 text-sky-400" />
                  Kurze Projektbeschreibung
                  <span className="text-sky-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-slate-50 outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                  placeholder="Was möchten Sie umsetzen? Gibt es bereits Inhalte, Design-Ideen oder Beispiele, die Ihnen gefallen?"
                />
              </div>

              {/* Kako su čuli za tebe */}
              <div>
                <label
                  htmlFor="source"
                  className="flex items-center gap-2 text-sm font-medium text-slate-200"
                >
                  <Users2 className="h-4 w-4 text-sky-400" />
                  Wie haben Sie von uns erfahren?
                </label>
                <input
                  id="source"
                  name="source"
                  type="text"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-slate-50 outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                  placeholder="Google-Suche, Empfehlung, Social Media, …"
                />
              </div>

              {/* GDPR checkbox */}
              <div className="flex items-start gap-3 text-xs text-slate-400">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-900 text-sky-500 focus:ring-sky-500"
                />
                <label htmlFor="privacy">
                  Ich stimme zu, dass meine Angaben zur Beantwortung meiner
                  Anfrage verarbeitet werden. Weitere Informationen finden Sie
                  in unserer{" "}
                  <Link
                    href="/datenschutz"
                    className="text-sky-400 hover:text-sky-300"
                  >
                    Datenschutzerklärung
                  </Link>
                  .
                </label>
              </div>

              {/* Status poruke */}
              {status === "success" && (
                <p className="mt-2 text-sm text-emerald-400">
                  Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
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
                  {status === "loading" ? "Wird gesendet..." : "Anfrage senden"}
                </button>
                <p className="mt-2 text-xs text-slate-400">
                  In der Regel melden wir uns innerhalb von 1–2 Werktagen.
                </p>
              </div>
            </form>
          </div>

          {/* ASIDE: info blokovi */}
          <aside ref={asideRef} className="space-y-6 text-sm text-slate-300">
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-5">
              <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                <Mail className="h-4 w-4 text-sky-400" />
                Direkter Kontakt
              </h2>
              <p className="mt-2">
                Sie bevorzugen eine direkte E-Mail? Schreiben Sie uns jederzeit
                – gerne auch mit ersten Unterlagen oder Beispielen.
              </p>
              <p className="mt-4 font-mono text-sky-400">
                info@sargasweb.ch
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-5">
              <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                <Users2 className="h-4 w-4 text-sky-400" />
                Für wen wir arbeiten
              </h2>
              <p className="mt-2">
                Wir unterstützen Unternehmen, Agenturen und Start-ups, die Wert
                auf ein klares digitales Erscheinungsbild legen.
              </p>
              <ul className="mt-3 space-y-1">
                <li>• B2B-Unternehmen &amp; Industrie</li>
                <li>• Dienstleister &amp; Agenturen</li>
                <li>• E-Commerce &amp; D2C-Brands</li>
                <li>• Tech- &amp; SaaS-Unternehmen</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-5">
              <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                <Target className="h-4 w-4 text-sky-400" />
                Typische Anfragen
              </h2>
              <p className="mt-2">
                Häufig geht es um Relaunches bestehender Webseiten,
                Conversion-Optimierung oder komplett neue digitale Produkte.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Je konkreter Sie Ihr Vorhaben im Formular beschreiben, desto
                gezielter können wir im ersten Gespräch auf Ihre Situation
                eingehen.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
