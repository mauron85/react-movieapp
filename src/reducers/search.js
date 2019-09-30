import * as T from '../actions/actionTypes';

const initialState = {
    movies: [],
    page: 0,
    totalResults: 0,
    searchText: '',
};

export function searchReducer(state = initialState, action) {
    switch (action.type) {
        case T.SEARCH_TEXT_CHANGE:
            return { ...initialState, searchText: action.payload };
        case T.SEARCH_MOVIES_SUCCESS: {
            const { movies, page, totalResults } = action.payload;
            const newState = {
                ...state,
                page,
                totalResults,
                movies: page > 1 ? state.movies.concat(movies) : movies
            };
            return newState;
        }
        case T.SEARCH_MOVIES_FAILURE:
            return { ...initialState, searchText: state.searchText };
        case T.FETCH_MOVIE_SUCCESS: {
            const movies = [...state.movies];
            const newMovie = { ...action.payload, hasDetail: true };
            const movieIndex = movies.findIndex(movie => movie.imdbID === newMovie.imdbID);
            if (movieIndex > -1) {
                movies[movieIndex] = newMovie;
            } else {
                movies.push(newMovie);
            }
            return {
                ...state,
                movies
            };
        }
        default:
            return state
    }
}