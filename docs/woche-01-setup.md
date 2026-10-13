# Woche 1 — Setup, Git & erste HTML-Seite

Ziel: Deine Werkzeuge stehen, du verstehst grob, wie das Web funktioniert, und
du hast deine **erste eigene Seite** gebaut und versioniert.

**Lernprojekt:** eine (fiktive) Tauchschule-Website `Deep Blue Tauchschule`.
Sie wächst über die 12 Wochen von nacktem HTML bis zur fertigen WordPress-Seite.

**Zeit diese Woche:** ~3–4 h/Tag × 4 Tage ≈ 13–15 h.

---

## Tag 1 — Werkzeuge installieren

- [x] **Editor:** VS Code — https://code.visualstudio.com
      Extensions: *Live Server*, *Prettier*, *HTML CSS Support*
- [x] **Browser:** aktuelle Version Chrome oder Firefox (mit **DevTools** — F12)
- [x] **Git** installieren — https://git-scm.com/downloads
- [x] Prüfen im Terminal:
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
- [x] Repo angelegt, erster Commit gemacht, `git log` zeigt ihn

## Tag 3 — DevTools & Dateistruktur

Lernen:
- Chrome DevTools: Elemente inspizieren, Styles live ändern (Elements-Tab), Console
- MDN „Getting started with HTML": https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics

Aufgabe:
- [ ] Öffne eine beliebige Website, inspiziere per F12 das Layout
- [ ] Ändere in DevTools live eine Farbe/Text (Verständnis, kein Speichern)
- [x] Ordnerstruktur anlegen:
      ```
      webdev-lernprojekt/
      ├── index.html
      ├── css/styles.css
      ├── img/           (leer, kommt später)
      └── README.md
      ```

## Tag 4 — Erste Seite: HTML-Struktur bauen

Datei `index.html` war als Skelett vorgegeben — **du hast die TODOs gefüllt**:
- [x] Titel & Meta angepasst
- [x] Die `TODO`-Kommentare durch echten Inhalt ersetzt
- [x] Semantische Tags genutzt: `<header> <nav> <main> <section> <footer>`
- [x] Navigation als Anker-Links zu den Abschnitten (`#kurse`, `#kontakt` …)
- [x] Mit **Live Server** geöffnet (Rechtsklick → „Open with Live Server")

---

## Fertig, wenn …
- [x] VS Code, Git, Browser+DevTools laufen
- [x] Repo mit Commit (`git log` zeigt ihn)
- [x] `index.html` ist semantisch strukturiert, Inhalte statt TODOs
- [x] Seite läuft über Live Server und ist im Browser ok
- [ ] Du in 2 Sätzen erklären kannst: Was macht HTML? Was macht CSS?
- [ ] Du erklären kannst: Was ist ein Commit, was ein Repository?

## Ressourcen Woche 1
- MDN – HTML-Grundlagen · Git-Buch (de) · GitHub Skills
- Kevin Powell (YouTube) – „HTML & CSS for beginners"
- freeCodeCamp – „Responsive Web Design" (Anfang)

## Tipp
Nicht perfekt machen — **fertig** machen. Design kommt in Woche 3–4 richtig.
