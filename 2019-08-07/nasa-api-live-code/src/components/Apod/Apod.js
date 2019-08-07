import React from 'react';

const API_KEY = 'GDo3b5eaKrQv9vrlXeeOlRDPjNK1k8a4Vg6f0aoU';

const Apod = ({ match }) => {
  const date = match.params.date;
  return <div>{date}</div>;
};

export default Apod;
