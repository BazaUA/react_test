/*eslint-disable import/default*/
import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { render } from 'react-dom';
import Routes from './Routes';
import reducers from './reducers';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);

