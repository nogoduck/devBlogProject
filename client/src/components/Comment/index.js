import React, { useState, useRef } from 'react';
import {
  Container,
  TextareaComment,
  Main,
  Form,
  CancelButton,
  SubmitButton,
} from './styled';
import useInput from '../../hooks/useInput';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentOrigin from '../CommentOrigin';
import CommentNested from '../CommentNested';
import DefaultProfile from '../DefaultProfile';

const Comment = ({ match, reRender, commentItems }) => {
  const user = useSelector((state) => state.user);
  const [inputComment, setInputComment, onChangeInputComment] = useInput('');
  const postId = match.params.postId;

  const textareaAuto = useRef();
  if (inputComment) {
    console.log('입력됨');
  }
  const onSubmitComment = (e) => {
    e.preventDefault();

    if (inputComment === '') return null;

    const payload = {
      postId: postId,
      writer: user.authStatus._id,
      content: inputComment,
    };
    axios.post('/api/comment/createComment', payload).then(({ data }) => {
      if (data.success) {
        console.log(data.doc);
        setInputComment('');
        reRender(data.doc);
      } else {
        console.log('댓글을 불러오지 못했습니다');
      }
    });
  };

  const onClickCancelComment = () => {
    setInputComment('');
  };
  const onHandleAutoHeight = () => {
    // if (ref === null || ref.current === null) {
    //   return;
    // }

    console.log('auto >> ', textareaAuto.current);
    // ref.current.style.height = '38px';
    // ref.current.style.height = ref.current.scrollHeight + 'px';
  };

  return (
    <Container>
      <Main>댓글</Main>
      <Form onSubmit={onSubmitComment}>
        <div>
          <DefaultProfile
            useName={false}
            style={{
              width: '40px',
              height: '40px',
              flex: 'none',
            }}
          />
          <TextareaComment
            value={inputComment}
            onChange={onChangeInputComment}
            ref={textareaAuto}
            onInput={onHandleAutoHeight}
          ></TextareaComment>
        </div>
        <SubmitButton type="submit" id={inputComment ? '' : 'passive'}>
          댓글
        </SubmitButton>
        <CancelButton onClick={inputComment ? null : onClickCancelComment}>
          취소
        </CancelButton>
      </Form>

      {commentItems &&
        commentItems.map(
          (v, i) =>
            !v.responseTo && (
              <>
                <CommentOrigin reRender={reRender} commentOriginItems={v} />
                <CommentNested
                  originId={v._id}
                  commentNestedItems={commentItems}
                />
              </>
            )
        )}
    </Container>
  );
};

export default withRouter(Comment);
