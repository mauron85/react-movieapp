import * as T from '../actions/actionTypes';

const initialState = {
    isFetching: false,
};

export function uiReducer(state = initialState, action) {
    switch (action.type) {
        case T.FETCH_MOVIE:
            return { ...state, isFetching: true };
        case T.SEARCH_MOVIES:
            return { isFetching: true, searchText: action.payload.text };
        case T.FETCH_MOVIE_SUCCESS:
        case T.SEARCH_MOVIES_SUCCESS:
            return { ...state, isFetching: false };
        case T.FETCH_MOVIE_FAILURE:
        case T.SEARCH_MOVIES_FAILURE:
            return { ...state, isFetching: false, errorMessage: action.message };
        default:
            return state
    }
}