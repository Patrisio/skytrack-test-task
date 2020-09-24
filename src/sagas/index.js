import { all } from 'redux-saga';

import imagesSaga from './imagesSaga';

export default function* rootSaga() {
  yield all([imagesSaga()]);
}