
let randomNumber;
let guessCount = 0;
let maxGuessesCount = 5;
let previousGuesses =[];

function generateRandom() {
  const start = parseInt(document.getElementById("start").value);
  const end = parseInt(document.getElementById("end").value);

  if (start >= end) {
    document.getElementById("intro").innerHTML = `Start Number should not be greater than End. Please Re-Enter`;
    return;
  }

  randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;

  guessCount = 0;
  console.log(randomNumber);

  document.getElementById("intro").innerHTML = `Random Number generated. Try to guess it! You have ${maxGuessesCount} attempts!!!`;
  document.getElementById("success-message").innerHTML = "";
  document.getElementById("error-message").innerHTML = "";
  document.getElementById("near-message").innerHTML = "";
  document.getElementById("guess-error-message").innerHTML ="";
  document.getElementById("inputNumber").value="";
}

function guessNumber() {
  if (randomNumber === undefined) {

    document.getElementById("intro").innerHTML = `First generate a number, buddy!`;
    document.getElementById("error-message").innerHTML="";
    document.getElementById("success-message").innerHTML='';
    return;
  }

  let myGuess = parseInt(document.getElementById("inputNumber").value);


  if( isNaN( myGuess)){
    guessCount = 0;
    document.getElementById("guess-error-message").innerHTML = `Please enter a value to Guess`;
    return;
  }

  if (previousGuesses.includes(myGuess)) {
    document.getElementById("guess-error-message").innerHTML = `You have already guessed ${myGuess}. Try a different number!`;
    document.getElementById("error-message").innerHTML = "";
    document.getElementById("near-message").innerHTML = "";

    return;
  }

  previousGuesses.push(myGuess);

  guessCount++;

  const difference = Math.abs(randomNumber - myGuess);

  if (randomNumber === myGuess) {

    document.getElementById("error-message").innerHTML = "";
    document.getElementById("intro").innerHTML = "";
    document.getElementById("near-message").innerHTML = "";
    document.getElementById("guess-error-message").innerHTML = "";
    document.getElementById("success-message").innerHTML = `Congratulations, buddy! You guessed correctly in ${guessCount} attempt(s).`;
    resetGame();
    return;
  }

  if (guessCount >= maxGuessesCount) {

      document.getElementById("error-message").innerHTML = `Game over! You've used all your attempts. The correct number was ${randomNumber}.`;
      
    resetGame();
    return;
  }

  if (myGuess < randomNumber) {
    document.getElementById("error-message").innerHTML = `Your number is less than my number!`;
    document.getElementById("near-message").innerHTML = "";
    document.getElementById("guess-error-message").innerHTML = "";


  } else if (myGuess > randomNumber) {
    document.getElementById("error-message").innerHTML = `Your number is greater than my number!`;
    document.getElementById("near-message").innerHTML = "";
    document.getElementById("guess-error-message").innerHTML = "";


  }

  if (difference === 1) {
    document.getElementById("near-message").innerHTML =`You are very close to my number!`;
  }else if(difference ===2 ){
    document.getElementById("near-message").innerHTML = `You are little closer to my number!`;
  }else if( difference >=3 && difference <=5){
    document.getElementById("near-message").innerHTML =`You are far closer to my number!`;
  }

  document.getElementById("intro").innerHTML = `Try again! You have ${maxGuessesCount - guessCount} attempt(s) left.`;
}

function resetGame() {
  randomNumber = undefined;
  guessCount = 0;
  document.getElementById("inputNumber").value = "";
  document.getElementById("intro").innerHTML = "";
  document.getElementById("near-message").innerHTML = "";
  document.getElementById("guess-error-message").innerHTML ="";
}
