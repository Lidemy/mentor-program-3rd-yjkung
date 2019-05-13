function add(a, b) {
  let carry = 0;
  let result = '';
  for (let i = a.length; i > 0 || carry; i -= 1) {
    let answer = '';
    const addNumA = (Number(a[i - 1]) || 0, 10);
    const addNumB = (Number(b[i - 1]) || 0, 10);
    const addNumSum = addNumA + addNumB + carry;
    if (addNumSum >= 10) {
      carry = 1;
      answer += addNumSum % 10;
    } else {
      carry = 0;
      answer += addNumSum;
    }
    result = answer + result;
  }
  return result;
}

console.log(add('69797', '56324'));
// module.exports = add;
