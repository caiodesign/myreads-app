import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeView from './containers/HomeView';
import SearchView from './containers/SearchView';
// import * as BooksAPI from './BooksAPI'

export const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/search" component={SearchView} />
    </Switch>
  </div>
);

export default App;
