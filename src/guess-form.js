import React, { Component } from 'react';

export default class GuessForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInput: 0
    }
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(e.target.value)
  }

  render() {
      return (
        <form className="guess-form" onSubmit={ e => this.onSubmit(e) }>
          <input type="number" className="guess-input" placeholder="enter your guess"/>
          <button className="guess-button">Guess</button>
        </form>
      );
    }
}