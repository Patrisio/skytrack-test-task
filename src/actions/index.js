import { IMAGES, HISTORY, LOADER } from '../constants';

const loadImages = () => ({ type: IMAGES.LOAD });

const deleteImages = () => ({ type: IMAGES.DELETE });

const hideLoader = () => ({ type: LOADER.HIDE });

const showLoader = () => ({ type: LOADER.SHOW });

const setError = (error) => ({
  type: IMAGES.LOAD_FAIL,
  error
});

const setImages = ({ data }) => ({
  type: IMAGES.LOAD_SUCCESS,
  images: data.images
});

const addImage = (image) => ({
  type: HISTORY.ADD,
  image
});

const deleteImage = (image) => {
  return {
    type: HISTORY.DELETE,
    image
  };
};

export {
  loadImages,
  deleteImage,
  setImages,
  setError,
  addImage,
  deleteImages,
  hideLoader,
  showLoader,
};