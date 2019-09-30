import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'
import { Search } from './Search';
import { Movie } from './Movie';
import { Favourites } from './Favourites';
import configureStore from './configureStore';
import './App.css';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/'>
              <Redirect to="/search" />
            </Route>
            <Route path="/search" component={Search} />
            <Route path="/movie/:id" component={Movie} />
            <Route path="/favourites" component={Favourites} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
