import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.addOne = this.addOne.bind(this);
  }

  // One way to bind a function to the class w/ bind in constructor
  addOne() {
    this.setState({
      count: this.state.count + 1
    });
  }

  // Second way where binding in constructor is not needed
  subOne = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.addOne}>Add 1</button>
        <button onClick={this.subOne}>Subtract 1</button>
      </div>
    );
  }
}

export default Counter;
