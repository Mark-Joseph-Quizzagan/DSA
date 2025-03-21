//It will declare the variable to hold the favorite number
let theFavNumber = 42; //It will replace 42 with the actual favorite number

//It will initialize a variable to store the user's guess
let guess = null;

//It will use a while loop to ask the user to guess the favorite number
while (guess !== theFavNumber) {
  // Prompt the user for a guess
  guess = parseInt(prompt("Guess my favorite number!"));

  // Check if the guess is correct, too high, or too low
  if (guess < theFavNumber) {
    console.log("Too low! Try again.");
  } else if (guess > theFavNumber) {
    console.log("Too high! Try again.");
  } else {
    console.log("Correct! You guessed my favorite number!");
  }
}
