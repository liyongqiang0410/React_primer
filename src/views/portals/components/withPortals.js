import React, { Component } from 'react';
import { createPortal } from 'react-dom'


function withPortals(WrappedComponent) {
  return class extends Component {
    render() {
      return createPortal(
        <WrappedComponent {...this.props} />,
        document.body
      )
    }
  }
}

export default withPortals;