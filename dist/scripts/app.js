const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");

// game 1

let game1;

// // console.log(game1.status);

// // on keypress display guessed letters on the screen

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);

  render();
  // console.log(game1.status);
});

const render = () => {
  puzzleEl.innerHTML = "";
  guessesEl.textContent = game1.statusMessage;

  game1.puzzle.split("").forEach((letter) => {
    const letterEl = document.createElement("span");
    letterEl.textContent = letter;
    puzzleEl.appendChild(letterEl);
  });
};

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  game1 = new Hangman(puzzle, 5);
  render();
  console.log(puzzle);
};

document.querySelector("#reset").addEventListener("click", () => {
  startGame();
});

startGame();

// getPuzzle("2")
//   .then((puzzle) => {
//     console.log(puzzle);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });

// getCountry("FR")
//   .then((country) => {
//     console.log(country.name);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });

// getCurrentCountry()
//   .then((country) => {
//     console.log(country.name);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// getLocation()
//   .then((location) => {
//     return getCountry(location.country);
//   })
//   .then((country) => {
//     console.log(country.name);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });
