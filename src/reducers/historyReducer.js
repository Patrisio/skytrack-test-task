import { HISTORY } from '../constants';

export const historyReducer = (state = [], { type, image }) => {
  switch (type) {
    case HISTORY.ADD:
      return [...state, ...[image]];
    case HISTORY.DELETE:
      return state.filter(item => item.id !== image.id);
    default:
      return state;
  }
};