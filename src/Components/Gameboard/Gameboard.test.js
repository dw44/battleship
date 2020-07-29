import Gameboard from './Gameboard';

test('returns an object', () => {
  expect(typeof Gameboard()).toBe('object');
});

test('cells has 100 values from 0-99', () => {
  const board = Gameboard();
  expect(board.cells.length).toBe(100);
  expect(board.cells[0]).toBe(0);
  expect(board.cells[25]).toBe(25);
  expect(board.cells[72]).toBe(72);
  expect(board.cells[88]).toBe(88);
  expect(board.cells[96]).toBe(96);
});

test('validate function works properly', () => {
  const board = Gameboard();
  expect(board.validate(5, 70, 'v')).toBeFalsy();
  expect(board.validate(3, 82, 'v')).toBeFalsy();
  expect(board.validate(4, 74, 'v')).toBeFalsy();
  expect(board.validate(5, 44, 'v')).toBeTruthy();
  expect(board.validate(3, 0, 'v')).toBeTruthy();
  expect(board.validate(3, 48, 'h')).toBeFalsy();
  expect(board.validate(4, 68, 'h')).toBeFalsy();
  expect(board.validate(5, 44, 'h')).toBeTruthy();
  expect(board.validate(3, 0, 'h')).toBeTruthy();
  expect(board.validate(4, 44, 'h')).toBeTruthy();
});