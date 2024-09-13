// In this file the HTML file will we changed again and next round started
export const nextRound = () => {
  document.querySelector(".next").addEventListener("click", () => {
    changePage();
  });
};
const changePage = () => {
  window.location.href = "game.html";
}