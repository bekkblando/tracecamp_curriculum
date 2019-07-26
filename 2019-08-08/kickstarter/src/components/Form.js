import React from 'react';
import kick_api from '../apiService';


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
export class Form extends React.Component {


  constructor(props){
    super(props)
    if(this.props.form_data){
        this.state = this.props.form_data
    }else{
        this.state = {
            blurb: '',
            category: '',
            backers_count: 0,
            pledged: 0,
            creator: '',
            deadline: '',
            goal: 0.0,
            location: '',
            name: '',
            state: '',
            urls: ''
        }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSubmit(event){
    event.preventDefault()
    let payload = this.state
    let date = new Date(Date.parse(this.state.deadline))
    payload['deadline'] = date.toISOString()
    if(this.props.id){
        kick_api.update(this.state, this.props.id).then((res) => {
            console.log(res)
        })
    }else{
        kick_api.create(this.state).then((res) => {
            console.log(res)
        })
    }
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }


    render() {
      return (
        <div>
          <form>
            <input name = "blurb" id = "blurb" value={this.state.blurb} onChange={this.handleChange}/>
            <input name = "category" id = "category" value={this.state.category} onChange={this.handleChange}></input>
            <input type = "number" name = "backers_count" id = "backers_count" value={this.state.backers_count} onChange={this.handleChange}></input>
            <input type = "number" name = "pledged" id = "pledged" value={this.state.pledged} onChange={this.handleChange}></input>
            <input name = "creator" id = "creator" value={this.state.creator} onChange={this.handleChange}></input>
            <input type = "date" name = "deadline" id = "deadline" value={this.state.deadline} onChange={this.handleChange}></input>
            <input name = "goal" id = "goal" value={this.state.goal} onChange={this.handleChange}></input>
            <input name = "location" id = "location" value={this.state.location} onChange={this.handleChange}></input>
            <input name = "name" id = "name" value={this.state.name} onChange={this.handleChange}></input>
            <input name = "state" id = "state" value={this.state.state} onChange={this.handleChange}></input>
            <input name = "urls" id = "urls" value={this.state.urls} onChange={this.handleChange}></input>
            <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
          </form>
        </div>
      );
    }
  }

export default Form;
