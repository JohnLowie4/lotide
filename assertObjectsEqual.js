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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let identical = true;  // Initialize a variable to return

  // This condition checks to see if both objects have the same number of keys
  // If they don't have the same number of keys then they're not identical
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    identical = false;
  } else {
    /**
     * This loops through object1 to see if the key in object1 is shared with
     * object2, if object2 is undefined or does not have the same value then
     * identical is false
     * In all other cases the result will be true
     */
    for (const key in object1) {
      if (Array.isArray(object1[key])) {
        identical = eqArrays(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]) {
        identical = false;
      }
    }
  }

  return identical;
};

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

assertObjectsEqual({a: '1', b: 2}, {b: 2, a: '1'});
assertObjectsEqual({a: '1', b: 2}, {b: 2, a: 1});