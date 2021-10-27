const letterPositions = function (sentence) {
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
