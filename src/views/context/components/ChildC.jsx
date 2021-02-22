import React from "react";
import { Consumer } from "../createContext";
import ChildD from "./ChildD";

// 函数式组件使用 context 只能使用 Comsumer
// Comsumer组件 使用
// 1.内部使用一个函数返回
// 2.函数参数即为 contetx 参数由 Provider 组件提供
// 3.方法返回 dom
function ChildC(props) {
  return (
    <>
      <Consumer>
        {(value) => {
          return (
            <>
              <h1>ChildB's children</h1>
              <p>{value.name}</p>
              <p>{value.el}</p>
            </>
          );
        }}
      </Consumer>
      <ChildD></ChildD>
    </>
  );
}

export default ChildC;
