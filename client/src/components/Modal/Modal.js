import React, { Component } from 'react';
import './Modal.css';
// import Button from '../../Button/Button.js';

class Modal extends Component {
  render() {
    return (
      <div className="Modal">
          <div className="Modal-backdrop" onClick={this.props.onDismiss}></div>
            <div className="Modal-body">
              {this.props.children}

            </div>
      </div>
    );
  }
}

export default Modal;
