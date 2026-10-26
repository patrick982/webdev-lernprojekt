# Woche 4 — CSS II: Layout verstehen & Design-Feinschliff

Ziel: Du verstehst, **warum** Tailwind-Layouts funktionieren (Box-Modell,
Flexbox, Grid, Mobile-first) und bringst die Tauchschul-Seite auf ein
einheitliches, professionelles Design — Farben, Typografie, Abstände,
Transitions und ein kleiner Feinschliff.

**Zeit:** ~3–4 h/Tag × 4 Tage ≈ 13–15 h.

**Warum erst jetzt die Theorie:** In Woche 3 hast du Tailwind benutzt. Jetzt
schauen wir unter die Haube — so kannst du Layouts gezielt debuggen (DevTools)
und musst nicht raten, welche Utility die richtige ist.

---

## Tag 1 — Box-Modell, Cascade & Tokens (~3 h)

Lernen:
- MDN „The box model": https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model
- MDN „Cascade, specificity, inheritance": https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance
- MDN „CSS custom properties": https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

Verstehen:
- **Box-Modell:** content → padding → border → margin; `box-sizing: border-box`
  (macht Tailwind per Preflight für dich) — deshalb ist `w-40` immer 160 px breit
- **Cascade & Spezifität:** Element < Klasse < ID; !important nur im Notfall
- **Custom Properties = Design-Tokens:** Farben/Abstände zentral definieren
  (in Tailwind über die Config/Theme, nicht kreuz und quer im HTML)

Aufgaben:
- [ ] In DevTools ein Element inspizieren: Box-Modell-Diagramm ansehen,
      padding/border/margin zuordnen
- [ ] Prüfen, warum `w-40 h-40` bei den Team-Bildern quadratisch bleibt
- [ ] Notiere dir 4 Design-Tokens für die Seite: Primärfarbe, Textfarbe,
      Hintergrund, Akzent

## Tag 2 — Flexbox vertieft (~3 h)

Lernen:
- Tailwind „Flexbox": https://tailwindcss.com/docs/flex
- CSS-Tricks „A Complete Guide to Flexbox": https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- Spielerisch: https://flexboxfroggy.com/#de

Verstehen:
- `flex` (Reihe) vs. `flex-col` (Spalte), `justify-*` (Hauptachse),
  `items-*` (Querachse), `gap-*`, `flex-wrap`, `flex-1`
- Wann Flexbox, wann Grid: **1-dimensional = Flex, 2-dimensional = Grid**

Aufgaben:
- [ ] **Header** auf Mobile testen: Logo + Nav müssen umbrechen oder sich
      sinnvoll verhalten (`flex-wrap`, ggf. Nav kleiner)
- [ ] **Hero** mittig ausrichten: Inhalte mit `flex flex-col items-center`
      (statt nur `text-center`), Button-Abstand mit `gap-*`
- [ ] **Footer** prüfen: `flex-col` auf klein, `sm:flex-row` ab mittel

## Tag 3 — Grid & Mobile-first (~3 h)

Lernen:
- Tailwind „Responsive design" (Mobile-first): https://tailwindcss.com/docs/responsive-design
- Tailwind „Grid": https://tailwindcss.com/docs/grid-template-columns
- MDN „CSS Grid Layout": https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout

Verstehen:
- **Mobile-first:** Basis-Klassen gelten für klein; `md:`/`lg:` fügen *ab*
  dieser Breite hinzu — nie „desktop zuerst"
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`, `gap-*`, `max-w-* mx-auto`
- Breakpoints: `sm` 640px · `md` 768px · `lg` 1024px · `xl` 1280px

Aufgaben:
- [ ] **Kurse** auf drei Breiten prüfen (Handy / Tablet / Desktop) und ggf.
      `md:grid-cols-3` ergänzen um `lg:grid-cols-3` / bessere Abstände
- [ ] **Kontakt** bei mittlerer Breite prüfen: Adresse/Tabelle und Formular
      sollen nicht gequetscht wirken
- [ ] Bewusst **eine** Stelle identifizieren, die auf dem Handy noch schlecht
      aussieht, und mit einer Mobile-first-Klasse beheben

## Tag 4 — Design-Feinschliff & Abschluss (~3 h)

Lernen:
- Tailwind „Colors", „Typography", „Box Shadow": https://tailwindcss.com/docs/colors
- Tailwind „Transition & Animation": https://tailwindcss.com/docs/transition-property
- Kontrast prüfen: https://webaim.org/resources/contrastchecker/

Aufgaben:
- [ ] **Einheitliche Abstände:** Sektionen alle mit `py-16`/`py-20`, Überschriften
      mit gleichem `mb-*` — nichts wirkt zufällig
- [ ] **Farbdisziplin:** nur die 4 Tokens aus Tag 1 verwenden (kein Farbwildwuchs)
- [ ] **Hover/Focus überall:** Links `hover:underline` oder `hover:text-*`,
      Buttons `transition`, Felder behalten Fokus-Ringe
- [ ] **Kleine Politur:** z. B. Karten-Hover (`hover:-translate-y-1`), sanfte
      `transition`, Hero mit dezentem Muster/Verlauf (`bg-gradient-to-br`)
- [ ] **Responsive-Finale:** kompletter Durchlauf Handy → Desktop
- [ ] **Lighthouse:** Accessibility ≥ 90, Performance ansehen
- [ ] README-Checkbox + Commit:
      ```bash
      git add .
      git commit -m "Woche 4: Layout vertieft, Mobile-first und Design-Feinschliff"
      ```

---

## Fertig, wenn …
- [ ] Du Box-Modell, `justify-*` vs. `items-*` und Mobile-first erklären kannst
- [ ] Die Seite auf Handy, Tablet und Desktop gleich sauber aussieht
- [ ] Alle Sektionen einheitliche Abstände und nur wenige Farben nutzen
- [ ] Hover- und Fokus-Zustände überall sichtbar sind
- [ ] Du weißt, wann Flexbox und wann Grid die richtige Wahl ist

## Ressourcen Woche 4
- CSS-Tricks Flexbox-Guide · Flexbox Froggy & Grid Garden (Spiele)
- MDN Box-Modell / Cascade / Grid · Tailwind-Doku
- WebAIM Contrast Checker

## Tipp
Wenn ein Layout „nicht will": DevTools → Element wählen → im Layout-Panel
Flex/Grid-Overlay einschalten. Damit siehst du sofort, was die Utilities tun.
