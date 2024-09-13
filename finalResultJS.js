// In this file we putting the value to the result html page 
import { playAgainLogic } from "./playAgainLogic.js";
let audio = new Audio("public/resultMusic.mp3");
  audio.play();
  audio.addEventListener("timeupdate" , () => {
    localStorage.setItem("bgAudio" , audio.currentTime);
  });
const playersName = JSON.parse(localStorage.getItem("playersName"));
const playersScores = JSON.parse(localStorage.getItem("playerScore"));
const resultCards = document.querySelector(".resultContent").children;
const cardsArray = [];
const onlyScore = [];
for (let i = 0; i < resultCards.length; i++) {
  cardsArray.push(resultCards[i]);
}
playersScores.forEach((elem , index) => {
    if(index%2 != 0){
        onlyScore.push(elem);
}
})
// Swaping the name and score of the players based on highest scores
for(let i = 0 ; i< 4 ; i++){
    for(let j = 0 ; j < 4 ; j++ ){
        if(onlyScore[i] > onlyScore[j]){
            let temp = onlyScore[i];
            onlyScore[i] = onlyScore[j];
            onlyScore[j] = temp;
            let temp2 = playersName[i];
            playersName[i] = playersName[j];
            playersName[j] = temp2;
        }
    }
}
cardsArray.forEach((element, index) => {
  const playerName = element.firstElementChild.nextElementSibling;
  const playerScore =
    element.firstElementChild.nextElementSibling.nextElementSibling;
  playerName.innerText = playersName[index];
  playerScore.innerText = onlyScore[index];
});
playAgainLogic();