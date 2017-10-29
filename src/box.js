import React, { Component } from 'react';
import './box.css';
import GuessForm from './guess-form';
import Counter from './counter';
import GuessedNumber from './guessed-number';

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetNumber: '10',
      attemptedGuesses: [],
      temperature: 'cold'
    }
  }

  guess(guessedNumber) {
    let temperature;
    if (guessedNumber !== this.state.targetNumber) {
      temperature = 'cold';
    } 

    else if (guessedNumber == this.state.targetNumber) {
      temperature = 'hot';
    }

    this.setState({temperature, attemptedGuesses: [...this.state.attemptedGuesses, guessedNumber]});
  }

  render() {
    const guesses = this.state.attemptedGuesses.map((guess, index) => 
      <GuessedNumber key={index} number={guess} /> 
    );

    return (
      <div className="box">
        <header>
          <div>{this.state.temperature}</div>
        </header>
        <div className="guess-frame">
          <GuessForm onGuess={(guessedNumber) => this.guess(guessedNumber)} />
          <Counter count={this.state.attemptedGuesses.length}/>
        </div>
        <div className="list">
          {guesses}
        </div>
      </div>
    );
  }
}