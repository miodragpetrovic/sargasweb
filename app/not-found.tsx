import Link from "next/link";
import { ArrowLeft, Compass, Ghost } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-slate-50">
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        {/* Ikonica / ilustracija */}
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-slate-900 shadow-lg shadow-black/40">
          <Ghost className="h-8 w-8 text-sky-400" />
        </div>

        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
          Fehler 404
        </p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Seite nicht gefunden.
        </h1>

        <p className="mt-3 text-sm text-slate-300 md:text-base">
          Die Seite, die Sie aufrufen wollten, existiert nicht mehr oder wurde
          verschoben. Vielleicht hilft Ihnen die Startseite oder unsere
          Leistungsübersicht weiter.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 active:scale-[0.98]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zur Startseite
          </Link>

          <Link
            href="/leistungen"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-6 py-2.5 text-sm font-medium text-slate-100 hover:bg-white/5"
          >
            <Compass className="mr-2 h-4 w-4 text-sky-400" />
            Leistungen ansehen
          </Link>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Wenn Sie glauben, dass es sich um einen Fehler handelt, schreiben Sie
          uns gerne an{" "}
          <span className="font-mono text-slate-200">
            info@sargasweb.ch
          </span>
          .
        </p>
      </div>
    </div>
  );
}
