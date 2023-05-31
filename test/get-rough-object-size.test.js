const { describe, it } = require("node:test");
const assert = require("node:assert");

const dtm = require("../src/main.js");

describe("getRoughObjectSize() Tests", () => {
  it("is exported as a function", () => {
    assert.strictEqual(typeof dtm.getRoughObjectSize, "function");
  });

  it("returns expected values", () => {
    assert.strictEqual(dtm.getRoughObjectSize({ value: "Hello World" }), 22);
    assert.strictEqual(dtm.getRoughObjectSize({ boolean: true }), 4);
    assert.strictEqual(
      dtm.getRoughObjectSize({ obj: { boolean: false, value: "H" } }),
      6
    );
  });
});
