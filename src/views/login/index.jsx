/*
 * @Author: your name
 * @Date: 2021-02-04 13:50:25
 * @LastEditTime: 2021-02-07 10:34:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-app\src\views\login\index.js
 */
import React from 'react';
// 有状态组件
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  // 默认属性 
  static defaultProps = {
    name: 'defaultPropsName',
  }

  handleClick() {
    this.setState(prevState => {
      // 在需要使用上一状态的值时使用
      return {
        // bool: !prevState.bool
        // do something
      }
    }, () => {
      // state 状态已经改变,dom 渲染完毕在执行的操作
      // do something
    })
  }
  render() {
    return (
      <div className='login'>this is Login {this.props.name}</div>
    )
  }
}
// 无状态组件
function childOne(props) {
  return (
    <div></div>
  )
}
childOne.defaultProps = {
  name: 'defaultPropsName'
}