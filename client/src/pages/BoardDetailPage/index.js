import { withRouter } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Container,
  Lodding,
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

function BoardDetailPage() {
  const user = useSelector((state) => state.user);
  const [comments, setComments] = useState();

  useEffect(() => {
    axios
      .post('/api/board/detail', args)
      .then(({ data }) => {
        setDetailPost(data);
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
  const postId = pathname.substring(12);
  //params로 변경예정, SideNav포함
  const args = {
    _id: postId,
  };

  const [upadteMode, setUpadteMode] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  //확인, 취소 모달
  const onClickPostUpdate = () => {
    setTitle(detailPost.data.title);
    setDescription(detailPost.data.description);
    setUpadteMode(true);
  };

  const reRender = (doc) => {
    setComments([doc, ...comments]);
  };

  if (!detailPost) {
    return (
      <Lodding>
        <PulseLoader color="gray" size={8} margin={4} />
      </Lodding>
    );
  } else {
    if (!upadteMode) {
      return (
        <Container>
          <Link to="/menu/board">뒤로가기</Link>
          <BoardHeader>
            <PostTitle>{detailPost.data.title}</PostTitle>
            {user.authStatus.isAuth &&
              detailPost.data.writerId === user.authStatus._id && (
                <UpdateButton onClick={onClickPostUpdate}>
                  수정하기
                </UpdateButton>
              )}
          </BoardHeader>
          <BoardInfo>
            <Profile style={{ fontSize: '15px' }}>
              {detailPost.data.imagePath ? (
                <img
                  src={`${Static.URI}${user.authStatus.imagePath}`}
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
                  email={detailPost.data.email}
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
              <b>{detailPost.data.nickname}</b>
            </Profile>
            &nbsp;·&nbsp;
            {timeFormat(detailPost.data.createdAt)}
            &nbsp;·&nbsp;
            {detailPost.data.updatedAt
              ? timeFormat(detailPost.data.updatedAt)
              : '수정 안함'}
          </BoardInfo>
          <BoardContent>
            <p>{HtmlReactParser(detailPost.data.description)}</p>
          </BoardContent>

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
