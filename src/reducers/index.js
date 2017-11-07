import { ADD_GUESS, SET_FEEDBACK, SET_CORRECT_ANSWER } from '../actions';

const initialState = {
  guesses: [],
  feedback: 'make your guess',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

export const guessReducer = (state=initialState, action) => {
  if(action.type === ADD_GUESS) {
    return;
  }
  else if(action.type === SET_FEEDBACK) {
    return;
  }
  else if(action.type === SET_CORRECT_ANSWER) {
    return;
  }
  return state;
}