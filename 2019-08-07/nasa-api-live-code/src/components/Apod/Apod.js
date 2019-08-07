import React from 'react';
import axios from 'axios';

const API_KEY = 'GDo3b5eaKrQv9vrlXeeOlRDPjNK1k8a4Vg6f0aoU';

const Apod = ({ match }) => {
  const date = match.params.date;
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`,
      )
      .then(response => {
        setData(response.data);
      });
  }, [date]);

  console.log(data);

  return <div>{date}</div>;
};

export default Apod;
