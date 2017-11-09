import { CREATE_NEW_GAME, createNewGame, GUESS, guess, TOGGLE_INFO_MODAL, toggleInfoModal } from './index';

describe('createNewGame', () => {
  it('should return the action', () => {
    const action = createNewGame();
    expect(action.type).toEqual(CREATE_NEW_GAME);
    expect(action.correctAnswer).not.toBe(null);
  });
});

describe('guess', () => {
  it('should return the action', () => {
    const value = '5';
    const action = guess(value);
    expect(action.type).toEqual(GUESS);
    expect(action.number).toEqual(value);
  });
});

describe('toggleInfoModal', () => {
  it('should return the action', () => {
    const action = toggleInfoModal();
    expect(action.type).toEqual(TOGGLE_INFO_MODAL);
  });
});