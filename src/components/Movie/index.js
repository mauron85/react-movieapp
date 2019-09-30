import React, { useEffect } from 'react';
import { Card, Icon, Button } from 'antd';
import * as Api from '../../api';

export function Movie({
  imdbID,
  isFetching,
  isFavourite,
  Title,
  Year,
  Genre,
  Poster,
  fetchMovie,
  onToggleFavourite
}) {
  useEffect(() => {
    if (!Title) {
      fetchMovie(imdbID);
    }
  });

  const handleAddFavourite = evt => {
    evt.preventDefault();
    onToggleFavourite(imdbID);
  };

  return (
    <div className="movie">
      {isFetching ? (
        <span>Fetching movie details...</span>
      ) : (
        <Card
          title={
            <span>
              <span>{Title}</span>
              <Button
                type="link"
                style={{ float: 'right' }}
                onClick={handleAddFavourite}
              >
                <Icon type="star" theme={isFavourite ? 'filled' : 'outlined'} />
              </Button>
            </span>
          }
          bordered={false}
          style={{ width: 500 }}
          cover={<img alt="poster" src={Poster} />}
        >
          <p>Year: {Year}</p>
          <p>Genre: {Genre}</p>
        </Card>
      )}
    </div>
  );
}
