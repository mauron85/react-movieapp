import * as T from '../actions/actionTypes';

const initialState = [];

export function movieReducer(state = initialState, action) {
    switch (action.type) {
        case T.SEARCH_TEXT_CHANGE:
        case T.SEARCH_MOVIES:
            return initialState;
        case T.SEARCH_MOVIES_SUCCESS:
            return action.payload;
        case T.SEARCH_MOVIES_FAILURE:
            return initialState;
        case T.FETCH_MOVIE_SUCCESS: {
            const newState = [...state];
            const newMovie = { ...action.payload, hasDetail: true };
            const movieIndex = state.findIndex(movie => movie.imdbID === newMovie.imdbID);
            if (movieIndex > -1) {
                newState[movieIndex] = newMovie;
            } else {
                newState.push(newMovie);
            }
            return newState;
        }
        default:
            return state
    }
}