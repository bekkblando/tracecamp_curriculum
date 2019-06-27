import React from 'react';

import { today } from 'utilities/utilities';

const DatePicker = ({ match, history }) => {
  const date = match.params.date;

  const setDate = e => {
    history.push(`/apod/${e.target.value}`);
  };

  return (
    <React.Fragment>
      <input
        type="date"
        max={today}
        value={date}
        onChange={setDate}
      />
    </React.Fragment>
  );
};
export default DatePicker;
