import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import PostDetails from './components/posts/PostDetails';
import HomePage from './components/home/HomePage';
import Header from './components/common/Header';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/post/:id" component={PostDetails} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
