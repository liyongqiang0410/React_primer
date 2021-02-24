import React, { Component } from "react";
import hoc from "./hoc";

class Index extends Component {
  render() {
    return (
      <>
        <h1>HOC(higher-order components: {this.props.title})</h1>
      </>
    );
  }
  componentDidMount() {
    console.log(this);
  }
}

export default hoc(Index);
