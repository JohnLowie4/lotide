const assertEqual = require('./assertEqual');

const findKey = (obj, callback) => {
  let key;

  for (const keyObj in obj) {
    if (callback(obj[keyObj])) {
      key = keyObj;
      break;
    }
  }

  return key;
};

module.exports = findKey;

// Test cases:
// const result1 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2);
// assertEqual(result1, "noma");
