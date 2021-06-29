import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TiWarning } from "react-icons/ti";
import { Input, SubmitButton, Label, Error, ErrorInput, Line } from "./styled";
import Menu from "../Menu";

function SignInModal() {
  const {
    register,
    handleSubmit,
    watch,
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
  const onCloseSignInModal = (e) => {
    console.log("Login Close");
    e.stopPropagation();
    setShowSignInModal(false);
  };
  return (
    <div>
      <span onClick={onClickSignInModal}>
        <button>Login</button>
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
            로그인
            <form onSubmit={handleSubmit(onSubmit)}>
              <Label>이메일</Label>
              {errors.email && (
                <ErrorInput>
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
                </ErrorInput>
              )}

              {errors.email && (
                <Error>
                  <TiWarning />
                  &nbsp;이메일 형식이 올바르지 않습니다
                </Error>
              )}
              <Label>비밀번호</Label>

              {errors.password && errors.password.type === "required" && (
                <ErrorInput>
                  <Input
                    name="password"
                    type="password"
                    id="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                    })}
                  />
                </ErrorInput>
              )}
              {errors.password && errors.password.type === "required" && (
                <Error>
                  <TiWarning />
                  &nbsp;비밀번호를 입력해주세요
                </Error>
              )}
              <br />
              <SubmitButton>확인</SubmitButton>
            </form>
            <br />
            <Line>
              <legend>이메일이 없으신가요?</legend>
            </Line>
          </Menu>
        )}
      </span>
    </div>
  );
}

export default SignInModal;
