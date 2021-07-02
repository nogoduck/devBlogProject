import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";
import { LinkToGitHub, Button } from "./styled";

import SignInModal from "../../SignInModal";
import SignUpModal from "../../SignUpModal";

function RightItem() {
  //로그인 모달 변수
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [closeSignInModal, setCloseSignInModal] = useState(false);
  //회원가입 모달 변수
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [closeSignUpModal, setCloseSignUpModal] = useState(false);

  //로그인 모달의 하단 회원가입 바로가기 버튼
  const onClickSignUpButton = () => {
    setShowSignInModal(false);
    setShowSignUpModal(true);
  };

  //회원가입 모달의 하단 로그인 바로가기 버튼
  const onClickSignInButton = (e) => {
    setShowSignInModal(true);
    setCloseSignUpModal(true);
  };
  return (
    <div style={{ float: "right" }}>
      {/* 깃허브 링크 */}
      <LinkToGitHub href="https://github.com/nogoduck" target="_blank">
        GitHub
        <BiLinkExternal />
      </LinkToGitHub>

      {/* 로그인  모달 */}
      <SignInModal closeModal={closeSignInModal} showModal={showSignInModal}>
        <Button onClick={onClickSignUpButton}>계정 생성하기</Button>
      </SignInModal>

      {/* 회원가입 모달 */}
      <SignUpModal closeModal={closeSignUpModal} showModal={showSignUpModal}>
        이미 계정이 있습니까?&nbsp;
        <span onClick={onClickSignInButton}>로그인 &raquo; </span>
      </SignUpModal>
    </div>
  );
}

export default RightItem;
