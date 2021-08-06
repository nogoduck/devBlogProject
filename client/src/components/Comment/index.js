import React, { useState } from 'react';
import { Container } from './styled';
import useInput from '../../hooks/useInput';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentOrigin from '../CommentOrigin';
import CommentNested from '../CommentNested';

const Comment = ({ match, reRender, commentItems }) => {
  const user = useSelector((state) => state.user);
  const [inputComment, setInputComment, onChangeInputComment] = useInput('');
  const postId = match.params.postId;

  const onSubmitComment = (e) => {
    e.preventDefault();

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

      {commentItems &&
        commentItems.map(
          (v, i) =>
            !v.responseTo && (
              <>
                __{i}__c
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
