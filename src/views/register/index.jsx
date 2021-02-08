/*
 * @Author: your name
 * @Date: 2021-02-04 14:39:06
 * @LastEditTime: 2021-02-07 17:27:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-app\src\views\register\index.js
 */
import React, { Component, Fragment } from 'react';
import { testContext, Provider, Consumer } from "./testContext";

class ChildA extends Component {
  // 获取context 实例
  static contextType = testContext
  render() {
    console.log(this);
    return (
      <div>
        Child A: {this.context.name} {this.context.des}
      </div>
    );
  }
}

class ChildB extends Component {
  render() {
    return (
      <Fragment>
        <ChildC></ChildC>
      </Fragment>
    )
  }
}

function ChildD (props) {
  return (
    <div>
      Child D: 
      <Consumer>
        {
          (value) => {
            return (
              <span>{`${value.name} ${value.des}`}</span>
            )
          }
        }
      </Consumer>
    </div>
  ) 
}

function ChildC (props) {
  return (
    <Fragment>
      <ChildD></ChildD>
    </Fragment>
  )
}

export default class Register extends React.Component {
  render() {
    return (
      <Provider value={{name: 'hello', des: 'world'}}>
        this is Register
        <ChildA></ChildA>
        <ChildB></ChildB>
      </Provider>
    )
  }
}
