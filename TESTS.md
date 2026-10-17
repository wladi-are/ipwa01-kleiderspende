# Testprotokoll

Datum: 15.10.2026

Browser: Chromium 151.0.7922.34 (automatisierte UI-Prüfung mit Playwright).

| Prüfung | Ergebnis |
| --- | --- |
| Leere Pflichtauswahl blockiert | Bestanden |
| Übergabe mit Geschäftsstelle bestätigt | Bestanden |
| Registrierungszeit angezeigt | Bestanden |
| Neue Registrierung leert Auswahl | Bestanden |
| Leere Adresse blockiert | Bestanden |
| Ungültiges PLZ-Format 1234 blockiert | Bestanden |
| Ungültiges PLZ-Format 10a15 blockiert | Bestanden |
| Fremdes PLZ-Präfix abgelehnt | Bestanden |
| Abholung mit anderer PLZ und gleichem Präfix erfolgreich | Bestanden |
| Neuladen zeigt verständlichen Leerzustand | Bestanden |
| Übergabe blendet Adressfelder aus | Bestanden |
| Wechsel löscht alte Adresse | Bestanden |
| Reine Leerzeichen blockiert | Bestanden |
| HTML-Eingabe nur als Text dargestellt | Bestanden |
| Kein horizontaler Überlauf bei 390px | Bestanden |
| Kein horizontaler Überlauf bei 768px | Bestanden |
| Kein horizontaler Überlauf bei 320px | Bestanden |
| Informationsnavigation funktioniert | Bestanden |
| Rechtliche Hinweise erreichbar | Bestanden |
| Keine JavaScript-Laufzeitfehler | Bestanden |

Produktionsbuild: `npm run build` erfolgreich.

Fenstergrößen: 1280 × 900, 768 × 1024, 390 × 844 und 320 × 740 Pixel. Keine Tests auf physischen Mobilgeräten; Safari und Firefox wurden nicht geprüft.
