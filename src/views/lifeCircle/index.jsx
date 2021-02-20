import React, { Component } from "react";
import OldLiftCircle from "./components/oldLiftCircle";
import NewLiftCircle from "./components/newLiftCircle";
class index extends Component {
  state = {
    isUpdate: "false",
    time: new Date().getTime(),
  };
  componentDidMount() {
    setTimeout(() => {
      // 父组件 render 子必定 render
      this.setState({
        isUpdate: "true",
      });
    }, 3000);
  }
  render() {
    return (
      <>
        <div style={{ width: "50%", display: "inline-block" }}>
          <OldLiftCircle isUpdate={this.state.isUpdate}></OldLiftCircle>
        </div>
        <div style={{ width: "50%", display: "inline-block", verticalAlign: "top" }}>
          <NewLiftCircle time={this.state.time}></NewLiftCircle>
        </div>
      </>
    );
  }
}

export default index;
