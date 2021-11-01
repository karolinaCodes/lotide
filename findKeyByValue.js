const findKeyByValue = function (object, value) {
  let foundKey = undefined;

  //implementation using regular for ..in loop
  // for (let property in object) {
  // if (object.hasOwnProperty(property)) {
  //   if (object[property] === value) {
  //     key = property;
  //   }
  // }
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

module.exports = findKeyByValue;
