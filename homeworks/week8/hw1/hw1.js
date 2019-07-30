const result = document.querySelector('.result');
const img = document.querySelector('.imageBox')
const request = new XMLHttpRequest();
let prize = ''
request.onload = function(){
  if (request.status >= 200 && request.status < 400){
    console.log(request.responseText);
    prize = JSON.parse(request.responseText);
    console.log(prize.prize);
  } else {
    alert('系統不穩定，請再試一次');
  }
}
request.open('GET','https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery',true);
request.send();

const btn = document.querySelector('button');
btn.addEventListener('click', () =>{
  if (prize.prize === 'FIRST') {
    document.querySelector('body').classList.add('first__background');
    result.innerHTML = '<h3>恭喜你中頭獎了！日本東京來回雙人遊！</h3>';
    img.classList.add('first__img');
    btn.classList.add('noshow');
    } else if (prize.prize === 'SECOND') {
    result.innerHTML = '<h3>二獎！90 吋電視一台！</h3>';
    img.classList.add('second__img')
    btn.classList.add('noshow');
    } else if (prize.prize === 'THIRD') {
    result.innerHTML = '<h3>恭喜你抽中三獎：知名YouTuber 簽名握手會入場券一張，bang！</h3>';
    img.classList.add('third__img')
    btn.classList.add('noshow');
    } else if (prize.prize === 'NONE') {
    result.innerHTML = '<h3>銘謝惠顧</h3><br>';
    document.querySelector('.wrapper').classList.add('none__background');
    document.querySelector('h1').classList.add('none__title');
    result.classList.add('none__title');
    btn.classList.add('noshow');
    } else if (prize.error === true){
      alert('系統不穩定，請再試一次');
    }
})