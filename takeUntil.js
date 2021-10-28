const takeUntil = function (array, callback) {
  const results = [];
  for (let el of array) {
    if (callback(el)) {
      break;
    } else {
      results.push(el);
    }
  }
  return results;
};
//--------------------> ASSERTION FUNCTIONS
const eqArrays = function (arr1, arr2) {
  if (arr1 === undefined || arr2 === undefined) {
    return undefined;
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

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
//--------------------> ASSERTION FUNCTIONS

//--------------------> TEST DATA
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2]));

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]));

const data3 = [1, 1, 1, 1, 1, 2, 1, 1];
const results3 = takeUntil(data3, (x) => x === 2);
console.log(assertArraysEqual(results3, [1, 1, 1, 1, 1]));

const data4 = ["K", "a", "r", "o", "l", "i", "n", "a"];
const results4 = takeUntil(data4, (x) => x === "o");
console.log(assertArraysEqual(results4, ["K", "a", "r"]));
