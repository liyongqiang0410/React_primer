import React, { Fragment } from "react";
import { Consumer } from "../createContext";

function ChildD(props) {
  return (
    <Consumer>
      {(value) => {
        return (
          <Fragment>
            <h1>ChildC's children</h1>
            <p>{value.name}</p>
            <p>{value.el}</p>
            <p>{value.time}</p>
          </Fragment>
        );
      }}
    </Consumer>
  );
}

export default ChildD;
