import { call, put, takeLatest } from 'redux-saga/effects';
import { IMAGES } from '../constants';
import { setImages, setError } from '../actions';
import { fetchImages } from '../api';

export function* handleImagesLoad() {
  try {
    const { data } = yield call(fetchImages);
    yield put(setImages({ data }));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* watchImagesLoad() {
  yield takeLatest(IMAGES.LOAD, handleImagesLoad);
}