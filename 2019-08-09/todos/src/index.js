import React from 'react';
import ReactDOM from 'react-dom';
import { TodosProvider } from 'context/TodosContext/TodosContext';
import App from 'components/App/App';

const root = (
  <TodosProvider>
    <App />
  </TodosProvider>
);

ReactDOM.render(root, document.getElementById('root'));
