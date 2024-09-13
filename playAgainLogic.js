// In this file we show a button called play again on clicking that the game will be started from beginning 
export const playAgainLogic = () => {
  document.querySelector(".playAgainButton").addEventListener("click", () => {
    let audio = new Audio("public/bgMusic.mp3");
  const savedMusic = localStorage.getItem("bgAudio");
  if(savedMusic){
    audio.currentTime = parseFloat(savedMusic);
  }
  audio.currentTime = 0;
  audio.addEventListener("timeupdate" , () => {
    localStorage.setItem("bgAudio" , audio.currentTime);
  });
  // All the data of the local storage willl be 0 because the game started from scratch 
    const gameRound = 0;
    localStorage.setItem("gameRound" , gameRound);
    localStorage.setItem("playerScore" , gameRound);
    localStorage.setItem("playersName" , gameRound);
    window.location.href = "index.html";
});
};
