import React from 'react';
import PostSection from './PostSection';

const PostList = ({ posts }) => {
  return (
    <div>
      <h4>Rendered posts: </h4>
      {posts.map(post =>
        <PostSection key={post.id} post={post} />
      )}
    </div>
  )
};

export default PostList;
