const boardvalue = document.getElementById("board");
const resetButton = document.getElementById("reset");
const content = document.getElementById("message");

let gameBoard = ['', '', '',
                 '', '', '', 
                 '', '', ''];
let curvalue ='X';
let activeGame = true;

function createBoard(){
    boardvalue.innerHTML = ''; //used for clearing!
    for(let i=0 ; i<9 ; i++ ){
        const box = document.createElement("div"); // empty container with class named as box!
        box.classList.add("box");
        box.setAttribute("data-index", i);
        box.addEventListener("click" ,clickedOn);
        boardvalue.appendChild(box);
    }
}
function clickedOn(event){
    const box = event.target;
    const index = box.getAttribute("data-index");
    
    if(gameBoard[index] !== '' || !activeGame){
        return ;
    }
    gameBoard[index] = curvalue;
    box.textContent = curvalue;
    console.log(`Player ${curvalue} made a move at index ${index}`);
    if(checkWinner()){
        content.textContent = `${curvalue} Wins!`;
        content.style.marginTop = "8px";
        content.style.fontSize = "18px";
        activeGame = false;
    }else if(gameBoard.every(cell => cell !== '')){
        content.textContent = 'It\'s a Draw!';
        content.style.marginTop = "8px";
        content.style.fontSize = "18px";
        activeGame = false;
    }else{
        curvalue = curvalue === 'X' ? 'O' : 'X';  // ternary operator for switching
    }
}

function checkWinner() {
  const patterns = [
        [0, 1, 2], 
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], // contains all h , v, d values...
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
  ];

  for (let pattern of patterns) {
    const [a, b, c] = pattern;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return true;
    }
  }
  return false;
}

function resetGame() {
  gameBoard = ['', '', '',
               '', '', '',
               '', '', ''];
  curvalue = 'X';
  activeGame = true;
  content.textContent = '';
  createBoard();
}

resetButton.addEventListener('click', resetGame);
createBoard();
