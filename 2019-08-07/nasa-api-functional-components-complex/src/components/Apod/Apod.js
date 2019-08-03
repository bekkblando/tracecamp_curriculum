import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import useNasa from 'hooks/useNasa/useNasa';
import { today, getWeekDifference } from 'utilities/utilities';

const style = {
  width: '500px',
  maxWidth: '100%',
};

const Apod = ({ location, match, formattedDate }) => {
  // set date based on priority
  const propsDate = formattedDate || null;
  const matchDate = match ? match.params.date : null;
  const date = propsDate || matchDate || today;

  const { loading, error, data: datum } = useNasa(date);

  const page = location.state ? location.state.page : getWeekDifference(date);

  let content;
  if (datum) {
    const isYoutube = new URL(datum.url).hostname === 'www.youtube.com';
    const isImage = !isYoutube && true;

    content = (
      <React.Fragment>
        <Link
          to={{
            pathname: `/apods`,
            hash: `#${date}`,
            state: {
              page,
            },
          }}
        >
          Back
        </Link>
        <h1>
          <em>{datum.title}</em>
        </h1>
        {isYoutube ? (
          <iframe
            width="100%"
            height="315"
            src={datum.url}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={datum.title}
          />
        ) : null}
        {isImage ? (
          <img src={datum.url} alt={datum.explanation} style={style} />
        ) : null}
        <p style={style}>{datum.explanation}</p>
      </React.Fragment>
    );
  }
  if (loading) content = 'Loading…';
  if (error) content = 'Error!';

  return <div style={style}>{content}</div>;
};
export default Apod;
