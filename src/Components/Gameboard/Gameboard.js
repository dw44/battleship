import Ship from '../Ship/Ship';

const Gameboard = () => {
  const ships = {
    carrier: Ship(5),
    battleship: Ship(4),
    destroyer: Ship(3),
    submarine: Ship(3),
    patrolBoat: Ship(2),
  };

  // initialize cells 
  const cells = [];
  for (let i = 0; i < 100; ++i) {
    cells.push(i);
  }

  // list of cells with ships on them
  const occupied = [];
  // list of cells that have been attacked
  const attacked = [];

  const validate = (length, startingPoint, orientation) => {
    // list of cells ship could be placed on if out-of-board tests pass
    const shipCells = [];
    if (orientation !== 'h' && orientation !== 'v') return false;
    // if-else if block checks if ship would go off board if placed
    if (orientation === 'v') {
      const endPoint = startingPoint + (length - 1) * 10;
      if (endPoint > 99) return false;
      for (let i = startingPoint; i <= endPoint; i += 10) {
        shipCells.push(i);
      }
    } else if (orientation === 'h') {
      const endPoint = startingPoint + length - 1;
      if (endPoint >= (Math.floor(startingPoint / 10) * 10 + 10)) return false;
      for (let i = startingPoint; i <= endPoint; ++i) {
        shipCells.push(i);
      }
    }
    // check if ship would end up on a cell occupied by another ship
    if (shipCells.some(el => occupied.includes(el))) return false; 
    return true;
  }
   
  const placeShip = (type, startingPoint, orientation) => {
    if (!validate(ships[type].length, startingPoint, orientation)) return null;

    if (orientation === 'h') {
      const endPoint = startingPoint + ships[type].length - 1;
      for (let i = startingPoint; i <= endPoint; ++i) {
        occupied.push(i); // add cells taken up by ship to list of occupied cells
        cells[i] = type[0].toUpperCase(); 
      }
    } else if (orientation === 'v') {
      const endPoint = startingPoint + (ships[type].length - 1) * 10;
      for (let i = startingPoint; i <= endPoint; i += 10) {
        occupied.push(i);
        cells[i] = type[0].toUpperCase();
      }
    }
    console.log(cells)
  }

  return {
    ships,
    cells,
    validate,
    placeShip
  };
}

export default Gameboard;


/*
1 - Note that we have not yet created any User Interface. We should know our code is coming together by running the tests. You shouldn’t be relying on console.logs or DOM methods to make sure your code is doing what you expect it to.

2 - Gameboards should be able to place ships at specific coordinates by calling the ship factory function

3 - Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.

4 - Gameboards should keep track of missed attacks so they can display them properly.

5 - Gameboards should be able to report whether or not all of their ships have been sunk.
*/