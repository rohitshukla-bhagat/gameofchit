// In this file the client side validation occur
export const namecheck = () => {
  const chances = document.querySelector("#chancesNum");
  const player1Name = document.querySelector("#player1");
  const player2Name = document.querySelector("#player2");
  const player3Name = document.querySelector("#player3");
  const player4Name = document.querySelector("#player4");
  const nameArray = [player1Name, player2Name, player3Name, player4Name];
  const playerNames = [];
  let nameCount = 0;
  // checking the chance input box not be empty and not less than 1
  if (chances.value == "" || chances.value < 1) {
    const chanceError = chances.nextElementSibling;
    const para = document.createElement("p");
    para.textContent = "Chances should not be empty ! and minimum 1";
    para.classList.add("nameError");
    chanceError.appendChild(para);
    chances.addEventListener("keydown", () => {
      para.remove();
    });
    nameCount++;
  }
  // checking the name input boxes not be empty and does not contain any number
  nameArray.forEach((element) => {
    const name = element.value;
    const namCheck = /\d/.test(name);
    if (namCheck || name == "") {
      const errorPara = element.nextElementSibling;
      const para = document.createElement("p");
      para.textContent =
        "Name is not be empty and doesn't contain any number !";
      para.classList.add("nameError");
      errorPara.appendChild(para);
      element.addEventListener("keydown", () => {
        para.remove();
      });
      nameCount++;
    } else {
      playerNames.push(element.value);
    }
  });

  // If all inputs are right navigate to the game html page
  if (nameCount == 0) {
    localStorage.setItem("playersName", JSON.stringify(playerNames));
    localStorage.setItem("chances", chances.value);
    window.location.href = "game.html";
  }
};
