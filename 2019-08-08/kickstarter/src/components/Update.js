import React from 'react';
import kick_api from '../apiService';
import Form from './Form'

export class Update extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      kickstarter: null
    }
  }

  componentDidMount () {
    const { id } = this.props.match.params
    
    kick_api.get(id).then((res) => {
      this.setState({kickstarter: res.data, loading: false})
    })
  }

    render() {
      if(this.state.loading){
        return (
          <div>Loading</div>
        );
      }else{
        return(
          <div>
            <Form form_data={this.state.kickstarter} id={this.state.kickstarter.id} />
          </div>
          );
      }
    }
  }

export default Update;
