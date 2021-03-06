import React, { useContext, useEffect } from 'react';
import { GameContext } from '../../Contexts/GameContext';
import { v4 as uuid } from 'uuid';
import classes from './Board.module.css';


const Board = (props) => {
  // default ship placement. temporary
  const types = ['C','B','D','S','P'];
  types.forEach(ship => props.player.placeShip(ship, types.indexOf(ship), 'v'));

  // experimental (context shit)
  const active = useContext(GameContext);

  // populate grid for player board
  const grid = props.player.cells.map((cell, index) => {
    return (
      <div
        className={ typeof cell === 'string' ? 
          [classes.Cell, classes.Ship].join(' ') : classes.Cell }
        key={uuid()}
        onClick={active.Player && props.name === 'Computer' ? () => handleTurn(index) : null}
      >{cell}</div>
    );
  });

  useEffect(() => {
    if (active.Computer && props.name === 'Player') {
      let index = 0;
      do {
        index = Math.floor(Math.random() * 100);
      } while(props.player.attacked.includes(index));
        setTimeout(() => {
          handleTurn(index);
      }, 1000);
    }
  });

  const handleTurn = index => {
    if (!props.player.attacked.includes(index)) {
      props.player.receivedAttack(index);
      console.log(`${props.name}: ${JSON.stringify(props.player.attacked)}`);
      active.toggleActive();
      if (props.player.allShipsSunk()) {
        active.defaultActive();
        props.gameOver();
      }
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