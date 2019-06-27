import React from 'react';

import { Route } from 'react-router-dom';

import { today } from 'utilities/utilities';
import DatePicker from 'components/DatePicker/DatePicker';
import Apod from 'components/Apod/Apod';

const App = ({ location, history }) => {
  const path = `/apod/${today}`;
  if (location.pathname === '/') history.push(path);

  return (
    <React.Fragment>
      <Route path={'/apod/:date'} component={DatePicker} />
      <Route path={'/apod/:date'} component={Apod} />
    </React.Fragment>
  );
};
export default App;
