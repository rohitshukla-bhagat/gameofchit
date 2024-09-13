// In this file we create a button which perform next round functionality
export const nextRoundBtn = (round) => {
  const chances = Number(localStorage.getItem("chances"));
  const princeGuess = document.querySelector(".princeGuess");
  princeGuess.classList.remove("shadowanimation");
  const nextRoundBtnParent = document.querySelector(".nextRoundBtn");
  const btn = document.createElement("button");
  // If the round is chances - 1 the will we change to Final Round 
  if (round == chances - 1) {
    btn.innerText = "Final Round";
    btn.classList.add("next");
    btn.classList.add("nextShadow");
    nextRoundBtnParent.append(btn);
  } else if (round < chances) {
    btn.innerText = "Next Round";
    btn.classList.add("next");
    btn.classList.add("nextShadow");
    nextRoundBtnParent.append(btn);
    // If the round is equal to the chances the text will we change to Final Result 
  } else if (round == chances) {
    btn.innerText = "Final Result";
    btn.classList.add("finalResult");
    btn.classList.add("resultBtnShadow");
    nextRoundBtnParent.append(btn);
  }
  if (btn.innerText == "Final Result") {
    document.querySelector(".finalResult").addEventListener("click" , () => {
      // Changing the html file if all rounds completed
      window.location.href = "finalScore.html";
    })
  };
};
