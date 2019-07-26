import React from 'react';
import kick_api from '../apiService';
import { Link } from "react-router-dom";

export class List extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        kickstarters: []
      }

      kick_api.list().then((res) => {
        this.setState({kickstarters: res.data})
      })
    }

    render() {
      return (
        <div>
          { this.state.kickstarters.map( (item, i) => {
            return <Link key={`link_${i}`} to={`/detail/${item.id}`} ><div key={`div_${i}`}>{item.blurb}</div></Link>
          })}
        </div>
      );
    }
  }

export default List;
