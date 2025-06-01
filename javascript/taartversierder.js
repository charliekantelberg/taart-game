const sprinkelsButton = document.querySelector("#sprinkelsButton");
const sprinkelsOpties = document.querySelector('#sprinkelsOpties');
const glazuurButton = document.querySelector ("#glazuurButton");
const glazuurOpties = document.querySelector('#glazuurOpties');
const fruitButton = document.querySelector("#fruitButton");
const fruitOpties = document.querySelector('#fruitOpties'); 
const sprinkelsOpTaart = document.getElementById("sprinkelsOpTaart");
const taart = document.getElementById("taart");
const fruitOpTaart = document.getElementById("fruitOpTaart");
const klaarKnop = document.getElementById("klaarKnop");
const titel = document.getElementById("titel");
let gekozenGlazuur = "";
let gekozenSprinkels = "";
let gekozenFruit = "";
let tada = new Audio("audio/tada-fanfare.mp3"); // code met hulp van youtube, audio van pixabay

function toonSprinkelsOpties() {
    sprinkelsOpties.classList.remove("hidden");
}

function toonGlazuurOpties() {
    glazuurOpties.classList.remove("hidden");
}

function toonFruitOpties() {
    fruitOpties.classList.remove("hidden");
}

function verbergAlleOpties() {
    glazuurOpties.classList.add("hidden");
    sprinkelsOpties.classList.add("hidden");
    fruitOpties.classList.add("hidden");
}

function updateTaartAfbeelding() {
    let bestand = "images/";

    // Eerst glazuur
    if (gekozenGlazuur) {
        bestand += "glazuurtaart-" + gekozenGlazuur;
    } else {
        bestand += "taart";
    }

    // Daarna sprinkels
    if (gekozenSprinkels) {
        bestand += "-" + gekozenSprinkels;
    }

    // Daarna fruit
    if (gekozenFruit) {
        bestand += "-" + gekozenFruit;
    }

    bestand += ".png";
    taart.src = bestand;
}

glazuurButton.addEventListener("click", () => {
    verbergAlleOpties();
    glazuurOpties.classList.remove("hidden");
})

sprinkelsButton.addEventListener("click", () => {
    verbergAlleOpties();
    sprinkelsOpties.classList.remove("hidden");
});

fruitButton.addEventListener("click", () => {
    verbergAlleOpties();
    fruitOpties.classList.remove("hidden");
    eindeSectie.classList.remove("hidden");
});

sprinkelsButton.addEventListener("click", toonSprinkelsOpties);
glazuurButton.addEventListener("click", toonGlazuurOpties);
fruitButton.addEventListener("click", toonFruitOpties);

klaarKnop.addEventListener("click", () => {
    tada.play();
    titel.textContent = "Je taart is klaar!";
});

document.querySelectorAll("#glazuurOpties img").forEach(img => {
    img.addEventListener("click", () => {
        if (img.alt.includes("chocolade")) {
            gekozenGlazuur = "choco";
        }
        else if (img.alt.includes("rozekleurige")) {
            gekozenGlazuur = "roze";
        }
        else if (img.alt.includes("poedersuiker")) {
            gekozenGlazuur = "vanille";
        }
        updateTaartAfbeelding();
    });
});

document.querySelectorAll("#sprinkelsOpties img").forEach(img => {
    img.addEventListener("click", () => {
        if (img.alt.includes("regenboog")) {
            gekozenSprinkels = "regenboog";
        }
        else if (img.alt.includes("chocolade")) {
            gekozenSprinkels = "choco";
        }
        else if (img.alt.includes("parel suiker")) {
            gekozenSprinkels = "parel";
        }
        updateTaartAfbeelding();
    });
});

document.querySelectorAll("#fruitOpties img").forEach(img => {
    img.addEventListener("click", () => {
        if (img.alt.includes("kiwi")) {
            gekozenFruit = "kiwi";
        }
        else if (img.alt.includes("aardbei")) {
            gekozenFruit = "aardbei";
        }
        else if (img.alt.includes("witte druiven")) {
            gekozenFruit = "druiven";
        }
        updateTaartAfbeelding();
    });
});



