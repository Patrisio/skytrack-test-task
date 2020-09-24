import { LOADER } from '../constants';

export const isFetchingReducer = (state = true, { type }) => {
  switch (type) {
    case LOADER.SHOW:
      return true;
    case LOADER.HIDE:
      return false;
    default:
      return state;
  }
};