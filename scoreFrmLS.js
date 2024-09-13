// Extracting the scores of the players from the Local Storage
export const scoreFrmLS = () => {
    const data = JSON.parse(localStorage.getItem("playerScore"));
    return data;
}