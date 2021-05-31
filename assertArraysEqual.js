const eqArrays = require('./eqArrays');

const assertArraysEqual = (arr1, arr2) => {
  let result = eqArrays(arr1, arr2);
  if (result) {
    console.log("✅✅✅ The arrays ", arr1, " and ", arr2, " are identical.");
  } else {
    console.log("🛑🛑🛑 The arrays ", arr1, " and ", arr2, " are not identical.");
  }
};

module.exports = assertArraysEqual;

// Test cases
// assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
// assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false

// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false