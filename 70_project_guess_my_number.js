'use strict';
// document.querySelector('.score').textContent = 20;

const randomNumber = function () {
  document.querySelector('.number').textContent = Math.round(
    Math.random() * 10
  );
};
document.querySelector('.check').addEventListener('click', function () {
  //   if (typeof document.querySelector('.guess').value == 'number') {
  if (document.querySelector('.guess').value !== '') {
    if (
      document.querySelector('.guess').value >= 0 &&
      document.querySelector('.guess').value <= 10
    ) {
      randomNumber();
      if (
        document.querySelector('.number').textContent ===
        document.querySelector('.guess').value
      ) {
        document.querySelector('.highscore').textContent =
          document.querySelector('.score').textContent;
        document.querySelector('.score').textContent = 'YOU WON';
        document.body.style.backgroundColor = '#60b347';
        console.log(
          'you won',
          document.querySelector('.highscore').textContent
        );
        // new code
        document.getElementById('main').style.display = 'none';
        document.getElementById('header').style.display = 'none';
        document.getElementById('win').style.display = 'block';
      }
      //   else if (document.querySelector('.guess').value === '') {
      //     alert('Plese enter a value to continue');
      //   }
      else {
        document.querySelector('.score').textContent =
          document.querySelector('.score').textContent - 1;
      }

      //If the score into negative
      if (Math.sign(document.querySelector('.score').textContent) === -1) {
        console.log('its negative');
        again();
      }
      //Game over Logic
      //   if (document.querySelector('.score').textContent <= 0) {
      //     document.getElementsByTagName('body').textContent = 'hello';
      //   }
    } else alert('Please enter a number between 0 and 10');
  } else alert('Please enter a number');
});
const highscore = document.querySelector('.highscore').textContent;

const again = function () {
  window.location.reload();
  document.querySelector('highscore').textContent = highscore;
  window.document.body.style.backgroundColor = '#222';
  document.querySelector('.guess').textContent = '';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  if (Math.sign(document.querySelector('.score').textContent) === -1) {
    console.log('its negative');
    again();
  }
};
document.querySelector('.again').addEventListener('click', again);
document.querySelector('.padding').addEventListener('click', again);
