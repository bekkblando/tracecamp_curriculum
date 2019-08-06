import React from 'react';
import axios from 'axios';
import localforage from 'localforage';

const API_KEY = 'DEMO_KEY';
// https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${formattedDate}

const getYoutubeId = url => {
  url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  return url[2] !== undefined ? url[2].split(/[^0-9a-z_-]/i)[0] : url[0];
};

const useNasa = date => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const [isImage, setIsImage] = React.useState(null);
  const [isYoutube, setIsYoutube] = React.useState(null);
  const [youtubeId, setYoutubeId] = React.useState(null);

  React.useEffect(() => {
    if (data) {
      const isYoutube = new URL(data.url).hostname === 'www.youtube.com';
      let youtubeId = isYoutube ? getYoutubeId(data.url) : null;
      const isImage = !isYoutube && true;

      setIsYoutube(isYoutube);
      setYoutubeId(youtubeId);
      setIsImage(isImage);
    }
  }, [data]);

  React.useEffect(() => {
    const getNasa = async date => {
      try {
        setLoading(true);
        setError(false);
        let data;
        data = await localforage.getItem(date);

        // log if cached or fetched
        if (data) console.log('cache');
        if (!data) console.log('fetch');

        if (!data) {
          const response = await axios.get(
            `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`,
          );
          data = response.data;
        }
        data.date = date;

        setData(data);
        setLoading(false);
        setError(false);
        await localforage.setItem(date, data);
      } catch (error) {
        setData(null);
        setError(true);
        setLoading(false);
      }
    };
    getNasa(date);
  }, [date]);

  return {
    data,
    loading,
    error,
    media: {
      isYoutube,
      youtubeId,
      isImage,
    },
  };
};

export default useNasa;
