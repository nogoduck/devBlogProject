import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TiWarning } from "react-icons/ti";
import { BiLinkExternal } from "react-icons/bi";
import { LinkToGitHub } from "./styled";
import {
  SignInButton,
  Input,
  SubmitButton,
  Button,
  Label,
  Error,
  Line,
} from "./signin-styled";

import { SignUpButton, Footer } from "./signup-styled";
import Menu from "../../Menu";

function RightItem() {
  //로그인 모달 변수
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [userState, setUserState] = useState("사용자 정보 없음");

  const onSubmit = (data) => {
    console.log("data: ", data);
  };

  const onClickSignInModal = () => {
    setShowSignInModal((prev) => !prev);
  };

  const onCloseSignInModal = (e) => {
    e.stopPropagation();
    errors.email = false;
    errors.password = false;
    setShowSignInModal(false);
  };

  const onClickSignUpButton = () => {
    setShowSignInModal(false);
    setShowSignUpModal(true);
  };

  // 회원가입 모달 변수
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const password = useRef();
  password.current = watch("password");

  const onClickSignUpModal = () => {
    setShowSignUpModal((prev) => !prev);
  };

  const onCloseSignUpModal = (e) => {
    e.stopPropagation();
    setShowSignUpModal(false);
  };

  const onClickSignInButton = (e) => {
    setShowSignUpModal(false);
    setShowSignInModal(true);
  };
  return (
    <div style={{ float: "right" }}>
      {/* 깃허브 링크 */}
      <LinkToGitHub href="https://github.com/nogoduck" target="_blank">
        GitHub
        <BiLinkExternal />
      </LinkToGitHub>
      {/* 로그인  모달 */}
      <span onClick={onClickSignInModal}>
        <SignInButton>
          <div>로그인</div>
          <div>{userState}</div>
        </SignInButton>
        {showSignInModal && (
          <Menu
            showModal={showSignInModal}
            onCloseModal={onCloseSignInModal}
            style={{
              padding: "30px",
              left: "50%",
              width: "300px",
              marginLeft: "-180px",
              top: "50%",
              height: "400px",
              marginTop: "-200px",
            }}
          >
            <div style={{ fontSize: "24px" }}>로그인</div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Label>이메일</Label>
              <Input
                name="email"
                type="email"
                id="email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                autoFocus
              />

              {errors.email && (
                <Error>
                  <TiWarning />
                  &nbsp;이메일 형식이 올바르지 않습니다
                </Error>
              )}
              <Label>비밀번호</Label>
              <Input
                name="password"
                type="password"
                id="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
              />
              {errors.password && errors.password.type === "required" && (
                <Error>
                  <TiWarning />
                  &nbsp;비밀번호를 입력해주세요
                </Error>
              )}
              <SubmitButton>확인</SubmitButton>
            </form>
            <Line>
              <legend>&nbsp;새로운 계정을 만드시겠습니까?&nbsp;</legend>
            </Line>
            <Button onClick={onClickSignUpButton}>계정 생성하기</Button>
          </Menu>
        )}
      </span>
      {/* 회원가입 모달 */}
      <span onClick={onClickSignUpModal}>
        <SignUpButton>
          회원
          <br />
          가입
        </SignUpButton>
        {showSignUpModal && (
          <Menu
            showModal={showSignUpModal}
            onCloseModal={onCloseSignUpModal}
            style={{
              padding: "30px",
              left: "50%",
              width: "300px",
              marginLeft: "-180px",
              top: "50%",
              height: "550px",
              marginTop: "-305px",
            }}
          >
            <div style={{ fontSize: "24px" }}>회원가입</div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Label>이름</Label>
              <Input
                name="name"
                {...register("name", {
                  required: true,
                  maxLength: 10,
                })}
                autoFocus
              />
              {errors.name && errors.name.type === "required" && (
                <Error>
                  <TiWarning />
                  &nbsp;이름을 입력해주세요
                </Error>
              )}
              {errors.name && errors.name.type === "maxLength" && (
                <Error>
                  <TiWarning />
                  &nbsp;이름은 10글자 이하로 입력가능합니다
                </Error>
              )}
              <Label>이메일</Label>
              <Input
                name="email"
                type="email"
                id="email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />

              {errors.email && (
                <Error>
                  <TiWarning />
                  &nbsp;이메일 형식이 올바르지 않습니다
                </Error>
              )}
              <Label>비밀번호</Label>
              <Input
                name="password"
                type="password"
                id="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
              />
              {errors.password && errors.password.type === "required" && (
                <Error>
                  <TiWarning />
                  &nbsp;비밀번호를 입력해주세요
                </Error>
              )}

              <Label>비밀번호 확인</Label>
              <Input
                name="confirm"
                type="password"
                {...register("passwordConfirm", {
                  required: true,
                  validate: (value) => value === password.current,
                })}
              />
              {errors.passwordConfirm &&
                errors.passwordConfirm.type === "required" && (
                  <Error>
                    <TiWarning />
                    &nbsp;비밀번호 확인을 입력해주세요
                  </Error>
                )}
              {errors.passwordConfirm &&
                errors.passwordConfirm.type === "validate" && (
                  <Error>
                    <TiWarning />
                    &nbsp;비밀번호가 동일하지 않습니다
                  </Error>
                )}

              <SubmitButton>계정 생성하기</SubmitButton>
            </form>
            <Footer>
              이미 계정이 있습니까?&nbsp;
              <span onClick={onClickSignInButton}>로그인 &raquo; </span>
              {/* &#10004; */}
            </Footer>
          </Menu>
        )}
      </span>
    </div>
  );
}

export default RightItem;
