import React from 'react';
import { List, Avatar, Button } from 'antd';
import { Link } from 'react-router-dom';

export function FavouriteList({ movies, onFavouritesRemove }) {
  return (
    <div className="favourite-list">
      <List
        style={{ padding: 10, background: 'white' }}
        itemLayout="horizontal"
        dataSource={movies}
        rowKey="imdbID"
        renderItem={item => (
          <List.Item
            actions={[
              <Button
                type="link"
                key="list-remove"
                onClick={evt => {
                  evt.preventDefault();
                  onFavouritesRemove(item.imdbID);
                }}
              >
                Remove
              </Button>
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.Poster} />}
              title={<Link to={`/movie/${item.imdbID}`}>{item.Title}</Link>}
              description={item.Year}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
