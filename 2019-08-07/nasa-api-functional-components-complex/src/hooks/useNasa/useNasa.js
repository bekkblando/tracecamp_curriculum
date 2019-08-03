// import React from 'react';
import useAxios from 'hooks/useAxios/useAxios';

const API_KEY = 'bqxOxO7bzOtddyYcvRCoXJbKRDqblfze0uPIzxbi' || 'DEMO_KEY';
// https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${formattedDate}
const useNasa = formattedDate =>
  useAxios(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${formattedDate}`,
  );

export default useNasa;
