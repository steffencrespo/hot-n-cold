const initialState = {
  guesses: [],
  feedback: 'make your guess',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

export const guessReducer = (state=initialState, action) => {
  
}