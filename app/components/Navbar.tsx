"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Startseite" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/preise", label: "Preise" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/kontakt", label: "Kontakt" },
];

export function MainNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all 
      border-b border-white/10
      ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-xl"
          : "bg-slate-950/90"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Logo / brand – kao na slici */}
        <Link
          href="/"
          className="flex items-center gap-3 flex-shrink-0"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-violet-500 text-[10px] font-semibold tracking-[0.18em] text-white shadow-lg">
            SW
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-100 whitespace-nowrap">
              SARGASWEB
            </span>
            <span className="text-xs text-slate-400 whitespace-nowrap">
              Webseiten · Webanwendungen · Online-Shops
            </span>
          </div>
        </Link>

        {/* Desktop nav – samo od lg nadalje */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-4 lg:gap-6 text-sm">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative transition-colors ${
                      isActive
                        ? "text-sky-400"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 mx-auto h-[2px] w-6 rounded-full bg-sky-400" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA dugme */}
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 rounded-full border border-sky-500/60 bg-sky-500/90 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400 hover:border-sky-400 active:scale-[0.98]"
          >
            Angebot anfordern
            <span className="text-xs">↗</span>
          </Link>
        </div>

        {/* Mobile toggle – prikazuje se do lg breakpointa */}
        <button
          type="button"
          aria-label="Menü öffnen"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-900/70 text-slate-100 hover:bg-slate-800 lg:hidden"
        >
          <div className="flex flex-col gap-[5px]">
            <span
              className={`block h-[2px] w-5 rounded-full bg-current transition-transform ${
                isOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded-full bg-current transition-transform ${
                isOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile meni – isto samo do lg */}
      <div
        className={`lg:hidden transition-[max-height,opacity] duration-300 ease-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="mx-auto max-w-6xl px-4 pb-4">
          <div className="rounded-2xl border border-white/10 bg-slate-950/90 p-3 shadow-xl shadow-black/40">
            <ul className="flex flex-col gap-1 text-sm">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between rounded-xl px-3 py-2 transition-colors ${
                        isActive
                          ? "bg-sky-500/10 text-sky-400"
                          : "text-slate-200 hover:bg-white/5"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-3">
              <Link
                href="/kontakt"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500/90 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400"
              >
                Angebot anfordern
                <span className="text-xs">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
