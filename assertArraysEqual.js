function eqArrays(arr1, arr2) {
  let match = true;

  //loop through first array
  for (let i = 0; i < arr1.length; i++) {
    //loop through second array
    for (let j = i; j === i; j++) {
      //take the element of array 1 at position 1 and  the element of array 2 at the same position and compares the two, if the two values don't match, match variable changes to false and the loop is exited (for efficiency)
      if (arr1[i] !== arr2[j]) {
        match = false;
        break;
      }
    }
  }
  return match;
}

const assertArraysEqual = function (arr1, arr2) {
  const match = eqArrays(arr1, arr2);
  if (match) {
    console.log("✅✅✅✅ Assertion Passed:", arr1, "===", arr2);
  } else {
    console.log("🛑🛑🛑🛑 Assertion Failed:", arr1, "!==", arr2);
  }
  //note did not use template literals or concatentation in the console.logs because template literals and concatenation convert the array to strings- this makes it appear that the arrays match when logged despite containing differing data types
};

// // TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); //true
assertArraysEqual([1, 2, 3], [3, 2, 1]); //false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); //true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); //false
