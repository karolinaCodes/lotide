const eqArrays = function (arr1, arr2) {
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

const assertArraysEqual = function (actual, expected) {
  const match = eqArrays(actual, expected);
  if (match) {
    console.log("✅✅✅✅ Assertion Passed:", actual, "===", expected);
  } else {
    console.log("🛑🛑🛑🛑 Assertion Failed:", actual, "!==", expected);
  }
  //note did not use template literals or concatentation in the console.logs because template literals and concatenation convert the array to strings- this makes it appear that the arrays match when logged despite containing differing data types
};

// // TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); //true
assertArraysEqual([1, 2, 3], [3, 2, 1]); //false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); //true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); //false
