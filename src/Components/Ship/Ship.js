function Ship(length) {
  // a ship needs to be between 2 and 5 units long
  if (length < 2 || length > 5) return null;
  // hitbox initialized as array of size equal to length, with all values set to false at first
  const hitBox = new Array(length).fill(false);  
  // takes an index, sets it to true if it's valid and not already true
  const hit = index => {
    if (index >= 0 && index < length && hitBox[index] === false) {
      hitBox[index] = true;
    }
  }
  // returns true if all values in hitBox are true
  const isSunk = () => {
    return hitBox.every(position => position === true);
  }

  return {
    length,
    hitBox,
    hit,
    isSunk
  };
}

export default Ship;