import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import App from 'components/App/App';

const root = (
  <Router>
    <Route component={App} />
  </Router>
);

ReactDOM.render(root, document.getElementById('root'));
