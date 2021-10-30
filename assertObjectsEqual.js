// function to test functions that return objects
const eqObjects = require('eqObjects');

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

nyc["boroughs"][0];

module.exports={assertObjectsEqual}
