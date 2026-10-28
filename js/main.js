// mehr lesen btn
const meinText = document.querySelector("#ueber-text");
const meinButton = document.querySelector("#toggle-btn");


meinButton.addEventListener("click", () => {
    // Hier kommt der Code hin, der beim Klick passieren soll
    // 3. Klasse "hidden" umschalten
    meinText.classList.toggle("hidden");

    // Bonus: Button-Text ändern
    if (meinText.classList.contains("hidden")) {
        meinButton.textContent = "Mehr lesen";
    } else {
        meinButton.textContent = "Weniger lesen";
    }
});

// Hauptmenü ausklappen einklappen bei kleiner bildschirmbreite
const menuText = document.querySelector("#hauptmenue");
const menuButton = document.querySelector("#menu-btn");

menuButton.addEventListener("click", () => {
    menuText.classList.toggle("hidden");


    const istOffen = !menuText.classList.contains("hidden");
    menuButton.setAttribute("aria-expanded", String(istOffen));
    menuButton.setAttribute("aria-label", istOffen ? "Menü schließen" : "Menü öffnen");
});

// menü soll keinen inhalt beim scrollen verdecken
document.querySelectorAll("#hauptmenue a").forEach((link) => {
    link.addEventListener("click", () => {
        menuText.classList.add("hidden");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Menü öffnen");

    });
});

// Kontakt form
const kontaktForm = document.querySelector("#kontakt-form");
const formHinweis = document.querySelector("#form-hinweis");

kontaktForm.addEventListener("submit", (e) => {
    // 1. Verhindern, dass die Seite neu lädt
    e.preventDefault();

    // 2. Hinweis anzeigen (Klasse "hidden" entfernen)
    formHinweis.classList.remove("hidden");

    // 3. Formularfelder leeren (optional, aber sauber)
    kontaktForm.reset();
});

// Kursdaten per fetch laden
fetch("daten.json")
  .then((res) => res.json())
  .then((daten) => {
    document.querySelectorAll("#kurse article").forEach((kurs, i) => {
      if (!daten.kurse[i]) return;
      kurs.querySelector("h3").textContent    = daten.kurse[i].name;
      kurs.querySelector("span.text-2xl").textContent = daten.kurse[i].preis;
      kurs.querySelector("p").textContent     = daten.kurse[i].text;
    });
  })
  .catch((err) => console.error("Fehler beim Laden:", err));