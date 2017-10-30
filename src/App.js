import React, { Component } from 'react';
import './App.css';
import Box from './box';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header> 
          <nav> What? | New Game </nav>
          <h1>HOT-OR-COLD </h1>
        </header>
        <p className="App-intro">
          This is the big screen on the back of the game
        </p>
        <Box />
      </div>
    );
  }
}

export default App;
