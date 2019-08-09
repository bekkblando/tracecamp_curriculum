const axios = require("axios");

const API_URL = "http://127.0.0.1:8000/kickstarterdata";
const config = {};

function getKick(id) {
  return axios.get(`${API_URL}/${id}/`, config);
}

function listKick() {
  return axios.get(`${API_URL}/`, config);
}

function createKick(payload) {
  return axios.post(`${API_URL}/`, payload);
}

function updateKick(payload, id) {
  return axios.put(`${API_URL}/${id}/`, payload);
}

function deleteKick(id) {
  return axios.delete(`${API_URL}/${id}`, config);
}

export { getKick, listKick, createKick, updateKick, deleteKick };
