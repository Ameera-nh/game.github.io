// Generate a random number between 1 and 10 and get elements 

let attempts = 5;


function checkGuess() {

const randomNumber = Math.floor(Math.random() * 10) + 1;

 const guess = parseInt(document.getElementById('guessInput').value);

  if (guess === randomNumber) {
    document.getElementById('message').textContent = 'Congratulations! You guessed the correct number.';
    disableButton();
  } else {
    attempts--;
    document.getElementById('attempts').textContent = attempts;

    if (attempts === 0) {
      document.getElementById('message').textContent = `Sorry, you lost. The correct number ${randomNumber}`
      disableButton();
    } else {
      let message = 'Almost there, please try again!';
      document.getElementById('message').textContent = message
    }
  }

function disableButton() {
  document.querySelector('button').disabled = true;
}
};



function playAgain() {
  
//   clear the guess input and the message 
  
document.getElementById('guessInput').value = ''
document.getElementById('message').textContent = '';

//   reset attempts 
  
attempts = 5;
  document.getElementById('attempts').textContent = attempts;

//   enable the button 
  
document.querySelector('button').disabled = false;

};
