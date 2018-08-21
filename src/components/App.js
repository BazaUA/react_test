import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './common/Header';
import Main from './Main';

const App = ({ loading }) => {
  return (
    <div>
      <Header />
      <Main />
      {loading && <div className="loader">Loading...</div>}
    </div>
  )
}


const mapStateToProps = (state) => {
  return { loading: state.ajaxCallsInProgress > 0 };
}

export default connect(mapStateToProps)(App);
