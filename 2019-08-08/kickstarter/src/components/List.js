import React from 'react';
import kick_api from '../apiService';

export class List extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        kickstarters: []
      }

      kick_api.list().then((data) => {
        console.log(data)
      })
    }

    render() {
      return (
        <div>
          { this.state.kickstarters.map( (item, i) => {
            return <div key={i}>Here is the list</div>
          })}
        </div>
      );
    }
  }

export default List;
