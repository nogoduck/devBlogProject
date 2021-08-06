import React from 'react';
import { Container } from './styled';
import useInput from '../../hooks/useInput';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Comment = () => {
  const user = useSelector((user) => user.state);

  const [inputComment, setInputComment, onChangeInputComment] = useInput();

  const onSubmitComment = (e) => {
    e.preventDefault();

    // const payload = {
    //   postId:
    //   writer:user.authStatus._id
    // conent:
    //     }
    // axios.post('/api/comment/createComment')
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
    </Container>
  );
};

export default Comment;
