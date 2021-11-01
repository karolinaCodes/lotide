
const assertEqual = require('../assertEqual');
const countLetters= require('../countLetters');

const result1 = countLetters("lighthouse in the house");
console.log(result1);
assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["h"], 4);
assertEqual(result1["o"], 2);

const result2 = countLetters("zzzzzebra at the zoo");
console.log(result2);
assertEqual(result2["z"], 6);
assertEqual(result2["a"], 2);
assertEqual(result2["h"], 1);
assertEqual(result2["o"], 2);