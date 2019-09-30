import * as T from '../actions/actionTypes';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as Api from '../api';

function* searchMovie(action) {
  try {
    const response = yield call(Api.searchMovies, action.payload);
    yield put({ type: T.SEARCH_MOVIES_SUCCESS, payload: response.Search });
  } catch (e) {
    yield put({ type: T.SEARCH_MOVIES_FAILURE, message: e.message });
  }
}

function* fetchMovie(action) {
  try {
    const response = yield call(Api.fetchMovie, action.payload);
    yield put({ type: T.FETCH_MOVIE_SUCCESS, payload: response });
  } catch (e) {
    yield put({ type: T.FETCH_MOVIE_FAILURE, message: e.message });
  }
}

function* movieSaga() {
  yield takeEvery(T.SEARCH_MOVIES, searchMovie);
  yield takeEvery(T.FETCH_MOVIE, fetchMovie);
}

export default movieSaga;
