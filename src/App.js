import React, { Component } from 'react';
import './App.css';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      feedback: 'make your guess',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    };
  }

  newGame() {
    this.setState({ 
      guesses: [],
      feedback: 'make your guess',
      correctAnswer: Math.floor(Math.random() * 100) + 1 }
    );
  }

  guess(number) {
    number = parseInt(number, 10);
    if (isNaN(number)) {
      this.setState({feedback: 'please type a valid number'});
      return;
    }

    const difference = Math.abs(number - this.state.correctAnswer);

    let feedback;
    if (difference >= 50) {
        feedback = 'You\'re Ice Cold...';
    }
    else if (difference >= 30) {
        feedback = 'You\'re Cold...';
    }
    else if (difference >= 10) {
        feedback = 'You\'re Warm';
    }
    else if (difference >= 1) {
        feedback = 'You\'re Hot!';
    }
    else {
        feedback = 'You got it!';
    }

    this.setState({
        feedback, 
        guesses: [...this.state.guesses, number]
    });
  }

  render() {
    return (
      <div className="App">
        <Header onNewGame={() => this.newGame()} />
        <GuessSection feedback={this.state.feedback}
              onGuess={(number) => this.guess(number)} />
        <GuessCount count={this.state.guesses.length} />
        <GuessList guesses={this.state.guesses} />
      </div>
    );
  }
}
