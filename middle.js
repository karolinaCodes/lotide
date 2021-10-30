const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')

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

module.exports = middle;