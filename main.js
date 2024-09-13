// Main js file to call the two main js files - namecheck() and mainGamePage()

import { mainGamePage } from "./mainGamePage.js";
import { namecheck } from "./nameCheck.js";
// Setting the background music
let audio = new Audio("public/bgMusic.mp3");
const savedMusic = localStorage.getItem("bgAudio");
if (savedMusic) {
  audio.currentTime = parseFloat(savedMusic);
}
audio.loop = true;
audio.volume = 0.1;
audio.play();
audio.addEventListener("timeupdate", () => {
  localStorage.setItem("bgAudio", audio.currentTime);
});

document.addEventListener("DOMContentLoaded", () => {
  // this condition for running the called js file work only for the index html file
  if (document.querySelector(".start")) {
    document.querySelector(".start").addEventListener("click", () => {
      namecheck();
    });
  }
  // this condition for running the called js file work only for the game html file
  if (document.querySelector(".swap")) {
    const playersName = JSON.parse(localStorage.getItem("playersName"));
    const chances = localStorage.getItem("chances");
    mainGamePage(playersName, chances);
  }
});
