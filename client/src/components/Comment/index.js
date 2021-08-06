import React, { useState } from 'react';
import { Container } from './styled';
import useInput from '../../hooks/useInput';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NestedComment from '../NestedComment';

const Comment = ({ match }) => {
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
      {showNestedComment && <NestedComment />}
    </Container>
  );
};

export default withRouter(Comment);
