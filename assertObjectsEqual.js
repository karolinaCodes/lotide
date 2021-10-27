// function to test functions that return objects
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  return true;
};

// FUNCTION IMPLEMENTATION
// --------> My solution to the output issue
// const assertObjectsEqual = function (actual, expected) {
//   const match = eqObjects(actual, expected);
//   if (match) {
//     console.log("✅✅✅✅ Assertion Passed:", actual, "===", expected);
//   } else {
//     console.log("🛑🛑🛑🛑 Assertion Failed:", actual, "!==", expected);
//   }
// };

// Compass solution to output issue
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect; // <= add this line
  console.log(`Example label: ${inspect(actual)}`);

  const match = eqObjects(actual, expected);
  if (match) {
    console.log(
      `✅✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

assertObjectsEqual({ a: 1 }, { a: 1 });
