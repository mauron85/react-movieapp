import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Movie as MovieComponent } from '../components/Movie';
import { fetchMovie, toggleFavourite } from '../actions/movie';

const mapStateToProps = (state, ownProps) => {
  // Consider: selector (reselect) here
  let movie = state.favourites[ownProps.imdbID];
  if (movie) {
    return {
      ...movie,
      isFetching: false,
      isFavourite: true
    };
  }
  movie = state.movies.find(movie => movie.imdbID === ownProps.imdbID);
  return {
    ...movie,
    imdbID: ownProps.imdbID,
    isFetching: state.ui.isFetching,
    isFavourite: false
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

function MovieData({ fetchMovie, ...movie }) {
  useEffect(() => {
    if (!movie.isFetching && !movie.hasDetail) {
      fetchMovie(movie.imdbID);
    }
  });

  return <MovieComponent {...movie}/>;
}

export const Movie = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieData);
