import React, { useState } from 'react';
import { Container } from './styled';
import useInput from '../../hooks/useInput';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentOrigin from '../CommentOrigin';

const Comment = ({ match, commentItems }) => {
  const user = useSelector((state) => state.user);
  const [inputComment, setInputComment, onChangeInputComment] = useInput('');
  const postId = match.params.postId;
  const [showNestedComment, setShowNestedComment] = useState(false);

  const onClickShowNestedComment = () => {
    setShowNestedComment((prev) => !prev);
  };

  const onSubmitComment = (e) => {
    e.preventDefault();

    const payload = {
      postId: postId,
      writer: user.authStatus._id,
      content: inputComment,
    };
    axios.post('/api/comment/createComment', payload).then(({ data }) => {
      console.log(data);
    });
  };

  return (
    <Container>
      <p>댓글</p>
      <form onSubmit={onSubmitComment}>
        <textarea
          value={inputComment}
          onChange={onChangeInputComment}
        ></textarea>

        <button type="submit">댓글</button>
      </form>
      <button onClick={onClickShowNestedComment}>답글</button>
      {showNestedComment && <CommentOrigin />}

      {commentItems &&
        commentItems.map((v, i) => {
          return (
            <>
              <div>
                {v._id} - {v.content}
              </div>
            </>

            // {v.responseTo ? <div>{v._id}-{v.content}</div> : <div>223</div>}

            // <CommentOrigin>{v.content}</CommentOrigin>
          );
        })}
    </Container>
  );
};

export default withRouter(Comment);
