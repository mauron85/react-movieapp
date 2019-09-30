import React from 'react';
import { List, Avatar } from 'antd';
import { Link } from 'react-router-dom';

export function MovieList({ isSearching, movies }) {
  return (
    <div className="movie-list">
      <List
        itemLayout="horizontal"
        dataSource={isSearching ? movies : []}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src={item.Poster} />
              }
              title={<Link to={`/movie/${item.imdbID}`}>{item.Title}</Link>}
              description={item.Year}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
