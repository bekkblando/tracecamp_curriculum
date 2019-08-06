import moment from 'moment';

export const today = moment().format('YYYY-MM-DD');

export const getWeekMoments = (page = 0) => {
  if (typeof page !== 'number') {
    throw new Error('[getWeekMoments]: Page must be a number.');
  }

  const paginatedDay = moment().subtract(Math.abs(page), 'week');

  const weekStart = paginatedDay.clone().startOf('week');
  const weekEnd = paginatedDay.clone().endOf('week');

  let week = [];
  let day = weekStart;

  while (day <= weekEnd && day <= moment()) {
    week.push(day);
    day = day.clone().add(1, 'day');
  }

  return week;
};

export const getWeek = (page = 0) => {
  const weekMoments = getWeekMoments(page);
  const week = weekMoments.map(day => day.clone().format('YYYY-MM-DD'));
  return week;
};

export const getWeekDifference = date => {
  const days = moment().diff(moment(date).format('YYYY-MM-DD'), 'day');
  const weeks = moment().diff(moment(date).format('YYYY-MM-DD'), 'week');
  const remainder = days % 7;
  if (remainder) return weeks + 1;
  return weeks;
};
