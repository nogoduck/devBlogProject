import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import {
  Right,
  LinkToGitHub,
  Button,
  SignUpButton,
  SignInButton,
  Profile,
  LogoutButton,
  ProfileMenuContainer,
  ProfileMenu,
} from "./styled";
import { useSelector } from "react-redux";
import Gravatar from "react-gravatar";

import Clock from "../../Clock";
import SignInModal from "../../SignInModal";
import SignUpModal from "../../SignUpModal";

function RightItem({ history }) {
  //로그인 모달 변수
  const isLogin = useSelector((state) => state.user);

  const [showSignInModal, setShowSignInModal] = useState(false);
  const [userState] = useState("사용자 정보 없음");
  //회원가입 모달 변수
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  //프로필 메뉴 모달 변수
  const [showProfileMenu, setShowProfileMenu] = useState(false);

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

  const onCloseProfileMenu = () => {
    console.log("닫아야 한다");
    setShowProfileMenu(false);
  };

  const onToggleProfileMenu = () => {
    console.log("토글해야  한다");
    setShowProfileMenu((prev) => !prev);
  };

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

        <Profile
          style={{ fontSize: "16px" }}
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
              borderRadius: "25%",
            }}
          />
          {isLogin.authStatus.name}
        </Profile>
        <LogoutButton onClick={onClickSignoutButton}>로그아웃</LogoutButton>
        {showProfileMenu && (
          <ProfileMenuContainer onClick={onCloseProfileMenu}>
            <ProfileMenu>
              <ul>
                <Link to="/profile">
                  <li>계정관리</li>
                </Link>
                <li>
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
