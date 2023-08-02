// Generate random number
const randomNum = Math.floor(Math.random() * 10) + 1;

let guessCount = 0;

// Guess number function
function guessNumber(userGuess) {

  guessCount++;
  
  if (userGuess === randomNum) {
    return `Congratulations! You guessed the correct number, which was ${randomNum} and it took you ${guessCount} ${guessCount == 1 ? 'guess' : 'guesses'}.`;

  } else if (userGuess < randomNum) {
    return 'Higher!';
  
  } else {
    return 'Lower!';
  }

}

// Example usage
const result = guessNumber(5);
console.log(result);