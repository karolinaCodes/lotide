const countLetters = function (string) {
  const results = {};

  for (const char of string) {
    //skip the char count if the current character is a space
    if (char === " ") {
      continue;
    }
    //if the char exists in the result obj increment the value, if not add the property with value of 1
    results[char] ? results[char]++ : (results[char] = 1);
  }
  return results;
};

module.exports = countLetters;
