import React from 'react';
import './App.css';

function App() {
  const grid = [];
  for (let i = 0; i < 100; i++) {
    grid.push(<div>{i}</div>);
  }

  return (
    <div className="App">
      <div className="grid">
        {grid}
      </div>

    </div>
  );
}

export default App;
