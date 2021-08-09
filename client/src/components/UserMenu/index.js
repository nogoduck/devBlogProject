import { Link, withRouter } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { List } from './styled';
import Clock from '../Clock';
import Menu from '../Menu';
import AlertModal from '../AlertModal';
import { auth } from '../../_actions/user_actions';
const UserMenu = ({ history, show, close }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const [showSignOutModal, setShowSignOutModal] = useState(false);

  const onClickSignoutButton = () => {
    setShowSignOutModal((prev) => !prev);
  };

  const onClickSignOut = () => {
    axios
      .get('/api/users/signout', { withCredentials: true })
      .then((res) => {
        //로그아웃 성공

        if (res.data.success) {
          // history.push('/');
          dispatch(auth()).then((res) => {
            // console.log("Login Auth Status >> ", res);
          });
        }
      })
      .catch((err) => {
        alert('로그아웃에 실패했습니다.');
      });
  };

  return (
    <Menu
      show={show}
      close={close}
      style={{
        position: 'absolute',
        minWidth: '180px',
        top: '56px',
        right: '24px',
      }}
    >
      <List>
        <ul>
          <li className="nickname">
            <b>{user.authStatus.nickname}</b>
          </li>
          <li className="email">{user.authStatus.email}</li>
          <hr />
          <li className="setting">
            <Link to="/menu/setting">설정</Link>
          </li>
          <li id="clock">
            <Clock />
          </li>
          <hr />
          <li className="logout" onClick={onClickSignoutButton}>
            로그아웃
          </li>
        </ul>
      </List>
      <AlertModal
        show={showSignOutModal}
        close={onClickSignoutButton}
        modalHeader="로그아웃"
        title="로그아웃 하시겠습니까?"
        content="로그아웃 하시겠습니까?"
        option="warning"
        confirm={onClickSignOut}
      ></AlertModal>
    </Menu>
  );
};

export default withRouter(UserMenu);
