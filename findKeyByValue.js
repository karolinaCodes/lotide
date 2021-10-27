const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (object, value) {
  let foundKey = undefined;

  //implementation using regular for ..in loop
  // for (let property in object) {
  //   if (object[property] === value) {
  //     key = property;
  //   }
  // }

  //implmenetation using recently learned Object.keys(..) method
  //loop through the object keys array and check if any value in the object (through the access of the keys) matches the input value, if match found assign foundKey to the key string, if not foundKey returns undefined as defined in the outer scope
  for (let key of Object.keys(object)) {
    if (object[key] === value) {
      foundKey = key;
    }
  }
  return foundKey;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
//write more tests
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Friends"), undefined);
