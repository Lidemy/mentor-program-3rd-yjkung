const questionBox = document.querySelectorAll('.question__box');
const submit = document.querySelector('input[type=submit]');
const inputField = document.querySelectorAll('.necessary');
submit.addEventListener('click', (e) => {
  // 輸入框驗證
  for (let i = 0; i < inputField.length; i += 1) {
    if (inputField[i].value === '') {
      e.preventDefault();
      // 修改樣式
      questionBox[i].classList.add('verification');
      inputField[i].style['border-bottom-color'] = '#d93025';
      const remindWord = document.createElement('span');
      remindWord.innerText = '這是必填項目';
      remindWord.style.color = '#d93025';
      questionBox[i].appendChild(remindWord);
    }
  }
  // radio驗證
  const radio = document.querySelector('.apply__type');
  const rookie = document.querySelector('input[name=rookie]');
  const frontend = document.querySelector('input[name=frontend]');
  if (rookie.checked === false && frontend.checked === false) {
    e.preventDefault();
    // 修改樣式
    radio.classList.add('verification');
    radio.style.borderBottomColor = '#d93025';
    const remindWord = document.createElement('span');
    remindWord.innerHTML = '<br>這是必填項目';
    remindWord.style.color = '#d93025';
    radio.appendChild(remindWord);
  }

  const s = document.querySelector('input[type=radio]:checked');

  let seccess = false;
  for (let i = 0; i < inputField.length; i += 1) {
    if (inputField[i].value !== '' && (rookie.checked === true || frontend.checked === true)) {
      seccess = true;
    }
  }
  if (seccess) {
    console.log(`emeil:${inputField[0].value}\nnickname:${inputField[1].value}\n報名類型:${s.name}\n怎麼知道這個計畫的？:${inputField[2].value}\n是否有程式相關背景:${inputField[3].value}`);
    alert('送出成功');
  }
});
