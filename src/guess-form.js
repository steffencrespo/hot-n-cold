import React, { Component } from 'react';

export default class GuessForm extends Component {
  onGuess(e) {
    e.preventDefault();
    
    if (this.props.onGuess) {
        const value = this.input.value;
        this.props.onGuess(value);
    }
    this.input.value = '';
  }

  render() {
      return (
        <form className="guess-form" onGuess={ e => this.onGuess(e) }>
          <input type="number" className="guess-input" placeholder="enter your guess"
            ref={ input => this.input = input} />
          <button className="guess-button">Guess</button>
        </form>
      );
    }
}