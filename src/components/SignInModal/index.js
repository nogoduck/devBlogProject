import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Input, SubmitButton } from "./styled";
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
              <Input
                name="email"
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                autoFocus
              />
              {errors.email && <p>이메일 형식이 올바르지 않습니다</p>}

              <Input
                name="password"
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
              />
              {errors.password && errors.password.type === "required" && (
                <p>비밀번호를 입력해주세요</p>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <p>비밀번호는 6글자 이상으로 입력가능합니다</p>
              )}
              <SubmitButton>확인</SubmitButton>
            </form>
            회원가입
          </Menu>
        )}
      </span>
    </div>
  );
}

export default SignInModal;
