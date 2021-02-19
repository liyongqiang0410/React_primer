import React, { Component, Fragment } from 'react';
import {Space, Button} from 'antd'

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
    // constructor 只执行一次 即在初始时就为 handleClick 绑定了 this 推荐
    this.handleClickConstructor = this.handleClick.bind(this)
  }
  handleClick() {
    console.log(this.state.count);
  }
  // 
  handleClickParams(a, b) {
    console.log(a, b, arguments);
  }
  // 事件柯里化 即可以传参也可以获取到 this 同时也能拿到 event, event 在返回的函数中获取
  handleClickCurrying = (params) => {
    return (event) => {
      console.log(params, this);
    }
  }
  render() {
    // 不推荐在 render 中为事件处理函数绑定 this, render会多次执行,效果与组件内绑定 this 方法类同存在严重性能缺陷
    return (
      <Fragment>
        <Space>
          事件处理
          {/* bind 每次都会新建函数会影响性能, 不绑定 this 函数获取不到 this 不推荐 */}
          <Button type="primary" onClick={this.handleClick.bind(this)}>bind</Button>
          {/* 在 constructor 为回调函数绑定 this 官网推荐用法 */}
          <Button type="primary" onClick={this.handleClickConstructor}>constructor</Button>
          {/* 传参方式 */}
          <Button type="primary" onClick={() => this.handleClickParams('a', 'b', 'c')}>params</Button>
          <Button type="primary" onClick={this.handleClickCurrying('a', 'b', 'c')}>currying</Button>
        </Space>
      </Fragment>
    );
  }
}

export default index;