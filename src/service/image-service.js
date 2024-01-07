import axios from 'axios';

const API_KEY = '40463763-cd16d3875a37d36e07b72dd03';
export const PER_PAGE = 12;
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: PER_PAGE,
};

export const getImages = async (query, page) => {
  try {
    const resp = await axios.get(`?q=${query}&page=${page}`);
    return resp.data;
  } catch (err) {
    new Error(`You have error: ${err.message}`);
  }
};
