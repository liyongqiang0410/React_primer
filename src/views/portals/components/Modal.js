import React, { PureComponent } from 'react';
import Child from './Child'
import './Modal.css'
import withPortals from './withPortals'
@withPortals
class Modal extends PureComponent {
  state = {
    showModal: false
  }
  static getDerivedStateFromProps(nextProps) {
    return {
      showModal: nextProps.showModal
    }
  }
  hideModalFun = () => {
    this.props.hideModalFun()
  }
  render() {
    return (
      <>
        {
          this.state.showModal ? <div className="portalsModal">
            <Child {...this.props} hideModalFun={this.hideModalFun}></Child>
          </div> : ''
        }
      </>
    );
  }
}

export default Modal;