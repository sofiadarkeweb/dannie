const CORRECT_PASSWORD = "secret";
let guessPassword;

do {
  guessPassword = prompt("Welcome, enter password to proceed...");
} while (guessPassword === CORRECT_PASSWORD);

alert("Password correct, you may proceed.");
