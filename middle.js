const eqArrays = function (arr1, arr2) {
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
};

const assertArraysEqual = function (actual, expected) {
  const match = eqArrays(actual, expected);
  if (match) {
    console.log("✅✅✅✅ Assertion Passed:", actual, "===", expected);
  } else {
    console.log("🛑🛑🛑🛑 Assertion Failed:", actual, "!==", expected);
  }
};

////////////////////////////// FIRST ATTEMPT
// const middle = function (array) {
//   const middleVal = [];
//   const middleIndex = [];
//   if (array.length <= 2) {
//     return [];
//   } else {
//     if (array.length % 2 === 0) {
//       middleIndex.push(array.length / 2 - 1);
//       middleIndex.push(array.length / 2);
//     } else {
//       middleIndex.push(Math.ceil(array.length / 2 - 1));
//     }

//     for (let val of middleIndex) {
//       middleVal.push(array[val]);
//     }
//   }
//   return middleVal;
// };

//////////////////////////////////REFACTORED

const middle = function (array) {
  //first check if the array has 2 or less elements, if so return an empty array
  if (array.length <= 2) {
    return [];
  } else {
    //if the array length is an even number, return an array with the elements of the input array at the two middle indexes (which are calculated)
    if (array.length % 2 === 0) {
      return [array[array.length / 2 - 1], array[array.length / 2]];
    } else {
      //if the array is not an even number, return an array with the element of the input array at the middle index (which are calculated)
      return [array[Math.floor(array.length / 2)]];
    }
  }
};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle(["a", "b", "c"]), ["b"]);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
