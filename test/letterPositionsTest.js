const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

const result1 = letterPositions("hello");
assertArraysEqual(result1["h"], [0]);
assertArraysEqual(result1["e"], [1]);
assertArraysEqual(result1["o"], [4]);
assertArraysEqual(result1["l"], [2, 3]);

const result2 = letterPositions("zzzzebra");
assertArraysEqual(result2["z"], [0, 1, 2, 3]);
assertArraysEqual(result2["e"], [4]);
assertArraysEqual(result2["a"], [7]);