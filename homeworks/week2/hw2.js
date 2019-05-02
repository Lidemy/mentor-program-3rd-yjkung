// 給定一字串，把第一個字轉成大寫之後「回傳」，若第一個字不是英文字母則忽略。

// capitalize('nick')
// 正確回傳值：Nick

// capitalize('Nick')
// 正確回傳值：Nick

// capitalize(',hello')
// 正確回傳值：,hello

var str = ""
function capitalize(str) {
  var strCode = str.charCodeAt(0) //把第一個字的ASCII抓出來
  var firstLetter = String.fromCharCode(strCode) //第一個字的字母
  // console.log(strCode)
  if(strCode >= 97 && strCode <= 122){ //如果第一個字是小寫
  	var changeCode = String.fromCharCode(strCode - 32) //把第一個字母小寫變大寫
  	var changeStr = str.replace(firstLetter,changeCode) 
  	return changeStr
  }else{
  return str;
}}

console.log(capitalize('nick'));
console.log(capitalize('abc'));
console.log(capitalize('Nancy'));
