import React, { useState } from 'react';
import {
  Container,
  Content,
  ContentBody,
  NestedButton,
  Form,
  TextareaComment,
  SubmitButton,
  CancelButton,
} from './styled';
import useInput from '../../hooks/useInput';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';

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
    console.log(' >> ', inputOriginComment);
    if (inputOriginComment === '') return null;

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

  const onClickCancelComment = () => {
    setInputOriginComment('');
    setShowOriginComment(false);
  };

  return (
    <Container>
      <Content>
        {commentOriginItems.writer.nickname} :{commentOriginItems._id} =>
        <ContentBody>{commentOriginItems.content}</ContentBody>
      </Content>
      <NestedButton onClick={onClickShowOriginComment}>답글</NestedButton>
      {showOriginComment && (
        <div>
          <Form onSubmit={onSubmitOriginComment}>
            <TextareaComment>
              <TextareaAutosize
                value={inputOriginComment}
                onChange={onChangeInputOriginComment}
                placeholder="따뜻한 답글을 입력해주세요."
              />
            </TextareaComment>

            <SubmitButton
              type="submit"
              id={inputOriginComment ? '' : 'passive'}
            >
              답글
            </SubmitButton>
            <CancelButton onClick={onClickCancelComment}>취소</CancelButton>
          </Form>
        </div>
      )}
    </Container>
  );
};

export default withRouter(CommentOrigin);
