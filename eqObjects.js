// Object.keys()
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  //-------------------> FIRST ATTEMPT
  // let equal;
  // //check if have the same number of keys
  // if (Object.keys(object1).length === Object.keys(object2).length) {
  //   //loop through keys of first object
  //   for (let key in object1) {
  //     // additional filter for object properties:
  //     if (object1.hasOwnProperty(key)) {
  //       //if the value at the same key is the same (and the # of keys is the samesince inside this loop) set equal to true
  //       if (object1[key] === object2[key]) {
  //         equal = true;
  //       } else {
  //         equal = false;
  //       }
  //     }
  //   }
  // } else {
  //   equal = false;
  // }
  // return equal;

  //-------------------> REFACTORED
  //implementation using process of elimination- if the objects don't match a certain condition return false and exit the function
  //if the # of keys don't match return false and end function exeuction
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  //if the key values don't match return false and end function exeuction
  for (let key of Object.keys(object1)) {
    //check if values in both the object at a specific key is an array, if so use the eqArrays to check if they equal
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } else {
      //if they are not arrays, they are primitives so can use === to compare
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  //if the objects pass the preceding condtional statements, it mean they are equal so return true
  return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
