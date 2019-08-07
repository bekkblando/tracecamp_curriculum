import React from 'react';
import useNasa from 'hooks/useNasa/useNasa';

const API_KEY = 'GDo3b5eaKrQv9vrlXeeOlRDPjNK1k8a4Vg6f0aoU';

const style = {
  maxWidth: '500px',
  width: '100%',
};

const Apod = ({ match }) => {
  const date = match.params.date;

  const { data, loading, error } = useNasa(date);

  if (loading) return <div>Loading…</div>;
  if (error) return <div>Error!</div>;

  console.log(data);

  return (
    <div style={style}>
      <h3>{data.title}</h3>
      <em>{data.copyright}</em>
      <br />
      <img style={style} src={data.url} alt={data.title} />
      <p>{data.explanation}</p>
    </div>
  );
};

export default Apod;
