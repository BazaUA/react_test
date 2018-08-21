import React, { Component } from 'react';
import Header from './common/Header';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomePage from './home/HomePage';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container-fluid">
        <Header />
        <HomePage />
      </div>
    );
  }
}

export default App;
