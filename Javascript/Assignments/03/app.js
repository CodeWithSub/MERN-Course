alert("This is a Guessing game!");

// Get and validate the max number
let max = parseInt(prompt("Enter the max number:"));
while (isNaN(max) || max <= 0) {
  max = parseInt(prompt("Please enter a valid positive number for max:"));
}

// Generate random number
let rand = Math.floor(Math.random() * max) + 1;
console.log("Random number:", rand);

// Start guessing loop
let guess = prompt("Guess the number (or type 'quit' to exit):");

while (true) {
  if (guess === "quit") {
    console.log("Quitting the game");
    break;
  }

  let guessNum = parseInt(guess);

  if (isNaN(guessNum)) {
    guess = prompt("Invalid input. Please enter a number:");
    continue;
  }

  if (guessNum === rand) {
    alert("🎉 Congratulations! You guessed the right number.");
    console.log("Guessed:", guessNum, "Target:", rand);
    break;
  } else {
    guess = prompt("❌ Wrong guess! Try again (or type 'quit' to exit):");
  }
}
