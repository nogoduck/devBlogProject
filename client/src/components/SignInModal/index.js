import {
  Input,
  SubmitButton,
  Label,
  Error,
  ErrorBox,
  Line,
  Form,
} from "./styled";
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TiWarning } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { signinUser, auth } from "../../_actions/user_actions";
import Menu from "../Menu";

function SignInModal({ children, show, close }) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const onSubmit = (user) => {
    //리덕스로 로그인 요청 결과를 받는다
    dispatch(signinUser(user)).then((res) => {
      if (res.payload.signinSuccess) {
        //로그인 성공시 로그인 모달 닫는 코드를 입력해야 하는데 안해도 잘 닫힌다
        // setShowSignInModal(false);

        //상단바 버튼 상태를 바꿔주기 위해 리덕스로 로그인 상태 확인
        dispatch(auth()).then((res) => {
          console.log("Login Auth Status : ", res);
        });
      } else {
        //아이디 또는 비밀번호가 일치하지 않을 때
        setLoginError(true);
        setTimeout(() => {
          setLoginError(false);
        }, 5000);
      }
    });
  };

  const onClickSignInModal = () => {
    setShowSignInModal((prev) => !prev);
  };

  useEffect(() => {
    //모달을 닫을때마다 입력내용, 유효성오류 초기화
    if (!show) {
      setValue("email");
      setValue("password");
      errors.email = false;
      errors.password = false;
      setLoginError(false);
    }
  }, [errors, setValue, show]);

  return (
    <div>
      <span onClick={onClickSignInModal}>
        <Menu
          show={show}
          close={close}
          style={{
            padding: "30px",
            left: "50%",
            width: "300px",
            marginLeft: "-180px",
            top: "50%",
            height: "450px",
            marginTop: "-225px",
          }}
        >
          <div style={{ fontSize: "24px" }}>로그인</div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Label>이메일</Label>
            <Input
              id={errors.email && "warningInput"}
              name="email"
              type="email"
              spellCheck="false"
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
              id={errors.password && "warningInput"}
              name="password"
              type="password"
              spellCheck="false"
              {...register("password", {
                required: true,
              })}
            />
            {errors.password && errors.password.type === "required" && (
              <Error>
                <TiWarning />
                &nbsp;비밀번호를 입력해주세요
              </Error>
            )}
            <SubmitButton>확인</SubmitButton>
          </Form>
          {loginError && (
            <ErrorBox>
              <Error>
                <TiWarning />
                &nbsp; 유효하지 않는 아이디 또는 비밀번호 입니다 <br />
                비밀번호 변경 또는 이메일을 찾는 기능은 현재 재공하고 있지
                않습니다
              </Error>
            </ErrorBox>
          )}
          <Line>
            <legend>&nbsp;새로운 계정을 만드시겠습니까?&nbsp;</legend>
          </Line>
          {children}
        </Menu>
      </span>
    </div>
  );
}

export default withRouter(SignInModal);
