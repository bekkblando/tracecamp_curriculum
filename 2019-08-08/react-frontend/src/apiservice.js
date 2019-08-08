const axios = require("axios");

const API_URL = "http://127.0.0.1:8000/kickstarterdata";
const config = {};

function getKick(id) {
  return axios.get(`${API_URL}/${id}`, config);
}

export { getKick };
