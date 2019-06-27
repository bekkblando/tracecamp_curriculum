import React from 'react';

const DisplayCounter = ({ counter, onReset }) => (
  <h1 onClick={onReset}>{counter}</h1>
);
export default DisplayCounter;
