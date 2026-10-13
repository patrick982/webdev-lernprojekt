# Woche 2 — HTML vertiefen

Ziel: Du beherrschst **semantisches, valides HTML** und weißt, wann welches Tag
das richtige ist. Am Ende ist die Tauchschul-Seite inhaltlich komplett — ohne
Framework, ohne CSS-Tricks, nur saubere Struktur.

**Zeit:** ~3–4 h/Tag × 4 Tage ≈ 13–15 h.

**Warum das zählt:** In Woche 7 (Astro) und Woche 8–9 (WordPress) baust du auf
genau dieser Denkweise auf. Wer Semantik kann, schreibt in jedem System gutes
Markup. Und Suchmaschinen/Accessibility belohnen es.

---

## Tag 1 — Semantik & Dokumentstruktur (~2 h lernen)

Lernen:
- MDN „HTML: A good basis for accessibility": https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML
- MDN-Elementübersicht: https://developer.mozilla.org/en-US/docs/Web/HTML/Element
- freeCodeCamp „Responsive Web Design" → Abschnitt *Basic HTML* / *Semantic HTML*

Verstehen — wann was:
- `<header>` (Kopfbereich), `<nav>` (Navigation), `<main>` (Hauptinhalt, **nur 1×**),
  `<section>` (thematischer Abschnitt), `<article>` (eigenständiger Inhalt),
  `<aside>` (Nebeninfo), `<footer>` (Fußbereich)
- Überschriften-Hierarchie: genau **ein** `<h1>`, dann `h2` → `h3` **ohne Stufen zu überspringen**
- `<ul>/<ol>/<li>` für Listen, `<dl>/<dt>/<dd>` für Begriff→Definition
- Textauszeichnung: `<strong>` (wichtig) vs `<em>` (Betonung) — nicht `<b>/<i>` zum Stylen
- `<time datetime="...">`, `<address>`

Aufgabe:
- [ ] Gehe `index.html` durch: Passt jedes `<section>`? Wo wäre `<article>` richtig? (`<article>` für jeden Kurs/Team-Member!)
- [ ] Prüfe die Überschriften-Hierarchie (nur ein `h1`)

## Tag 2 — Links, Bilder, Tabellen (~1 h lernen, 2 h bauen)

Lernen:
- MDN `<img>` (alt ist **Pflicht**): https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
- MDN `<figure>`/`<figcaption>`, `<table>`: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
- MDN „Responsive images" (nur überfliegen): `srcset`, `sizes`, `loading="lazy"`

Aufgabe:
- [ ] **Bilder:** Lege 2–3 Bilder in `img/` (Tauchfotos von https://unsplash.com —
      oder Platzhalter von https://placehold.co). Einbauen mit:
      - aussagekräftigem `alt` (bei rein dekorativen Bildern `alt=""`)
      - `width`/`height` (verhindert Layout-Springen)
      - `loading="lazy"` bei Bildern weiter unten
- [ ] **Team-Sektion** mit `<article>` + `<img>` + `<figure>/<figcaption>`
- [ ] **Öffnungszeiten-Tabelle:** `<table>` mit `<caption>`, `<thead>/<tbody>`,
      `<th scope="col">` — für die Kurse/Preise oder Öffnungszeiten

## Tag 3 — Formulare & Barrierefreiheit (~1 h lernen, 2 h bauen)

Lernen:
- MDN „Web forms — Working with user data": https://developer.mozilla.org/en-US/docs/Learn/Forms
- MDN „HTML forms": https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form
- Labels sind Pflicht: jedes Feld braucht ein `<label for="…">` mit passender `id`

Aufgabe — **Kontaktformular** unter `#kontakt`:
- [ ] `<form action="#" method="post">` mit Feldern:
      - Name (`type="text"`, `required`)
      - E-Mail (`type="email"`, `required`)
      - Kursauswahl (`<select>` mit `<option>`)
      - Nachricht (`<textarea>`)
      - DSGVO-Checkbox (`type="checkbox"`, `required`)
      - Absenden-Button (`type="submit"`)
- [ ] `<fieldset>` + `<legend>` zur Gruppierung
- [ ] Alle Labels korrekt mit `for`/`id` verknüpft

## Tag 4 — Validieren, A11y-Check, aufräumen (~1 h)

- [ ] **Validator:** https://validator.w3.org/#validate_by_input → HTML einfügen,
      **0 Fehler** anstreben (Warnungen ansehen, verstehen)
- [ ] **Accessibility:** Chrome DevTools → Lighthouse → Kategorie „Accessibility"
      laufen lassen; die wichtigsten Punkte beheben
- [ ] `alt`-Texte, Labels, Farbkontrast, sinnvolle Linktexte (nicht „hier klicken")
- [ ] README/Wochen-Checkbox aktualisieren und committen:
      ```bash
      git add .
      git commit -m "Woche 2: Semantik, Tabellen, Formulare, Bilder und A11y"
      ```

---

## Fertig, wenn …
- [ ] `index.html` validiert ohne Fehler (W3C)
- [ ] Inhalte: Kurse, Team (mit Bildern), Öffnungszeiten-Tabelle, Kontaktformular,
      Footer mit Impressum/Datenschutz-Platzhaltern
- [ ] Jedes Bild hat passenden `alt`, jedes Formularfeld ein `<label>`
- [ ] Überschriften-Hierarchie sauber (ein `h1`, keine Sprünge)
- [ ] Du in 2 Sätzen erklären kannst: Was ist semantisches HTML und warum ist es wichtig?
- [ ] Du erklären kannst: Was macht `alt`, was ein `<label>` (und warum Pflicht)?

## Ressourcen Woche 2
- MDN HTML-Element-Referenz · MDN Accessibility
- freeCodeCamp „Responsive Web Design" (HTML-Teil)
- The Odin Project – Foundations (HTML-Teil)
- W3C HTML Validator: https://validator.w3.org

## Tipp
Noch **kein** echtes Styling — nacktes, korrektes HTML ist das Ziel.
Design kommt in Woche 3–4. Formulare werden erst in Woche 5 mit JS lebendig
(Absenden macht der PHP/WordPress-Teil später).
