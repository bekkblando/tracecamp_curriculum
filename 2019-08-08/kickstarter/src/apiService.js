const axios = require('axios');

class KickApi {

    API_URL = 'http://localhost:8000'
    config = {
    };

    get = (id) => {
        return axios.get(`${this.API_URL}/api/${id}/`, this.config)
    }

    list = () => {
        return axios.get(`${this.API_URL}/api/`, this.config)        
    }

}

const kick_api = new KickApi()

export default kick_api;