const takeUntil = function(array, callback) {
  const results = [];
  for (let el of array) {
    if (callback(el)) {
      break;
    } else {
      results.push(el);
    }
  }
  return results;
};

module.exports = takeUntil;