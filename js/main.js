/*
1 fare un pulsante
2 al click creare una griglia

 Generare griglia:
 1) definire contenitore con dimensioni fisse
 2) contiamo da 1 a 100 e per ogni ciclo:
   a) creiamo una cella
      I) la larghezza la valutiamo con il calc(100% / 10)
      II) l'altezza con aspect-ratio: 1
   b) associamo l'inidice alla singola cella


Quando l'utente clicca su una cella, questa si colora di azzurro ed emette un messaggio
in cosole con il nukero della cella cliccata:

1) associamo al click sulla cella un codice:
  a) usiamo una classe per cambiare il colore alla cella.
  b) usiamo il console.log sull'indice associato alla cella.


   */

//   prendo pulsante
const button = document.getElementById("pulsante");
const grid = document.getElementById("griglia");

// creo evento al click
button.addEventListener("click", function () {
  generaGriglia();
});

const livello = document.getElementById("select");

// creo funzione da avviare con il click
function generaGriglia() {

    let size;
  if (livello.value == 1) {
    size = 10 * 10;
  } else if (livello.value == 2) {
    size = 9 * 9;
  } else {
    size = 7 * 7;
  }
  for (let index = 1; index <= size; index++) {
    // creo una cella
    const cell = document.createElement("div");
    // creo una classe
    cell.classList.add("cell");
    if (livello.value == 1) {
       cell.classList.add('cell10');
      } else if (livello.value == 2) {
        cell.classList.add('cell9');
      } else {
        cell.classList.add('cell7');
      }
    // inserisco i vari index in HTML
    cell.innerHTML = index;
    // aggiungo la classe con il click che fa cambiare colore
    cell.addEventListener("click", function () {
      cell.classList.add("azure");
      console.log(index);
    });

    grid.append(cell);
  }
}
