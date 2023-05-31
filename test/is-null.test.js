const { describe, it } = require("node:test");
const assert = require("node:assert");

const dtm = require("../src/main.js");

describe("isNull() Tests", () => {
  it("is exported as a function", () => {
    assert.strictEqual(typeof dtm.isNull, "function");
  });

  it("returns true properly", () => {
    assert.strictEqual(dtm.isNull(null), true);
  });

  it("returns false properly", () => {
    assert.strictEqual(dtm.isNull(0), false);
    assert.strictEqual(dtm.isNull(""), false);
    assert.strictEqual(dtm.isNull([]), false);
    assert.strictEqual(dtm.isNull(-1), false);
    assert.strictEqual(dtm.isNull("hello world"), false);
    assert.strictEqual(dtm.isNull(false), false);
  });
});
