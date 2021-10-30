const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};

  //use for loop since for loop provides the index value (i)
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      continue;
    }
    //if the property for the current letter exists, push the index of this instance to the array of that property, if it doesn't create a new property for that character and set it's value to an array with the index value.
    results[sentence[i]]
      ? results[sentence[i]].push(i)
      : (results[sentence[i]] = [i]);
  }

  console.log(results);
  return results;
};

const result1 = letterPositions("hello");
assertArraysEqual(result1["h"], [0]);
assertArraysEqual(result1["e"], [1]);
assertArraysEqual(result1["o"], [4]);
assertArraysEqual(result1["l"], [2, 3]);

const result2 = letterPositions("zzzzebra");
assertArraysEqual(result2["z"], [0, 1, 2, 3]);
assertArraysEqual(result2["e"], [4]);
assertArraysEqual(result2["a"], [7]);

module.exports = letterPositions;
