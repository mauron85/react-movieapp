import * as T from '../actions/actionTypes';

const initialState = {};

function filterMovie(state, id) {
  const filtered = Object.keys(state)
    .filter(key => key !== id)
    .reduce((obj, key) => {
      obj[key] = state[key];
      return obj;
    }, {});
  return filtered;
}

export function favouriteReducer(state = initialState, action, movies) {
  switch (action.type) {
    case T.FAVOURITES_TOGGLE: {
      const isFavourite = !!state[action.payload];
      if (isFavourite) {
        return filterMovie(state, action.payload);
      }
      const movie = movies.find(movie => movie.imdbID === action.payload);
      return { ...state, [action.payload]: movie };
    }
    case T.FAVOURITES_REMOVE: {
      return filterMovie(state, action.payload);
    }
    default:
      return state;
  }
}
