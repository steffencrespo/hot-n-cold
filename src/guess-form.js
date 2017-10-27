import React from 'react';

export default function GuessForm(props) {
  return (
    <form className="guess-form">
      <input type="number" />
      <button>Guess</button>
    </form>
  );
}