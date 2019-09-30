import React from 'react';
import { List, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
import './style.css';

const RESULTS_PER_PAGE = 10;

export function InfinityMovieList({
  searchText,
  page,
  movies,
  totalResults,
  isFetching,
  onSearch
}) {
  const handleInfiniteOnLoad = () => {
      onSearch(searchText, page + 1);
  };
  const hasMore = (totalResults - (page * RESULTS_PER_PAGE)) > 0;

  return (
    <div className="movie-list">
      <InfiniteScroll
        initialLoad={false}
        pageStart={1}
        loadMore={handleInfiniteOnLoad}
        hasMore={!isFetching && hasMore}
        useWindow={false}
      >
        <List itemLayout="horizontal" loading={isFetching}>
          {movies.map((movie, index) => (
            <List.Item key={movie.imdbID}>
              <List.Item.Meta
                avatar={<Avatar src={movie.Poster} />}
                title={
                  <Link to={`/movie/${movie.imdbID}`}>
                    {index + 1}.{movie.Title}
                  </Link>
                }
                description={movie.Year}
              />
            </List.Item>
          ))}
        </List>
      </InfiniteScroll>
    </div>
  );
}
