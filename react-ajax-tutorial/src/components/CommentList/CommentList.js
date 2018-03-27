import React from 'react'; 
import {Comment} from '../';
import './CommentList.css';

const CommentList = ({comments}) => {
  const commentList = comments.map(
    (comment, index)=>(
      <Comment
        name={comment.email.split('@')[0]}
        body={comment.body}
        key={index}
      />
    )
  )
  return (
    <ul className="commentList">
      {commentList}
    </ul>
  )
}

export default CommentList;