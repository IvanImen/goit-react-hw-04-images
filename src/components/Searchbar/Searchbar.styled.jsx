import styled from '@emotion/styled';
import { FiSearch } from 'react-icons/fi';

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 0;
  background-color: #ffc93e;
  z-index: 200;
`;

export const ContainerStyled = styled.div`
  max-width: 1230px;
  padding: 0 15px;
  margin: 0 auto;
  /* outline: red 3px dashed; */
`;

export const FormStyled = styled.form`
  display: flex;
  justify-content: center;
`;

export const BtnStyled = styled.button`
  padding: 8px 16px;
  display: block;
  background-color: #f1ad00;
  &:hover,
  &:focus {
    background-color: #dca005;
  }
  border: none;
  border-radius: 16px 0 0 16px;
`;

export const IconStyled = styled(FiSearch)`
  stroke: #201d16;
`;

export const InputStyled = styled.input`
  padding: 20px 10px;
  display: block;
  border-radius: 0 16px 16px 0;
  border: #dca005 2px solid;
  outline: none;
  font-size: 18px;
  color: #201d16;
  &::placeholder {
    color: #f1ad00;
  }
  &:focus {
    border: #201d16 2px solid;
  }
`;
