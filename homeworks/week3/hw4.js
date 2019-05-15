function isPalindromes(str) {
  let right = '';
  let left = '';
  for (let i = 0; i < str.length; i += 1) {
    right += str[i];
  }
  for (let j = str.length - 1; j >= 0; j -= 1) {
    left += str[j];
  }
  if (right === left) {
    return true;
  }
  return false;
}

console.log(isPalindromes('applppa'));
// module.exports = isPalindromes;
