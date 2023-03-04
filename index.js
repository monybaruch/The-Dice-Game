let randomNum1 = Math.floor(Math.random() * 6 + 1);
let randomNumb2 = Math.floor(Math.random() * 6 + 1);

document
  .querySelectorAll("img")[0]
  .setAttribute("src", `./images/dice${randomNum1}.png`);
document
  .querySelectorAll("img")[1]
  .setAttribute("src", `./images/dice${randomNumb2}.png`);
