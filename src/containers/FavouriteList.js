import { connect } from 'react-redux';
import { FavouriteList as FavouriteListComponent } from '../components/FavouriteList';
import { removeFromFavourites } from '../actions/movie';

const mapStateToProps = state => {
  return {
    movies: Object.keys(state.favourites).map(imdbID => {
      return { ...state.favourites[imdbID], imdbID };
    })
  };
};

const mapDispatchToProps = dispatch => {
    return {
      onFavouritesRemove: id => {
        dispatch(removeFromFavourites(id));
      }
    };
  };

export const FavouriteList = connect(mapStateToProps, mapDispatchToProps)(FavouriteListComponent);
