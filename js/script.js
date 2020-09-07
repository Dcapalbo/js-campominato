
//1. Make an alert as an intro to the game

  alert("Welcome into the game, click to continue");

//2. make a prompt to select the difficulty

  let difficulty = prompt("Select the difficulty \"easy\", \"medium\" or \"hard\"").toLowerCase();

//3. make some condiction with a ciclw while, to select the difficulty

  while ((difficulty != "easy") && (difficulty != "medium") && (difficulty != "hard")) {
    difficulty = prompt("please write \"easy\", \"medium\" or \"hard\" to select the difficulty!").toLowerCase();
  }

//4. select the difficulty

switch (difficulty) {
  case "easy":
   maxNumber = 100
   break;
  case "medium":
   maxNumber = 80
   break;
   default:"hard"
   maxNumber = 50
   break;
}

//5. make some variables usefull for later.

var insideNumbers = [];
var isBomb = false;
var bomb = 16;
var range = maxNumber - bomb;

//6. make a function to check inside of the array if there is an element or not

function inArray(array, element) {
  var i = 0;
  while (i < array.length) {
    if (array[i] == element) {
      return true;
    }
    i++;
  } return false;
}

//7. make a function to generate a random number

function generateRandomNumber(min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min) ) + 1;
  return randomNumber;
}

//8. make  a while cicle to look inside of the bomblist array, if the number is not already inside the array, push it in.

var bombList = [];
while (bombList.length < bomb) {
  var bombNumb = generateRandomNumber(1, maxNumber);
  if (inArray(bombList, bombNumb) == false) {
  bombList.push(bombNumb)
  }
} console.log(bombList);

//9. make a whilce cicle to let the user insert the numbers with some conditions, if the utent number is the same of the bomb, make an alert, if the utent number is not inside of the array, push the utent number into it.

while (insideNumbers.length < range && isBomb == false) {

  var userNumber = parseInt(prompt("insert a number from 1 to " + maxNumber));
  if (isNaN(userNumber) || userNumber > maxNumber || userNumber < 1) {
    alert("You must insert a number from 1 to + " + maxNumber)
  } else if (inArray(insideNumbers, userNumber) == true) {
    alert("this number is already inserted");
  } else {
    if (inArray(bombList, userNumber) == true) {
      isBomb = true
    } else {
      insideNumbers.push(userNumber);
    }
  }
}
//10. Make a condition, if the bomb has found, send an alert, if the utent win the game, send an other one.

if (isBomb == true) {
  alert("You lost, here your score level " + insideNumbers.length);
} else {
  alert("You win, well done!")
}
