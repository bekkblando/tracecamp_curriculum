// This file is responsible for getting data from Nasa
import axios from 'axios';

// TODO This is exposed to the user
const API_KEY = "8ArebjIbRqBc8I9RWGGwjxGFXyyzsN7Ow1s7Q42o";

export const getAstroids = (start, end) => {
    return axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${start}&end_date=${end}&api_key=${API_KEY}`)
}


