import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guess } from './actions';

import './guess-form.css'

export class GuessForm extends Component {
  onGuess(e) {
    e.preventDefault();
    this.props.dispatch(guess(this.input.value))
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

export default connect()(GuessForm);