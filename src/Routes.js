import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';

const Routes = () => {
  return (
    <Route path="/" component={App}>
    </Route>
  );
};

export default Routes;
