// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


const gridEl = document.getElementById("grid")
generateGrid(gridEl);

const startButtonEl = document.getElementById("play");

startButtonEl.addEventListener(
    "click",
    function () {
        const gridEl = document.getElementById("grid");
        const gridDimension = 100;
        generateGrid(gridEl, gridDimension);
    }

)


function generateGrid(gridEl) {
    grid.innerHTML = "";
    // per 100 volte (numero dei quadrati nella griglia)
    for (let i = 1; i < 101; i++) {
        

        // genero un div
        const squareEl = document.createElement("div");

        // gli aggiungo la classe .square che lo rende quadrato e gli da bordo
        squareEl.classList.add("square");
        squareEl.innerHTML = i;

        // aggiungo un addeventlistener sul click che faccia il toggle della classe .active
        squareEl.addEventListener(
            "click",
            function () {
                // console.log("mi hai smashato")
                this.classList.toggle("active");
                console.log('numero cliccato: ' + i);
            }

        )

        // lo aggiungo alla griglia
        gridEl.append(squareEl);

    }

}
