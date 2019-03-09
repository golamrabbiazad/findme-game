// define all variables for game
var words, word, answerArray, remainLetters, guess, guesses;

// Create an array of words
words = ['javascript', 'python', 'rust', 'go', 'swift'];
// Pick a random word
word = words[Math.floor(Math.random() * words.length)];

// Set up the answer array
answerArray = [];
document.querySelector('.result').addEventListener('click', function () {
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = '?';
  }
  // store word length to remainLetters 
  remainLetters = word.length;

  // set the guess limit for player
  guesses = 15;

  // The Game loop
  while (remainLetters > 0 && guesses > 0) {
    // Show the player their progress
    alert(answerArray.join(" "));
    // Get a guess from the player
    guess = prompt('Guess a letter, or click Cancel to stop playing.');
    if (guess === null) {
      break;
    } else if (guess.length !== 1) {
      alert('please enter a single letter.');
    } else {
      guesses--;
      // Update the game state with guess
      for (var j = 0; j < word.length; j++) {
        if (word[j] === guess && answerArray[j] === "?") {
          answerArray[j] = guess.toLowerCase();
          remainLetters--;
        }
      }
    }
    // The end of the game loop
  }
  // Show the answer and congratulate the player
  if (guesses > 0) {
    alert('Yee! The answer was ' + word);
  } else {
    alert('Aww! The answer was ' + word);
  }
});
