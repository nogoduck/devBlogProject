import axios from "axios";
import React, { useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import {
  LinkToGitHub,
  Button,
  SignUpButton,
  SignInButton,
  Profile,
  LogoutButton,
} from "./styled";
import { useSelector } from "react-redux";

import SignInModal from "../../SignInModal";
import SignUpModal from "../../SignUpModal";

function RightItem() {
  //로그인 모달 변수
  const isLogin = useSelector(
    (state) => state.user.signinSuccess.signinSuccess
  );

  console.log(isLogin);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [userState] = useState("사용자 정보 없음");
  //회원가입 모달 변수
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const onToggleSignIn = () => {
    setShowSignInModal((prev) => !prev);
  };

  const onToggleSignUp = () => {
    setShowSignUpModal((prev) => !prev);
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
  const onClickSignInButton = (e) => {
    setShowSignUpModal(false);
    setShowSignInModal(true);
  };

  const onClickSignoutButton = () => {
    axios
      .get("http://localhost:5050/api/users/signout")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!isLogin) {
    return (
      <div style={{ float: "right" }}>
        {/* 깃허브 링크 */}
        <LinkToGitHub href="https://github.com/nogoduck" target="_blank">
          GitHub
          <BiLinkExternal />
        </LinkToGitHub>

        {/* 로그인  모달 */}
        <SignInButton onClick={onToggleSignIn}>
          <div>로그인</div>
          <div>{userState}</div>
        </SignInButton>
        <SignInModal show={showSignInModal} close={onCloseModal}>
          <Button onClick={onClickSignUpButton}>계정 생성하기</Button>
        </SignInModal>

        {/* 회원가입 모달 */}

        <SignUpButton onClick={onToggleSignUp}>회원가입</SignUpButton>
        <SignUpModal show={showSignUpModal} close={onCloseModal}>
          이미 계정이 있습니까?&nbsp;
          <span onClick={onClickSignInButton}>로그인 &raquo; </span>
        </SignUpModal>
      </div>
    );
  } else {
    return (
      <div>
        <div style={{ float: "right" }}>
          {/* 깃허브 링크 */}
          <LinkToGitHub href="https://github.com/nogoduck" target="_blank">
            GitHub
            <BiLinkExternal />
          </LinkToGitHub>

          <Profile>사용자 프로필</Profile>
          <LogoutButton onClick={onClickSignoutButton}>로그아웃</LogoutButton>
        </div>
      </div>
    );
  }
}

export default RightItem;
