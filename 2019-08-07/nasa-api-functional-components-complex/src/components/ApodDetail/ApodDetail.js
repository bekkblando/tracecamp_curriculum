import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import useNasa from 'hooks/useNasa/useNasa';
import { today, getWeekDifference } from 'utilities/utilities';

const style = {
  width: '500px',
  maxWidth: '100%',
};

const ApodDetail = ({ location, match, date: propsDate }) => {
  // set date based on priority
  const matchDate = match ? match.params.date : null;
  const date = propsDate || matchDate || today;

  const { loading, error, data, media } = useNasa(date);

  const page = location.state ? location.state.page : getWeekDifference(date);

  let content;
  if (data) {
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
          <em>{data.title}</em>
        </h1>
        {media.isYoutube ? (
          <iframe
            width="100%"
            height="315"
            src={data.url}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={data.title}
          />
        ) : null}
        {media.isImage ? (
          <img src={data.url} alt={data.explanation} style={style} />
        ) : null}
        <p style={style}>{data.explanation}</p>
      </React.Fragment>
    );
  }
  if (loading) content = 'Loading…';
  if (error) content = 'Error!';

  return <div style={style}>{content}</div>;
};
export default ApodDetail;
