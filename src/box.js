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
      attemptedGuesses: 0
    }
  }

  render() {
    return (
      <div className="box">
        <header>
          Status Component: Hot or Cold?
        </header>
        <div>
          <GuessForm />
          <Counter />
        </div>
        <div className="list">
          <GuessedNumber number={1} /><GuessedNumber number={2} />
        </div>
      </div>
    );
  }
}