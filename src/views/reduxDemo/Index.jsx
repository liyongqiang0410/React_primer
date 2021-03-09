import React, { Component } from 'react';
import { Button } from "antd";
import { store }  from './store'

class Index extends Component {
  render() {
    return (
      <div>
        <Button>-</Button>
        <span>{store.getState().count}</span>
        <Button>+</Button>
      </div>
    );
  }
}

export default Index;