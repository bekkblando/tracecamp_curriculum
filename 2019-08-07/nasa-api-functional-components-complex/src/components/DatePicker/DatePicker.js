import React from 'react';

import { today } from 'utilities/utilities';

const DatePicker = ({ location, match, history }) => {
  const date = location.hash.substring(1) || match.params.date;

  const setDate = e => {
    history.push(`/apods/${e.target.value}`);
  };

  return (
    <React.Fragment>
      <input
        type="date"
        max={today}
        min={'1995-06-16'}
        value={date}
        onChange={setDate}
      />
    </React.Fragment>
  );
};
export default DatePicker;
