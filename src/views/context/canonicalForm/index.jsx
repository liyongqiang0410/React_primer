import React, { Component } from "react";
import { ToolProvider, CContext, Consumer } from "./ContextTool";

class Index extends Component {
  static contextType = CContext;
  render() {
    console.log(this);
    return (
      <ToolProvider>
        <h1>context 范式</h1>
        <Consumer>
          {(value) => {
            return (
              <>
                <p>{value.count}</p>
              </>
            );
          }}
        </Consumer>
      </ToolProvider>
    );
  }
}

export default Index;
