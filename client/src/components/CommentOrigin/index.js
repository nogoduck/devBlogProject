import React, { useState } from 'react';
import { Container, Content } from './styled';
import useInput from '../../hooks/useInput';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

const CommentOrigin = ({ match, reRender, commentOriginItems }) => {
  const user = useSelector((state) => state.user);
  const [
    inputOriginComment,
    setInputOriginComment,
    onChangeInputOriginComment,
  ] = useInput('');
  const postId = match.params.postId;
  const [showOriginComment, setShowOriginComment] = useState(false);

  const onClickShowOriginComment = () => {
    setShowOriginComment((prev) => !prev);
  };

  const onSubmitOriginComment = (e) => {
    e.preventDefault();

    const payload = {
      postId: postId,
      writer: user.authStatus._id,
      content: inputOriginComment,
      responseTo: commentOriginItems._id,
    };

    axios.post('/api/comment/createComment', payload).then(({ data }) => {
      if (data.success) {
        console.log(data.doc);
        setInputOriginComment('');
        reRender(data.doc);
      } else {
        console.log('댓글을 불러오지 못했습니다');
      }
    });
  };

  return (
    <Container>
      <Content>
        {commentOriginItems.writer.nickname} :{commentOriginItems._id} =>
        {commentOriginItems.content}
      </Content>
      <button onClick={onClickShowOriginComment}>답글</button>
      {showOriginComment && (
        <div>
          <p>답글</p>
          {/*{commentNestedItems}*/}
          <form onSubmit={onSubmitOriginComment}>
            <textarea
              value={inputOriginComment}
              onChange={onChangeInputOriginComment}
              placeholder="따뜻한 답글을 입력해주세요."
            ></textarea>

            <button type="submit">답글</button>
          </form>
        </div>
      )}
    </Container>
  );
};

export default withRouter(CommentOrigin);
