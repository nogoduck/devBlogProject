import React, { useEffect, useState } from 'react';
import { Container, NestedCommentButton } from './styled';
import useInput from '../../hooks/useInput';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentOrigin from '../CommentOrigin';
import { IoCaretUp, IoCaretDown } from 'react-icons/io5';

const CommentNested = ({ match, commentNestedItems, originId, reRender }) => {
  const [nestedCommentCount, setNestedcommentCount] = useState(0);
  const [showNestedComment, setShowNestedComment] = useState(true);
  // const postId = match.params.postId;

  useEffect(() => {
    let commentCount = 0;
    commentNestedItems.map((v) => {
      if (v.responseTo === originId) {
        commentCount++;
      }
    });

    setNestedcommentCount(commentCount);
  }, []);
  // console.log('com >> ', commentNestedItems);

  const nestedComment = () => {
    return commentNestedItems.map((v, i) => (
      <>
        {v.responseTo === originId && (
          <>
            <CommentOrigin reRender={reRender} commentOriginItems={v} />
            <CommentNested
              originId={v._id}
              commentNestedItems={commentNestedItems}
            />
          </>
        )}
      </>
    ));
  };

  const onClickShowNextedComment = () => {
    console.log(showNestedComment);
    setShowNestedComment((prev) => !prev);
  };

  return (
    <Container>
      {nestedCommentCount > 0 && (
        <div onClick={onClickShowNextedComment}>
          {showNestedComment ? (
            <NestedCommentButton>
              <IoCaretUp style={{ fontSize: '12px', marginRight: '8px' }} />
              &nbsp;답글 {nestedCommentCount}개 숨기기
            </NestedCommentButton>
          ) : (
            <NestedCommentButton>
              <IoCaretDown style={{ fontSize: '12px', marginRight: '8px' }} />
              &nbsp;답글 {nestedCommentCount}개 보기
            </NestedCommentButton>
          )}
        </div>
      )}

      {showNestedComment && nestedComment(originId)}
    </Container>
  );
};

export default withRouter(CommentNested);
