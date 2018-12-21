import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    let className = 'Button';

    if (this.props.type === 'login') {
      className = 'Button--login';
    }

    if (this.props.type === 'profile') {
      className = 'Button--profile';
    }

    if (this.props.type === 'deeds') {
        className = 'Button--deeds';
      }

    if (this.props.type === 'modal') {
        className = 'Button--modal';
      }


    return (
      <div className={className} onClick={this.props.onClick}>
        {this.props.children}
      </div>
    );
  }
}

export default Button;