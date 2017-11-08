import React, { Component } from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import { connect } from 'react-redux';
import { guess } from './actions';

export class App extends Component {
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
        <Header />
        <GuessSection />
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