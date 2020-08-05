import React, { useContext } from 'react';
import { ActivePlayerContext } from '../../Contexts/ActivePlayerContext';
import classes from './TurnDisplay.module.css';

const TurnDisplay = props => {
  const activePlayer = useContext(ActivePlayerContext);
  return (
    <h1 className={classes.Display}>
      Turn: {activePlayer.Player ? 'Player' : 'Computer'}
    </h1>
  );
}

export default TurnDisplay;