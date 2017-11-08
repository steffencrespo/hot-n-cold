export const CREATE_NEW_GAME = 'CREATE_NEW_GAME';
export const createNewGame = () => ({
    type: CREATE_NEW_GAME,
    correctAnswer: Math.floor(Math.random() * 100) + 1
});

export const GUESS = 'GUESS';
export const guess = number => ({
    type: GUESS,
    number
});

export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
export const toggleInfoModal = () => ({
  type: TOGGLE_INFO_MODAL
});