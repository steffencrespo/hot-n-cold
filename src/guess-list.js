import React from 'react';

import './guess-list.css';

export default function GuessList(props) {
  const guesses = props.guesses.map((index, guess) => (
      <li key={index}>
        {guess}
      </li>
  ));

  return (
    <ul id='guess-list' className='guessBox clearfix'>
      {guesses}
    </ul>
  );
}