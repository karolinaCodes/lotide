const eqArrays = function (arr1, arr2) {
  let match = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      match = false;
      break;
    }
  }
  return match;
};

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3])); //true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); //false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); //true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); //false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
