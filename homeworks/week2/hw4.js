/* 先幫大家複習一下數學，給定一個數字n，因數就是所有小於等於n 又可以被n 整除的數，所以最明顯的例子就是1 跟n，
 這兩個數一定是n 的因數。現在請寫出一個函式來「印出」所有的因數

 printFactor(10)

 正確輸出：
 1
 2
 5
 10
 printFactor(7)

 正確輸出：
 1
 7
*/

function printFactor(n) {
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}
// printFactor(7);
printFactor(456);
