import { useState } from 'react';

import {
  BtnStyled,
  ContainerStyled,
  FormStyled,
  HeaderStyled,
  IconStyled,
  InputStyled,
} from './Searchbar.styled';

import React from 'react';

export const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(search);
    setSearch('');
  };

  return (
    <HeaderStyled>
      <ContainerStyled>
        <FormStyled onSubmit={handleSubmit}>
          <BtnStyled type="submit">
            <IconStyled size="24px" />
          </BtnStyled>
          <InputStyled
            type="text"
            name="search"
            onChange={handleChange}
            value={search}
            required
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </FormStyled>
      </ContainerStyled>
    </HeaderStyled>
  );
};
