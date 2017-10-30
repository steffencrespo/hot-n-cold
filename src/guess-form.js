import React, { Component } from 'react';

import './guess-form.css'

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
        <form onSubmit={ e => this.onGuess(e) }>
          <label htmlFor='userGuess'>Enter your guess</label>
          <input type='text' name='userGuess' id='userGuess' className='text' placeholder={Math.round(Math.random() * 100)} required
            ref={ input => this.input = input} />
          <input type='submit' id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
      );
    }
}