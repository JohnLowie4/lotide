const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(25, "25");
assertEqual("Hello", ['H', 'e', 'l', 'l', 'o']);
assertEqual("Hello", 'Hello');
assertEqual(0, 1);