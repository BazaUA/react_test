import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostById, postsFetch } from '../../actions'

class PostDetails extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.props.getPostById(id);
    }
  }
  render() {
    const { post } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <h2 className="post-title">{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  let post = { title: { rendered: '' }, content: { rendered: '' } }
  if (state.data[0]) {
    post = state.data[0];
  }
  return { post };
}

export default connect(mapStateToProps, { getPostById })(PostDetails);
