import React from 'react';
import moment from 'moment';

const DatePicker = ({ match }) => {
  console.log(match.params.date);
  const today = moment().format('YYYY-MM-DD');
  const minDate = moment('1995-06-16').format('YYYY-MM-DD');

  return (
    <div>
      <label htmlFor="date">Date:</label>
      <input type="date" id="date" value={today} min={minDate} max={today} />
    </div>
  );
};

export default DatePicker;
