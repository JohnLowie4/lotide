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

const assertArraysEqual = (arr1, arr2) => {
  let result = eqArrays(arr1, arr2);
  if (result) {
    console.log("✅✅✅ The arrays ", arr1, " and ", arr2, " are identical.");
  } else {
    console.log("🛑🛑🛑 The arrays ", arr1, " and ", arr2, " are not identical.");
  }
};

// Test cases
const test = letterPositions("hello");

assertArraysEqual(test["e"], [1]);
assertArraysEqual(test["l"], [2,3]);

const lighthouse = letterPositions("lighthouse in the house");

assertArraysEqual(lighthouse["h"], [3, 5, 15, 18]);
assertArraysEqual(lighthouse["e"], [9, 16, 22]);
assertArraysEqual(lighthouse["u"], [7, 20]);