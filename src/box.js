import React from 'react';
import './box.css';
import GuessForm from './guess-form';
import Counter from './counter';

export default function Box(props) {
  return (
    <div className="box">
      <header>
        Status Component: Hot or Cold?
      </header>
      <div>
        <GuessForm />
        <Counter />
      </div>
      <div>
        Counter Component
      </div>
    </div>
  );
}