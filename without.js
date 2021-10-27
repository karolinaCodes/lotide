const assertArraysEqual = function (arr1, arr2) {
  const match = eqArrays(arr1, arr2);
  if (match) {
    console.log("✅✅✅✅ Assertion Passed:", arr1, "===", arr2);
  } else {
    console.log("🛑🛑🛑🛑 Assertion Failed:", arr1, "!==", arr2);
  }
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

///////////////////////FIRST ATTMEMPT

// const without = function (source, itemsToRemove) {
//   const filteredArr = [];

//   for (let i = 0; i < source.length; i++) {
//     let match = false;
//     for (let j = 0; j < itemsToRemove.length; j++) {
//       if (source[i] === itemsToRemove[j]) {
//         match = true;
//       }
//     }
//     if (!match) {
//       filteredArr.push(source[i]);
//     }
//   }
//   return filteredArr;
// };

////////////////////////REFACTORED

const without = function (source, itemsToRemove) {
  //create an empty array into which will push in the filtered values
  const filteredArr = [];

  //loop through source array
  for (let i = 0; i < source.length; i++) {
    //check if the current el in the source array isn't in the itemsToRemove array, if not add it to the filtered Array
    if (!itemsToRemove.includes(source[i])) {
      filteredArr.push(source[i]);
    }
  }
  return filteredArr;
};

//TEST CASES WITH
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

// check that original array wasn't altered
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
