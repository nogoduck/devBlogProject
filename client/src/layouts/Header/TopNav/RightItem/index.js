import { withRouter } from 'react-router-dom';
import React, { useState } from 'react';
import { Right, Button, SignIn, Profile } from './styled';
import { useSelector } from 'react-redux';
import Gravatar from 'react-gravatar';

import SignInModal from '../../../../components/SignInModal';
import SignUpModal from '../../../../components/SignUpModal';
import UserMenu from '../../../../components/UserMenu';
import Static from '../../../../setupStatic';

function RightItem() {
  //로그인 모달 변수
  const user = useSelector((state) => state.user);

  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const onToggleSignIn = () => {
    setShowSignInModal((prev) => !prev);
  };

  const onCloseModal = () => {
    setShowSignInModal(false);
    setShowSignUpModal(false);
  };

  //로그인 모달의 하단 회원가입 바로가기 버튼
  const onClickSignUpButton = () => {
    setShowSignInModal(false);
    setShowSignUpModal(true);
  };
  //회원가입 모달의 하단 로그인 바로가기 버튼
  const onClickSignInButton = () => {
    setShowSignUpModal(false);
    setShowSignInModal(true);
  };

  const onToggleUserMenu = () => {
    setShowUserMenu((prev) => !prev);
  };
  const onCloseUserMenu = () => {
    setShowUserMenu(false);
  };

  //리덕스에 있는 로그인 상태에 따라 상단바를 변경함
  if (user.authStatus && !user.authStatus.isAuth) {
    return (
      <Right>
        {/* 로그인  버튼 */}
        <SignIn onClick={onToggleSignIn}>
          <div>로그인</div>
        </SignIn>
        {/* 로그인  모달 */}
        <SignInModal show={showSignInModal} close={onCloseModal}>
          <Button onClick={onClickSignUpButton}>계정 생성하기</Button>
        </SignInModal>

        {/* 회원가입 모달 */}
        <SignUpModal show={showSignUpModal} close={onCloseModal}>
          이미 계정이 있습니까?&nbsp;
          <span onClick={onClickSignInButton}>로그인 &raquo; </span>
        </SignUpModal>
      </Right>
    );
  } else {
    return (
      <Right>
        {/* 유저 프로필 */}
        <Profile
          onClick={onToggleUserMenu}
          className={showUserMenu ? 'active' : ''}
        >
          {user.authStatus.imagePath ? (
            <img
              src={`${Static.URI}${user.authStatus.imagePath}`}
              alt="profile_image"
            />
          ) : (
            <Gravatar
              email={user.authStatus.email}
              size={250}
              default="wavatar"
            />
          )}
        </Profile>
        <UserMenu show={showUserMenu} close={onCloseUserMenu} />
      </Right>
    );
  }
}

export default withRouter(RightItem);
