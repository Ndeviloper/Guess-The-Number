// Generate random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Function to check the guess
function checkGuess() {
  const guess = parseInt(document.getElementById('guessInput').value);

  if (guess === randomNumber) {
    setMessage('Congratulations! You guessed the correct number!');
  } else if (guess < randomNumber) {
    setMessage('Too low! Try a higher number.');
  } else {
    setMessage('Too high! Try a lower number.');
  }
}

// Function to display messages
function setMessage(msg) {
  document.getElementById('message').innerText = msg;
}
