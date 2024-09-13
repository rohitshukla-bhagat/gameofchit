// Here the main work is when user click on Jumble button the cards rotate and give better user experience
import { cardChange } from "./cardChange.js";
import { guessAttention } from "./guessAttention.js";
import { princeGuess } from "./princeGuess.js";
let count = 0;
export const cardSwaping = (chances, playersName) => {
  const image = document.querySelectorAll(".cardImage");
  document.querySelector(".swap").addEventListener("click", () => {
    // Set the rotate music 
    if(count == 0){
      let audio = new Audio("public/spinning.mp3");
      audio.play();
      eventCall(image , playersName , chances);
      count++;
    }
  });
};
const eventCall = (image , playersName , chances) => {
  // Set the new class for apllying animation
  image.forEach((element) => {
    element.classList.add("rotateImage");
  });
  // Call the cardChange function for changing the cards after the user click
  const changeCard = cardChange(image);
  setTimeout(() => {
    // Call the next function after 3Sec because card animation run upto 3Sec
    const princeGuessed = princeGuess(changeCard);

    // console.log(changeCard);
    image.forEach((element) => {
      element.classList.remove("rotateImage");
    });
    guessAttention(princeGuessed , playersName , chances);
  }, 3000);
}