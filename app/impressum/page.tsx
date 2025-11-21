// app/impressum/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – SARGASWEB",
  description:
    "Impressum von SARGASWEB Petrovic, Webagentur für Webseiten, Webanwendungen und Online-Shops mit Sitz in Affoltern am Albis, Schweiz.",
  alternates: {
    canonical: "/impressum",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Impressum – SARGASWEB",
    description:
      "Gesetzlich vorgeschriebene Anbieterkennzeichnung von SARGASWEB Petrovic, Schweiz.",
    url: "/impressum",
    type: "website",
  },
};

export default function ImpressumPage() {
  return (
    <div className="bg-slate-950 text-slate-50">
      <section className="mx-auto max-w-4xl px-4 pb-20 pt-28 md:pt-32">
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
            Rechtliches
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
            Impressum
          </h1>
          <p className="mt-3 text-sm text-slate-300 md:text-base">
            Angaben gemäss schweizerischem Recht und – soweit anwendbar –
            vergleichbaren Informationspflichten für Online-Auftritte.
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed text-slate-200 md:text-base">
          {/* Verantwortlich */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              1. Verantwortlich für den Inhalt dieser Website
            </h2>
            <p className="mt-2">
              <span className="font-semibold">SARGASWEB Petrovic</span>
              <br />
              Grossmatt
              <br />
              8910 Affoltern am Albis
              <br />
              Schweiz
            </p>
            <p className="mt-2">
              E-Mail:{" "}
              <a
                href="mailto:info@sargasweb.ch"
                className="text-sky-400 hover:text-sky-300"
              >
                info@sargasweb.ch
              </a>
            </p>
            {/* ako želiš, dodaj i telefon */}
            {/* <p className="mt-1">Telefon: +41 ...</p> */}
          </section>

          {/* UID / Firmendaten */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              2. Unternehmensdaten
            </h2>
            <p className="mt-2">
              Firmenname: <span className="font-semibold">SARGASWEB Petrovic</span>
              <br />
              Sitz: 8910 Affoltern am Albis, Schweiz
            </p>
            <p className="mt-2">
              UID (Unternehmens-Identifikationsnummer):{"CHE-478.652.633"}
            </p>
          </section>

          {/* Haftungsausschluss */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              3. Haftungsausschluss
            </h2>
            <p className="mt-2">
              Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt.
              Wir übernehmen jedoch keine Gewähr für die Richtigkeit,
              Vollständigkeit oder Aktualität der bereitgestellten Informationen.
            </p>
            <p className="mt-2">
              Haftungsansprüche gegen SARGASWEB Petrovic wegen Schäden
              materieller oder immaterieller Art, welche aus dem Zugriff oder
              der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen,
              durch Missbrauch der Verbindung oder durch technische Störungen
              entstanden sind, werden – soweit gesetzlich zulässig – ausgeschlossen.
            </p>
          </section>

          {/* Externe Links */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              4. Links zu externen Websites
            </h2>
            <p className="mt-2">
              Diese Website kann Links zu externen Websites Dritter enthalten,
              auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir
              für diese fremden Inhalte auch keine Gewähr übernehmen.
            </p>
            <p className="mt-2">
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich. Zum Zeitpunkt
              der Verlinkung waren keine rechtswidrigen Inhalte erkennbar. Eine
              permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
              ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
            </p>
          </section>

          {/* Urheberrecht */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              5. Urheberrecht
            </h2>
            <p className="mt-2">
              Die auf dieser Website veröffentlichten Inhalte, Designs, Texte,
              Bilder und Grafiken unterliegen – soweit nicht anders vermerkt –
              dem Urheberrecht von SARGASWEB Petrovic oder den jeweils genannten
              Rechteinhaber:innen.
            </p>
            <p className="mt-2">
              Jede Vervielfältigung, Bearbeitung, Verbreitung oder sonstige
              Verwendung ausserhalb der gesetzlichen Schranken des
              Urheberrechts bedarf der vorherigen schriftlichen Zustimmung der
              jeweiligen Rechteinhaber:innen. Downloads und Kopien dieser Seite
              sind nur für den privaten, nicht kommerziellen Gebrauch gestattet,
              sofern keine anderslautenden Hinweise bestehen.
            </p>
          </section>

          {/* Technische Umsetzung / Hosting */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              6. Technische Umsetzung &amp; Hosting
            </h2>
            <p className="mt-2">
              Diese Website wird mit modernen Web-Technologien betrieben und
              kann ganz oder teilweise bei Drittanbietern (z.&nbsp;B.
              Hosting-/Cloud-Providern) gehostet werden. Dabei können technische
              Daten (z.&nbsp;B. IP-Adressen, Logfiles) bei diesen Anbietern
              anfallen. Weitere Informationen finden Sie in unserer{" "}
              <a
                href="/datenschutz"
                className="text-sky-400 hover:text-sky-300"
              >
                Datenschutzerklärung
              </a>
              .
            </p>
          </section>

          {/* Anwendbares Recht */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              7. Anwendbares Recht und Gerichtsstand
            </h2>
            <p className="mt-2">
              Es gilt ausschliesslich schweizerisches Recht. Gerichtsstand ist,
              soweit gesetzlich zulässig, der Sitz von SARGASWEB Petrovic in
              Affoltern am Albis, Schweiz.
            </p>
          </section>

          {/* Stand */}
          <section>
            <p className="mt-4 text-sm text-slate-400">
              Stand: {new Date().getFullYear()}
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
