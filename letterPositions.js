const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] in results) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }

  return results;
};

module.exports = letterPositions;

// Test cases
// const test = letterPositions("hello");

// assertArraysEqual(test["e"], [1]);
// assertArraysEqual(test["l"], [2,3]);

// const lighthouse = letterPositions("lighthouse in the house");

// assertArraysEqual(lighthouse["h"], [3, 5, 15, 18]);
// assertArraysEqual(lighthouse["e"], [9, 16, 22]);
// assertArraysEqual(lighthouse["u"], [7, 20]);