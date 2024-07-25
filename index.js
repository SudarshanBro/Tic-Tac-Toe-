const button = document.querySelectorAll(".button");
const reset = document.querySelector(".reset");
const newGame = document.querySelector(".newGame");
const btnarray = Array.from(button);
const paragraph = document.querySelector(".paragraph");
let gameOver = false;
const winGame = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [3, 4, 5],
  [6, 7, 8],
  [2, 5, 8],
  [2, 4, 6],
];

let turn = "X";
let turnForX = true;

const resetGame = () => {
  btnarray.map((btn) => {
    btn.textContent = "";
    turn = "X";
    turnForX = true;
    paragraph.textContent = "";
  });
};
const checkwinner = () => {
  for (let winpattern of winGame) {
    let pos1Val = btnarray[winpattern[0]].innerText;
    let pos2Val = btnarray[winpattern[1]].innerText;
    let pos3Val = btnarray[winpattern[2]].innerText;
    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        paragraph.textContent = `${pos1Val} has won`;
        for (let buttons of btnarray) {
          buttons.disabled = true;
        }
        setTimeout(() => {
          resetGame();
          for (let buttons of btnarray) {
            buttons.disabled = false;
          }
        }, 2000);
      }
    }
  }
};
const textcontent = (e) => {
  if (turnForX && e.target.innerText === "") {
    turnForX = false;
    e.target.textContent = turn;
    turn = "0";
    console.log(e.target.value);
  }
  if (!turnForX && e.target.innerText === "") {
    turnForX = true;
    e.target.textContent = turn;
    turn = "X";
  }
  checkwinner();
};

btnarray.map((btn) => btn.addEventListener("click", textcontent));
reset.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);
