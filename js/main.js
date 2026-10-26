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