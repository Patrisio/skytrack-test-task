import { IMAGES } from '../constants';

export const imagesReducer = (state = [], action) => {
  switch (action.type) {
    case IMAGES.LOAD_SUCCESS:
      const formattedData = [];
      
      Object.entries(action.images).forEach(entry => {
        entry[1].name = entry[0];
        formattedData.push(entry[1]);
      });
      
      return [...formattedData];
    case IMAGES.DELETE:
      return [];
    default:
      return state;
  }
};