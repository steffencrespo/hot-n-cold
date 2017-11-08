import { ADD_GUESS, SET_FEEDBACK, SET_CORRECT_ANSWER, CREATE_NEW_GAME, TOGGLE_INFO_MODAL } from '../actions';

const initialState = {
  guesses: [],
  feedback: 'make your guess',
  correctAnswer: Math.floor(Math.random() * 100) + 1,
  showInfoModal: false
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

  else if(action.type === CREATE_NEW_GAME) {
    return Object.assign({}, state, {correctAnswer: action.correctAnswer});
  }

  else if(action.type === TOGGLE_INFO_MODAL) {
      return Object.assign({}, state, {showInfoModal: !state.showInfoModal});
  }

  return state;
}