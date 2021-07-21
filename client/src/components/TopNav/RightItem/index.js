import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BiLinkExternal } from "react-icons/bi";
import {
  Right,
  LinkToGitHub,
  Button,
  SignUpButton,
  SignInButton,
  Profile,
  Nickname,
  LogoutButton,
  ProfileMenuContainer,
  ProfileMenu,
} from "./styled";
import { useSelector } from "react-redux";
import Gravatar from "react-gravatar";

import Clock from "../../Clock";
import SignInModal from "../../SignInModal";
import SignUpModal from "../../SignUpModal";
import AlertModal from "../../AlertModal";

function RightItem({ history }) {
  //로그인 모달 변수
  const isLogin = useSelector((state) => state.user);

  const [showSignInModal, setShowSignInModal] = useState(false);
  const [userState] = useState("사용자 정보 없음");
  //회원가입 모달 변수
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  //프로필 메뉴 모달 변수
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  //로그아웃 모달 변수
  const [showSignOutModal, setShowSignOutModal] = useState(false);

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
    setShowSignOutModal((prev) => !prev);
  };

  const onCloseProfileMenu = () => {
    setShowProfileMenu(false);
  };

  const onToggleProfileMenu = () => {
    setShowProfileMenu((prev) => !prev);
  };

  const onClickSignOut = () => {
    axios
      .get("/api/users/signout")
      .then((res) => {
        //로그아웃 성공

        if (res.data.success) {
          history.push("/");
        }
      })
      .catch((err) => {
        alert("로그아웃에 실패했습니다.");
      });
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setShowProfileMenu(false);
    });
  }, []);

  //리덕스에 있는 로그인 상태에 따라 상단바를 변경함
  if (isLogin.authStatus && !isLogin.authStatus.isAuth) {
    return (
      <Right>
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
      </Right>
    );
  } else {
    return (
      <Right>
        {/* 깃허브 링크 */}
        <LinkToGitHub href="https://github.com/nogoduck" target="_blank">
          GitHub
          <BiLinkExternal
            style={{ fontSize: "16px", display: "inline-block" }}
          />
        </LinkToGitHub>

        {/* 유저 프로필 */}
        <Profile
          onClick={onToggleProfileMenu}
          id={showProfileMenu ? "showProfileMenu" : ""}
        >
          <Gravatar
            email={isLogin.authStatus.email}
            size={30}
            default="wavatar"
            style={{
              width: "30px",
              height: "30px",
              marginRight: "5px",
              borderRadius: "50%",
            }}
          />
          <Nickname>{isLogin.authStatus.nickname}</Nickname>
        </Profile>
        <LogoutButton onClick={onClickSignoutButton}>로그아웃</LogoutButton>
        <AlertModal
          show={showSignOutModal}
          close={onClickSignoutButton}
          modalHeader="로그아웃"
          title="로그아웃 하시겠습니까?"
          content="로그아웃 하시겠습니까?"
          option="warning"
          confirm={onClickSignOut}
        ></AlertModal>

        {showProfileMenu && (
          <ProfileMenuContainer onClick={onCloseProfileMenu}>
            <ProfileMenu>
              <ul>
                <Link to="/setting">
                  <li>설정</li>
                </Link>
                <li id="clock">
                  <Clock />
                </li>
              </ul>
            </ProfileMenu>
          </ProfileMenuContainer>
        )}
      </Right>
    );
  }
}

export default withRouter(RightItem);
