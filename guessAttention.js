// In this file using realnameC attribute we display the message that the selected player is theif or soilder
import { checkBtnVisible } from "./checkBtnVisible.js";
import { greenBorder } from "./greenBorder.js";
import { nextRound } from "./nextRound.js";
import { nextRoundBtn } from "./nextRoundBtn.js";
import { scoreCounting } from "./scoreCounting.js";

let count = 0;
let gussedResult = "";
export const guessAttention = (princeGuessed, playersNames, chances) => {
  const playersOption = document.querySelector(".theifOption");
  const playersCards = document.querySelector(".playerCards");
  playersOption.addEventListener("click", (elementM) => {
    const elem = elementM.target;
    const borderCheck = greenBorder(elem);
    if (borderCheck == 1) {
      checkBtnVisible();
    }
    const playersCardArray = playersCards.children;
    const arry = [];
    for (let i = 0; i < 4; i++) {
      arry.push(playersCardArray[i]);
    }
    document.querySelector(".theifCheck").addEventListener("click", () => {
      if (count == 0) {
        theifChecker(
          arry,
          princeGuessed,
          elem,
          playersCards,
          playersNames,
          chances
        );
      }
    });
  });
};
// Using realnameC create a toast for message
const theifChecker = (
  arry,
  princeGuessed,
  elem,
  playerCards,
  playersName,
  chances
) => {
  arry.forEach((element) => {
    if (elem.innerText == element.firstElementChild.innerText) {
      if (
        element.firstElementChild.nextElementSibling.getAttribute(
          "realnameC"
        ) == "116"
      ) {
        let audio = new Audio("public/writeAns.mp3");
        audio.play();
        const toast = document.createElement("div");
        const toastElem1 = document.createElement("p");
        const toastElem2 = document.createElement("p");
        toastElem1.innerText = "😊";
        toastElem2.innerText = "Right !";
        gussedResult = "right";
        toastElem1.classList.add("emoji");
        toastElem2.classList.add("emojitext");
        toast.classList.add("toast");
        toast.appendChild(toastElem1);
        toast.appendChild(toastElem2);
        document.body.appendChild(toast);
        setTimeout(() => {
          document.body.removeChild(toast);
        }, 2000);
      } else {
        let audio = new Audio("public/wrongAns.mp3");
        audio.play();
        const toast = document.createElement("div");
        const toastElem1 = document.createElement("p");
        const toastElem2 = document.createElement("p");
        toastElem1.innerText = "😫";
        toastElem2.innerText = "Wrong !";
        gussedResult = "wrong";
        toastElem1.classList.add("emoji");
        toastElem2.classList.add("emojitext");
        toast.classList.add("toast");
        toast.appendChild(toastElem1);
        toast.appendChild(toastElem2);
        document.body.appendChild(toast);
        setTimeout(() => {
          document.body.removeChild(toast);
        }, 2000);
      }
    }
  });
  setTimeout(() => {
    princeGuessed[0].forEach((element) => {
      if (element.getAttribute("realnameC") == "115") {
        element.setAttribute("src", "public/soilderCard.jpeg");
      } else if (element.getAttribute("realnameC") == "116") {
        element.setAttribute("src", "public/theifCard.jpeg");
      }
    });
    setTimeout(() => {
      scoreCounting(playerCards, gussedResult, playersName);
      let round = Number(localStorage.getItem("gameRound"));
      nextRoundBtn(round);
      nextRound();
      round++;
      // Setting the round value to the Local Storage for future comparing 
      localStorage.setItem("gameRound", JSON.stringify(round));
    }, 1000);
  }, 1000);
  count++;
};
