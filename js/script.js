// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50

// functions

//1. Insert the random computer numbers and make a variable of it
function randomNumber(min, max) {
  return Math.floor(Math.random()* (max - min + 1) + min)
}

//2. make numbers variables

var computerNumber= randomNumber(1,100);
var maxNumber = 100;
var midNumber = 80
var minNumber = 50

//3. ask the utent number with a prompt

var utentNumber = parseInt(prompt("Inserire un numero"));

//4. make a var cycle to find

for (var i = 0; i <= 84; i++) {
  if (utentNumber <= 84) {
  }
  console.log(utentNumber);
}

//.2
