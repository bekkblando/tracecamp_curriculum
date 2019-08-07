import React from 'react';
import axios from 'axios';

const API_KEY = 'GDo3b5eaKrQv9vrlXeeOlRDPjNK1k8a4Vg6f0aoU';

const useNasa = date => {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const getData = async date => {
      try {
        setError(false);
        setLoading(true);
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`,
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    };
    getData(date);
  }, [date]);

  return {
    data,
    loading,
    error,
  };
};

export default useNasa;
