import React from 'react';
import { Link } from 'react-router-dom';

const PostSection = ({ post }) => {
  //dangerouslySetInnerHTML={{ __html: post.content.rendered }}
  const date = new Date(post.date).toLocaleDateString();
  return (
    <div className="post-preview">
      <Link to={'/post/' + post.id}>
        <h2 className="post-title">{post.title.rendered}</h2>
        <h3 className="post-excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></h3>
      </Link>
      <p className="post-meta">Posted on {date}</p>
      <hr />
    </div>
  );
};

export default PostSection;
