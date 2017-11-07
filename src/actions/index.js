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