

// Variables needed for psychic game
    var gameChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var win = document.getElementById("win");
    var lose = document.getElementById("lose");
    var user = document.getElementById("user");
    var comp = document.getElementById("comp");
    var cWin = 0
    var cLose = 0
    var cTie = 0

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = gameChoices[Math.floor(Math.random() * gameChoices.length)];

      // only run upon valid input
      if (   ) 
      
      {
      
          // Displays User Input 
          user.textContent = userGuess;

          // Displays Comp Input
          comp.textContent = computerGuess;

          // adds 1 to win scenario
          if (    ) {

            win.textContent = ++cWin;

          }

          // adds 1 to lose scenario
          if (    ) {

            lose.textContent = ++cLose;

          }

      }

    };
    
