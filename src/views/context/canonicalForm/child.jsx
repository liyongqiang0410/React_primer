import React, { Component } from "react";
import { Consumer } from "./ContextTool";
class child extends Component {
  render() {
    return (
      <>
        <Consumer>
          {(value) => {
            return <div>{value.count}</div>;
          }}
        </Consumer>
      </>
    );
  }
}

export default child;
