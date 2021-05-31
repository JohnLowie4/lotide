const assertEqual = require('./assertEqual');

const findKeyByValue = function(obj, value) {
  let found = undefined;
  
  for (const key in obj) {
    if (obj[key] === value) {
      found = key;
    }
  }

  return found;
};

module.exports = findKeyByValue;

// Test cases:
// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);