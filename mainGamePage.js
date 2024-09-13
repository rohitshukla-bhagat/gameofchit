// Here setting the all names and chance value to the page 
import { cardSwaping } from "./cardSwaping.js";
import { scoreFrmLS } from "./scoreFrmLS.js";
export const mainGamePage = (playerNames, chances) => {
  // calling the tags where we want to show the names of players inputed by the user
  const roundNumber = document.querySelector(".roundMainNum");
  const player1 = document.querySelector(".gameplr1");
  const player2 = document.querySelector(".gameplr2");
  const player3 = document.querySelector(".gameplr3");
  const player4 = document.querySelector(".gameplr4");
  const player1Score = document.querySelector(".plyr1Score");
  const player2Score = document.querySelector(".plyr2Score");
  const player3Score = document.querySelector(".plyr3Score");
  const player4Score = document.querySelector(".plyr4Score");
  const playersArray = [player1, player2, player3, player4];
  const playersScoreArray = [
    player1Score,
    player2Score,
    player3Score,
    player4Score,
  ];

  // replacing the tags default tect with the players name
  playerNames.forEach((element, index) => {
    playersArray[index].innerHTML = element;
    playersScoreArray[index].innerText = element + " :";
  });
  let scoreArray = [];
  let scoreNum = [];
  let scoreFromLS = scoreFrmLS();
  if (!scoreFromLS) {
    scoreFromLS = [
      playerNames[0],
      0,
      playerNames[1],
      0,
      playerNames[2],
      0,
      playerNames[3],
      0,
    ];
    // setting players name to the Local Storage for future uses
    localStorage.setItem("playerScore", JSON.stringify(scoreFromLS));
  }

  // Setting the players names in the score section using local storage
  const gameScoreParent = document.querySelector(".gameScores");
  const gameScoreParentChild = gameScoreParent.children;
  for (let i = 0; i < gameScoreParentChild.length; i++) {
    scoreArray.push(gameScoreParentChild[i]);
  }
  for (let i = 0; i < 8; i++) {
    if (i % 2 != 0) {
      scoreNum.push(scoreFromLS[i]);
    }
  }
  scoreArray.forEach((element, index) => {
    element.firstElementChild.nextElementSibling.innerText += scoreNum[index];
  });
  let round = Number(localStorage.getItem("gameRound"));
  if (!round) {
    localStorage.setItem("gameRound", 1);
    round = Number(localStorage.getItem("gameRound"));
  }
  roundNumber.innerText = "ROUND " + round ;
  cardSwaping(chances, playerNames);
    // console.log(playersScoreArray[0]);
};
