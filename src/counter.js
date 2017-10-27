import React from 'react';

export default function Counter(props) {
  return(
    <label className="counter">Guess #{props.count}</label>
  );
}