// In this file the player which have the prince card select the theif 
export const princeGuess = (changeCard) => {
  const templateMain = document.querySelector(".gameMainBottom");
  const princeGuessTemplate = document.querySelector("#theifGuessTemplate");
  const pTemplate = document.importNode(princeGuessTemplate.content, true);
  const image = changeCard[2];
  let count = 0;
  let nextRand = 0;
  const elementArray = [];
  const princeGussPlayers = [".soilderPlayerGuess", ".theifPlayerGuess"];
  image.forEach((element, index) => {
    if (element.getAttribute("src") == "public/princeCard.jpeg") {
      pTemplate.querySelector(".princePlayer").innerText =
      element.previousElementSibling.innerText;
    }
    // Checking the src attribute of the cards is back card or not , if yes then using the random number and princeGussPlayers array display the name of the players because the cardback src is only have theif and soilder player
    if (element.getAttribute("src") == "public/cardback.jpg" && count == 0) {
      const randNUm = Math.floor(Math.random() * 2);
      const playerClass = princeGussPlayers[randNUm];
      pTemplate.querySelector(playerClass).innerText =
        element.previousElementSibling.innerText;
      count++;
      if (randNUm == 1) {
        nextRand = 0;
      } else {
        nextRand = 1;
      }
    }
    if (element.getAttribute("src") == "public/cardback.jpg" && count == 1) {
      const playerClass2 = princeGussPlayers[nextRand];
      pTemplate.querySelector(playerClass2).innerText =
        element.previousElementSibling.innerText;
      attributeSet(index, element, changeCard);
      elementArray.push(element);
    }
  });
  // Display the section of the gussing
  templateMain.append(pTemplate);
  return [elementArray, changeCard[0], changeCard[1]];
};

// Setting realnameC attribute to the displayed player for future identify the identity
const attributeSet = (index, element, changeCard) => {
    if(changeCard[3][index] == 2){
        element.setAttribute("realnameC" , "115");
    }else if(changeCard[3][index] == 3){
        element.setAttribute("realnameC" , "116");
    }
};
