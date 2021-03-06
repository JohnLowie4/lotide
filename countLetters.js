const assertEqual = require('./assertEqual');

const countLetters = function(str) {
  const words = str.replaceAll(' ', '');
  const result = {};
  
  for (const letter of words) {
    if (letter in result) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  console.log(result);
  return result;
};

module.exports = countLetters;

// Test cases:
// const stringCount = countLetters("lighthouse in the house");

// assertEqual(stringCount['h'], 4);
// assertEqual(stringCount.e, 3);
// assertEqual(stringCount['i'], 2);
// assertEqual(stringCount.g, 1);
// assertEqual(stringCount['z'], undefined);