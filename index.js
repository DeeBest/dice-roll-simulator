const currentYear = new Date().getFullYear();

const footerParagraph = document.getElementById('footer-paragraph');
footerParagraph.textContent = `Created By \xA9Simphiwe ${currentYear}.`;

const rollDiceBtn = document.getElementById('roll-dice-btn');
const dice = document.getElementById('dice');
const rollHistory = document.getElementById('roll-history');

let rollHistoryList = [];

function rollDice() {
  const rollResult = Math.ceil(Math.random() * 6);

  const diceFace = getDiceFace(rollResult);

  dice.innerHTML = diceFace;

  rollHistoryList.push(rollResult);

  updateRollHistory();
}

function updateRollHistory() {
  rollHistory.innerHTML = '';
  for (let index = 0; index < rollHistoryList.length; index++) {
    const listItem = document.createElement('li');

    listItem.innerHTML = `Roll ${index + 1}: 
    <span>${getDiceFace(rollHistoryList[index])}</span>`;

    rollHistory.appendChild(listItem);
  }
}

function getDiceFace(rollResult) {
  switch (rollResult) {
    case 1:
      return '&#9856;';
    case 2:
      return '&#9857;';
    case 3:
      return '&#9858;';
    case 4:
      return '&#9859;';
    case 5:
      return '&#9860;';
    case 6:
      return '&#9861';
    default:
      return '';
  }
}

rollDiceBtn.addEventListener('click', () => {
  dice.classList.add('roll-animation');
  setTimeout(() => {
    dice.classList.remove('roll-animation');
    rollDice();
  }, 1000);
});
