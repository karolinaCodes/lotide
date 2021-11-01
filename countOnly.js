// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    //only increment our count in results object if the item is found in the itemsToCount object
    if (itemsToCount[item]) {
      //if the property on the result obj exists increase the count, if it doesn't add that property with the value of 1
      results[item] ? results[item]++ : (results[item] = 1);
    }
  }
  return results;
};

module.exports = countOnly;
