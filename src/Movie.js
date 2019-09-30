import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { PageHeader } from 'antd';
import { searchMovies } from './actions/movie';
import { Movie as MovieDetail } from './containers/Movie';

function Movie({ Title, imdbID, history }) {
  return (
    <div className="ant-page">
      <PageHeader onBack={() => history.goBack()} title="&nbsp;" />
      <div className="ant-page-body">
        <MovieDetail imdbID={imdbID} />
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    imdbID: ownProps.match.params.id,
    errorMessage: state.errorMessage,
    isFetching: state.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearch: text => {
      dispatch(searchMovies(text));
    }
  };
};

// Note: For simplicity we don't introduce separate Container for this component
const MovieContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie));

export { MovieContainer as Movie };
