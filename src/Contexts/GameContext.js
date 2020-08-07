import React, { createContext, useState } from 'react';

export const GameContext = createContext();

const GameContextProvider = props => {
  const [active, switchActive] = useState({
    Player: true,
    Computer: false,
  });

  const setDefaultActive = () => {
    switchActive(() => {
      return {
        Player: false,
        Computer: true,
      }
    });
  }

  const toggleActive = () => {
    switchActive(prevState => {
      return {
        Player: !prevState.Player,
        Computer: !prevState.Computer,
      }
    });
  }

  return (
    <GameContext.Provider value={{...active, toggleActive: toggleActive, defaultActive: setDefaultActive}}>
      {props.children}
    </GameContext.Provider>
  );
}

export default GameContextProvider;