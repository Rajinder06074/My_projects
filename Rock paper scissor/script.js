let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll('.choice');

const msg = document.querySelector("#msg");
const resetbtn = document.querySelector("#reset-btn");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompchoice = () => {
    const options = ['rock', 'paper', 'scissor'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
const gameDraw = () => {
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor = "gray";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userscore++;
        userScorepara.innerText = `${userscore}`;
        msg.innerText = `You won the game, your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }  else {
            computerscore++;
            compScorepara.innerText = `${computerscore}`               
            msg.innerText = `Computer won the game, ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    // generate computer choice
    const compChoice = genCompchoice();

    if (userChoice === compChoice) { // draw
        gameDraw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // rock vs paper || rock vs scissor
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // paper vs rock || paper vs scissor
            userWin = compChoice === "scissor" ? false : true;
        } else { // userChoice === "scissor"
            // scissor vs rock || scissor vs paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

// reset button
// resetbtn.addEventListener("click", () => {
//     userscore = 0;
//     computerscore = 0;
//     userScorepara.innerText = 0;
//     compScorepara.innerText = 0;
//     msg.innerText = "Make your move!";
//     msg.style.backgroundColor = "#333";
// });
// reset button
resetbtn.addEventListener("click", () => {
    userscore = 0;
    computerscore = 0;
    userScorepara.innerText = 0;
    compScorepara.innerText = 0;
    msg.innerText = "Make your move!";
    msg.style.backgroundColor = "#333";
});