const sqrSumAvg = (digits) => {
  let sum = 0;
  const digitLen = digits.length;
  for (const digit of digits) {
    sum = sum + digit * digit;
  }
  const avg = sum / digitLen;
  return avg;
};
const number = [3, 4, 5, 6, 7];
console.log(sqrSumAvg(number));
