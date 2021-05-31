// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// // Test Case 1: Check the returned array elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  const result = tail(["Hello", "Lighthouse", "Labs"]);
  it("should return 2 for length of result", () => {
    assert.equal(result.length, 2);
  });

  it("should return 'Lighthouse' for result[0]", () => {
    assert.strictEqual(result[0], "Lighthouse");
  });

  it("should return 'Labs' for result[1]", () => {
    assert.strictEqual(result[1], "Labs");
  });

  it("should return 3 for length of words", () => {
    const words = ["Yo YO", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });
});