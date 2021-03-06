const assertEqual = require('./assertEqual');

/**
 * 
 * @param {*} allItems an array of strings that we need to look through 
 * @param {*} itemsToCount an object specifying what to count
 */
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (item in results) {
      results[item] += 1;
    } else if (item in itemsToCount && itemsToCount[item]) {
      results[item] = 1;
    }
  }
  console.log(results);
  return results;
};

module.exports = countOnly;

// Test cases:
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);