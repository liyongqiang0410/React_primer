import React, { Component, createContext } from "react";

const CContext = createContext();
const { Provider, Consumer } = CContext;

class ToolProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment() {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount,
    });
  }
  decrement() {
    let newCount = this.state.count - 1;
    this.setState({
      count: newCount,
    });
  }
  render() {
    console.log(this);
    return (
      <Provider
        value={{
          count: this.state.count,
          increment: this.increment,
          decrement: this.decrement,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { CContext, Consumer, ToolProvider };
