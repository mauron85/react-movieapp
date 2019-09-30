import { uiReducer } from './ui';
import { searchReducer } from './search'
import { favouriteReducer } from './favourite';

const rootReducer = (state = {}, action) => {
    const ui = uiReducer(state.ui, action);
    const search = searchReducer(state.search, action);
    const favourites = favouriteReducer(state.favourites, action, search.movies); // favourites reducer depends on movies state
    return { ui, search, favourites };
  }

export default rootReducer;
