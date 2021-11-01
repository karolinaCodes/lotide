const eqArrays = require("./eqArrays");

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

//-------------------> FIRST ATTEMPT
// const eqObjects = function (object1, object2) {
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
// };

//-------------------> REFACTORED
//implementation using process of elimination- if the objects don't match a certain condition return false and exit the function
const eqObjects = function (object1, object2) {
  //if the # of keys don't match return false and end function exeuction
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  //if the key values don't match return false and end function exeuction
  for (let key of Object.keys(object1)) {
    //check if values in both the objects at a specific key is an array, if so use the eqArrays to check if they equal
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if (
      typeof object1[key] === "object" &&
      typeof object2[key] === "object"
    ) {
      //recursive case
      //if we call the eqObjects with the nested objects and they return false (they dont match) then return false, but if they return true then continue looping through the object keys
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      } else {
        continue;
      }
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

console.log(eqObjects({a: {z: 1}, b: 2}, {a: {z: 1}, b: 2})); // true
console.log(eqObjects({a: {y: 0, z: 1}, b: 2}, {a: {z: 1}, b: 2})); //false
console.log(eqObjects({a: {y: 0, z: 1}, b: 2}, {a: 1, b: 2})); //false
console.log(eqObjects({a: {y: 0, x: {z: 1}}, b: 2}, {a: 1, b: 2})); // false

module.exports = eqObjects;
