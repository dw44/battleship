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
  board.placeShip('B', 60, 'v');
  expect([board.cells[60], board.cells[70], board.cells[80], board.cells[90]]).toEqual(['B', 'B', 'B', 'B']);
  board.placeShip('C', 71, 'h');
  expect(board.cells[71]).toBe('C');
}); 

test('allShipsPlaced returns true when all ships are on the board', () => {
  board.placeShip('C', 10, 'v');
  board.placeShip('B', 40, 'v'); // won't be placed due to overlap
  board.placeShip('B', 60, 'h');
  expect(board.allShipsPlaced()).toBeFalsy();
  board.placeShip('D', 65, 'h');
  board.placeShip('P', 96, 'h');
  expect(board.allShipsPlaced()).toBeFalsy();
  board.placeShip('S', 19, 'v');
  expect(board.allShipsPlaced()).toBeTruthy();
});

test('receivedAttack adds cell to attacked list, does nothing if cell already there', () => {
  board.receivedAttack(27);
  board.receivedAttack(44);
  board.receivedAttack(72);
  board.receivedAttack(72);
  expect(board.attacked).toEqual([27, 44, 72]);
  board.receivedAttack(27);
  expect(board.attacked).toEqual([27, 44, 72]);
});

test('attacking position on board triggers attack in ship object', () => {
  board.placeShip('C', 20, 'v');
  board.placeShip('B', 25, 'h');
  board.placeShip('D', 44, 'h');
  board.placeShip('S', 65, 'v');
  board.placeShip('P', 72, 'h');
  board.receivedAttack(72);
  board.receivedAttack(73);
  expect(board.ships['P'].hitBox).toEqual([true, true]);
  board.receivedAttack(44);
  board.receivedAttack(46);
  expect(board.ships['D'].hitBox).toEqual([true, false, true]);
});