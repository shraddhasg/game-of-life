const assert = require("assert");
const {
  generateNextGeneration,
  isCurrentCellLive,
  getCell,
  surrounding,
  countOfliveNeighbours,
} = require("../src/libs");

describe("Lib Test", function () {
  describe("generate next generation", function () {
    it("should return next generation for given generation.", function () {
      const expected = [
        [0, 0, 0, 0],
        [0, 1, 1, 1],
        [0, 0, 0, 0],
      ];
      const currentGeneration = [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
      ];
      const actual = generateNextGeneration(currentGeneration);

      assert.deepEqual(actual, expected);
    });

    it("shouls return next generation for given generation.", function () {
      const expected = [
        [0, 1, 0],
        [1, 0, 0],
        [1, 0, 1],
        [0, 0, 1],
      ];

      const currentGeneration = [
        [0, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 1],
      ];
      const actual = generateNextGeneration(currentGeneration);

      assert.deepEqual(actual, expected);
    });
  });

  describe("Deciding where current cell will live or die in next generation.", function () {
    it(
      "should return 1 if current cell value is 1 and live count of neighbours is 3" +
        "otherwise it should return 0",
      function () {
        const liveCount = 3;
        const currentCellValue = 1;

        const expected = 1;

        const actual = isCurrentCellLive(liveCount, currentCellValue);

        assert.deepEqual(actual, expected);
      }
    );

    it(
      "should return 1 if current cell value is 1 and live count of neighbours is 2" +
        "otherwise it should return 0",
      function () {
        const expected = 1;

        const liveCount = 2;
        const currentCellValue = 1;
        const actual = isCurrentCellLive(liveCount, currentCellValue);

        assert.deepEqual(actual, expected);
      }
    );

    it(
      "should return 1 if current cell value is 0 and live count of neighbours is 3" +
        "otherwise it should return 0",
      function () {
        const expected = 1;

        const liveCount = 3;
        const currentCellValue = 0;
        const actual = isCurrentCellLive(liveCount, currentCellValue);

        assert.deepEqual(actual, expected);
      }
    );

    it(
      "should return 0 if current cell value is anything but live count of neighbours is less than 2" +
        "or greater than 3, otherwise it should return 0",
      function () {
        const expected = 0;

        const currentCellValue = 0;
        const liveCount = 1;
        const actual = isCurrentCellLive(liveCount, currentCellValue);

        assert.deepEqual(actual, expected);
      }
    );

    it(
      "should return 0 if current cell value is anything but live count of neighbours is less than 2" +
        "or greater than 3, otherwise it should return 0",
      function () {
        const expected = 0;

        const liveCount = 4;
        const currentCellValue = 1;
        const actual = isCurrentCellLive(liveCount, currentCellValue);

        assert.deepEqual(actual, expected);
      }
    );
  });

  describe("Gives count of live neighbours of current cell from all neighbours.", function () {
    it("should return count of live neighbours", function () {
      const expected = 5;

      const neighbours = [0, 1, 1, 0, 1, 1, 1, null];
      const actual = countOfliveNeighbours(neighbours);

      assert.deepEqual(actual, expected);
    });

    it("should return count of live neighbours", function () {
      const expected = 2;

      const neighbours = [0, 1, 0, null, null, null, 1, null];
      const actual = countOfliveNeighbours(neighbours);

      assert.deepEqual(actual, expected);
    });
  });

  describe("Gives cell value from current generation if value is available", function () {
    it("should return cell value if we provided row and column index of current genaration", function () {
      const expected = 0;

      const currentGeneration = [
        [0, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 1],
      ];
      const actual = getCell(currentGeneration, 1, 2);
      assert.deepEqual(actual, expected);
    });

    it("should return cell value if we provided row and column index of current genaration", function () {
      const expected = 1;

      const currentGeneration = [
        [0, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 1],
      ];
      const actual = getCell(currentGeneration, 0, 1);
      assert.deepEqual(actual, expected);
    });

    it("should return cell value if we provided row and column index of current genaration", function () {
      const expected = 1;

      const currentGeneration = [
        [0, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 1],
      ];
      const actual = getCell(currentGeneration, 3, 2);
      assert.deepEqual(actual, expected);
    });
  });

  describe("Gives a neighbours array of current cell", function () {
    it("should return a array of neighbours of current cell.", function () {
      const expected = [1, 0, 1, 1, 1, 1, , 0, 1];

      const currentGeneration = [
        [0, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 1],
      ];
      const actual = surrounding(currentGeneration, 1, 1);
    });

    it("should return a array of neighbours of current cell.", function () {
      const expected = [1, 1, 0, 0, 1, 1, , 0, 0];

      const currentGeneration = [
        [0, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 1],
      ];
      const actual = surrounding(currentGeneration, 2, 1);
    });

    it("should return a array of neighbours of current cell.", function () {
      const expected = [null, null, null, 1, 1, 0, 1, 1];

      const currentGeneration = [
        [0, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 1],
      ];
      const actual = surrounding(currentGeneration, 1, 2);
    });
  });
});
