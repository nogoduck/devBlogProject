// ########################################
//     현재 사용하지 않는 컴포넌트 입니다
// ########################################

import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TiWarning } from "react-icons/ti";
import {
  SignUpButton,
  Input,
  SubmitButton,
  Button,
  Label,
  Error,
  Line,
  Footer,
} from "./styled";
import Menu from "../Menu";

function SignUpModal({ children, show, close }) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const password = useRef();

  password.current = watch("password");

  const onSubmit = (data) => {
    console.log("data: ", data);
  };

  const onClickSignUpModal = () => {
    setShowSignUpModal((prev) => !prev);
    console.log("Register Click: ", showSignUpModal);
  };

  useEffect(() => {
    if (!show) {
      setValue("name");
      setValue("email");
      setValue("password");
      setValue("passwordConfirm");
      errors.name = false;
      errors.email = false;
      errors.password = false;
      errors.passwordConfirm = false;
    }
  }, [show]);

  return (
    <div>
      <span onClick={onClickSignUpModal}>
        <Menu
          show={show}
          close={close}
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
            {children}
            {/* &#10004; */}
          </Footer>
        </Menu>
      </span>
    </div>
  );
}

export default SignUpModal;
