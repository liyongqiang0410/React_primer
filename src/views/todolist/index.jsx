import React, { Component, Fragment } from "react";
import Form from "./components/form";
import List from "./components/list";
class todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 0,
          label: "aaa",
          value: "0",
        },
        {
          id: 1,
          label: "bbb",
          value: "1",
        },
        {
          id: 2,
          label: "ccc",
          value: "2",
        },
        {
          id: 3,
          label: "ddd",
          value: "3",
        },
        {
          id: 4,
          label: "eee",
          value: "4",
        },
      ],
    };
  }
  onReceiveLabel = () => {
    return (label, value) => {
      let obj = {
        id: new Date().getTime(),
        label: label,
        balue: value,
      };
      this.state.list.push(obj);
      this.setState({});
    };
  };
  deleteOneList = () => {
    return (id) => {
      this.state.list.forEach((item, index) => {
        if (item.id === id) {
          this.state.list.splice(index, 1);
          this.setState({});
        }
      });
    };
  };
  render() {
    return (
      <Fragment>
        <Form onReceiveLabel={this.onReceiveLabel()}></Form>
        <br />
        <List list={this.state.list} deleteOneList={this.deleteOneList()}></List>
      </Fragment>
    );
  }
}

export default todolist;
