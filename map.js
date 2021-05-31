const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// Test cases:
// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0]);
// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

// const hobbies = ["Gaming", "build computers", "guitar"];
// const results2 = map(hobbies, word => word[word.length - 1]);
// assertArraysEqual(results2, ['g', 's', 'r']);