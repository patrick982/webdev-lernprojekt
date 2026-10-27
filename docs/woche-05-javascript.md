# Woche 5 — JavaScript I: DOM, Events & Fetch

Ziel: JavaScript in der Praxis kennenlernen. Du lernst, wie man Webseiten interaktiv macht, auf Benutzeraktionen (Klicks, Formulare) reagiert, Elemente im DOM manipuliert und Daten asynchron nachlädt (`fetch`).

**Zeit:** ~3–4 h/Tag × 4 Tage ≈ 13–15 h.

**Warum JavaScript:** HTML gibt die Struktur, Tailwind das Aussehen – JavaScript bringt das Leben und die Logik in die Anwendung.

---

## Tag 1 — Grundlagen, Variablen, Funktionen & die Konsole (~3 h)

Lernen:
- MDN „JavaScript first steps": https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps
- MDN „What is JavaScript?": https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_javascript

Verstehen:
- **Variablen:** `let` (veränderbar) und `const` (konstant, bevorzugen!)
- **Datentypen:** Strings (`"Hallo"`), Numbers (`42`), Booleans (`true`/`false`), Arrays (`[...]`), Objects (`{...}`)
- **Funktionen:** Arrow-Funktionen (`const sayHello = () => {}`) vs. klassische Funktionen
- **Konsole:** `console.log()` zum Debuggen im Browser (F12 → Console)

Aufgaben:
- [ ] DevTools Konsole öffnen und einfache Ausdrücke testen
- [ ] Ein kleines `<script>` in die `index.html` einbauen (oder eine externe `js/main.js`), die in der Konsole eine Begrüßung ausgibt
- [ ] Eine kleine Funktion schreiben, die zwei Zahlen addiert und das Ergebnis loggt

## Tag 2 — Das DOM (Document Object Model) & Selektoren (~3 h)

Lernen:
- MDN „Manipulating documents": https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_apis/Manipulating_documents
- MDN „Document: querySelector()": https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

Verstehen:
- Das DOM ist der Baum, den der Browser aus HTML baut.
- `document.querySelector()` und `document.querySelectorAll()` zum Greifen von Elementen.
- `textContent` (Text ändern), `innerHTML` (HTML einfügen), `classList.add()` / `remove()` (Klassen verändern).

Aufgaben:
- [ ] Den Copyright-Jahreswechsel im Footer (`<span id="jahr">`) per JS dynamisch setzen (hast du schon, aber anschauen wie es funktioniert!).
- [ ] Ein kleines **Dark-Mode-Toggle** oder einen **„Mehr lesen“-Button** bauen, der einen Text ein- und ausblendet (`classList.toggle('hidden')`).

## Tag 3 — Events (Klicks, Formulare, User-Interaktion) (~3 h)

Lernen:
- MDN „Introduction to events": https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
- MDN „EventTarget: addEventListener()": https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

Verstehen:
- `element.addEventListener('click', (event) => { ... })`
- Formulare abfangen: `form.addEventListener('submit', (e) => { e.preventDefault(); ... })` um Neuladen der Seite zu verhindern und Validierung zu machen.

Aufgaben:
- [ ] Ein **mobiles Hamburger-Menü** für den Header bauen: Klick auf einen Button öffnet/schließt die Navigation auf kleinen Bildschirmen.
- [ ] Das **Kontaktformular** abfangen: Wenn man auf „Nachricht senden“ klickt, soll ein kleiner Erfolgs-Hinweis („Danke für deine Anfrage!“) erscheinen, statt das Formular wegzuschicken.

## Tag 4 — Asynchrones JavaScript & `fetch()` (~3 h)

Lernen:
- MDN „Asynchronous JavaScript": https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous
- MDN „Using Fetch": https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

Verstehen:
- **Asynchronität:** Code läuft weiter, während auf Daten gewartet wird.
- `async` / `await` Syntax.
- `fetch('https://api.example.com/data')` um Daten von externen APIs oder JSON-Dateien zu laden.

Aufgaben:
- [ ] Eine kleine `daten.json` im Projekt anlegen (z. B. mit Kurs-Preisen oder Team-Infos).
- [ ] Per `fetch()` diese JSON-Datei laden und dynamisch in die Seite einfügen (z. B. Kursliste per JS generieren).
- [ ] README-Checkbox aktualisieren & Commit machen:
      ```bash
      git add .
      git commit -m "Woche 5: JavaScript I abgeschlossen (DOM, Events, Fetch)"
      ```

---

## Fertig, wenn …
- [ ] Du `querySelector` und `addEventListener` sicher anwenden kannst
- [ ] Ein mobiles Menü oder ein Tabs-Wechsel per JS funktioniert
- [ ] Du ein Formular abfangen und validieren kannst
- [ ] Du Daten per `fetch()` laden und anzeigen kannst

## Ressourcen Woche 5
- MDN JavaScript Guide
- JavaScript.info (Sehr gutes Tutorial für Grundlagen)
- FreeCodeCamp JS Basics
