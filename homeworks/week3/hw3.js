// 請實作出一個 isPrime 的 function 並接收一個數字 n，回傳 n 是否是質數
// 質數的定義：除了 1 以外，所有小於他的數都無法整除

// 範例
// isPrime(2) => true 是質數
// isPrime(40) => false 不是質數

function isPrime(n) {
  let result = 0;
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      result += 1;
    }
  }

  if (result > 2 || result === 1) {
    return false;
  }
  return true;
}
console.log(isPrime(1));
// module.exports = isPrime;
