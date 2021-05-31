const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const flatten = arr => {
  let flat = [];
  for (const elm1 of arr) {
    if (Array.isArray(elm1)) {
      for (const elm2 of elm1) {
        flat.push(elm2);
      }
    } else {
      flat.push(elm1);
    }
  }
  return flat;
};

module.exports = flatten;

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);