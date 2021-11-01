// function to test functions that return arrays
const eqArrays=require('./eqArrays');

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("✅✅✅✅ Assertion Passed:", actual, "===", expected);
  } else {
    console.log("🛑🛑🛑🛑 Assertion Failed:", actual, "!==", expected);
  }
  //note did not use template literals or concatentation in the console.logs because template literals and concatenation convert the array to strings- this makes it appear that the arrays match when logged despite containing differing data types
};

module.exports = assertArraysEqual;