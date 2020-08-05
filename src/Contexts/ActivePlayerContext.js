import React, { createContext, Component } from 'react';

export const ActivePlayerContext = createContext();

class ActiveContextProvider extends Component {
  state = {
    player: true,
    computer: false,
  }

  toggleActivePlayer = () => {
    this.setState(prevState => {
      return {
      player: !prevState.player,
      computer: !prevState.computer,
      }
    });
  }

  render() {
    return (
      <ActivePlayerContext.Provider value={{...this.state}}>
        {this.props.children}
      </ActivePlayerContext.Provider>
    );
  }
}

export default ActiveContextProvider;