import React from 'react';
import moment from 'moment';

const Apods = ({ location, history }) => {
  const today = moment().format('YYYY-MM-DD');
  if (location.pathname === '/apods' || location.pathname === '/apods/') {
    history.replace(`/apods/${today}`);
  }
  return <div>Apods</div>;
};

export default Apods;
