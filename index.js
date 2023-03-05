let randomNum1 = Math.floor(Math.random() * 6 + 1);
let randomNumb2 = Math.floor(Math.random() * 6 + 1);
function rollDice() {
  document
    .querySelectorAll("img")[0]
    .setAttribute("src", `./images/dice${randomNum1}.png`);
  document
    .querySelectorAll("img")[1]
    .setAttribute("src", `./images/dice${randomNumb2}.png`);

  if (randomNum1 === randomNumb2) {
    document.querySelector("h1").textContent = "Its a draw";
  } else if (randomNum1 > randomNumb2) {
    document.querySelector("h1").textContent = "Player 1 wins";
  } else if (randomNum1 < randomNumb2) {
    document.querySelector("h1").textContent = "Player 2 wins";
  }
}
