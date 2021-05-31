const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  // const inspect = require('util').inspect;
  // console.log(`Example label: ${inspect(actual)}`);
  let check = eqObjects(actual, expected);
  if (check) {
    console.log("✅✅✅ Assertion Passed: ", actual, " === ", expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: ", actual, " !== ", expected);
  }
};

module.exports = assertObjectsEqual;

// assertObjectsEqual({a: '1', b: 2}, {b: 2, a: '1'});
// assertObjectsEqual({a: '1', b: 2}, {b: 2, a: 1});