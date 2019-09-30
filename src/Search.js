import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PageHeader, Input, Button } from 'antd';
import { MovieList } from './containers/MovieList';
import { searchMovies, searchTextChange } from './actions/movie';

function Search({ isFetching, searchText, totalResults, errorMessage, onSearch, onTextChange }) {

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleChange = (evt) => {
    onTextChange(evt.target.value);
  };

  return (
    <div className="ant-page">
      <PageHeader title="Movie database" />
      <div className="ant-page-body">
        <ul className="action">
          <li className="action-item">
            <Input
              style={{ width: 500 }}
              size="large"
              placeholder="Movie Name"
              value={searchText}
              onChange={handleChange}
            />
          </li>
          <li className="action-item">
            <Button type="primary" size="large" onClick={handleSearch}>
              Search
            </Button>
          </li>
        </ul>
        <Link to="/favourites">Go to your favourites</Link>
        <div className="results">
          {errorMessage}
          {!!totalResults && <span>Total resuls: {totalResults}</span>}
          <MovieList />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  const { totalResults, searchText } = state.search;
  const { isFetching, errorMessage } = state.ui;
  return { isFetching, searchText, totalResults, errorMessage };
};

const mapDispatchToProps = dispatch => {
  return {
    onTextChange: text => {
      dispatch(searchTextChange(text));
    },
    onSearch: text => {
      dispatch(searchMovies(text));
    }
  };
};

// Note: For simplicity we don't introduce separate Container for this component
const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export { SearchContainer as Search };
