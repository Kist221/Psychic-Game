
// Variables needed for psychic game
    var gameChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var user = document.getElementById("user");
    var guess = document.getElementById("guess");
    var win = document.getElementById("win");
    var lose = document.getElementById("lose");
    var cWin = 0;
    var cLose = 0;
    var cGuess = 9;
    var tried = [];

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = gameChoices[Math.floor(Math.random() * gameChoices.length)];

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // runs if valid user input guess
    if (gameChoices.indexOf(userGuess) !== -1) {

        console.log(userGuess);

            // runs if equal
            if (computerGuess === userGuess)

            {
                
                console.log("user = comp");
                console.log("WIN");

                // adds 1 to win score
                win.textContent = ++cWin;

                // reset scene
                cGuess = 9;
                tried = [];
                guess.textContent = cGuess;
                user.textContent = "";
                computerGuess = gameChoices[Math.floor(Math.random() * gameChoices.length)];                
            }

            // lists guess & count
            else if ( userGuess !== computerGuess && cGuess > 0 ) 

            {
              
              console.log("user != comp");

              // Checks if guess is duplicate
              if (tried.indexOf(" " + userGuess) === -1) {
              
              console.log("tried new = true");

              // push new guess to guess array
              tried.push(" " + userGuess);
              
              // detract guess count
              guess.textContent = --cGuess;

              }
              
              // display inputs
              user.textContent = tried;

            }

            // Loser
            if (cGuess === 0) 

            {

              console.log("LOSE");

              // Add Lose Score
              lose.textContent = cLose++;

              // Reset
              cGuess = 9;
              tried = [];
              guess.textContent = cGuess;
              user.textContent = "";
              computerGuess = gameChoices[Math.floor(Math.random() * gameChoices.length)];

            }


      }


}
