const assert = require('assert').strict;
const { Board } = require('./1');

(function testHasBingoHorizontal() {
  const board = new Board([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]);

  board.try(1);
  board.try(2);
  board.try(3);

  assert.equal(board.hasBingo(), true);
})();

(function testHasBingoVertical() {
  const board = new Board([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]);

  board.try(2);
  board.try(5);
  board.try(8);

  assert.equal(board.hasBingo(), true);
})();

(function testScore() {
  const board = new Board([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]);

  board.try(2);
  board.try(5);
  board.try(8);

  assert.equal(board.score(8), 240);
})();
