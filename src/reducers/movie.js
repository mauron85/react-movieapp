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
            const { imdbID } = action.payload;
            const movieIndex = state.findIndex(movie => movie.imdbID === imdbID);
            if (movieIndex > 0) {
                newState[movieIndex] = action.payload;
            } else {
                newState.push(action.payload);
            }
            return newState;
        }
        default:
            return state
    }
}