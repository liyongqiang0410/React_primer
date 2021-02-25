import React, { Component } from "react";
import { Button } from "antd";
import store from "@/utils/store/store";

class Index extends Component {
  render() {
    return (
      <>
        <h1>Redux</h1>
        <Button onClick={() => store.dispatch({ type: "increment" })}> + </Button>
        <span id="count"></span>
        <Button onClick={() => store.dispatch({ type: "decrement" })}> - </Button>
      </>
    );
  }
  componentDidMount() {
    store.dispatch();
  }
}

export default Index;
