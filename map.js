const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


// TEST CODE
const results1 = map(words, (word) => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
const results2 = map(words, (word) => word.toUpperCase());
assertArraysEqual(results2, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
const results3 = map(words, (word) => "blah");
assertArraysEqual(results3, ["blah", "blah", "blah", "blah", "blah"]);

module.exports = map;
