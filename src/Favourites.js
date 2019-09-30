import React from 'react';
import { withRouter } from 'react-router-dom';
import { PageHeader } from 'antd';
import { FavouriteList } from './containers/FavouriteList'

let Favourites = ({ history }) => {
  return (
    <div className="ant-page">
      <PageHeader onBack={() => history.goBack()} title="Favourite Movies" />
      <div className="ant-page-body">
          <FavouriteList />
      </div>
    </div>
  );
};

Favourites = withRouter(Favourites);

export { Favourites };
