import React from 'react';

import { Route } from 'react-router-dom';

import { today } from 'utilities/utilities';
import Apods from 'components/Apods/Apods';
import Apod from 'components/Apod/Apod';
import DatePicker from 'components/DatePicker/DatePicker';

const App = ({ location, history }) => {
  if (location.pathname === '/') history.push(`/apods/${today}`);

  return (
    <React.Fragment>
      <Route path={'/apods'} exact component={Apods} />
      <Route path={'/apods/:date'} component={DatePicker} />
      <Route path={'/apods/:date'} component={Apod} />
    </React.Fragment>
  );
};
export default App;
