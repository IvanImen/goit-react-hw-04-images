import { ContainerStyled } from 'components/Searchbar/Searchbar.styled';
import React from 'react';
import { TextStyled } from './Text.styled';
import { SectionStyled } from 'components/ImageGallery/ImageGallery.styled';

export const Text = ({ children }) => {
  return (
    <SectionStyled>
      <ContainerStyled>
        <TextStyled>{children}</TextStyled>
      </ContainerStyled>
    </SectionStyled>
  );
};
