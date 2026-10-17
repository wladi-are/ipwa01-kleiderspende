# Kleiderhilfe

Schlichte Webanwendung zur Registrierung von Kleiderspenden. Fallstudie im Modul IPWA01-01.

## Starten

Voraussetzung: Node.js 22.12 oder neuer.

```sh
npm ci
npm run dev
```

Produktionsversion: `npm run build`; lokal prüfen: `npm run preview`.

## Funktionen

- Übergabe an der Geschäftsstelle oder Abholung
- Auswahl von Kleidungsart und Krisenregion
- Pflichtfeldprüfung und fünfstellige PLZ
- Abholung nur bei gleichem zweistelligen PLZ-Präfix wie die Geschäftsstelle (10)
- Separate Bestätigungsseite mit allen Angaben und Registrierungszeit (Europe/Berlin)
- Responsive Oberfläche mit Vue, Vue Router und Bootstrap

## Aufbau

`src/components/DonationForm.vue` enthält das Formular und die Validierung.
`Confirmation.vue` zeigt das Ergebnis; `Information.vue` und `Legal.vue` enthalten die weiteren Seiten.
`src/data.js` enthält die fiktive Geschäftsstelle, Auswahlwerte, PLZ-Prüfung und den flüchtigen Registrierungszustand.
`src/App.vue` stellt Header, Navigation und Footer bereit. `src/main.js` definiert die Routen.

Die Hash-Navigation und relative Asset-Pfade erlauben die Bereitstellung des Ordners `dist` auf einem statischen Webserver, auch in einem Unterverzeichnis.

## Grenzen

Studienprojekt ohne Backend: keine Übertragung oder dauerhafte Speicherung von Registrierungen, keine echten Abholaufträge. Nach dem Neuladen sind die Angaben gelöscht. Die Adresse ist fiktiv; die Auswahl der Krisenregionen ist statisch und muss für einen echten Einsatz gepflegt werden. Die rechtlichen Hinweise sind auf den Demonstrationsbetrieb beschränkt.

## Quellen

- Vue: https://vuejs.org/guide/essentials/forms.html
- Vue Router: https://router.vuejs.org/guide/essentials/history-mode.html
- Bootstrap: https://getbootstrap.com/docs/5.3/forms/validation/
- Krisenregionen: UNFPA, Humanitarian Action Overview 2026, https://www.unfpa.org/sites/default/files/2025-12/UNFPA%202026%20Humanitarian%20Action%20Overview.pdf

Testprotokoll: `TESTS.md`.
