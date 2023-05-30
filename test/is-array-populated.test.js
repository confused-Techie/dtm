const { describe, it } = require("node:test");
const assert = require("node:assert");

const dtm = require("../src/main.js");

describe("isArrayPopulated() Tests", () => {

  it("is exported as a function", () => {
    assert.strictEqual(typeof dtm.isArrayPopulated, "function");
  });

  it("returns false for non-array", () => {
    assert.strictEqual(dtm.isArrayPopulated("a string"), false);
    assert.strictEqual(dtm.isArrayPopulated(1), false);
    assert.strictEqual(dtm.isArrayPopulated({ an: "object"}), false);
    assert.strictEqual(dtm.isArrayPopulated(null), false);
  });

  it("returns false for empty array", () => {
    assert.strictEqual(dtm.isArrayPopulated([]), false);
  });

  it("returns true for array with values", () => {
    assert.strictEqual(dtm.isArrayPopulated([ 0, 1, 2 ]), true);
    assert.strictEqual(dtm.isArrayPopulated([ 0 ]), true);
  });

});
