import React, { Component } from 'react';
import { Button } from 'antd'
import { CloseOutlined } from '@ant-design/icons';
import './Modal.css'

class Child extends Component {
  closeModal = () => {
    return () => {
      let modal = document.getElementsByClassName('portalsModal')[0];
      modal.style.display = 'none'
      // document.body.removeChild(modal)
      this.props.hideModalFun()
    }
  }
  render() {
    return (
      <>
        <div className="modal_plate">
          <div className="modal_header">
            {this.props.title}
            <i className="modal_close_icon">
              <CloseOutlined onClick={this.closeModal()} />
            </i>
          </div>
          <div className="modal_body">modal_body</div>
          <div className="modal_footer">
            <Button onClick={this.closeModal()}>close Modal</Button>
          </div>
        </div>
      </>
    );
  }
  componentDidMount() {
  }
}

export default Child;