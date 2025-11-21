// app/datenschutz/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – SARGASWEB",
  description:
    "Datenschutzerklärung von SARGASWEB für die Verarbeitung von Personendaten im Rahmen von Webseiten, Webanwendungen und Online-Shops.",
  alternates: {
    canonical: "/datenschutz",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Datenschutzerklärung – SARGASWEB",
    description:
      "Informationen darüber, wie SARGASWEB Personendaten nach schweizerischem Datenschutzrecht (revDSG) verarbeitet.",
    url: "/datenschutz",
    type: "website",
  },
};

export default function DatenschutzPage() {
  return (
    <div className="bg-slate-950 text-slate-50">
      <section className="mx-auto max-w-4xl px-4 pb-20 pt-28 md:pt-32">
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
            Rechtliches
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
            Datenschutzerklärung
          </h1>
          <p className="mt-3 text-sm text-slate-300 md:text-base">
            In dieser Datenschutzerklärung informieren wir Sie darüber, wie
            SARGASWEB (nachfolgend &quot;wir&quot; oder &quot;uns&quot;)
            Personendaten verarbeitet, wenn Sie unsere Website besuchen, mit uns
            in Kontakt treten oder unsere Leistungen in Anspruch nehmen.
          </p>
          <p className="mt-2 text-xs text-slate-400">
            Hinweis: Diese Datenschutzerklärung ist ein allgemeines Muster und
            ersetzt keine individuelle Rechtsberatung. Wir empfehlen eine
            Überprüfung durch eine Rechtsanwältin/einen Rechtsanwalt nach
            schweizerischem Recht (revDSG) und – falls relevant – der
            EU-Datenschutz-Grundverordnung (DSGVO).
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed text-slate-200 md:text-base">
          {/* 1 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              1. Verantwortlicher
            </h2>
            <p className="mt-2">
              Verantwortlich für die in dieser Datenschutzerklärung beschriebene
              Datenbearbeitung ist:
            </p>
            <p className="mt-2">
              <span className="font-semibold">SARGASWEB</span>
              <br />
              (Adresse gemäss Impressum)
              <br />
              Schweiz
            </p>
            <p className="mt-2">
              Bei Fragen zum Datenschutz können Sie uns kontaktieren unter:
              <br />
              E-Mail:{" "}
              <a
                href="mailto:info@sargasweb.ch"
                className="text-sky-400 hover:text-sky-300"
              >
                info@sargasweb.ch
              </a>
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              2. Welche Personendaten bearbeiten wir?
            </h2>
            <p className="mt-2">
              Wir bearbeiten insbesondere die folgenden Kategorien von
              Personendaten, sofern Sie uns diese zur Verfügung stellen oder sie
              im Rahmen der Nutzung unserer Website anfallen:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Stammdaten (z.&nbsp;B. Name, Firma, Adresse, Kontaktangaben wie
                E-Mail und Telefonnummer)
              </li>
              <li>
                Kommunikationsdaten (z.&nbsp;B. Inhalte von E-Mails,
                Kontaktformular-Anfragen, Notizen aus Gesprächen)
              </li>
              <li>
                Vertrags- und Projektdaten (z.&nbsp;B. Informationen zu
                angefragten oder gebuchten Leistungen, Offerten, Rechnungen)
              </li>
              <li>
                Nutzungsdaten und technische Daten (z.&nbsp;B. IP-Adresse,
                Browser-Typ, aufgerufene Seiten, Zeitstempel, Logfiles)
              </li>
              <li>
                Allfällige weitere Daten, die Sie uns im Rahmen der
                Zusammenarbeit freiwillig zur Verfügung stellen.
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              3. Zwecke der Datenbearbeitung und Rechtsgrundlagen
            </h2>
            <p className="mt-2">
              Wir bearbeiten Personendaten im Einklang mit dem
              schweizerischen Datenschutzrecht (insbesondere revDSG) sowie, falls
              anwendbar, der DSGVO. Die Bearbeitung erfolgt insbesondere für
              folgende Zwecke:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                zur Bereitstellung und Verbesserung unserer Website und
                Online-Angebote
              </li>
              <li>
                zur Beantwortung von Anfragen, die über das Kontaktformular, per
                E-Mail oder telefonisch gestellt werden
              </li>
              <li>
                zur Vorbereitung, Abwicklung und Verwaltung von
                Vertragsbeziehungen und Projekten
              </li>
              <li>
                zur Kommunikation mit bestehenden und potenziellen Kunden
              </li>
              <li>
                zur Wahrung unserer berechtigten Interessen, insbesondere an der
                Weiterentwicklung unseres Angebots, an IT-Sicherheit und an der
                Durchsetzung von Ansprüchen
              </li>
              <li>
                zur Erfüllung gesetzlicher Pflichten (z.&nbsp;B.
                Aufbewahrungspflichten nach Steuer- oder Handelsrecht).
              </li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              4. Besuch unserer Website / Server-Logfiles
            </h2>
            <p className="mt-2">
              Beim Besuch unserer Website werden durch den von Ihnen verwendeten
              Browser automatisch bestimmte technische Daten an unseren
              Hosting-Provider übermittelt und in sogenannten Server-Logfiles
              gespeichert. Dazu gehören insbesondere:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>IP-Adresse des anfragenden Endgeräts</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>aufgerufene Seiten und Dateien</li>
              <li>verwendeter Browser und Betriebssystem</li>
              <li>referrende Website (Referrer-URL)</li>
            </ul>
            <p className="mt-2">
              Diese Daten werden zur Sicherstellung der Funktionsfähigkeit der
              Website, zur Gewährleistung der Sicherheit und zur statistischen
              Auswertung verwendet. Eine direkte Zuordnung zu einer bestimmten
              Person erfolgt grundsätzlich nicht.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              5. Kontaktformular und E-Mail-Kommunikation
            </h2>
            <p className="mt-2">
              Wenn Sie unser Kontaktformular nutzen oder uns per E-Mail
              kontaktieren, bearbeiten wir die von Ihnen mitgeteilten
              Personendaten (z.&nbsp;B. Name, E-Mail-Adresse, Firma,
              Projektdaten, Nachricht) zur Bearbeitung Ihrer Anfrage und für den
              weiteren Kontakt.
            </p>
            <p className="mt-2">
              Die Daten werden nur so lange gespeichert, wie es für die
              Bearbeitung der Anfrage, die Anbahnung eines Vertrages oder zur
              Erfüllung gesetzlicher Pflichten erforderlich ist.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              6. Cookies und ähnliche Technologien
            </h2>
            <p className="mt-2">
              Unsere Website kann Cookies und ähnliche Technologien (z.&nbsp;B.
              Local Storage) verwenden, um die Benutzerfreundlichkeit zu
              verbessern, bestimmte Funktionen bereitzustellen oder anonyme
              Statistiken zu erstellen.
            </p>
            <p className="mt-2">
              Cookies sind kleine Textdateien, die auf Ihrem Endgerät
              gespeichert werden. Einige Cookies sind notwendig, damit die
              Website funktioniert (sogenannte &quot;Session-Cookies&quot; oder
              &quot;notwendige Cookies&quot;). Andere Cookies dienen
              statistischen oder Marketingzwecken.
            </p>
            <p className="mt-2">
              Sie können Ihren Browser so einstellen, dass er Cookies ablehnt
              oder nur nach Ihrer Zustimmung speichert. Bereits gespeicherte
              Cookies können Sie jederzeit löschen. Bitte beachten Sie, dass
              bestimmte Funktionen der Website ohne Cookies nur eingeschränkt
              nutzbar sein können.
            </p>
          </section>

          {/* 7 – Analytics (optional / generisch) */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              7. Webanalyse und Drittanbieter
            </h2>
            <p className="mt-2">
              Wir können zur Auswertung der Nutzung unserer Website
              Webanalyse-Dienste (z.&nbsp;B. datenschutzfreundlich konfigurierte
              Tracking-Tools) einsetzen. Dabei werden in der Regel Nutzungsdaten
              wie aufgerufene Seiten, Verweildauer oder ungefähre geografische
              Herkunft anonym oder pseudonym ausgewertet.
            </p>
            <p className="mt-2">
              Soweit dabei Drittanbieter mit Sitz ausserhalb der Schweiz oder
              der EU zum Einsatz kommen, stellen wir sicher, dass ein dem
              schweizerischen Datenschutzniveau entsprechender Schutz besteht
              (z.&nbsp;B. durch Anerkennung eines angemessenen
              Datenschutzniveaus, Standardvertragsklauseln oder andere
              Garantien).
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              8. Weitergabe von Personendaten an Dritte
            </h2>
            <p className="mt-2">
              Wir geben Personendaten nur an Dritte weiter, wenn dies für die
              Erbringung unserer Leistungen erforderlich ist, wir gesetzlich oder
              behördlich dazu verpflichtet sind oder eine entsprechende
              Einwilligung vorliegt.
            </p>
            <p className="mt-2">
              Dritte können insbesondere sein:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Hosting- und Infrastruktur-Dienstleister</li>
              <li>E-Mail- und Kommunikationsdienstleister</li>
              <li>
                Zahlungs- und Abrechnungsdienstleister, Treuhänder, Steuer- oder
                Rechtsberater
              </li>
              <li>
                andere von uns beigezogene Fachpersonen oder Subunternehmer, die
                an der Projekterfüllung mitwirken
              </li>
            </ul>
            <p className="mt-2">
              Soweit solche Dritten Personendaten in unserem Auftrag
              bearbeiten, werden sie vertraglich zum Datenschutz verpflichtet.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              9. Datenübermittlung ins Ausland
            </h2>
            <p className="mt-2">
              Im Rahmen unserer Tätigkeit kann es vorkommen, dass Personendaten
              auch in Staaten ausserhalb der Schweiz oder der EU/des EWR
              bearbeitet werden. In solchen Fällen stellen wir sicher, dass
              entweder ein Angemessenheitsbeschluss vorliegt oder geeignete
              Garantien (z.&nbsp;B. Standardvertragsklauseln) bestehen, um ein
              dem schweizerischen Datenschutzniveau entsprechendes Schutzniveau
              zu gewährleisten.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              10. Dauer der Aufbewahrung
            </h2>
            <p className="mt-2">
              Wir bearbeiten und speichern Personendaten nur so lange, wie dies
              für den jeweiligen Zweck erforderlich ist oder wir ein berechtigtes
              Interesse an der Aufbewahrung haben (z.&nbsp;B. zur Durchsetzung
              oder Abwehr von Rechtsansprüchen, zu Dokumentationszwecken).
            </p>
            <p className="mt-2">
              Darüber hinaus bewahren wir Personendaten im Rahmen gesetzlicher
              Aufbewahrungs- und Dokumentationspflichten auf (z.&nbsp;B. nach
              Steuer- und Handelsrecht). Nach Ablauf der jeweiligen Fristen
              werden die Daten gelöscht oder anonymisiert.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              11. Ihre Rechte
            </h2>
            <p className="mt-2">
              Nach dem anwendbaren Datenschutzrecht (insbesondere revDSG und –
              soweit anwendbar – DSGVO) stehen Ihnen insbesondere folgende Rechte
              zu:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Recht auf Auskunft über die von uns bearbeiteten Personendaten</li>
              <li>
                Recht auf Berichtigung, wenn Daten unrichtig oder unvollständig
                sind
              </li>
              <li>
                Recht auf Löschung oder Einschränkung der Bearbeitung, sofern
                dem keine gesetzlichen Pflichten entgegenstehen
              </li>
              <li>
                Recht, eine Einwilligung für die Zukunft zu widerrufen, sofern
                die Bearbeitung auf einer Einwilligung beruht
              </li>
              <li>
                Recht auf Datenherausgabe oder -übertragung (Datenportabilität),
                soweit anwendbar
              </li>
              <li>
                Recht, bei der zuständigen Aufsichtsbehörde Beschwerde
                einzureichen.
              </li>
            </ul>
            <p className="mt-2">
              Wenn Sie eines Ihrer Rechte ausüben möchten, können Sie uns unter{" "}
              <a
                href="mailto:info@sargasweb.ch"
                className="text-sky-400 hover:text-sky-300"
              >
                info@sargasweb.ch
              </a>{" "}
              kontaktieren. Zur Vermeidung von Missbrauch können wir einen
              Identitätsnachweis verlangen.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              12. Datensicherheit
            </h2>
            <p className="mt-2">
              Wir treffen angemessene technische und organisatorische Massnahmen,
              um Personendaten vor Verlust, Missbrauch, unbefugtem Zugriff,
              Veränderung oder Zerstörung zu schützen. Dazu gehören insbesondere
              Zugriffsbeschränkungen, Verschlüsselung, Backups und
              Sicherheitsupdates.
            </p>
            <p className="mt-2">
              Bitte beachten Sie, dass die Übertragung von Daten über das
              Internet trotz aller Sicherheitsmassnahmen gewisse Risiken birgt,
              auf die wir keinen vollständigen Einfluss haben.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-50">
              13. Änderungen dieser Datenschutzerklärung
            </h2>
            <p className="mt-2">
              Wir können diese Datenschutzerklärung jederzeit anpassen, wenn
              sich unsere Angebote, interne Prozesse oder die rechtlichen
              Rahmenbedingungen ändern. Es gilt jeweils die auf dieser Website
              veröffentlichte Version.
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Stand: 2024
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
