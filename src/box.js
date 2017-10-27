import React from 'react';
import './box.css';

export default function Box(props) {
  return (
    <div className="Box">
      <header>
        Status Component: Hot or Cold?
      </header>
      <div>
        Guess Component
        | Field |
        | button|
        |counter|
      </div>
      <div>
        Counter Component
      </div>
    </div>
  );
}