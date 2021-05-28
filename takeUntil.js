const takeUntil = function(array, callback) {
  let subArray = [];
  
  for (const element of array) {
    if (!callback(element)) {
      subArray.push(element);
    } else {
      break;
    }
  }

  return subArray;
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

// Test cases:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);