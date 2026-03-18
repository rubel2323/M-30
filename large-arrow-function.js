const digits = (a, b, c, d, e, f) => {
  const add = a + b + c + d;
  const multiply = a * b * c * d;
  const out = multiply - add;
  const operator = out * e * f;
  return operator;
};
const num = digits(2, 3, 4, 5, 6, 7);
console.log(num);
