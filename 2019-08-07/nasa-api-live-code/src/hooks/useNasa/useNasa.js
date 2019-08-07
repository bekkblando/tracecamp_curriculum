import React from 'react';
import axios from 'axios';

const API_KEY = 'GDo3b5eaKrQv9vrlXeeOlRDPjNK1k8a4Vg6f0aoU';

const useNasa = date => {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setError(false);
    setLoading(true);
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`,
      )
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
        setError(true);
      });
  }, [date]);

  return {
    data,
    loading,
    error,
  };
};

export default useNasa;
