import React, { createContext, Component, useState } from 'react';

export const ActivePlayerContext = createContext();

const ActiveContextProvider = props => {
  const [active, switchActive] = useState({
    Player: true,
    Computer: false,
  });

  const toggleActive = () => {
    switchActive({
      Player: !active.Player,
      Computer: !active.Computer,
    });
  }

  return (
    <ActivePlayerContext.Provider value={{...active, toggleActive: toggleActive}}>
      {props.children}
    </ActivePlayerContext.Provider>
  );
}

export default ActiveContextProvider;