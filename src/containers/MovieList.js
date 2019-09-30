import { connect } from 'react-redux';
import { InfinityMovieList as MovieListComponent } from '../components/MovieList';
import { searchMovies } from '../actions/movie';

const mapStateToProps = state => {
  if (!state.search.searchText) {
    return {
      movies: [],
      page: 0,
      totalResults: 0,
      isFetching: false
    };
  }
  return {
    ...state.search,
    isFetching: state.ui.isFetching
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSearch: (searchText, page) => {
      dispatch(searchMovies(searchText, page));
    }
  };
};

export const MovieList = connect(mapStateToProps, mapDispatchToProps)(MovieListComponent);
