import React from 'react';

export default function GuessForm(props) {
  return (
    <form className="guess-form" onSubmit={ e => {
                e.preventDefault();
                props.onSubmit(e.target.value)
                }}>
      <input type="number" className="guess-input" placeholder="enter your guess"/>
      <button className="guess-button">Guess</button>
    </form>
  );
}