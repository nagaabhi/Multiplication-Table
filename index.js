const displayScore = document.querySelector(".display-score");
const displayTabelValues = document.querySelector(".js-display-tables");
const displayAnswer = document.querySelector(".js-input-answer");
const submitAnsBtn = document.querySelector(".js-subnit-button");
const generateNext = document.querySelector(".js-next-button");
const popUpBar = document.querySelector(".popup-bar");
const displayPopUpMsg = document.querySelector(".js-display-msg");

const numberOne = Math.floor(Math.random() * 10);
const numberTwo = Math.floor(Math.random() * 10);

const score = JSON.parse(localStorage.getItem("scoreTable"));

const multiplicationValue = numberOne * numberTwo;
displayTabelValues.innerHTML = `${numberOne} X ${numberTwo} =  ? `;

function multiplucationTables() {
  const userInput = document.querySelector(".js-input-answer");
  const userInputValue = Number(userInput.value);

  if (userInputValue === multiplicationValue) {
    score.rightAnswer += 1;
    displayScore.innerHTML = `${score.rightAnswer}`;
    // console.log(score.rightAnswer);
  } else {
    score.rightAnswer -= 1;
    displayScore.innerHTML = `${score.rightAnswer}`;
  }
  localStorage.setItem("scoreTable", JSON.stringify(score));
  userInput.value = "";
}

if (score.rightAnswer === 25) {
  popUpBar.classList.add("show-pop-up-noti");
  displayPopUpMsg.innerHTML = "Good Job!!!";
} else if (score.rightAnswer === 50) {
  popUpBar.classList.add("show-pop-up-noti");
  displayPopUpMsg.innerHTML = "Well Done!!!";
} else if (score.rightAnswer === 75) {
  popUpBar.classList.add("show-pop-up-noti");
  displayPopUpMsg.innerHTML = "Keep Going!!!";
} else if (score.rightAnswer === 100) {
  popUpBar.classList.add("show-pop-up-noti");
  displayPopUpMsg.innerHTML = "Excellent!!!";
  localStorage.removeItem("scoreTable");
}

setInterval(() => {
  popUpBar.classList.remove("show-pop-up-noti");
}, 3000);

function refreshPage() {
  location.reload();
}

submitAnsBtn.addEventListener("click", () => {
  multiplucationTables();
});

generateNext.addEventListener("click", () => {
  refreshPage();
});
