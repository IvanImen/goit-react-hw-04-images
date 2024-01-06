import React from 'react';
import {
  ImageGalleryItemImageStyled,
  ImageGalleryItemStyled,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, id, alt, onClick }) => {
  return (
    <ImageGalleryItemStyled onClick={() => onClick(id)}>
      <ImageGalleryItemImageStyled src={image} alt={alt} />
    </ImageGalleryItemStyled>
  );
};
