import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, withRouter } from 'react-router-dom';
import Main from './Main';

const App = ({ loading }) => {
  return (
    <div>
      <Main />
      {loading && <div className="loader">Loading...</div>}
    </div>
  )
}


const mapStateToProps = (state) => {
  return { loading: state.ajaxCallsInProgress > 0 };
}

export default withRouter(connect(mapStateToProps)(App));
