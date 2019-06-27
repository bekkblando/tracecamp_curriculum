import React from 'react';

const DisplayCount = ({ counter, onReset }) => (
  <h1 onClick={onReset}>{counter}</h1>
);
export default DisplayCount;
