const assertEqual = require('./assertEqual')

const eqArrays = (arg1, arg2) => {
  let bool = true;
  let maxLength;
  if (arg1.length > arg2.length) {
    maxLength = arg1.length;
  } else {
    maxLength = arg2.length;
  }

  for (let i = 0; i < maxLength; i++) {
    bool = bool && (arg1[i] === arg2[i]);
  }
  return bool;
};

module.exports = eqArrays;

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false