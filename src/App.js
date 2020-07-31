import React, { useState } from 'react';
import Gameboard from './Logic/Gameboard/Gameboard';
import Ship from './Logic/Ship/Ship';
import Player from './Logic/Player/Player';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const playerBoard = Gameboard();
  const computerBoard = Gameboard();
  // initial ship setup - to be replaced later with option for players to place their ships manually
  playerBoard.placeShip('C', 20, 'v');
  playerBoard.placeShip('B', 21, 'h');
  playerBoard.placeShip('D', 44, 'h');
  playerBoard.placeShip('S', 69, 'v');
  playerBoard.placeShip('P', 92, 'h');
  computerBoard.placeShip('C', 53, 'h');
  computerBoard.placeShip('B', 61, 'v');
  computerBoard.placeShip('D', 72, 'h');
  computerBoard.placeShip('S', 16, 'h');
  computerBoard.placeShip('P', 88, 'v');

  const board = player => {
    const cells = [];
    for (let i = 0; i < 100; ++i) {
      cells.push(
        <div
          className={typeof player.cells[i] === 'number' ? 'cell' : ' cell shipCell'}
          key={uuidv4()}
          onClick={() => player.receivedAttack(i)}
        >
          {player.cells[i]}
        </div>
      );
    }
    return (
      <div className="grid">{cells}</div>
    )
  }

  return (
    <div className="App">
      {board(playerBoard)}
      {board(computerBoard)}
    </div>
  );
}

export default App;
