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

const flatten = arr => {
  let flat = [];
  for (const elm1 of arr) {
    if (Array.isArray(elm1)) {
      for (const elm2 of elm1) {
        flat.push(elm2);
      }
    } else {
      flat.push(elm1);
    }
  }
  return flat;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);