import React, { Component } from 'react';
import Modal from './components/Modal'
import { Button } from 'antd'

class Index extends Component {
  state = {
    showModal: false
  }
  showModalFun = () => {
    this.setState({
      showModal: true
    })
  }
  hideModalFun = () => {
    this.setState({
      showModal: false
    })
  }
  render() {
    return (
      <>
        <h1>Portals parent</h1>
        <Button onClick={this.showModalFun}>show Modal</Button>
        <Modal title='Portals Modal' showModal={this.state.showModal} hideModalFun={this.hideModalFun}></Modal>
      </>
    );
  }
}

export default Index;