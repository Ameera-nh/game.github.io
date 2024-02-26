// // Generate a random number between 1 and 10 and get elements 

// let attempts = 5;


// function checkGuess() {

// const randomNumber = Math.floor(Math.random() * 10) + 1;

//  const guess = parseInt(document.getElementById('guessInput').value);

//   if (guess === randomNumber) {
//     document.getElementById('message').textContent = 'Congratulations! You guessed the correct number.';
//     disableButton();
//   } else {
//     attempts--;
//     document.getElementById('attempts').textContent = attempts;

//     if (attempts === 0) {
//       document.getElementById('message').textContent = `Sorry, you lost. The correct number ${randomNumber}`
//       disableButton();
//     } else {
//       let message = 'Almost there, please try again!';
//       document.getElementById('message').textContent = message
//     }
//   }

// function disableButton() {
//   document.querySelector('button').disabled = true;
// }
// };



// function playAgain() {
  
// //   clear the guess input and the message 
  
// document.getElementById('guessInput').value = ''
// document.getElementById('message').textContent = '';

// //   reset attempts 
  
// attempts = 5;
//   document.getElementById('attempts').textContent = attempts;

// //   enable the button 
  
// document.querySelector('button').disabled = false;

// };

// rewritten code 

let attempts = 5;

let randomNumber = Math.floor(Math.random() * 10) + 1


function checkGuess() {

const guess = parseInt(document.getElementById('guessInput').value);
console.log("Guess: " + guess); // debugging 
  
  
  if (guess === randomNumber) {
    console.log("Guess is correct")
    document.getElementById('message').textContent = 'Congratulations! You guessed the correct number.';
    disableButton();
  } else {
    attempts--;
    document.getElementById('attempts').textContent = attempts;
    

    if (attempts === 0) {
      console.log("guess is incorrect")
      document.getElementById('message').textContent = `Sorry, you lost. The correct number ${randomNumber}`
      disableButton();
    } else {
      console.log("try again")
      let message = guess < randomNumber ? 'Too low. Try again!' : 'Too high. Try again!';
      document.getElementById('message').textContent = message
      
    }
  };

function disableButton() {
  document.querySelector('button').disabled = true;
}
};



console.log(checkGuess())


function playAgain() {
  
//   clear the guess input and the message and randomNumber
  
document.getElementById('guessInput').value = ''
document.getElementById('message').textContent = '';
randomNumber = Math.floor(Math.random() * 10) + 1
//   reset attempts 
  
attempts = 5;
  document.getElementById('attempts').textContent = attempts;

//   enable the button 
  
document.querySelector('button').disabled = false;

};


