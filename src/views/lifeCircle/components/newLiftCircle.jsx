import React, { PureComponent } from "react";
// 纯组件, 父组件传递的属性没发生变化时, 子组件不会 render
// 如果类组建继承的时 component 组件时
// 需要使用 shouldComponentUpdate 生命钩子判断是否需要重新 render
const newLiftCircleHtml = `
<div>
生命周期 老版本<br />
&nbsp;&nbsp;1.constructor <br />
&nbsp;&nbsp;2.static getDerivedStateFromPorps(nextProps, prevState) <br />
&nbsp;&nbsp;3.shouldComponentUpdate(nextProps, nextState) <br />
&nbsp;&nbsp;4.render<br />
&nbsp;&nbsp;5.getSnapshotBeforeUpdate(prevProps, prevState)<br />
&nbsp;&nbsp;6.componentWillMount(nextProps, nextState)<br />
&nbsp;&nbsp;7.componentDidUpdate(prevProps, prevState)<br />
&nbsp;&nbsp;8.componentWillUnmount<br />
</div>
`;
class newLiftCircle extends PureComponent {
  state = {
    title: "生命周期(新版本16.3(不含)之后)",
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps, prevState);
    if (nextProps.time !== prevState.time) {
      // 返回值会与 state 浅复制合并
      return {
        time: nextProps.time,
      };
    } else {
      // 返回 null, 不进行任何操作
      return null;
    }
  }
  render() {
    return (
      <>
        <h1>{this.state.title}</h1>
        <span dangerouslySetInnerHTML={{ __html: newLiftCircleHtml }}></span>
      </>
    );
  }
}

export default newLiftCircle;
