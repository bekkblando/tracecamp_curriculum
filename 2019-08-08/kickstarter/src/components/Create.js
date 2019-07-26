import React from 'react';
import kick_api from '../apiService';
import Form from './Form';

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
export class Create extends React.Component {

    render() {
      return (
        <div>
          <Form/>
        </div>
      );
    }
  }

export default Create;
