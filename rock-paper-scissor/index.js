const choices = ["rock", "paper", "scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("result");


function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    computerDisplay.textContent = `PLAYER: ${computerChoice}`;
    playerDisplay.textContent = `Computer: ${playerChoice}`;

    if (playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissor") 
                ? "YOU WIN!"
                : "YOU LOSE!";
                break;
            case "scissor":
                result = (computerChoice === "paper") 
                ? "YOU WIN!"
                : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") 
                ? "YOU WIN!"
                : "YOU LOSE!";
                break;
        }
    }

    resultDisplay.textContent = result;
}
