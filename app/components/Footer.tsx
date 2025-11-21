import Link from "next/link";

const mainNavLinks = [
  { href: "/", label: "Startseite" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/webseiten", label: "Webseiten" },
  { href: "/webanwendungen", label: "Webanwendungen" },
  { href: "/online-shop", label: "Online-Shops" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/kontakt", label: "Kontakt" },
];

const legalLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/agb", label: "AGB" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        {/* Gornji dio */}
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand / opis */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br from-sky-500 to-violet-500 text-xs font-semibold tracking-tight text-white shadow-lg">
                SW
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                  SargasWeb
                </span>
                <span className="text-xs text-slate-400">
                  Webseiten · Webanwendungen · Online-Shops
                </span>
              </div>
            </div>

            <p className="mt-4 max-w-md text-sm text-slate-300">
              Digitale Lösungen mit Fokus auf Performance, Nutzererlebnis und
              messbare Ergebnisse – von der ersten Idee bis zum Launch
              und darüber hinaus.
            </p>
          </div>

          {/* Navigacija */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Navigation
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm">
              {mainNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-sky-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Kontakt
            </h3>
            <div className="mt-3 space-y-2 text-sm text-slate-300">
              <p>Grossmatt 2</p>
              <p>8910 Affoltern am Albis</p>
              CH-Schweiz
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:info@sargasweb.ch"
                  className="text-sky-400 hover:text-sky-300"
                >
                  info@sargasweb.ch
                </a>
              </p>
              <p>Mo–Fr · 08:00 – 17:00 Uhr</p>
            </div>
          </div>
        </div>

        {/* Donji dio */}
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-slate-400 md:flex md.items-center md:justify-between">
          <p className="mb-3 md:mb-0">
            © {year} SargasWeb. Alle Rechte vorbehalten.
          </p>

          <div className="flex flex-wrap gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-sky-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
