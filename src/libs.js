const generateNextGeneration = function (currentGeneration) {
  let nextGeneration = [];
  let numberOfRows = currentGeneration.length;
  let numberOfColumns = currentGeneration[0].length;

  for (let row = 0; row < numberOfRows; row++) {
    nextGeneration[row] = [];
    let neighbours = [];
    for (let column = 0; column < numberOfColumns; column++) {
      neighbours = surrounding(currentGeneration, row, column);
      // console.log(neighbours);

      let liveCount = countOfliveNeighbours(neighbours);

      let currentCellStatus = isCurrentCellLive(liveCount);

      nextGeneration[row][column] = currentCellStatus;
    }
  }
  return nextGeneration;
};

const isCurrentCellLive = function (liveCount) {
  if (liveCount == 3 || liveCount == 2) return 1;
  if (liveCount == 3) return 1;
  return 0;
};

const getCell = function (currentGeneration, row, column) {
  let NO_VALUE = null;
  let value, hasValue;
  try {
    hasValue = currentGeneration[row][column] !== undefined;
    value = hasValue ? currentGeneration[row][column] : NO_VALUE;
  } catch (e) {
    value = NO_VALUE;
  }
  return value;
};

const surrounding = function (currentGeneration, row, column) {
  let neighbours = [];
  neighbours.push(getCell(currentGeneration, row - 1, column));
  neighbours.push(getCell(currentGeneration, row - 1, column + 1));
  neighbours.push(getCell(currentGeneration, row, column + 1));
  neighbours.push(getCell(currentGeneration, row + 1, column + 1));
  neighbours.push(getCell(currentGeneration, row + 1, column));
  neighbours.push(getCell(currentGeneration, row + 1, column - 1));
  neighbours.push(getCell(currentGeneration, row, column - 1));
  neighbours.push(getCell(currentGeneration, row - 1, column - 1));

  return neighbours;
};

const countOfliveNeighbours = function (neighbours) {
  liveNeighbours = neighbours.filter((currentValue) => currentValue == 1);
  return liveNeighbours.length;
};

let currentGeneration = [
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
];
let neighbours = generateNextGeneration(currentGeneration);
console.log(neighbours);

module.exports = { generateNextGeneration };
