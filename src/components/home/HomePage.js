import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postsFetch } from '../../actions';
import PostList from '../posts/PostList';

class HomePage extends Component {
  componentWillMount() {
    this.props.postsFetch(); // eslint-disable-line react/destructuring-assignment
  }

  render() {
    const { posts } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <h3>Round 1 Technical Node+React Test</h3>
            <PostList posts={posts} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const result = { posts: state.data };
  return result;
};

export default connect(mapStateToProps, { postsFetch })(HomePage);
