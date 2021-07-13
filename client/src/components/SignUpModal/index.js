import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { TiWarning } from "react-icons/ti";
import { Input, SubmitButton, Label, Error, Footer, Form } from "./styled";
import Menu from "../Menu";
import axios from "axios";

function SignUpModal({ children, show, close }) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [succeessSignUp, setSucceessSignUp] = useState(false);
  const password = useRef();

  password.current = watch("password");

  const onSubmit = (user) => {
    console.log("data: ", user);
    axios
      .post("/api/users/signup", user)
      .then((res) => {
        setSucceessSignUp(res.data.signUpSuccess);
      })
      .catch((err) => {
        console.log(err);
      });
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
  }, [errors, setValue, show]);

  useEffect(() => {
    if (succeessSignUp) {
      alert("회원가입 성공");
    }
    setSucceessSignUp(false);
  }, [succeessSignUp]);
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
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Label>이름</Label>
            <Input
              id={errors.name && "warningInput"}
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
              id={errors.email && "warningInput"}
              name="email"
              type="email"
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
              id={errors.password && "warningInput"}
              name="password"
              type="password"
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
            {errors.password && errors.password.type === "minLength" && (
              <Error>
                <TiWarning />
                &nbsp;비밀번호는 6글자 이상으로 입력해주세요
              </Error>
            )}

            <Label>비밀번호 확인</Label>
            <Input
              id={errors.passwordConfirm && "warningInput"}
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

            <SubmitButton onSubmit={onSubmit}>계정 생성하기</SubmitButton>
          </Form>
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
