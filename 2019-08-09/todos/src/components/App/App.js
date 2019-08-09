import React from 'react';
import TodosContext from 'context/TodosContext/TodosContext';

const App = () => {
  const todoContext = React.useContext(TodosContext);

  return (
    <React.Fragment>
      <pre>{JSON.stringify({}, null, 2)}</pre>
    </React.Fragment>
  );
};

export default App;
