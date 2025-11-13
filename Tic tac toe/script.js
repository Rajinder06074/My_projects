let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset-btn');
let winBox = document.querySelector('.winner-box');
let winMsg = document.querySelector('#winner-message');
let playbtn = document.querySelector('#play-again');
let gameArea = document.querySelector('main');
let turnO = true;
let count = 0; // ✅ added

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO) {  
            box.innerText = "O";
            turnO = false;
        } else { 
            box.innerText = "X";
            turnO = true;            
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});

const gameDraw = () => {
    winMsg.innerText = "Game was a draw!";
    winBox.classList.remove('hide');
    disableboxes();
    gameArea.classList.add('hide');
};

const resetGame = () => {
    turnO = true;
    count = 0; // ✅ reset move count
    enableboxes();
    winBox.classList.add('hide');
    gameArea.classList.remove('hide');
};

const enableboxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};

const disableboxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const showWinner = (winner) => {
    winMsg.innerText = `Congratulations! Winner is ${winner}`;
    winBox.classList.remove('hide');
    disableboxes();
    gameArea.classList.add('hide');
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                return true; // ✅ important
            }
        }
    }
    return false; // ✅ return false if no winner
};

playbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
