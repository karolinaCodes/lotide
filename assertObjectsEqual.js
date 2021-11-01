// function to test functions that return objects
const eqObjects = require('./eqObjects');

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
  const inspect = require("util").inspect;

  if (eqObjects(actual, expected)) {
    console.log(
      `✅✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

module.exports = assertObjectsEqual ;
