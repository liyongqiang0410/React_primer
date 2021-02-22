import React, { Component, Fragment } from "react";

class ContextCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "通信组件 Context",
      subTitle: "Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法",
    };
  }
  render() {
    return (
      <Fragment>
        <h1>{this.state.title}</h1>
        <h3>{this.state.subTitle}</h3>
      </Fragment>
    );
  }
}

export default ContextCom;
