const { describe, it } = require("node:test");
const assert = require("node:assert");

const dtm = require("../src/main.js");

describe("getDedupedArray() Tests", () => {
  it("is exported as a function", () => {
    assert.strictEqual(typeof dtm.getDedupedArray, "function");
  });

  it("returns expected values", () => {
    assert.deepStrictEqual(dtm.getDedupedArray("not-an-array"), []);
    assert.deepStrictEqual(dtm.getDedupedArray(["value", "value"]), ["value"]);
    assert.deepStrictEqual(dtm.getDedupedArray([1, 2, 3, 3]), [1, 2, 3]);
    assert.deepStrictEqual(dtm.getDedupedArray([]), []);
  });
});
