import React, { Component } from 'react';
import './box.css';
import GuessForm from './guess-form';
import Counter from './counter';
import GuessedNumber from './guessed-number';

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetNumber: 0,
      attemptedGuesses: [],
      temperature: 'cold'
    }
  }

  guess(guessedNumber) {
    this.setState({attemptedGuesses: [guessedNumber, ...this.state.attemptedGuesses]});
  }

  render() {
    const guesses = this.state.attemptedGuesses.map((guess, index) => 
      <GuessedNumber key={index} number={guess} /> 
    );

    return (
      <div className="box">
        <header>
          {this.state.temperature}
        </header>
        <div>
          <GuessForm onSubmit={(guessedNumber) => this.guess(guessedNumber)} />
          <Counter count={this.state.attemptedGuesses.length}/>
        </div>
        <div className="list">
          {guesses}
        </div>
      </div>
    );
  }
}