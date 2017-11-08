import React, { Component } from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import { connect } from 'react-redux';
import { guess } from './actions';

export class App extends Component {
  newGame() {
    this.setState({ 
      guesses: [],
      feedback: 'make your guess',
      correctAnswer: Math.floor(Math.random() * 100) + 1 }
    );
  }

  // guess(number) {
  //   number = parseInt(number, 10);
  //   if (isNaN(number)) {
  //     this.setState({feedback: 'please type a valid number'});
  //     return;
  //   }

  //   const difference = Math.abs(number - this.props.correctAnswer);

  //   let feedback;
  //   if (difference >= 50) {
  //       feedback = 'You\'re Ice Cold...';
  //   }
  //   else if (difference >= 30) {
  //       feedback = 'You\'re Cold...';
  //   }
  //   else if (difference >= 10) {
  //       feedback = 'You\'re Warm';
  //   }
  //   else if (difference >= 1) {
  //       feedback = 'You\'re Hot!';
  //   }
  //   else {
  //       feedback = 'You got it!';
  //   }

  //   this.setState({
  //       feedback, 
  //       guesses: [...this.state.guesses, number]
  //   });
  // }

  render() {
    return (
      <div>
        <Header onNewGame={() => this.newGame()} />
        <GuessSection feedback={this.props.feedback}
              onGuess={(number) => this.props.dispatch(guess(number))} />
        <GuessCount count={this.props.guesses.length} />
        <GuessList guesses={this.props.guesses} />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  guesses: state.guesses,
  feedback: state.feedback,
  correctAnswer: state.correctAnswer
});

export default connect(mapStateToProps)(App);