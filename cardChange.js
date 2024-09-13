// Here setting the cards to each player section after 2.5 sec 
export const cardChange = (image) => {
  const imageAttributeArray = [];
  // randomNumber funtion give us the 4 random number each time for each player from 0 to 3 
  const randNum = randomNumber();
  const theifChecker = [];
  setTimeout(() => {
    // Putting the all the cards image path into an array
    const cardImageArray = [
      "public/kingCard.jpeg",
      "public/princeCard.jpeg",
      "public/soilderCard.jpeg",
      "public/theifCard.jpeg",
    ];
    image.forEach((element, index) => {
      // Using randNum variable we put the different card image to the players
      element.setAttribute("src", cardImageArray[randNum[index]]);
      imageAttributeArray.push(element.getAttribute("src"));
      const attributeCheck = element.getAttribute("src");
      // Set the condition , is those players whose have prince or soilder card set the back part of the card for suspence 😁
      if (
        attributeCheck == "public/soilderCard.jpeg") {
        element.setAttribute("src", "public/cardback.jpg");
        theifChecker.push(index + "s");
      }
      if(attributeCheck == "public/theifCard.jpeg"){
        element.setAttribute("src", "public/cardback.jpg");
        theifChecker.push(index + "t");
      }
    });
  }, 2500);
  return [imageAttributeArray , theifChecker , image , randNum];
};

const randomNumber = () => {
  let randNumber1 = 0,
    randNumber2 = 0,
    randNumber3 = 0,
    randNumber4 = 0;
  while (1) {
    randNumber1 = Math.floor(Math.random() * (3 - 0 + 1) + 0);
    randNumber2 = Math.floor(Math.random() * (3 - 0 + 1) + 0);
    randNumber3 = Math.floor(Math.random() * (3 - 0 + 1) + 0);
    randNumber4 = Math.floor(Math.random() * (3 - 0 + 1) + 0);
    if (
      randNumber1 != randNumber2 &&
      randNumber1 != randNumber3 &&
      randNumber1 != randNumber4 &&
      randNumber2 != randNumber3 &&
      randNumber2 != randNumber4 &&
      randNumber3 != randNumber4
    ) {
      return [randNumber1, randNumber2, randNumber3, randNumber4];
    }
  }
};
