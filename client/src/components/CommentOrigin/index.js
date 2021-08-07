import React, { useState } from 'react';
import {
  Container,
  Content,
  ContentHead,
  ContentBody,
  NestedButton,
  Form,
  TextareaComment,
  SubmitButton,
  CancelButton,
  UserTime,
} from './styled';
import useInput from '../../hooks/useInput';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';
import UserProfileImg from '../UserProfileImg';
import { changeTime2 } from '../../utils/Time';
import DefaultProfile from '../DefaultProfileImg';

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

  const onSubmitOriginComment = () => {
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
        setShowOriginComment(false);
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
        <ContentHead>
          <UserProfileImg
            userImagePath={commentOriginItems.writer.imagePath}
            userEmail={commentOriginItems.writer.email}
            style={{
              width: '40px',
              height: '40px',
              flex: 'none',
            }}
          />
        </ContentHead>
        <ContentBody>
          <div style={{ marginBottom: '2px' }}>
            {commentOriginItems.writer.nickname}&nbsp;
            <UserTime>{changeTime2(commentOriginItems.createdAt)}</UserTime>
          </div>
          <div>{commentOriginItems.content}</div>
          <div>
            <NestedButton onClick={onClickShowOriginComment}>답글</NestedButton>
          </div>

          {showOriginComment && (
            <div>
              <Form>
                <div>
                  <DefaultProfile
                    useName={false}
                    style={{
                      width: '32px',
                      height: '32px',
                      flex: 'none',
                    }}
                  />

                  <TextareaComment>
                    <TextareaAutosize
                      onChange={onChangeInputOriginComment}
                      value={inputOriginComment}
                      placeholder="공개 답글 추가..."
                    />
                  </TextareaComment>
                </div>

                <SubmitButton
                  onClick={onSubmitOriginComment}
                  id={inputOriginComment ? '' : 'passive'}
                >
                  답글
                </SubmitButton>
                <CancelButton onClick={onClickCancelComment}>취소</CancelButton>
              </Form>
            </div>
          )}
        </ContentBody>
      </Content>
    </Container>
  );
};

export default withRouter(CommentOrigin);
