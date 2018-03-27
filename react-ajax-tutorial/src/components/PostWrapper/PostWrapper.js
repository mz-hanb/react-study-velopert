import React from 'react';
import './PostWrapper.css';

const PostWrapper = ({children}) => {
  return (
    <div className="postWrapper">
      {children}
    </div>
  )
}

export default PostWrapper;