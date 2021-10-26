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
