let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newgameBtn = document.querySelector("#new-btn");
let msgCont = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disabledboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Winner is ${winner}`;
  msgCont.classList.remove("hide");
  disabledboxes();
};

const checkWinner = () => {
  for (let p of winPatterns) {
    let pos1 = boxes[p[0]].innerText;
    let pos2 = boxes[p[1]].innerText;
    let pos3 = boxes[p[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
      }
    }
  }
};

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgCont.classList.add("hide");
};

newgameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
