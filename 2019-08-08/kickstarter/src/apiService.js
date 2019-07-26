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

    // Payload should be a hash accepted parameters are:     
        // backers_count = models.IntegerField()
        // blurb = models.CharField(max_length = 135)
        // category = models.TextField()
        // pledged = models.FloatField()
        // created = models.DateTimeField()
        // creator = models.TextField()
        // deadline = models.DateTimeField()
        // goal = models.FloatField()
        // kickstarter_site_id = models.IntegerField()
        // location = models.TextField()
        // name = models.CharField(max_length = 60)
        // state = models.CharField(max_length = 20)
        // urls = models.TextField()
    create = (payload) => {
        return axios.post(`${this.API_URL}/api/`, payload)
    }

    update = (payload, id) => {
        return axios.put(`${this.API_URL}/api/${id}/`, payload)
    }

}

const kick_api = new KickApi()

export default kick_api;