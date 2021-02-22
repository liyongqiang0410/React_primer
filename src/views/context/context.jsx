import React, { Component } from "react";
import { Provider } from "./createContext";
import ChildA from "./components/ChildA";
import ChildB from "./components/ChildB";

// Provider组件 类似于 Vue 中的 provide/inject
// Provider 用于注册提供数据 后代子组件都能获取
// 传递的属性键名必须为 value

class ContextCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "跨组件通信 Context",
      subTitle: "Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法",
    };
  }
  render() {
    return (
      <Provider value={{ name: "root", el: "Provider", time: new Date().getTime() }}>
        <h1>{this.state.title}</h1>
        <h3>{this.state.subTitle}</h3>
        <ChildA></ChildA>
        <ChildB></ChildB>
      </Provider>
    );
  }
}

export default ContextCom;
