import React, { createContext, Component } from 'react';

export const ActivePlayerContext = createContext();

class ActiveContextProvider extends Component {
  state = {
    Player: true,
    Computer: false,
  }

  toggleActivePlayer = () => {
    this.setState(prevState => {
      return {
      Player: !prevState.Player,
      Computer: !prevState.Computer,
      }
    });
    console.log(this.state);
  }

  render() {
    return (
      <ActivePlayerContext.Provider value={{...this.state, toggleActive: this.toggleActivePlayer}}>
        {this.props.children}
      </ActivePlayerContext.Provider>
    );
  }
}

export default ActiveContextProvider;