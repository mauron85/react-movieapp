import { connect } from 'react-redux';
import { Movie as MovieComponent } from '../components/Movie';
import { fetchMovie, toggleFavourite } from '../actions/movie';

const mapStateToProps = (state, ownProps) => {
  // Consider: selector (reselect) here
  const movie = state.movies.find(movie => movie.imdbID === ownProps.imdbID);
  return {
    imdbID: ownProps.imdbID,
    isFetching: state.ui.isFetching || !movie,
    isFavourite: !!state.favourites[ownProps.imdbID],
    ...movie,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovie: id => {
      dispatch(fetchMovie(id));
    },
    onToggleFavourite: id => {
      dispatch(toggleFavourite(id));
    }
  };
};

export const Movie = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieComponent);
