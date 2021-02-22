import React, { PureComponent, Fragment } from "react";
import { ConContext } from "../createContext";

class ChildA extends PureComponent {
  // 类组件使用 context
  // 1.引入 createContext()执行的返回值
  // 2.设置静态属性 contextType
  // 3.打印 this, 包含 contetx 属性
  static contextType = ConContext;
  render() {
    return (
      <Fragment>
        <h1>ChildA</h1>
        <p>{this.context.name}</p>
        <p>{this.context.el}</p>
        <p>{this.context.time}</p>
      </Fragment>
    );
  }
}

export default ChildA;
