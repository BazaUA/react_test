import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostById } from '../../actions';

class PostDetails extends Component {
  componentWillMount() {
    const { id } = this.props.match.params; // eslint-disable-line
    this.props.getPostById(id); // eslint-disable-line react/destructuring-assignment
  }

  componentDidUpdate() {
    window.scrollTo(0, 0); // eslint-disable-line no-undef
  }


  render() {
    const { post } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <h2 className="post-title">{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />{/* eslint-disable-line */}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  let post = { title: { rendered: '' }, content: { rendered: '' } };
  const { data } = state;
  if (data.length > 1) {
    return { post };
  }
  const [first] = data;
  if (first) {
    post = first;
  }
  return { post };
};

export default connect(mapStateToProps, { getPostById })(PostDetails);
