/* 給定n（1<=n<=30），依照規律「印出」正確圖形

 printStars(1)

 正確輸出：
 *
 printStars(3)

 正確輸出：
 *
 *
 *
 printStars(6)

 正確輸出：
 *
 *
 *
 *
 *
 *
*/

function printStars(n) {
  const result = '*';
  for (let i = 1; i <= n; i += 1) {
    console.log(result);
  }
}

printStars(6);
// printStars(10);
