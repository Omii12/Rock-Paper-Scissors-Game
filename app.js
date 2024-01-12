let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

let userscore = document.querySelector("#user-score");

let compscore = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];

  const randIndx = Math.floor(Math.random() * 3);

  return options[randIndx];
};

const drawGame = () => {
  msg.innerText = "Game is DRAW! Play again ⚠️";
  msg.style.backgroundColor = "#081b31";

};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userscore.innerText = userScore;
    msg.innerText = `You Win!😍 your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
   
  } else {
    compScore++;
    compscore.innerText = compScore;
    msg.innerText = `You Lose!😥  ${compChoice} beats  your ${userChoice}`;
    msg.style.backgroundColor = "red";
   
  }
};

const playGame = (userChoice) => {
  //to generate comp choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      // scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock , scissor
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock , paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
