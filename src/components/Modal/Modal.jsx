import React, { Component } from 'react';
import { Backdrop, ModalStyled } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'visible';
  }

  handleBackdropClick = () => {
    this.props.onClose();
    console.log('Modal window is closing :>> ', 'Modal window is closing');
  };

  handleKeyDown = ({ code }) => {
    if (code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Backdrop onClick={this.handleBackdropClick}>
        <ModalStyled>{this.props.children}</ModalStyled>
      </Backdrop>
    );
  }
}
