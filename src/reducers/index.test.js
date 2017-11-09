import { guess, GUESS } from '../actions/index';
import { guessReducer } from './index';

describe('guess', () => {
  it('should set users guessed number', () => {
    const action = guess(5);
    let state = {
      guesses: [],
      feedback: 'make your guess'
    };

    state = guessReducer(state, action);

    expect(state).toEqual({
      guesses: [5],
      feedback: 'You got it!'
    })

  });
});