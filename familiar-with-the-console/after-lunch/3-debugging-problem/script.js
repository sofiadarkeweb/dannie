let gameActive = true;
const correctWord = "frontend";
const correctlyGuessedCharacters = correctWord.split("").map(() => "_");
const failedCharacters = [];

function isEmptyGuess(guess) {
  return guess === "";
}

function isSingleCharacterGuess(guess) {
  return guess.length === 1;
}

function isCorrectGuess(guess) {
  return guess === correctWord;
}

function handlePotentiallyCorrectGuess(guess) {
  let message;

  const guessIsCorrect = correctWord.includes(guess);

  if (!guessIsCorrect) {
    failedCharacters.push(guess);
    message = "Your guess failed, try again!";
  } else {
    const characterPosition = correctWord.indexOf(guess);
    correctlyGuessedCharacters[characterPosition] = guess;
    message = "Your guess was correct, keep going! :)";
  }

  return message;
}

function playGame() {
  let message = "";

  while (gameActive) {
    const guess = prompt(
      `Play a game of hangman!
      ${correctlyGuessedCharacters.join(" ")} 
      Failed characters: ${failedCharacters.join(", ")} 
      ${message}`
    );

    if (isEmptyGuess(guess)) {
      message = "Your input was empty, try again!";
    } else if (isSingleCharacterGuess(guess)) {
      message = handlePotentiallyCorrectGuess(guess);
    } else {
      message = "Invalid input, you must choose only one character";
    }
  }
}

playGame();
