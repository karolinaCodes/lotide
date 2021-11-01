const letterPositions = function(sentence) {
  const results = {};

  //use for loop since for loop provides the index value (i)
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      continue;
    }
    //if the property for the current letter exists, push the index of this instance to the array of that property, if it doesn't create a new property for that character and set it's value to an array with the index value.
    results[sentence[i]]
      ? results[sentence[i]].push(i)
      : (results[sentence[i]] = [i]);
  }

  return results;
};

module.exports = letterPositions;
