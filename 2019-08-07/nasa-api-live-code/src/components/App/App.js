import React from 'react';
import { Route } from 'react-router-dom';
import Apod from 'components/Apod/Apod';
import DatePicker from 'components/DatePicker/DatePicker';
import Apods from 'components/Apods/Apods';

const App = () => {
  return (
    <div>
      <Route path="/apods" exact component={Apods} />
      <Route path="/apods/:date" component={DatePicker} />
      <Route path="/apods/:date" component={Apod} />
    </div>
  );
};

export default App;
