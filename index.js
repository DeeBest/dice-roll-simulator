const currentYear = new Date().getFullYear();

const footerParagraph = document.getElementById('footer-paragraph');
footerParagraph.textContent = `Created By \xA9Simphiwe ${currentYear}.`;

const rollDiceBtn = document.getElementById('roll-dice-btn');
const dice = document.getElementById('dice');

rollDiceBtn.addEventListener('click', () => {
  dice.classList.add('roll-animation');
  setTimeout(() => {
    dice.classList.remove('roll-animation');
  }, 100);
});
