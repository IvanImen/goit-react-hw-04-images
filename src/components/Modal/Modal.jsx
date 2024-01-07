import React, { useEffect } from 'react';
import { Backdrop, ModalStyled } from './Modal.styled';

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.documentElement.style.overflow = 'visible';
    };
  });

  const handleBackdropClick = () => {
    onClose();
  };

  const handleKeyDown = ({ code }) => {
    if (code === 'Escape') {
      onClose();
    }
  };

  return (
    <Backdrop onClick={handleBackdropClick}>
      <ModalStyled>{children}</ModalStyled>
    </Backdrop>
  );
};
