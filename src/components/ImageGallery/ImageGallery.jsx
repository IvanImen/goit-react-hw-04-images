import { ImageGalleryItem } from 'components';
import React from 'react';
import { ImageGalleryStyled, SectionStyled } from './ImageGallery.styled';
import { ContainerStyled } from 'components/Searchbar/Searchbar.styled';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <SectionStyled>
      <ContainerStyled>
        <ImageGalleryStyled>
          {images.map(({ id, webformatURL, tags }) => (
            <ImageGalleryItem
              key={id}
              id={id}
              image={webformatURL}
              alt={tags}
              onClick={onClick}
            />
          ))}
        </ImageGalleryStyled>
      </ContainerStyled>
    </SectionStyled>
  );
};
