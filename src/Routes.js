import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostDetails from './components/posts/PostDetails';
import HomePage from './components/home/HomePage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/post/:id' component={PostDetails} />
    </Switch>
  );
};

export default Routes;
