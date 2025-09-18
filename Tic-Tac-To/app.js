let boxes = document.querySelectorAll(".box");
let reBtn = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");
let newGame = document.querySelector("#new-btn");

let count = 1;
let turnx = true;

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
const resetGame = () => {
  turnx = true
  enableBox();
  msgContainer.classList.add("hide");

}
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnx === true) {
      box.innerText = "X";
      turnx = false;
      box.disabled;
      
    }
    else {
      box.innerText = "O";
      turnx = true;
    }
    if(turnx === true ){
      box.style.color = "cyan";
    } 
    else{
      box.style.color = "#E6F9AF";
    }
    box.disabled = true;
    cheakWinner();
    count = count + 1;
  })
})
const draw = () => {
    msg.innerText = "Draw";
  msgContainer.classList.remove("hide");
  count = 0;
}
const disableBox = () => {
  for (box of boxes) {
    box.disabled = true;
  }
}

const enableBox = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
}
const showWinner = (winner) => {
  msg.innerText = `winner is ${winner}`;
  msgContainer.classList.remove("hide");
  count = 0;
  disableBox();


}
const cheakWinner = () => {
  console.log(count)
  for (let pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        
      }
        else if( count == 9){
          draw();
       }
    }
  }
};

newGame.addEventListener("click", resetGame);
reBtn.addEventListener("click", resetGame);