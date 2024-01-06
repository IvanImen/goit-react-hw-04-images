import React from 'react';
import { BtnStyled } from './Button.styled';

export const Button = ({ children, onClick }) => {
  return (
    <BtnStyled type="button" onClick={onClick}>
      {children}
    </BtnStyled>
  );
};
