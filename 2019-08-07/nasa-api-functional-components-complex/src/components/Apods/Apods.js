import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import localforage from 'localforage';
import { Route } from 'react-router-dom';
import DatePicker from 'components/DatePicker/DatePicker';
import { getWeek, getWeekDifference } from 'utilities/utilities';

const getYoutubeId = url => {
  url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
};

const style = {
  width: '100%',
  maxWidth: '500px',
};
const linkStyle = {
  display: 'block',
};

const API_KEY = 'gck2cYzM4JYOEitHlSv452ccH7npEdM6b9eGt99y' || 'DEMO_KEY';
// https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${formattedDate}

const Apods = ({ location, history }) => {
  // ensure page number
  let defaultPage = 0;
  if (location.state) defaultPage = Number(location.state.page);
  if (location.hash)
    defaultPage = getWeekDifference(
      moment(location.hash.substring(1)).format('YYYY-MM-DD'),
    );

  const [page, setPage] = React.useState(defaultPage);
  // code to get date
  // moment()
  //   .subtract(Math.abs(page), 'week')
  //   .format('YYYY-MM-DD'),

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const getResponses = async page => {
      const week = getWeek(page);
      let responses;
      try {
        responses = await Promise.all(
          week.map(async date => {
            let response;
            response = await localforage.getItem(date);
            if (response) console.log('cache');
            if (!response) console.log('fetch');
            if (!response) {
              response = await axios.get(
                `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`,
              );
              response = response.data;
            }
            response.date = date;
            await localforage.setItem(date, response);
            return response;
          }),
        );
      } catch (error) {
        setError(true);
        setLoading(false);
      }
      setData(responses);
      setLoading(false);
    };
    getResponses(page);
  }, [page]);

  if (loading) {
    return 'Loading…';
  }
  if (error) {
    return 'Error!';
  }

  const clearCache = () =>
    localforage.clear().then(() => console.log('DATABASE CLEARED'));

  return (
    <div style={style}>
      <Route path={'/apods'} component={DatePicker} />

      <br />

      {page === 0 ? null : (
        <button onClick={() => setPage(page => (page > 0 ? page - 1 : 0))}>
          Previous
        </button>
      )}
      <input
        type="number"
        min={0}
        max={getWeekDifference('1995-06-16')}
        step={1}
        onChange={e => setPage(Number(e.target.value))}
        value={page}
      />
      <button onClick={() => setPage(page => page + 1)}>Next</button>
      <button onClick={clearCache}>Clear Cache</button>

      <br />

      {data.map(datum => {
        const isYoutube = new URL(datum.url).hostname === 'www.youtube.com';
        let youtubeId;
        if (isYoutube) youtubeId = getYoutubeId(datum.url);

        const isImage = !isYoutube && true;

        return (
          <Link
            style={linkStyle}
            key={datum.date}
            to={{
              pathname: `/apods/${datum.date}`,
              state: {
                page,
              },
            }}
          >
            {isYoutube ? (
              <img
                style={style}
                src={`http://i3.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
                alt=""
                id={datum.date}
              />
            ) : null}
            {isImage ? (
              <img
                src={datum.url}
                alt={datum.explanation}
                style={style}
                id={datum.date}
              />
            ) : null}
          </Link>
        );
      })}

      <br />

      <button onClick={() => setPage(page => (page > 0 ? page - 1 : 0))}>
        Previous
      </button>
      {page}
      <button onClick={() => setPage(page => page + 1)}>Next</button>
    </div>
  );
};

export default Apods;
