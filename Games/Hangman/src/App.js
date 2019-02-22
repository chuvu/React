import React, { Component } from 'react';
import './App.css';
import Guess from './components/guess'
import Hangman from './components/hangman.js'
import Pineapple from './images/pine.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" src = {Pineapple} alt="pineapple" height="100" width="80"/>
          <h1 className="App-title"> HANGMAN </h1>
        </header>
          <Hangman />
        <br /><br /><br /><br />
      </div>
    );
  }
}

export default App;
