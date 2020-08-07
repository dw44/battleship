import React, { useContext } from 'react';
import { GameContext } from '../../Contexts/GameContext';
import classes from './TurnDisplay.module.css';

const TurnDisplay = props => {
  const activePlayer = useContext(GameContext);
  return (
    <h1 className={classes.Display}>
      Turn: {activePlayer.Player ? 'Player' : 'Computer'}
    </h1>
  );
}

export default TurnDisplay;