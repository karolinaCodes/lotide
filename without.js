const assertArraysEqual = function (arr1, arr2) {
  const match = eqArrays(arr1, arr2);
  if (match) {
    console.log("✅✅✅✅ Assertion Passed:", arr1, "===", arr2);
  } else {
    console.log("🛑🛑🛑🛑 Assertion Failed:", arr1, "!==", arr2);
  }
};

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
