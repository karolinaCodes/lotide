const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const result1 = countLetters("lighthouse in the house");
console.log(result1);
assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["h"], 4);
assertEqual(result1["o"], 2);

const result2 = countLetters("zzzzzebra at the zoo");
console.log(result2);
assertEqual(result2["z"], 6);
assertEqual(result2["a"], 2);
assertEqual(result2["h"], 1);
assertEqual(result2["o"], 2);
