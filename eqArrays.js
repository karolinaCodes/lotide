const assertEqual = require('./assertEqual');

const eqArrays = function(arr1, arr2) {
  //if parameter for each array isn't passed, return undefined
  if (arr1 === undefined || arr2 === undefined) {
    return undefined;
  }

  //check both arrays have same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  //check is both arrays have same values at same indices, if not return false, if they do they pass the if statement and return true
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};


//TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3])); //true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); //false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); //true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); //false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

module.exports = eqArrays;