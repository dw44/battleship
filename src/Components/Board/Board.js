import React, { useContext } from 'react';
import { ActivePlayerContext } from '../../Contexts/ActivePlayerContext';
import { v4 as uuid } from 'uuid';
import classes from './Board.module.css';


const Board = (props) => {
  // default ship placement. temporary
  const types = ['C','B','D','S','P'];
  types.forEach(ship => props.player.placeShip(ship, types.indexOf(ship), 'v'));

  // experimental (context shit)
  const active = useContext(ActivePlayerContext);

  // populate grid for player board
  const grid = props.player.cells.map((cell, index) => {
    return (
      <div
        className={ typeof cell === 'string' ? 
          [classes.Cell, classes.Ship].join(' ') : classes.Cell }
        key={uuid()}
        onClick={active[props.name] ? () => handleClick(index) : null}
      >{cell}</div>
    );
  });

  const handleClick = index => {
    if (!props.player.attacked.includes(index)) {
      props.player.receivedAttack(index);
      console.log(`${props.name}: ${JSON.stringify(props.player.attacked)}`);
      active.toggleActive();
      if (props.player.allShipsSunk()) props.gameOver();
    }    
  }

  return (
    <div className={classes.Board}>
      {grid}
    </div>
  );
}

export default Board;

/*
TODO:
- Add dynamic classes so attacked cells get .Attacked class from CSS modules.

NOTES:
- State not needed for gameOver. Just use allShipsSunk() method directly from board object.
- Try using context to keep track of active player - woohoo. working.
*/