/**高阶组件是 js 为一个函数
 * @params {components} Comp 
 */
import React, { Component } from 'react'
const hoc = Comp => class extends Component {
  render() {
    return (
      <Comp title="高阶组件" {...this.props}></Comp>
    )
  }
  componentDidMount() {
    console.log(this);
  }
}

export default hoc