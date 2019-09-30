import { uiReducer } from './ui';
import { movieReducer } from './movie'
import { favouriteReducer } from './favourite';

const rootReducer = (state = {}, action) => {
    const ui = uiReducer(state.ui, action);
    const movies = movieReducer(state.movies, action);
    const favourites = favouriteReducer(state.favourites, action, movies); // favourites reducer depends on movies state
    return { ui, movies, favourites };
  }

export default rootReducer;
