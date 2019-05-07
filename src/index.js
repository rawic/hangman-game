import Hangman from "./hangman";
import generateWords from "./requests";
import "./styles/normalize.sass";
import "./styles/styles.sass";

const boardEl = document.querySelector(".js-board");
const guessesEl = document.querySelector(".js-guesses");
let newGame;

window.addEventListener("keypress", e => {
  const guess = e.key;
  newGame.makeGuess(guess);
  render();
});

const render = () => {
  boardEl.innerHTML = "";
  guessesEl.innerHTML = newGame.statusMessage;

  newGame.gameLetters.split("").forEach(letter => {
    const letterEl = document.createElement("span");
    letterEl.textContent = letter;
    boardEl.appendChild(letterEl);
  });
};

const startGame = async () => {
  const generatedWords = await generateWords("2");
  newGame = new Hangman(generatedWords, 5);
  render();
};

document.querySelector(".js-restartGame").addEventListener("click", startGame);

startGame();
