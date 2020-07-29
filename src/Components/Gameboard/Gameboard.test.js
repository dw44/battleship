import Gameboard from './Gameboard';

let board;
beforeEach(() => {
  board = Gameboard();
});

test('cells has 100 values from 0-99', () => {
  expect(board.cells.length).toBe(100);
  expect(board.cells[0]).toBe(0);
  expect(board.cells[25]).toBe(25);
  expect(board.cells[72]).toBe(72);
  expect(board.cells[88]).toBe(88);
  expect(board.cells[96]).toBe(96);
});

test('validate function works properly', () => {
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

test('place function places ships on proper positions', () => {
  board.placeShip('battleship', 60, 'v');
  expect([board.cells[60], board.cells[70], board.cells[80], board.cells[90]]).toEqual(['B', 'B', 'B', 'B']);
  board.placeShip('carrier', 71, 'h');
  expect(board.cells[71]).toBe('C');
}); 

test('allShipsPlaced returns true when all ships are on the board', () => {
  board.placeShip('carrier', 10, 'v');
  console.log(board.cells);
  board.placeShip('battleship', 40, 'v'); // won't be placed due to overlap
  board.placeShip('battleship', 60, 'h');
  expect(board.allShipsPlaced()).toBeFalsy();
  board.placeShip('destroyer', 65, 'h');
  board.placeShip('patrolBoat', 96, 'h');
  expect(board.allShipsPlaced()).toBeFalsy();
  board.placeShip('submarine', 19, 'v');
  expect(board.allShipsPlaced()).toBeTruthy();
});