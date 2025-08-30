const palindromes = function (str) {
  let l = 0,
    r = str.length - 1;
  while (l < r) {
    while (l < r && !isAlphanumeric(str[l])) l++;
    while (r > l && !isAlphanumeric(str[r])) r--;
    if (str[l].toLowerCase() != str[r].toLowerCase()) return false;
    l++;
    r--;
  }
  return true;
};

function isAlphanumeric(char) {
  // Ensure the input is a single character string
  if (typeof char !== "string" || char.length !== 1) {
    return false;
  }
  // Regular expression to match alphanumeric characters
  const alphanumericRegex = /^[a-zA-Z0-9]$/;
  return alphanumericRegex.test(char);
}
// Do not edit below this line
module.exports = palindromes;
