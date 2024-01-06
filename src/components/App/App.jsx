import {
  Searchbar,
  ImageGallery,
  Button,
  Text,
  Modal,
  Loader,
} from 'components';
import React, { Component } from 'react';

import * as ImageService from 'service/image-service';

export class App extends Component {
  state = {
    images: [],
    search: '',
    error: null,
    page: 1,
    buttonShow: false,
    selectedImageId: '',
    isLoading: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      this.getImages();
    }
  }

  searchImages = search => {
    this.setState({ search, images: [], page: 1, error: null });
  };

  getImages = async () => {
    this.setState({ isLoading: true });
    const { search, page } = this.state;
    try {
      const searchResult = await ImageService.getImages(search, page);

      // if (!searchResult.hits.length) {
      //   new Error('No Images Found');
      // }
      this.setState(prevState => ({
        images: [...prevState.images, ...searchResult.hits],
        buttonShow:
          page < Math.ceil(searchResult.totalHits / ImageService.PER_PAGE),
        error:
          searchResult.totalHits === 0
            ? `There is no images on query: ${search}`
            : null,
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  nextPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = id => {
    this.setState({ selectedImageId: id });
  };

  closeModal = () => {
    this.setState({ selectedImageId: '' });
  };

  render() {
    const selectedImage = this.state.images.find(
      image => image.id === this.state.selectedImageId
    );

    return (
      <>
        <Searchbar onSubmit={this.searchImages} />
        {this.state.isLoading && <Loader></Loader>}
        {this.state.error && <Text>{this.state.error}</Text>}
        <ImageGallery images={this.state.images} onClick={this.openModal} />
        {this.state.buttonShow && (
          <Button onClick={this.nextPage}>Load more</Button>
        )}
        {this.state.selectedImageId && (
          <Modal onClose={this.closeModal}>
            <img src={selectedImage.largeImageURL} alt={selectedImage.tags} />
          </Modal>
        )}
      </>
    );
  }
}
