// Here the scores are counting all the players according to their cards and displaying in the scores section 
import { scoreFrmLS } from "./scoreFrmLS.js";
import { setScoreTo } from "./setScoreToLS.js";
export const scoreCounting = (playersCards, gussedResult, playersName) => {
  const scoreArray = [];
  const cardsArray = [];
  // const scoreForLS = [];
  let scoreFromLS = scoreFrmLS();
  if (!scoreFromLS) {
    scoreFromLS = [
      playersName[0],
      0,
      playersName[1],
      0,
      playersName[2],
      0,
      playersName[3],
      0,
    ];
    localStorage.setItem("playerScore", JSON.stringify(scoreFromLS));
  }
  const gameScoreParent = document.querySelector(".gameScores");
  const gameScoreParentChild = gameScoreParent.children;
  const cardsChildren = playersCards.children;
  for (let i = 0; i < gameScoreParentChild.length; i++) {
    scoreArray.push(gameScoreParentChild[i]);
    cardsArray.push(cardsChildren[i]);
  }
  scoreArray.forEach((element1) => {
    const realName = element1.firstElementChild.innerText.replace(" :", "");
    cardsArray.forEach((element2) => {
      if (element2.firstElementChild.innerText == realName) {
        // Checking if the guss is rigth or wrong according that we assign the scores
        if (gussedResult == "right") {
          if (
            element2.firstElementChild.nextElementSibling.getAttribute("src") ==
            "public/princeCard.jpeg"
          ) {
            const realValue = setScoreTo(scoreFromLS, realName, 1000);
            element1.firstElementChild.nextElementSibling.innerHTML = realValue;
          } else if (
            element2.firstElementChild.nextElementSibling.getAttribute("src") ==
            "public/theifCard.jpeg"
          ) {
            const realValue = setScoreTo(scoreFromLS, realName, 0);
            element1.firstElementChild.nextElementSibling.innerHTML = realValue;
          }
        } else if (gussedResult == "wrong") {
          if (
            element2.firstElementChild.nextElementSibling.getAttribute("src") ==
            "public/princeCard.jpeg"
          ) {
            const realValue = setScoreTo(scoreFromLS, realName, 0);
            element1.firstElementChild.nextElementSibling.innerHTML = realValue;
          } else if (
            element2.firstElementChild.nextElementSibling.getAttribute("src") ==
            "public/theifCard.jpeg"
          ) {
            const realValue = setScoreTo(scoreFromLS, realName, 1000);
            element1.firstElementChild.nextElementSibling.innerHTML = realValue;
          }
        }
        if (
          element2.firstElementChild.nextElementSibling.getAttribute("src") ==
          "public/kingCard.jpeg"
        ) {
          const realValue = setScoreTo(scoreFromLS, realName, 5000);
          element1.firstElementChild.nextElementSibling.innerHTML = realValue;
        } else if (
          element2.firstElementChild.nextElementSibling.getAttribute("src") ==
          "public/soilderCard.jpeg"
        ) {
          const realValue = setScoreTo(scoreFromLS, realName, 500);
          element1.firstElementChild.nextElementSibling.innerHTML = realValue;
        }
      }
    });
  });
  // Set the scores of the players to the Local Storage 
  localStorage.setItem("playerScore", JSON.stringify(scoreFromLS));
};
