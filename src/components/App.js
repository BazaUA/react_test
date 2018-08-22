import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Main from './Main';

const App = ({ loading }) => (
  <div>
    <Main />
    {loading && <div className="loader">Loading...</div>}
  </div>
);


const mapStateToProps = (state) => {
  const result = { loading: state.ajaxCallsInProgress > 0 };
  return result;
};

export default withRouter(connect(mapStateToProps)(App));
