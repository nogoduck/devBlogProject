import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LikeAndDislike = ({ post, userId, postId, commentId }) => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [likeActive, setLikeActive] = useState(false);
  const [dislikeActive, setDislikeActive] = useState(false);

  useEffect(() => {
    let payload = {};

    if (post) {
      payload = { userId, postId };
    } else {
      payload = { userId, commentId };
    }

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
        } else {
          alert('좋아요를 추가하지 못했습니다.');
        }
      });
    }
  };

  const onClickDislike = () => {};

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
