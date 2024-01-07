import {
  Searchbar,
  ImageGallery,
  Button,
  Text,
  Modal,
  Loader,
} from 'components';
import React, { useEffect, useState } from 'react';

import * as ImageService from 'service/image-service';

export const App = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [buttonShow, setButtonShow] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getImages = async () => {
      setIsLoading(true);

      try {
        const searchResult = await ImageService.getImages(search, page);

        setImages(i => [...i, ...searchResult.hits]);
        setButtonShow(
          page < Math.ceil(searchResult.totalHits / ImageService.PER_PAGE)
        );
        setError(
          searchResult.totalHits === 0
            ? `There is no images on query: ${search}`
            : null
        );
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    search && getImages();
  }, [search, page]);

  const searchImages = search => {
    setSearch(search);
    setImages([]);
    setPage(1);
    setError(null);
  };

  const nextPage = () => {
    setPage(p => p + 1);
  };

  const openModal = id => {
    setSelectedImageId(id);
  };

  const closeModal = () => {
    setSelectedImageId('');
  };

  const selectedImage = images.find(image => image.id === selectedImageId);

  return (
    <>
      <Searchbar onSubmit={searchImages} />
      {isLoading && <Loader></Loader>}
      {error && <Text>{error}</Text>}
      <ImageGallery images={images} onClick={openModal} />
      {buttonShow && <Button onClick={nextPage}>Load more</Button>}
      {selectedImageId && (
        <Modal onClose={closeModal}>
          <img src={selectedImage.largeImageURL} alt={selectedImage.tags} />
        </Modal>
      )}
    </>
  );
};
