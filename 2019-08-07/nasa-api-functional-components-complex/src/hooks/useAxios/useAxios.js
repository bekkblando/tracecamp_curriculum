import React from 'react';
import axios from 'axios';

const useAxios = url => {
  if (!url) throw new Error('[useAxios]: url is not defined.');

  const [loading, setLoading] = React.useState();
  const [error, setError] = React.useState();
  const [data, setData] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return {
    loading,
    error,
    data,
  };
};

export default useAxios;
