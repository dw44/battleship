import React from 'react';
import Gameboard from './Logic/Gameboard/Gameboard'; 
import Board from './Components/Board/Board';
import ActiveContextProvider from './Contexts/ActivePlayerContext';
import './App.css';

// Do NOT use state in App()

const App = () => {
  let [human, computer] = [Gameboard(), Gameboard()];
  
  const handleGameOver = (name) => {
    alert(`Game Over. ${name} Wins!!!`);
  }

  return ( 
    <div className="App">
      <ActiveContextProvider>
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
      </ActiveContextProvider>
    </div>
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