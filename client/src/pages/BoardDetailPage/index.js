import { withRouter } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Container,
  Loading,
  UpdateButton,
  BoardHeader,
  PostTitle,
  BoardInfo,
  Profile,
  BoardContent,
} from './styled';
import axios from 'axios';
import Gravatar from 'react-gravatar';
import HtmlReactParser from 'html-react-parser';

import { timeFormat } from '../../utils/Time';
import BoardWritePage from '../BoardWritePage';
import Static from '../../setupStatic';
import Comment from '../../components/Comment';
import PulseLoader from 'react-spinners/PulseLoader';
import LikeAndDislike from '../../components/LikeAndDislike';

function BoardDetailPage({ match }) {
  const user = useSelector((state) => state.user);
  const [comments, setComments] = useState();

  useEffect(() => {
    axios
      .post('/api/board/detail', args)
      .then(({ data }) => {
        setDetailPost(data.doc);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post('/api/comment/getAll', args)
      .then(({ data }) => {
        if (data.success) {
          // console.log('comment > ', data.doc);
          setComments(data.doc);
        } else {
          console.log('댓글을 불러올 수 없습니다.');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [detailPost, setDetailPost] = useState('');
  const { pathname } = useLocation();
  console.log('p >> ', match.params.postId);
  const postId = match.params.postId;
  //params로 변경예정, SideNav포함
  const args = {
    _id: postId,
  };

  const [upadteMode, setUpadteMode] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  //확인, 취소 모달
  const onClickPostUpdate = () => {
    setTitle(detailPost.title);
    setDescription(detailPost.description);
    setUpadteMode(true);
  };

  const reRender = (doc) => {
    setComments([doc, ...comments]);
  };

  console.log('detailPost >> ', detailPost);
  if (!detailPost) {
    return (
      <Loading>
        <PulseLoader color="gray" size={8} margin={4} />
      </Loading>
    );
  } else {
    if (!upadteMode) {
      return (
        <Container>
          <Link to="/board">뒤로가기</Link>
          <BoardHeader>
            <PostTitle>{detailPost.title}</PostTitle>
            {user.authStatus.isAuth &&
              detailPost.writer._id === user.authStatus._id && (
                <UpdateButton onClick={onClickPostUpdate}>
                  수정하기
                </UpdateButton>
              )}
          </BoardHeader>
          <BoardInfo>
            <Profile style={{ fontSize: '15px' }}>
              {detailPost.writer.imagePath ? (
                <img
                  src={`${Static.URI}${detailPost.writer.imagePath}`}
                  alt="user_profile"
                  style={{
                    width: '30px',
                    height: '30px',
                    marginRight: '5px',
                    borderRadius: '50%',
                  }}
                />
              ) : (
                <Gravatar
                  email={detailPost.writer.email}
                  size={250}
                  default="wavatar"
                  style={{
                    width: '30px',
                    height: '30px',
                    marginRight: '5px',
                    borderRadius: '50%',
                  }}
                />
              )}
              <b>{detailPost.writer.nickname}</b>
            </Profile>
            &nbsp;·&nbsp;
            {timeFormat(detailPost.createdAt)}
            &nbsp;·&nbsp;
            {detailPost.updatedAt
              ? timeFormat(detailPost.updatedAt)
              : '수정 안함'}
          </BoardInfo>
          <BoardContent>
            <p>{HtmlReactParser(detailPost.description)}</p>
          </BoardContent>
          <LikeAndDislike
            board={true}
            userId={user.authStatus._id}
            postId={postId}
          />
          <Comment reRender={reRender} commentItems={comments} />
        </Container>
      );
    } else {
      return (
        <Container>
          <BoardWritePage
            postId={postId}
            changeTitle={title}
            changeDescription={description}
          />
        </Container>
      );
    }
  }
}

export default withRouter(BoardDetailPage);
