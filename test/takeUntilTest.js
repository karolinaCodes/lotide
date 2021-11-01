const assertArraysEqual = require("../assertArraysEqual");
const takeUntil = require("../takeUntil");

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2]));

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, x => x === ",");
console.log(assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]));

const data3 = [1, 1, 1, 1, 1, 2, 1, 1];
const results3 = takeUntil(data3, x => x === 2);
console.log(assertArraysEqual(results3, [1, 1, 1, 1, 1]));

const data4 = ["K", "a", "r", "o", "l", "i", "n", "a"];
const results4 = takeUntil(data4, x => x === "o");
console.log(assertArraysEqual(results4, ["K", "a", "r"]));
