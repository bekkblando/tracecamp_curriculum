import React from 'react';
import DisplayCount from 'components/DisplayCounter/DisplayCounter';

const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  const onIncrement = () => setCounter(counter + 1);
  const onDecrement = () => setCounter(counter - 1);
  const onReset = () => setCounter(0);
  return (
    <React.Fragment>
      <DisplayCount counter={counter} onReset={onReset} />
      <button type="button" onClick={onIncrement}>
        Increment
      </button>
      <button type="button" onClick={onDecrement}>
        Decrement
      </button>
    </React.Fragment>
  );
};
export default Counter;
