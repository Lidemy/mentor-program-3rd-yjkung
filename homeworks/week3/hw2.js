function alphaSwap(str) {
  let answer = '';
  for (let i = 0; i < str.length; i += 1) {
    const letterCode = str.charCodeAt(i);
    if (letterCode >= 65 && letterCode <= 90) {
      answer += String.fromCharCode(letterCode + 32);
    } else if (letterCode >= 97 && letterCode <= 122) {
      answer += String.fromCharCode(letterCode - 32);
    } else {
      answer += String.fromCharCode(letterCode);
    }
  }
  return answer;
}

// console.log(alphaSwap(',hEllO122'));
module.exports = alphaSwap;
