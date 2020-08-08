import React from 'react';
import Gameboard from './Logic/Gameboard/Gameboard'; 

import Board from './Components/Board/Board';
import TurnDisplay from './Components/TurnDisplay/TurnDisplay';

import GameContextProvider from './Contexts/GameContext';
import './App.css';

const App = () => {
  const [human, computer] = [Gameboard(), Gameboard()];

  const handleGameOver = (name) => {
    alert(`Game Over. ${name} Wins!!!`);
  }
  
  return ( 
    <GameContextProvider>
      <div className="App">
        <TurnDisplay />
        <section className="GridContainer">
          <Board 
            player={human}
            name="Player" 
            gameOver={() => handleGameOver('Computer')}
          />
          <Board 
            player={computer} 
            name="Computer" 
            gameOver={() => handleGameOver('Player')} 
          />
        </section>
      </div>
    </GameContextProvider>
  );
}

export default App;

/*
TODO:
- 

NOTES:
- Do NOT use state in this component.
- Active/Inactive as object seems to be working. App.js not rerendering on update. Doesn't change props.
*/