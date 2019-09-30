import * as T from './actionTypes';

export function searchMovies(text, page = 1) {
  return {
    type: T.SEARCH_MOVIES,
    payload: { text, page }
  };
}

export function searchTextChange(text) {
  return {
    type: T.SEARCH_TEXT_CHANGE,
    payload: text
  };
}

export function fetchMovie(id) {
  return {
    type: T.FETCH_MOVIE,
    payload: id
  };
}

export function toggleFavourite(id) {
  return {
    type: T.FAVOURITES_TOGGLE,
    payload: id
  };
}

export function removeFromFavourites(id) {
  return {
    type: T.FAVOURITES_REMOVE,
    payload: id
  };
}