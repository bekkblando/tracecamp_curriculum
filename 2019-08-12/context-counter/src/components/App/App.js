import React from 'react';
import CounterContext from 'context/CounterContext/CounterContext';

const App = () => {
  const { counter, increment, decrement } = React.useContext(CounterContext);

  return (
    <div>
      <button onClick={decrement}>Decrement</button>
      {counter}
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default App;
