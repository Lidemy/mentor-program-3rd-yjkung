/*
 給定一字串，把第一個字轉成大寫之後「回傳」，若第一個字不是英文字母則忽略。

 capitalize('nick')
 正確回傳值：Nick

 capitalize('Nick')
 正確回傳值：Nick

 capitalize(',hello')
 正確回傳值：,hello
*/

function capitalize(str) {
  const strCode = str.charCodeAt(0);
  const firstLetter = String.fromCharCode(strCode);
  if (strCode >= 97 && strCode <= 122) {
    const changeCode = String.fromCharCode(strCode - 32);
    const changeStr = str.replace(firstLetter, changeCode);
    return changeStr;
  }
  return str;
}

console.log(capitalize('nick'));
console.log(capitalize('abc'));
