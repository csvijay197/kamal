  let randomNumber;
  let guessCount = 0; 
  const maxGuesses = 5; 

  function generateRandom() {
  const start = parseInt(document.getElementById("start").value);
  const end = parseInt(document.getElementById("end").value);

  if (start >= end) {
    alert("The start number should be less than the end number!");
    return;
  }

  randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;
  guessCount = 0; 
  console.log(randomNumber);

  document.getElementById("intro").innerHTML = `Random number generated between ${start} and ${end}. Try to guess it! You have ${maxGuesses} attempts.`;
  }

  function guessNumber() {

  if (randomNumber === undefined) {
    alert("Please generate a random number first!");
    return;
  }

  const userGuess = parseInt(document.getElementById("inputNumber").value);

  guessCount++; 

  const difference = randomNumber - userGuess ;

  if (userGuess === randomNumber) {
    alert("Congratulations! You guessed the correct number!");
    resetGame(); 
    return;
  } else if (userGuess > randomNumber) {
    alert("Your number is greater than the random number.");
  } else if (userGuess < randomNumber) {
    alert("Your number is less than the random number.");
  }

  if (difference > 0 && difference <= 5) {
    alert("You are very close! Guess It buddy !!");
  }

    if (guessCount >= maxGuesses) {
    alert(`Game over! You've used all your attempts. The correct number was ${randomNumber}.`);
    resetGame();
    document.getElementById("inputNumber").value  = ''; 
  } else {
    document.getElementById("intro").innerHTML = `Try again! You have ${maxGuesses - guessCount} attempts left.`;
  }
  }

  function resetGame() {
  randomNumber = undefined; 
  guessCount = 0; 
  }
