const fibonacci = function (a) {
  if (a < 0) return "OOPS";
  else if (a == 0) return 0;
  else if (a <= 2) return 1;
  let first = 1,
    second = 1,
    res;
  for (let i = 3; i <= a; i++) {
    res = first + second;
    // first = second;
    // second = res;
    [first, second] = [second, res];
  }
  return res;
};

// Do not edit below this line
module.exports = fibonacci;
