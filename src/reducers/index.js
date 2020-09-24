import { combineReducers } from 'redux';
import { imagesReducer } from './imagesReducer';
import { isFetchingReducer } from './isFetchingReducer';
import { historyReducer } from './historyReducer';
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
  images: imagesReducer,
  isFetching: isFetchingReducer,
  history: historyReducer,
  error: errorReducer
});