import React, { useState } from 'react';
import { Container } from './styled';
import useInput from '../../hooks/useInput';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

const CommentOrigin = ({ match, commentOriginItems }) => {
  const user = useSelector((state) => state.user);
  const [inputComment, setInputComment, onChangeInputComment] = useInput('');
  const postId = match.params.postId;
  const [showNestedComment, setShowNestedComment] = useState(false);

  const onClickShowNestedComment = () => {
    setShowNestedComment((prev) => !prev);
  };

  const onSubmitNestedComment = (e) => {
    e.preventDefault();

    const payload = {
      postId: postId,
      writer: user.authStatus._id,
      content: inputComment,
      // responseTo: commentNestedItems._id,
    };

    axios.post('/api/comment/createComment', payload).then(({ data }) => {
      console.log(data);
    });
  };

  return (
    <Container>
      {commentOriginItems.writer.nickname} :{commentOriginItems._id} =>
      {commentOriginItems.content}
      <button onClick={onClickShowNestedComment}>답글</button>
      {showNestedComment && (
        <div>
          <p>답글</p>
          {/*{commentNestedItems}*/}
          <form onSubmit={onSubmitNestedComment}>
            <textarea
              value={inputComment}
              onChange={onChangeInputComment}
            ></textarea>

            <button type="submit">답글</button>
          </form>
        </div>
      )}
    </Container>
  );
};

export default withRouter(CommentOrigin);
