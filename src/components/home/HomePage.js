import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postsFetch } from '../../actions';
import PostList from '../posts/PostList';

class HomePage extends Component {
  componentWillMount() {
    this.props.postsFetch();
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <h3>Round 1 Technical Node+React Test</h3>
            <PostList posts={this.props.posts} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.data }
};

export default connect(mapStateToProps, { postsFetch })(HomePage);
