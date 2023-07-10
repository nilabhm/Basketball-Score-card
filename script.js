const firstScoreEl = document.getElementById('first-score');
const secondScoreEl = document.getElementById('second-score');

let firstScoreNum = 0;
let secondScoreNum = 0;

function firstAdd(value) {
  firstScoreNum += value;

  firstScoreEl.textContent = firstScoreNum;
}

function secondAdd(value) {
  secondScoreNum += value;

  secondScoreEl.textContent = secondScoreNum;
}