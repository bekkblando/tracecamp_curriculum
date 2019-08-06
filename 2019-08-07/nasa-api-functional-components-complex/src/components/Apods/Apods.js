import React from 'react';
import moment from 'moment';
import localforage from 'localforage';
import { Route } from 'react-router-dom';
import DatePicker from 'components/DatePicker/DatePicker';
import ApodThumbnail from 'components/ApodThumbnail/ApodThumbnail';

import { getWeek, getWeekDifference } from 'utilities/utilities';

const Apods = ({ location, history }) => {
  // ensure page number
  let defaultPage = 0;
  if (location.state) defaultPage = Number(location.state.page);
  if (location.hash)
    defaultPage = getWeekDifference(
      moment(location.hash.substring(1)).format('YYYY-MM-DD'),
    );

  const [page, setPage] = React.useState(defaultPage);

  const [week, setWeek] = React.useState([]);
  React.useEffect(() => {
    setWeek(getWeek(page));
  }, [page]);

  // code to get date
  // moment()
  //   .subtract(Math.abs(page), 'week')
  //   .format('YYYY-MM-DD'),

  const clearCache = () =>
    localforage.clear().then(() => console.log('DATABASE CLEARED'));

  const increment = () => {
    setPage(page => page + 1);
  };

  const decrement = () => {
    setPage(page => (page > 0 ? page - 1 : 0));
  };

  return (
    <React.Fragment>
      <Route path={'/apods'} component={DatePicker} />

      <br />

      <button onClick={decrement}>Previous</button>
      <input
        type="number"
        min={0}
        max={getWeekDifference('1995-06-16')}
        step={1}
        onChange={e => setPage(Number(e.target.value))}
        value={page}
      />
      <button onClick={increment}>Next</button>
      <button onClick={clearCache}>Clear Cache</button>

      <br />

      {week.map(date => (
        <ApodThumbnail key={date} date={date} page={page} />
      ))}

      <br />

      <button onClick={decrement}>Previous</button>
      {page}
      <button onClick={increment}>Next</button>
    </React.Fragment>
  );
};

export default Apods;
