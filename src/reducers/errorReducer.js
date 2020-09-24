import { IMAGES } from '../constants';

export const errorReducer = (state = null, { type, error }) => {
  switch (type) {
    case IMAGES.LOAD_FAIL:
      return error;
    case IMAGES.LOAD:
    case IMAGES.LOAD_SUCCESS:
      return null;
    default:
      return state;
  }
};