// app/agb/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB – SARGASWEB | Allgemeine Geschäftsbedingungen",
  description:
    "Allgemeine Geschäftsbedingungen (AGB) von SARGASWEB für die Erstellung von Webseiten, Webanwendungen und Online-Shops nach Schweizer Recht.",
  alternates: {
    canonical: "/agb",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AGB – SARGASWEB",
    description:
      "Allgemeine Geschäftsbedingungen (AGB) von SARGASWEB für digitale Projekte und Webentwicklung.",
    url: "/agb",
    type: "website",
  },
};

export default function AGBPage() {
  return (
    <div className="bg-slate-950 text-slate-50">
      <section className="mx-auto max-w-4xl px-4 pb-20 pt-28 md:pt-32">
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
            Rechtliches
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>
          <p className="mt-3 text-sm text-slate-300 md:text-base">
            Diese Allgemeinen Geschäftsbedingungen regeln die Zusammenarbeit
            zwischen SARGASWEB (nachfolgend &quot;Agentur&quot;) und ihren
            Kundinnen und Kunden (nachfolgend &quot;Kunde&quot;). Sie gelten für
            alle Angebote, Verträge und Leistungen im Zusammenhang mit der
            Konzeption, Gestaltung, Entwicklung und Betreuung von Webseiten,
            Webanwendungen und Online-Shops.
          </p>
          <p className="mt-2 text-xs text-slate-400">
            Hinweis: Dieser Text ist ein Muster und ersetzt keine individuelle
            Rechtsberatung. Wir empfehlen eine Prüfung durch eine
            Rechtsanwältin/einen Rechtsanwalt nach Schweizer Recht.
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed text-slate-200 md:text-base">
          {/* 1 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              1. Geltungsbereich
            </h2>
            <p className="mt-2">
              Die vorliegenden AGB gelten für sämtliche Rechtsbeziehungen
              zwischen der Agentur und dem Kunden, soweit nicht ausdrücklich
              und schriftlich etwas anderes vereinbart wurde. Abweichende,
              entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen
              des Kunden werden nur dann Vertragsbestandteil, wenn die Agentur
              ihrer Geltung ausdrücklich schriftlich zugestimmt hat.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              2. Angebot und Vertragsabschluss
            </h2>
            <p className="mt-2">
              Anfragen des Kunden sind unverbindlich. Auf Basis der Anfrage
              erstellt die Agentur ein Angebot oder eine Offerte, welche in der
              Regel eine Leistungsbeschreibung, einen groben Zeitplan und eine
              Kostenschätzung enthält.
            </p>
            <p className="mt-2">
              Der Vertrag kommt zustande, wenn der Kunde die Offerte schriftlich
              (inkl. E-Mail) bestätigt oder eine entsprechende Auftragsbestätigung
              der Agentur akzeptiert. Änderungen oder Ergänzungen des
              Leistungsumfangs bedürfen der Schriftform (inkl. E-Mail) und
              können zu einer Anpassung des Honorars und des Zeitplans führen.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              3. Leistungen der Agentur
            </h2>
            <p className="mt-2">
              Die Agentur erbringt ihre Leistungen nach bestem Wissen und
              Gewissen, sorgfältig und entsprechend dem aktuellen Stand der
              Technik. Der genaue Leistungsumfang ergibt sich aus der jeweils
              gültigen Offerte, dem Angebot oder einem separaten
              Leistungsbeschrieb (z.&nbsp;B. Pflichtenheft).
            </p>
            <p className="mt-2">
              Sofern nicht ausdrücklich anders vereinbart, schuldet die Agentur
              kein bestimmtes wirtschaftliches Ergebnis (z.&nbsp;B. Anzahl Leads,
              Umsatzsteigerungen, Rankings in Suchmaschinen), sondern eine
              fachgerechte Ausführung der vereinbarten Leistungen.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              4. Mitwirkungspflichten des Kunden
            </h2>
            <p className="mt-2">
              Der Kunde stellt der Agentur alle für die Leistungserbringung
              erforderlichen Informationen, Inhalte, Zugänge und Entscheide
              rechtzeitig und in geeigneter Form zur Verfügung. Dazu gehören
              insbesondere Texte, Bilder, Logos, CI/CD-Richtlinien,
              Zugangsdaten zu bestehenden Systemen sowie Ansprechpersonen für
              Rückfragen und Freigaben.
            </p>
            <p className="mt-2">
              Verzögerungen, die auf verspätete oder unvollständige
              Zuarbeiten des Kunden zurückzuführen sind, gehen nicht zu Lasten
              der Agentur und können zu einer Anpassung des Zeitplans sowie
              zusätzlichen Kosten führen.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              5. Vergütung und Zahlungsbedingungen
            </h2>
            <p className="mt-2">
              Sofern nicht anders vereinbart, erfolgt die Vergütung der Agentur
              auf Basis der in der Offerte angegebenen Pauschalpreise oder
              Stundenansätze. Alle Preise verstehen sich in Schweizer Franken
              (CHF) zuzüglich allfälliger gesetzlicher Mehrwertsteuer.
            </p>

            <h3 className="mt-3 text-sm font-semibold text-slate-100">
              5.1 Anzahlung / Vorkasse vor Projektstart
            </h3>
            <p className="mt-2">
              Vor Beginn der eigentlichen Projektarbeiten ist eine Anzahlung
              bzw. Vorkasse fällig. Sofern in der Offerte nichts anderes
              festgehalten ist, gilt standardmässig:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <span className="font-medium">50&nbsp;%</span> des
                vereinbarten Projektvolumens bei Auftragserteilung
                (Vorkasse/Anzahlung);
              </li>
              <li>
                der Restbetrag von <span className="font-medium">50&nbsp;%</span>{" "}
                bei Abnahme des Projekts bzw. spätestens vor der
                Live-Schaltung.
              </li>
            </ul>
            <p className="mt-2">
              Die Agentur ist berechtigt, den Projektstart und die Aufnahme
              der Arbeiten bis zum Eingang der Anzahlung aufzuschieben. Kommt
              der Kunde seiner Verpflichtung zur Vorkasse nicht nach, ist die
              Agentur berechtigt, vom Vertrag zurückzutreten und bereits
              erbrachte Leistungen nach Aufwand in Rechnung zu stellen.
            </p>

            <h3 className="mt-3 text-sm font-semibold text-slate-100">
              5.2 Zahlungsfristen und Verzug
            </h3>
            <p className="mt-2">
              Sofern nichts anderes vereinbart, sind Rechnungen innerhalb von{" "}
              <span className="font-medium">14 Tagen</span> ab Rechnungsdatum
              ohne Abzug zahlbar. Nach ungenutztem Ablauf dieser Frist gerät
              der Kunde ohne weitere Mahnung in Verzug.
            </p>
            <p className="mt-2">
              Bei Zahlungsverzug ist die Agentur berechtigt, Verzugszinsen
              sowie Mahngebühren zu verlangen und weitere Leistungen bis zum
              Ausgleich der offenen Forderungen zurückzuhalten. Allfällige
              Kosten für Inkasso, Rechtsberatung oder gerichtliche
              Geltendmachung gehen zu Lasten des Kunden.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              6. Termine und Projektverzögerungen
            </h2>
            <p className="mt-2">
              Zeit- und Lieferangaben der Agentur sind grundsätzlich als
              Richttermine zu verstehen, sofern nicht ausdrücklich schriftlich
              ein verbindlicher Termin vereinbart wurde. Verbindliche Termine
              setzen voraus, dass alle notwendigen Zuarbeiten des Kunden
              rechtzeitig erfolgen.
            </p>
            <p className="mt-2">
              Können vereinbarte Termine aus Gründen, die nicht im Einflussbereich
              der Agentur liegen (z.&nbsp;B. höhere Gewalt, Ausfälle von
              Drittanbietern, Krankheit, verspätete Zuarbeiten), nicht
              eingehalten werden, verschieben sich diese angemessen. Die Agentur
              informiert den Kunden in solchen Fällen so früh wie möglich.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              7. Nutzungsrechte und Urheberrecht
            </h2>
            <p className="mt-2">
              Sämtliche Urheber- und Nutzungsrechte an von der Agentur
              geschaffenen Entwürfen, Designs, Konzepten, Quellcodes und
              sonstigen Arbeitsergebnissen verbleiben bis zur vollständigen
              Bezahlung aller Rechnungen bei der Agentur.
            </p>
            <p className="mt-2">
              Nach vollständiger Bezahlung erhält der Kunde ein einfaches,
              nicht übertragbares Nutzungsrecht an den vereinbarten
              Arbeitsergebnissen für den im Vertrag definierten Zweck
              (z.&nbsp;B. Betrieb der Website oder Webanwendung). Eine
              weitergehende Nutzung, insbesondere die Weitergabe an Dritte, die
              Verwendung in anderen Projekten oder ein Verkauf, bedarf der
              schriftlichen Zustimmung der Agentur.
            </p>
            <p className="mt-2">
              Der Kunde sichert zu, dass alle von ihm zur Verfügung gestellten
              Inhalte (Texte, Bilder, Logos, Daten etc.) frei von Rechten
              Dritter sind oder die erforderlichen Nutzungsrechte vorliegen.
              Für allfällige Ansprüche Dritter ist der Kunde verantwortlich und
              stellt die Agentur von entsprechenden Ansprüchen frei.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              8. Abnahme und Mängelrüge
            </h2>
            <p className="mt-2">
              Nach Fertigstellung der vereinbarten Leistungen stellt die Agentur
              dem Kunden eine Version zur Abnahme zur Verfügung (z.&nbsp;B. auf
              einer Staging-Umgebung). Der Kunde ist verpflichtet, die
              Arbeitsergebnisse innert angemessener Frist, in der Regel innert{" "}
              <span className="font-medium">10 Tagen</span>, zu prüfen und
              allfällige Mängel schriftlich mitzuteilen.
            </p>
            <p className="mt-2">
              Erfolgt innert dieser Frist keine substanzielle Mängelrüge,
              gelten die Leistungen als abgenommen. Geringfügige Abweichungen,
              die die Funktionalität oder das Gesamtbild nicht wesentlich
              beeinträchtigen, berechtigen nicht zur Verweigerung der Abnahme.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              9. Gewährleistung und Support
            </h2>
            <p className="mt-2">
              Die Agentur behebt nachweisbare und reproduzierbare Mängel, die
              auf ihre Leistung zurückzuführen sind, innerhalb einer
              angemessenen Frist im Rahmen der Gewährleistung. Die Gewährleistung
              gilt nicht für Mängel, die durch unsachgemässe Nutzung,
              nachträgliche Änderungen durch den Kunden oder Dritte, Einflüsse
              von Drittsoftware oder externe Systemänderungen entstehen.
            </p>
            <p className="mt-2">
              Laufende Wartungs- und Supportleistungen (Updates, Monitoring,
              inhaltliche Anpassungen etc.) sind nur Bestandteil des Vertrages,
              wenn dies explizit vereinbart wurde (z.&nbsp;B. Wartungsvertrag
              oder Supportpaket).
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              10. Haftung
            </h2>
            <p className="mt-2">
              Die Agentur haftet nur für Schäden, die auf grobe Fahrlässigkeit
              oder Vorsatz zurückzuführen sind. Eine weitergehende Haftung,
              insbesondere für indirekte Schäden, Folgeschäden, entgangenen
              Gewinn oder Datenverluste, ist – soweit gesetzlich zulässig –
              ausgeschlossen.
            </p>
            <p className="mt-2">
              Die Agentur haftet nicht für Ausfälle, Störungen oder
              Einschränkungen, die auf die Infrastruktur von Hosting-Providern,
              Drittanbietern oder auf das allgemeine Funktionieren des Internets
              zurückzuführen sind.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              11. Vertraulichkeit
            </h2>
            <p className="mt-2">
              Beide Parteien verpflichten sich, alle im Rahmen der
              Zusammenarbeit erlangten vertraulichen Informationen
              sorgfältig zu behandeln und Dritten nicht zugänglich zu machen.
              Diese Pflicht bleibt auch nach Beendigung des Vertragsverhältnisses
              bestehen.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              12. Datenschutz
            </h2>
            <p className="mt-2">
              Die Agentur verarbeitet Personendaten des Kunden in Übereinstimmung
              mit dem schweizerischen Datenschutzrecht sowie ihrer jeweils
              gültigen Datenschutzerklärung. Der Kunde ist selbst dafür
              verantwortlich, dass der Einsatz der von der Agentur erstellten
              Lösungen (z.&nbsp;B. Websites, Tracking-Tools, Formulare) den
              datenschutzrechtlichen Anforderungen genügt.
            </p>
            <p className="mt-2">
              Sofern die Agentur Personendaten im Auftrag des Kunden verarbeitet
              (z.&nbsp;B. Hosting, Wartung), kann eine separate
              Auftragsdatenverarbeitungsvereinbarung (ADV) erforderlich sein.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              13. Referenzen
            </h2>
            <p className="mt-2">
              Die Agentur ist berechtigt, den Namen und das Logo des Kunden
              sowie eine sachliche Beschreibung des Projekts als Referenz in
              eigenen Marketingunterlagen, auf der Website und in sozialen
              Medien zu verwenden, sofern der Kunde dem nicht ausdrücklich
              schriftlich widerspricht.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              14. Vertragsdauer und Kündigung
            </h2>
            <p className="mt-2">
              Projektverträge enden grundsätzlich mit der Abnahme der
              vereinbarten Leistungen und der vollständigen Bezahlung der
              Vergütung. Laufende Verträge (z.&nbsp;B. Wartung, Hosting oder
              Support) können vorbehaltlich abweichender Vereinbarung mit einer
              Frist von <span className="font-medium">30 Tagen</span> auf das
              Ende eines Monats schriftlich gekündigt werden.
            </p>
            <p className="mt-2">
              Das Recht zur fristlosen Kündigung aus wichtigem Grund bleibt
              vorbehalten. Ein wichtiger Grund liegt insbesondere vor, wenn
              eine Partei trotz schriftlicher Mahnung schwerwiegend oder
              wiederholt gegen vertragliche Pflichten verstösst.
            </p>
          </section>

          {/* 15 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              15. Schlussbestimmungen
            </h2>
            <p className="mt-2">
              Es gilt ausschliesslich schweizerisches Recht unter Ausschluss
              der Kollisionsnormen und des UN-Kaufrechts (CISG).
            </p>
            <p className="mt-2">
              Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang
              mit diesem Vertrag ist – soweit gesetzlich zulässig – der Sitz
              der Agentur in der Schweiz.
            </p>
            <p className="mt-2">
              Sollte eine Bestimmung dieser AGB ganz oder teilweise unwirksam
              sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen
              unberührt. Anstelle der unwirksamen Bestimmung tritt eine Regelung,
              die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am
              nächsten kommt.
            </p>
            <p className="mt-4 text-sm text-slate-400">
              Stand: {new Date().getFullYear()}
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
