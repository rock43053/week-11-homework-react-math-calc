import React, { Component } from "react";
import "./App.css";

// 1- we will need to create our `Result` component

export default class Result extends Component {
  render() {
    let { result } = this.props;
    return (
      <div>
        <p>{result}</p>
      </div>
    );
  }
}
