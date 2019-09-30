import { connect } from 'react-redux';
import { MovieList as MovieListComponent } from '../components/MovieList';

const mapStateToProps = state => {
  return {
    isSearching: !!state.ui.searchText,
    movies: state.movies
  };
};

export const MovieList = connect(mapStateToProps)(MovieListComponent);
