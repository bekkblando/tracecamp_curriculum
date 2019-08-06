import React from 'react';
import { Link } from 'react-router-dom';
import useNasa from 'hooks/useNasa/useNasa';

const style = {
  width: '100%',
  maxWidth: '500px',
};
const linkStyle = {
  display: 'block',
};

const ApodThumbnail = ({ date, page = 0 }) => {
  const { data, loading, error, media } = useNasa(date);

  if (loading) {
    return <div>Loading…</div>;
  }
  if (error) {
    return <div>Error!</div>;
  }

  return (
    <div style={style}>
      <Link
        style={linkStyle}
        key={data.date}
        to={{
          pathname: `/apods/${data.date}`,
          state: {
            page,
          },
        }}
      >
        {media.isYoutube ? (
          <img
            style={style}
            src={`http://i3.ytimg.com/vi/${media.youtubeId}/hqdefault.jpg`}
            alt={data.explanation}
            id={data.date}
          />
        ) : null}
        {media.isImage ? (
          <img
            src={data.url}
            alt={data.explanation}
            style={style}
            id={data.date}
          />
        ) : null}
      </Link>
    </div>
  );
};
export default ApodThumbnail;
