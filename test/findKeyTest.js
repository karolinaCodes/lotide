const assertEqual = require('../assertEqual');
const findKey= require('../findKey');

const result1 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); 

assertEqual(result1, "noma");

const result2 = findKey(
  {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  },
  (x) => x === 4
);

assertEqual(result2, "d");

result3 = findKey(
  {
    dog: "bark",
    cat: "meow",
    pig: "oink",
    bird: "sing",
  },
  (x) => x === "meow"
);

assertEqual(result3, "cat");