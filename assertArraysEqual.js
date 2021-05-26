const eqArrays = (arg1, arg2) => {
  let bool = true;
  for (let i = 0; i < arg1.length; i++) {
    bool = bool && (arg1[i] === arg2[i]);
  }
  return bool;
};

const asssertArraysEqual = (arr1, arr2) => {
  let result = eqArrays(arr1, arr2);
  if (result) {
    console.log("✅✅✅ The arrays ", arr1, " and ", arr2, " are identical.");
  } else {
    console.log("🛑🛑🛑 The arrays ", arr1, " and ", arr2, " are not identical.");
  }
};

// Test cases
asssertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
asssertArraysEqual([1, 2, 3], [3, 2, 1]) // => false

asssertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
asssertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false