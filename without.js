const eqArrays = (arg1, arg2) => {
  let bool = true;
  for (let i = 0; i < arg1.length; i++) {
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

const without = (source, itemsToRemove) => {
  // Our main goal here is to not alter the source array
  let result = source;
  for (let i = 0; i < itemsToRemove.length; i++) {
    if (source.includes(itemsToRemove[i])) {
      let removeIndex = result.indexOf(itemsToRemove[i]);
      result.splice(removeIndex, 1);
    }
  }
  return result;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);