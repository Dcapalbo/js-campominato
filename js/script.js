// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50


//funzione che genera un numero casuale tra 1 e 100
//funzione che dato un array e un numero mi controlla che il numero non sia già nell'array
//creo variabile array che contiene i numeri bomba
//ciclo che chiama la mia funzione di generazione dei numeri 16 volte  while(i<bombe)
    //check che il numero non sia duplicato
    //se non è duplicato, lo salvo nell'array bombe
//creo variabile array che contiene i numeri utente
//variabili booleana haPerso = false
//ciclo di 100-16 volte  //for(i=0; i<tentativi-bombe; i++)
  //prompt in cui chiedo all'utente un numero
  //check che il numero sia compreso tra 1 e 100
  //check che il numero non sia duplicato nell'array utente
  //se non è duplicato, salvo il numero nell'array utente
  //check che il numero non sia nell'array bomba
  //se il numero è nell'array bomba -> alert hai perso
      //alert con array utente .length -> numero di volte che l'utente ha inserito un numero corretto
      //haPerso = true;
      //esco dal ciclo
//controllo se haPerso è false
  //alert hai vinto

// 1. make a function which generate a number between 1 and 100
function generateRandomNumber(min, max) {
  var randomNumber = Math.floor(Math.random()* (max - min +1)) + min;
  return randomNumber;
}
//2. make a variable to insert the function inside of it
var randomNumber = generateRandomNumber(1, 100);

//3. make a function to prevent choosing the same number more than once
function insideArray(array, number) {
  if (array.indexOf(number)) {
    return true;
  } else {
    return false;
  }
}

function arrayRandomNumbers(quantityElementGen, minNumGen, maxNumGen) {
  var numbersArray = [];
  for (var i = 0; i < quantityElementGen; i++) {
    var  = randomNumber(minNumber, maxNumber);
    while (insideArray(numbersArray, tempRandomNumber)) {
      totalRandomNumber = generateRandomNumber(minNumber, maxNumber);
    }
    numbersArray.push(totalRandomNumber);
  }
  return numbersArray;
}

alert("Welcome in the mainfield, the game will start if you click on this message")
var difficulty = prompt("Choose a difficulty between: \"easy\", \"medium\" or \"hard\"");

while ((difficulty != "easy") && (difficulty != "medium") && (difficulty != "hard")) {
  difficulty = prompt("scrivi \"facile\", \"media\" o \"difficile\" per selezionare la difficoltà!!!");
}

if (difficulty == "easy") {
  var maxNumber = 100;
} else if (difficulty == "medium") {
  var maxNumber = 80;
} else if (difficulty == "hard") {
  var maxNumber = 50;
}
