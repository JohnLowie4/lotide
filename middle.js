// const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = arr => {
  let mid = []; // Empty array initialized
  if (arr.length > 2) { // Conditional that only applies to arrays with more than 2 elements
    if (arr.length % 2 !== 0) {
      let midIndex = Math.floor(arr.length / 2);
      mid.push(arr[midIndex]);
    } else {
      let midIndex1 = arr.length / 2 - 1;
      let midIndex2 = midIndex1 + 1;
      mid.push(arr[midIndex1]);
      mid.push(arr[midIndex2]);
    }
  }

  return mid;
};

module.exports = middle;

// Test cases:
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1,2,3]), [2]);
// assertArraysEqual(middle([1,2,3,4,5]), [3]);
// assertArraysEqual(middle([1,2,3,4]), [2,3]);
// assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);