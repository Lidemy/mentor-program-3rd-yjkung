function stars(n) {
  const star = '*';
  let result = '';
  const answer = [];
  for (let i = 1; i <= n; i += 1) {
    result += star;
    answer.push(result);
  }
  return answer;
}

module.exports = stars;
