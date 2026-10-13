# Woche 1 — Setup, Git & erste HTML-Seite

Willkommen in Woche 1. Ziel: Deine Werkzeuge stehen, du verstehst grob, wie das
Web funktioniert, und du hast deine **erste eigene Seite** gebaut und versioniert.

**Lernprojekt:** eine (fiktive) Tauchschule-Website `Deep Blue Tauchschule`.
Sie wächst über die 12 Wochen von nacktem HTML bis zur fertigen WordPress-Seite.

**Zeit diese Woche:** ~3–4 h/Tag × 4 Tage ≈ 13–15 h.

---

## Tag 1 — Werkzeuge installieren

- [ ] **Editor:** VS Code — https://code.visualstudio.com
      Extensions: *Live Server*, *Prettier*, *HTML CSS Support*
- [ ] **Browser:** aktuelle Version Chrome oder Firefox (mit **DevTools** — F12)
- [ ] **Git** installieren — https://git-scm.com/downloads
- [ ] Prüfen im Terminal:
      ```bash
      git --version
      code --version
      ```

## Tag 2 — Wie das Web funktioniert + Git-Basics

Lernen (ca. 1,5–2 h):
- MDN „How the web works": https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works
- Git-Buch Kapitel 1–2: https://git-scm.com/book/de/v2
- GitHub Skills (Intro): https://skills.github.com

Verstehen:
- Was passiert, wenn du eine URL aufrufst (DNS → Server → HTML → Browser rendert)
- Client vs. Server, statische Seite, Datei `index.html` als Einstieg
- Git: `init`, `add`, `commit`, `status`, `log`; Was ist ein Repository?

Praxis — Projekt in Git aufsetzen (im Ordner `webdev-lernprojekt`):
```bash
git init
git add .
git commit -m "Woche 1: Projektstart"
git log --oneline
```
- [ ] Repo angelegt, erster Commit gemacht, `git log` zeigt ihn

## Tag 3 — DevTools & Dateistruktur

Lernen:
- Chrome DevTools: Elemente inspizieren, Styles live ändern (Elements-Tab), Console
- MDN „Getting started with HTML": https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics

Aufgabe:
- [ ] Öffne eine beliebige Website, inspiziere per F12 das Layout
- [ ] Ändere in DevTools live eine Farbe/Text (Verständnis, kein Speichern)
- [ ] Lege die Ordnerstruktur an:
      ```
      webdev-lernprojekt/
      ├── index.html
      ├── css/styles.css
      ├── img/           (leer, kommt später)
      └── README.md
      ```

## Tag 4 — Erste Seite: HTML-Struktur bauen

Datei `index.html` ist vorgegeben (Skelett) — **du füllst die TODOs**:
- [ ] Titel & Meta anpassen
- [ ] Die `TODO`-Kommentare durch echten Inhalt ersetzen
- [ ] Semantische Tags nutzen: `<header> <nav> <main> <section> <footer>`
- [ ] Navigation als Anker-Links zu den Abschnitten (`#kurse`, `#kontakt` …)
- [ ] Mit **Live Server** öffnen (Rechtsklick → „Open with Live Server")

CSS:
- [ ] `css/styles.css` einbinden (per `<link>` im `<head>`)
- [ ] Nur die Basis ist drin — für Woche 1 reicht: lesbar, sauber, ein paar Farben

---

## Fertig, wenn …
- [ ] VS Code, Git, Browser+DevTools laufen
- [ ] Repo mit mind. 2 Commits (`git log` zeigt sie)
- [ ] `index.html` ist semantisch strukturiert, Inhalte statt TODOs
- [ ] Seite läuft über Live Server und ist im Browser ok
- [ ] Du in 2 Sätzen erklären kannst: Was macht HTML? Was macht CSS?
- [ ] Du erklären kannst: Was ist ein Commit, was ein Repository?

## Ressourcen Woche 1
- MDN – HTML-Grundlagen · Git-Buch (de) · GitHub Skills
- Kevin Powell (YouTube) – „HTML & CSS for beginners"
- freeCodeCamp – „Responsive Web Design" (Anfang)

## Tipp
Nicht perfekt machen — **fertig** machen. Design kommt in Woche 3–4 richtig.
