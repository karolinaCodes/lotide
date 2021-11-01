///////////////////////FIRST ATTMEMPT

// const without = function (source, itemsToRemove) {
//   const filteredArr = [];

//   for (let i = 0; i < source.length; i++) {
//     let match = false;
//     for (let j = 0; j < itemsToRemove.length; j++) {
//       if (source[i] === itemsToRemove[j]) {
//         match = true;
//       }
//     }
//     if (!match) {
//       filteredArr.push(source[i]);
//     }
//   }
//   return filteredArr;
// };

////////////////////////REFACTORED

const without = function (source, itemsToRemove) {
  //create an empty array into which will push in the filtered values
  const filteredArr = [];

  //loop through source array
  for (let i = 0; i < source.length; i++) {
    //check if the current el in the source array isn't in the itemsToRemove array, if not add it to the filtered Array
    if (!itemsToRemove.includes(source[i])) {
      filteredArr.push(source[i]);
    }
  }
  return filteredArr;
};

module.exports = without;