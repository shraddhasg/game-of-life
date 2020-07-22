const assert = require("assert");
const { generateNextGeneration } = require("../src/libs");

describe("Lib Test", function () {
  describe("generate next generation", function () {
    it("should return next generation for given generation", function () {
      const expected = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      const currentGeneration = [
        [0, 1, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      const actual = generateNextGeneration(currentGeneration);

      assert.deepEqual(actual, expected);
    });
  });
});
