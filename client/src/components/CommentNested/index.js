import React, { useEffect, useState } from 'react';
import { Container } from './styled';
import useInput from '../../hooks/useInput';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentOrigin from '../CommentOrigin';

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
  console.log('com >> ', commentNestedItems);
  const nestedComment = (originCommentId) => {
    console.log('origin >> ', originCommentId);
    console.log('origin === >> ', originCommentId);
    commentNestedItems.map((v, i) => {
      console.log('V >> ', v);
      if (v.responseTo === originCommentId) {
        console.log('동일한 게시물');
      }
    });

    commentNestedItems.map(
      (v, i) => {
        if (originCommentId === v.responseTo) {
          return (
            <>
              <p>게시물</p>
            </>
          );
        }
      }
      //         (
      //   <>
      //     __{i}__outNest
      //     {originCommentId === v.responseTo && (
      //       <>
      //         __{i}__inNest
      //         <CommentOrigin reRender={reRender} commentOriginItems={v} />
      //         <CommentNested
      //           originId={v._id}
      //           commentNestedItems={commentNestedItems}
      //         />
      //       </>
      //     )}
      //   </>
      // )
    );
  };

  const onClickShowNextedComment = () => {
    console.log(showNestedComment);
    setShowNestedComment((prev) => !prev);
  };

  return (
    <Container>
      {nestedCommentCount > 0 && (
        <p onClick={onClickShowNextedComment}>
          답글 {nestedCommentCount}개 더 보기
        </p>
      )}

      {showNestedComment && (
        <>
          {commentNestedItems &&
            commentNestedItems.map((v, i) => (
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
            ))}
        </>
      )}
      {showNestedComment && nestedComment(originId)}
    </Container>
  );
};

export default withRouter(CommentNested);
