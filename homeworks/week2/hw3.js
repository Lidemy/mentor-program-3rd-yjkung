/* 給定一個字串，請「印出」反轉之後的樣子（不能使用內建的reverse函式）

 reverse('yoyoyo')
 正確輸出：oyoyoy

 reverse('1abc2')
 正確輸出：2cba1

 reverse('1,2,3,2,1')
 正確輸出：1,2,3,2,1
*/

function reverse(str) {
  let answer = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    answer += str[i];
  }
  console.log(answer);
  return answer;
}

reverse('hello');
reverse('52dfs5');
