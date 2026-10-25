# Woche 3 — Tailwind CSS: modernes Styling

Ziel: Aus dem nackten HTML wird eine **modern aussehende, responsive Seite** —
mit Tailwind CSS (Utility-First) statt handgeschriebenem CSS.

**Zeit:** ~3–4 h/Tag × 4 Tage ≈ 13–15 h.

**Warum Utility-First:** Statt viele eigene Klassen in einer CSS-Datei zu pflegen,
setzt du fertige Bausteine direkt im HTML (`bg-blue-900`, `p-6`, `grid`). Das ist
schnell, konsistent und der Einstieg in Design-Systeme (wie später in Astro/WordPress).

---

## Tag 1 — Setup, Header & Hero (~3 h)

Lernen:
- Tailwind-Doku „Installation / Play CDN": https://tailwindcss.com/docs/installation/play-cdn
- Tailwind „Utility-First Fundamentals": https://tailwindcss.com/docs/styling-with-utility-classes
- Kevin Powell (YouTube) – „Tailwind CSS for beginners"

Verstehen — das Namensschema `property-farbe-stufe`:
- `bg`/`text`/`border` = Eigenschaft, `blue`/`slate`/`teal` = Palette,
  Zahl = Helligkeit (**höher = dunkler**, Skala 50 … 950)
- `p-*` Padding, `m-*` Margin, `px`/`py`/`mt`/`mb` = Richtungen
- `flex`, `justify-between`, `items-center`, `gap-*` = Layout
- `md:`, `lg:` = Breakpoints (ab welcher Breite gilt die Klasse)

Aufgaben:
- [x] Play CDN im `<head>` einbinden: `<script src="https://cdn.tailwindcss.com"></script>`
- [x] **Hero:** dunkler Hintergrund (`bg-blue-900 text-white`), große Überschrift
      (`text-4xl md:text-6xl font-bold`), heller Absatz, CTA-Button
- [x] **Header:** `sticky top-0 z-50 bg-white/90 backdrop-blur border-b`,
      Logo links / Nav rechts mit `flex justify-between items-center`,
      Nav-Links `flex gap-6 list-none`

## Tag 2 — Kurs-Karten & Team (~3 h)

Lernen:
- Tailwind „Grid": https://tailwindcss.com/docs/grid-template-columns
- Tailwind „Hover / Focus / Even" (Varianten): https://tailwindcss.com/docs/hover-focus-and-other-states

Aufgaben:
- [x] **Kurse:** `grid grid-cols-1 md:grid-cols-3 gap-6`, Karten mit
      `bg-white rounded-2xl shadow-md border hover:shadow-xl transition p-6`
- [x] **Über uns:** zentriert mit begrenzter Breite (`max-w-3xl mx-auto text-center`)
- [x] **Team:** gleiches Grid, runde Bilder
      (`w-40 h-40 mx-auto rounded-full object-cover shadow-md`)

## Tag 3 — Kontakt, Tabelle, Formular, Footer (~3 h)

Aufgaben:
- [x] **Kontakt:** 2-Spalten-Grid (`grid-cols-1 md:grid-cols-2`), Adresse als Karte
- [x] **Tabelle:** `w-full text-left border-collapse`, Zebra mit `even:bg-slate-50`
- [x] **Formular:** Felder `w-full px-4 py-2 rounded-lg border ... focus:ring-2
      focus:ring-blue-500 outline-none`, Button `bg-blue-600 hover:bg-blue-700`
- [x] **Footer:** `bg-slate-900 text-slate-400`, Innenlayout
      `flex flex-col sm:flex-row items-center justify-between`

## Tag 4 — Abschluss-Check (~1 h)

- [ ] Alten CSS-Link (`css/styles.css`) auskommentieren — Tailwind übernimmt
- [ ] **Responsive:** Fenster schmal ziehen / DevTools-Gerätesymbol — nichts bricht
- [ ] **Validator:** https://validator.w3.org → 0 Fehler
- [ ] **Lighthouse** (DevTools) → Accessibility ≥ 90
- [ ] README-Checkbox aktualisieren und committen:
      ```bash
      git add .
      git commit -m "Woche 3: Tailwind CSS – Header, Hero, Kurse, Team, Kontakt, Formular, Footer"
      ```

---

## Fertig, wenn …
- [ ] Die Seite auf Handy- und Desktop-Breite gut aussieht
- [ ] Header bleibt beim Scrollen oben (sticky)
- [ ] Fokus-Ringe bei Formularfeldern sichtbar (Tastatur-Bedienung)
- [ ] Du erklären kannst: Was ist Utility-First? Was bedeutet `bg-blue-900`?
- [ ] Du erklären kannst: Was macht `md:` vor einer Klasse?

## Ressourcen Woche 3
- Tailwind-Doku (Core Concepts + Utilities) · Tailwind Play (zum Ausprobieren)
- Kevin Powell (YouTube) · freeCodeCamp „Responsive Web Design" (Flex/Grid)

## Tipp
Nicht jede Utility auswendig lernen — die Doku und die Autovervollständigung
(VS-Code-Extension **Tailwind CSS IntelliSense**) sind dein Nachschlagewerk.
