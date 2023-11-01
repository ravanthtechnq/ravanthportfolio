const text = "With 1 Year Experience";
const textContainer = document.getElementById("typed-text");

function typeText() {
    textContainer.textContent = text.slice(0, i);
    i++;

    if (i <= text.length) {
        setTimeout(typeText, 100);
    }
}

let i = 0;
typeText();
