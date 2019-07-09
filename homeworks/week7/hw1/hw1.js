const start = document.querySelector('.start');
const canvas = document.querySelector('.canvas');
let showOnce = true;
let changeTime = '';
let time1 = '';
let time2 = '';
let startTime = '';

// 變化時間隨機三秒內

function changeColor() {
  canvas.classList.add('colorChange');
  startTime = new Date();
  time1 = startTime.getTime();
}

document.querySelector('body').addEventListener('click', (e) => {
  if (e.target.className === 'start') {
    start.classList.add('disappear');
    changeTime = (Math.random() * 3);
    setTimeout(changeColor, changeTime * 1000);
  } else if (e.target.className === 'canvas colorChange' && showOnce === true) {
    showOnce = false;
    const reactTime = new Date();
    time2 = reactTime.getTime();
    const result = (time2 - time1) / 1000;
    alert(`你花費了:${result.toFixed(2)}秒`);
    document.querySelector('.again').classList.add('show');
    document.querySelector('.again').classList.remove('disappear');
  } else if (e.target.className === 'canvas') {
    alert('還沒變色喔');
  }
});

document.querySelector('.again').addEventListener('click', (e) => {
  e.stopPropagation();
  canvas.classList.remove('colorChange');
  document.querySelector('.again').classList.add('disappear');
  start.classList.remove('disappear');
  time1 = '';
  time2 = '';
  changeTime = 0;
  showOnce = true;
});
