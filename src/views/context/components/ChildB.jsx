import React, { PureComponent, Fragment } from "react";
import { ConContext } from "../createContext";
import ChildC from "./ChildC";

class ChildB extends PureComponent {
  static contextType = ConContext;
  render() {
    return (
      <Fragment>
        <h1>ChildB</h1>
        <p>{this.context.name}</p>
        <p>{this.context.el}</p>
        <p>{this.context.time}</p>
        <ChildC></ChildC>
      </Fragment>
    );
  }
}
export default ChildB;
