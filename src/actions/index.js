export const CREATE_NEW_GAME = 'CREATE_NEW_GAME';
export const createNewGame = () => ({
    type: CREATE_NEW_GAME,
    correctAnswer: Math.floor(Math.random() * 100) + 1
});

export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = guesses => ({
    type: ADD_GUESS,
    guesses
});

export const SET_FEEDBACK = 'SET_FEEDBACK';
export const setFeedback = feedback => ({
  type: SET_FEEDBACK,
  feedback
});

export const SET_CORRECT_ANSWER = 'SET_CORRECT_ANSWER';
export const setCorrectAnswer = correctAnswer => ({
  type: SET_CORRECT_ANSWER,
  correctAnswer
});

export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
export const toggleInfoModal = () => ({
  type: TOGGLE_INFO_MODAL
});