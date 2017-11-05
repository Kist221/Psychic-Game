

// Variables needed for psychic game
    var gameChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var user = document.getElementById("user");
    var guess = document.getElementById("guess");
    var win = document.getElementById("win");
    var lose = document.getElementById("lose");

    var cWin = 0
    var cLose = 0

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = gameChoices[Math.floor(Math.random() * gameChoices.length)];



    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

      // Run if incorrect input
      if (  userGuess === computerGuess ) 
      
      {
          
          // Display User Input 
          user.textContent = userGuess;

          // adds 1 to win score
          win.textContent = ++cWin;

          // reset scene

          // assign new random computer guess
          var computerGuess = gameChoices[Math.floor(Math.random() * gameChoices.length)];
      }

      // detract guess count and list new input
      else {

        // prevent duplicate input from affecting guess count


      }

    };
    
