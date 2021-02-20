import React, { Component } from "react";

/**生命周期 老版本
 * 1.initialization 初始化
 *    1.1、setup props and state 即: constructor
 * 2.Mounting       挂载
 *   2.1、 componentWillMount
 *   2.2、 render
 *   2.3、 componentDidMount
 * 3.updating       更新
 * **3.1、 props
 * ****3.1.1、      compnentWillReceiveProps (子组件收到父组件传过来的参数)
 * ****3.1.2、      shouldComponentUpdate
 * ******3.1.2.1、  true  (go on componentWillUpdate)
 * ******3.1.2.1、  false (stop)
 * ****3.1.3、      componentWillUpdate
 * ****3.1.4、      render
 * ****3.1.5、      componentDidUpdate
 * **3.2、 states
 * ****3.2.1        shouldComponentUpdate
 * ******3.2.1.1、  true  (go on componentWillUpdate)
 * ******3.2.1.2、  false (stop)
 * ****3.2.2、      componentWillUpdate
 * ****3.2.3、      render
 * ****3.2.3、      componentDidUpdate
 * 4.Unmounting     卸载
 *   4.1、 componentWillUnmount
 */
const oldLifeData = `
<span>
生命周期 老版本<br />
&nbsp;&nbsp;1.initialization 初始化<br />
&nbsp;&nbsp; &nbsp; &nbsp;1.1、setup props and state 即: constructor<br />
&nbsp;&nbsp;2.Mounting       挂载<br />
&nbsp;&nbsp;&nbsp;&nbsp;2.1、 componentWillMount<br />
&nbsp;&nbsp;&nbsp;&nbsp;2.2、 render<br />
&nbsp;&nbsp;&nbsp;&nbsp;2.3、 componentDidMount<br />
&nbsp;&nbsp;3.updating       更新<br />
&nbsp;&nbsp;&nbsp;&nbsp;3.1、 props<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.1.1、      compnentWillReceiveProps (子组件收到父组件传过来的参数)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.1.2、      shouldComponentUpdate<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;3.1.2.1、  true  (go on componentWillUpdate)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;3.1.2.2、  false (stop)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.1.3、      componentWillUpdate<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.1.4、      render<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.1.5、      componentDidUpdate<br />
&nbsp;&nbsp;&nbsp;&nbsp;3.2、 states<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.2.1        shouldComponentUpdate<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;3.2.1.1、  true  (go on componentWillUpdate)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;3.2.1.2、  false (stop)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.2.2、      componentWillUpdate<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.2.3、      render<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.2.3、      componentDidUpdate<br />
&nbsp;&nbsp;4.Unmounting     卸载<br />
&nbsp;&nbsp;&nbsp; &nbsp;4.1、 componentWillUnmount<br />
</span>
`;

class Life extends Component {
  // 初始化钩子 最先执行 只执行一次
  constructor(props) {
    super(props);
    this.state = {
      title: "生命周期(旧版本)",
    };
  }
  // 新版本已弃用 (旧 componentWillMount)
  UNSAFE_componentWillMount() {
    console.log("componentWillMount: isUpdate", this.props.isUpdate);
  }
  componentDidMount() {
    console.log("componentDidMount: isUpdate", this.props.isUpdate);
  }
  // 新版钩子 (旧 componentWillReceiveProps)
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.isUpdate !== nextProps.isUpdate;
  }
  // 新版钩子 (旧 componentWillUpdate) 第一次不触发
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate", nextProps, nextState);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevProps, prevState);
  }
  // componentWillUnmount() {}
  render() {
    return (
      <>
        <h1>{this.state.title}</h1>
        <span dangerouslySetInnerHTML={{ __html: oldLifeData }}></span>
      </>
    );
  }
}
export default Life;
