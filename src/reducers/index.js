import { 
  GUESS, 
  CREATE_NEW_GAME, 
  TOGGLE_INFO_MODAL } from '../actions';

const initialState = {
  guesses: [],
  feedback: 'make your guess',
  correctAnswer: Math.floor(Math.random() * 100) + 1,
  showInfoModal: false
};

export const guessReducer = (state=initialState, action) => {
  const newState = {};
  if(action.type === GUESS) {
    let number = parseInt(action.number, 10);
    if (isNaN(number)) {
      newState.feedback = 'please type a valid number';
      return Object.assign({}, state, newState);
    } else {
      const difference = Math.abs(action.number - state.correctAnswer);

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

      newState.guesses = [...state.guesses, number];
      newState.feedback = feedback;
      return Object.assign({}, state, newState);
    }
  }

  else if(action.type === CREATE_NEW_GAME) {
    return Object.assign({}, state, {
        guesses: initialState.guesses,
        feedback: initialState.feedback,
        correctAnswer: action.correctAnswer,
        showInfoModal: initialState.showInfoModal
      });
  }

  else if(action.type === TOGGLE_INFO_MODAL) {
      return Object.assign({}, state, {showInfoModal: !state.showInfoModal});
  }

  return state;
}