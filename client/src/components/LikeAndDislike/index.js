import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LikeAndDislike = ({ board, userId, postId, commentId }) => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [likeActive, setLikeActive] = useState(false);
  const [dislikeActive, setDislikeActive] = useState(false);

  let payload = {};

  if (board) {
    payload = { userId, postId };
  } else {
    payload = { userId, commentId };
  }

  console.log(
    '0 : ',
    postId,
    '\n1 : ',
    userId,
    '\n2 : ',
    postId,
    '\n3 : ',
    commentId
  );
  useEffect(() => {
    console.log('payload >> ', payload);
    axios.post('/api/like/getLike', payload).then(({ data }) => {
      if (data.success) {
        //Succeed, doc(like)
        setLike(data.doc.length);

        data.doc.map((v) => {
          if (v.userId === userId) {
            setLikeActive(true);
          }
        });
      } else {
        //Failed
        console.log('좋아요 목록을 불러오지 못했습니다.');
      }
    });

    axios.post('/api/like/getDislike', payload).then(({ data }) => {
      if (data.success) {
        //Succeed, doc(dislike)
        setDislike(data.doc.length);

        data.doc.map((v) => {
          if (v.userId === userId) {
            setDislikeActive(true);
          }
        });
      } else {
        //Failed
        console.log('싫어요 목록을 불러오지 못했습니다.');
      }
    });
  }, []);

  const onClickLike = () => {
    if (!likeActive) {
      axios.post('/api/like/addLike', payload).then(({ data }) => {
        if (data.success) {
          setLike(like + 1);
          setLikeActive(true);

          if (dislikeActive) {
            setDislikeActive(false);
            setDislike(dislike - 1);
          }
        } else {
          alert('좋아요를 추가하지 못했습니다.');
        }
      });
    } else {
      axios.post('/api/like/removeLike', payload).then(({ data }) => {
        if (data.success) {
          setLike(like - 1);
          setLikeActive(false);
        } else {
          alert('좋아요를 내리지 못했습니다.');
        }
      });
    }
  };

  const onClickDislike = () => {
    if (!dislikeActive) {
      axios.post('/api/like/addDislike', payload).then(({ data }) => {
        if (data.success) {
          setDislike(dislike + 1);
          setLikeActive(true);

          if (dislikeActive) {
            setLikeActive(false);
            setLike(like - 1);
          }
        } else {
          alert('싫어요를 추가하지 못했습니다.');
        }
      });
    } else {
      axios.post('/api/like/removeDislike', payload).then(({ data }) => {
        if (data.success) {
          setDislike(dislike - 1);
          setDislikeActive(false);
        } else {
          alert('싫어요를 내리지 못했습니다.');
        }
      });
    }
  };

  return (
    <>
      <div>
        <button onClick={onClickLike}>Like</button>
        <button onClick={onClickDislike}>Dislike</button>
      </div>
      <br />
      {like} / {dislike} <br />
      {likeActive ? '좋아요O' : '좋아요X'} <br />
      {dislikeActive ? '싫어요O' : '싫어요X'}
    </>
  );
};

export default LikeAndDislike;
