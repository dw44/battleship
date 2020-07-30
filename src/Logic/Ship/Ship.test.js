import Ship from './Ship';

test('ship returns object containing length, hitbox, and hit function', () => {
  expect(Ship(4).length).toBe(4);
  expect(typeof Ship(3).hit).toBe('function');
  expect(Ship(3).hitBox.length).toBe(3);
  expect(Ship(3).hitBox.every(el => el === false)).toBeTruthy();
  expect(Ship(2).length).toBe(2);
});

test('hit function sets relevant position in hitbox to true', () => {
  const shipOne = Ship(5);
  const shipTwo = Ship(3);
  shipOne.hit(3);
  expect(shipOne.hitBox).toEqual([false, false, false, true, false]);
  shipOne.hit(4);
  expect(shipOne.hitBox).toEqual([false, false, false, true, true]);
  shipTwo.hit(3); // out of bound index. shouldn't alter hitBox
  expect(shipTwo.hitBox).toEqual([false, false, false]);
  shipTwo.hit(0);
  expect(shipTwo.hitBox).toEqual([true, false, false]); 
  shipOne.hit(-3);
  shipOne.hit(10);
  expect(shipOne.hitBox).toEqual([false, false, false, true, true]);
});

test('isSunk function returns true only if all values in hitBox are true', () => {
  const shipOne = Ship(2);
  const shipTwo = Ship(4);
  expect(shipOne.isSunk()).toBeFalsy();
  expect(shipTwo.isSunk()).toBeFalsy();
  shipOne.hit(0);
  shipOne.hit(1);
  expect(shipOne.isSunk()).toBeTruthy(); 
  shipTwo.hit(0);
  shipTwo.hit(1);
  expect(shipTwo.isSunk()).toBeFalsy();
  shipTwo.hit(2);
  expect(shipTwo.isSunk()).toBeFalsy();
  shipTwo.hit(3);
  expect(shipTwo.isSunk()).toBeTruthy();  
});
