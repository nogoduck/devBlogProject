import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { TiWarning } from "react-icons/ti";
import { Input, SubmitButton, Label, Error, Line } from "./styled";

import Menu from "../Menu";

function SignInModal({ children, show, close }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [showSignInModal, setShowSignInModal] = useState(false);

  const onSubmit = (data) => {
    console.log("data: ", data);
  };

  const onClickSignInModal = () => {
    setShowSignInModal((prev) => !prev);
    console.log("Login Click: ", showSignInModal);
  };

  useEffect(() => {
    if (!show) {
      setValue("email");
      setValue("password");
      errors.email = false;
      errors.password = false;
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
          {children}
        </Menu>
      </span>
    </div>
  );
}

export default SignInModal;
