const result = document.querySelector('.result');
let fisrtNum = '';
let symbol = '';

document.querySelector('.buttons').addEventListener('click', (e) => {
  if (e.target.className === 'button nums') {
    if (result.innerText === '0') {
      result.innerText = e.target.innerText;
    } else {
      result.innerText += e.target.innerText;
    }
  }

  // 點擊運算符號的時候，把result的數字存進firstNum,並result歸零
  if (e.target.className === 'button symbols') {
    fisrtNum = result.innerText;
    result.innerText = '0';

    if (e.target.getAttribute('name') === 'plus') {
      symbol = '+';
    } else if (e.target.getAttribute('name') === 'minus') {
      symbol = '-';
    } else if (e.target.getAttribute('name') === 'times') {
      symbol = '*';
    } else if (e.target.getAttribute('name') === 'obelus') {
      symbol = '/';
    }

    // 壞掉的result.innerText的原因 => 第二次跑兩次 第三次跑三次
    document.querySelector('#equals').addEventListener('click', () => {
      if (symbol === '+') {
        result.innerText = parseFloat(fisrtNum) + parseFloat(result.innerText);
      } else if (symbol === '-') {
        result.innerText = parseFloat(fisrtNum) - parseFloat(result.innerText);
      } else if (symbol === '*') {
        result.innerText = parseFloat(fisrtNum) * parseFloat(result.innerText);
      } else if (symbol === '/') {
        result.innerText = parseFloat(fisrtNum) / parseFloat(result.innerText);
      }
    });
  }

  if (e.target.className === 'button ac') {
    result.innerText = '0';
    symbol = '';
    fisrtNum = 0;
  }
});
