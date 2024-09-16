let choices = document.querySelectorAll(".choice");      
let msgPara = document.querySelector("#msg");
let compScorePara = document.querySelector("#comp-score");
let userScorePara =  document.querySelector("#player-score");
let userChoice ;
let compChoice ;
let compScore = 0;
let userScore = 0 ;

let generateCompChoice = () => {
  const options = ["stone","paper","scissor"];
  let idx = Math.floor(Math.random() * 3);
   compChoice = options[idx] ;
  
}
let drawGame = () => {
    msgPara.innerText = "Match draw play again! ";
    msgPara.style.backgroundColor = "#939185";
}
const showWinner = (userWin) => {
  if(userWin){
    userScore++;
     msgPara.innerText = `You win  ${userChoice} beat ${compChoice}`;
    msgPara.style.backgroundColor = "green";
    userScorePara.innerText = userScore ;
  }else {
    compScore++;
     msgPara.innerText = `Computer win ${compChoice} beat ${userChoice}`;
    msgPara.style.backgroundColor = "red";
    compScorePara.innerText = compScore ;
  }
}

let playGame = () => {
  generateCompChoice();
   if (userChoice == compChoice){ 
     drawGame();
   }else {
     let userWin = true ;
     if(userChoice === "stone"){
       userWin = compChoice === "paper" ? false : true ;
     }else if (userChoice === "paper"){
       userWin = compChoice === "scissor" ? false : true ;
     }else if (userChoice === "scissor"){
       userWin = compChoice === "stone" ? false : true ;
     }
      showWinner(userWin);
   }
}
choices.forEach((choice) => {
 choice.addEventListener("click",() => {
     userChoice = choice.getAttribute("id");
    playGame();
 } );
});
  
